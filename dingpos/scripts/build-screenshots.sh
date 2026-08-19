#!/usr/bin/env bash
#
# Turn raw iPad captures into the web-ready screenshots in public/.
#
# Local authoring tool, not part of the CI build — the .webp outputs are
# committed, so CI never runs this and `magick` is not a build dependency.
#
# Usage:
#   ./scripts/build-screenshots.sh <dir-with-raw-captures>
#
# Expects these filenames in <dir>, as full-resolution landscape iPad captures:
#   cashier.png  promotions.png  dashboard.png  orders.png
#
# What it does, and why:
#   - Crops the iOS status bar off the top (24pt). It carries the capture's
#     battery level and date — dev-capture noise that dates the asset. The
#     device metaphor is supplied by the CSS bezel in home.scss instead.
#   - Crops 26pt off the bottom. This is ONLY needed to remove the DingPOSTweak
#     dev ball, which sits in the bottom-right corner of any capture taken
#     without `-DisableDevTweakBall`. Captures made through the product repo's
#     screenshot pipeline (scripts/screenshots/README.md) pass that flag and
#     could use a smaller bottom crop — but keeping it uniform is what makes
#     all four assets share one aspect ratio, which the layout relies on.
#   - Crops are expressed in points at a flat @2x scale, so this works for any
#     Retina iPad — but a 13-inch capture has a different aspect ratio than the
#     11-inch one, so the script refuses to write assets home.scss cannot show.
#
set -euo pipefail

SRC="${1:-}"
if [[ -z "$SRC" || ! -d "$SRC" ]]; then
  echo "usage: $0 <dir-with-raw-captures>" >&2
  exit 1
fi

command -v magick >/dev/null || { echo "magick not found (brew install imagemagick)" >&2; exit 1; }

OUT="$(cd "$(dirname "$0")/.." && pwd)/public"

# The hero shot is displayed wider than the story shots, so it gets more pixels.
# Both are ~2x their max CSS width; anything beyond that is bytes nobody sees.
# (case, not an associative array — macOS still ships bash 3.2.)
target_width() {
  case "$1" in
    cashier) echo 2240 ;;
    *)       echo 1720 ;;
  esac
}

TOP_PT=24
BOTTOM_PT=26

# Every Retina iPad renders at @2x — 11" is 1194x834pt, 13" is 1376x1032pt,
# 12.9" is 1366x1024pt — so points map to capture pixels by a flat factor of 2.
# Deriving the factor from the capture height instead (an earlier version divided
# by 834) silently mis-scales every device that is not the 11".
SCALE=2

# .device img in src/assets/scss/home.scss pins this ratio to stop the frame
# collapsing before the image decodes, and object-fit: cover enforces it. That
# crops silently, so the ratio is asserted here instead: a 13" capture is
# 1.333 wide where the 11" is 1.432, and the two do not survive the same value.
CSS_RATIO_W=2388
CSS_RATIO_H=1568
RATIO_TOLERANCE=0.005

expected=$(awk "BEGIN { printf \"%.6f\", $CSS_RATIO_W / $CSS_RATIO_H }")

for name in cashier promotions dashboard orders; do
  in="$SRC/$name.png"
  [[ -f "$in" ]] || { echo "missing: $in" >&2; exit 1; }

  read -r w h < <(magick identify -format "%w %h\n" "$in")

  # Fail loudly on anything that is not a full-resolution landscape capture:
  # the @2x assumption above is the only thing making the crop correct, and a
  # pre-scaled or portrait input would quietly eat the wrong number of pixels.
  if (( w < h )); then
    echo "$name: portrait capture (${w}x${h}) — DingPOS is landscape-only on iPad" >&2
    exit 1
  fi
  if (( w < 2000 )); then
    echo "$name: ${w}x${h} is too small to be an @2x iPad capture — do not pre-scale" >&2
    exit 1
  fi

  top=$(( TOP_PT * SCALE ))
  bottom=$(( BOTTOM_PT * SCALE ))
  keep=$(( h - top - bottom ))

  # Encode to a temp file and only publish once the ratio checks out, so a
  # rejected capture never leaves a half-valid asset in public/.
  # Keep .webp last: magick picks the encoder from the extension, and a
  # .tmp suffix silently writes PNG bytes into a file named .webp.
  tmp="$OUT/.shot-$name.tmp.webp"
  magick "$in" \
    -crop "x${keep}+0+${top}" +repage \
    -resize "$(target_width "$name")" \
    -quality 82 -define webp:method=6 \
    "webp:$tmp"

  read -r ow oh < <(magick identify -format "%w %h\n" "$tmp")
  ratio=$(awk "BEGIN { printf \"%.6f\", $ow / $oh }")

  if awk "BEGIN { exit !(($ratio - $expected) > $RATIO_TOLERANCE || ($expected - $ratio) > $RATIO_TOLERANCE) }"; then
    rm -f "$tmp"
    echo "" >&2
    echo "$name: aspect ratio $ratio does not match the $expected that home.scss declares." >&2
    echo "These captures are a different iPad than the committed set. Update .device img:" >&2
    echo "    aspect-ratio: $ow / $oh;" >&2
    echo "and CSS_RATIO_W / CSS_RATIO_H in this script, then re-run." >&2
    exit 1
  fi

  out="$OUT/shot-$name.webp"
  mv "$tmp" "$out"

  # Transfer size, not `du` — disk-block allocation is not what ships.
  printf "  ✓ shot-%s.webp  %sx%s  ratio %s  %sK\n" \
    "$name" "$ow" "$oh" "$ratio" \
    "$(( $(wc -c < "$out") / 1024 ))"
done
