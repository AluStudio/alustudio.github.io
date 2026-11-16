#!/usr/bin/env bash
#
# Turn raw iPad captures into the web-ready screenshots in public/shots/.
#
# Local authoring tool, not part of the CI build — the .webp outputs are
# committed, so CI never runs this and `magick` is not a build dependency.
#
# Usage:
#   ./scripts/build-screenshots.sh <raw-root> [code ...]
#
# <raw-root> holds one directory per site language, named by its code in
# l10n/languages.json (en, zh-Hant, ja, …); with no codes, every directory is
# processed. Each holds these full-resolution landscape iPad captures, taken
# with the app in that language:
#   cashier.png  promotions.png  dashboard.png  orders.png
# and is written to public/shots/<code>/. src/data/shots.js names the files.
#
# What it does, and why:
#   - Crops the iOS status bar off the top (24pt). It carries the capture's
#     battery level and date — dev-capture noise that dates the asset. The
#     device metaphor is supplied by the CSS bezel in base.scss instead.
#   - Crops 26pt off the bottom. This is ONLY needed to remove the DingPOSTweak
#     dev ball, which sits in the bottom-right corner of any capture taken
#     without `-DisableDevTweakBall`. Captures made through the product repo's
#     screenshot pipeline (scripts/screenshots/README.md) pass that flag and
#     could use a smaller bottom crop — but keeping it uniform is what makes
#     all four assets share one aspect ratio, which the layout relies on.
#   - Writes each shot twice: <name>.webp at the desktop width below, and
#     <name>-1080w.webp for phones, where the frame is ~350px wide. The srcset
#     in src/components/Device.jsx lists both, so a phone never downloads the
#     desktop file.
#   - Crops are expressed in points at a flat @2x scale, so this works for any
#     Retina iPad — but iPads differ in aspect ratio, so the script refuses to
#     write assets base.scss cannot show. The committed set is the 11-inch
#     iPad Pro (M5) simulator.
#
set -euo pipefail

ROOT="${1:-}"
if [[ -z "$ROOT" || ! -d "$ROOT" ]]; then
  echo "usage: $0 <raw-root> [code ...]" >&2
  exit 1
fi
shift
CODES=("$@")
if (( ${#CODES[@]} == 0 )); then
  for dir in "$ROOT"/*/; do CODES+=("$(basename "$dir")"); done
fi

command -v magick >/dev/null || { echo "magick not found (brew install imagemagick)" >&2; exit 1; }

PUBLIC="$(cd "$(dirname "$0")/.." && pwd)/public"

# The hero shot is displayed wider than the story shots, so it gets more pixels.
# Both are ~2x their max CSS width; anything beyond that is bytes nobody sees.
# (case, not an associative array — macOS still ships bash 3.2.)
target_width() {
  case "$1" in
    cashier) echo 2240 ;;
    *)       echo 1720 ;;
  esac
}

# ~3x the phone layout width. src/data/shots.js (PHONE_SHOT_WIDTH) names the file.
PHONE_WIDTH=1080

TOP_PT=24
BOTTOM_PT=26

# Every Retina iPad renders at @2x — 11" (M4/M5) is 1210x834pt, older 11" is
# 1194x834pt, 13" is 1376x1032pt — so points map to capture pixels by a flat
# factor of 2.
# Deriving the factor from the capture height instead (an earlier version divided
# by 834) silently mis-scales every device that is not the 11".
SCALE=2

# .device img in src/assets/scss/base.scss pins this ratio to stop the frame
# collapsing before the image decodes, and object-fit: cover enforces it. That
# crops silently, so the ratio is asserted here instead: after the crop a 13"
# capture is 1.43 wide where the 11" (M5) is 1.54, and the two do not survive
# the same value.
CSS_RATIO_W=2420
CSS_RATIO_H=1568
RATIO_TOLERANCE=0.005

expected=$(awk "BEGIN { printf \"%.6f\", $CSS_RATIO_W / $CSS_RATIO_H }")

for code in "${CODES[@]}"; do
  SRC="$ROOT/$code"
  OUT="$PUBLIC/shots/$code"
  [[ -d "$SRC" ]] || { echo "missing: $SRC" >&2; exit 1; }
  mkdir -p "$OUT"
  echo "$code"
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
    tmp="$OUT/.$name.tmp.webp"
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
      echo "$name: aspect ratio $ratio does not match the $expected that base.scss declares." >&2
      echo "These captures are a different iPad than the committed set. Update .device img:" >&2
      echo "    aspect-ratio: $ow / $oh;" >&2
      echo "and CSS_RATIO_W / CSS_RATIO_H in this script, then re-run." >&2
      exit 1
    fi

    out="$OUT/$name.webp"
    mv "$tmp" "$out"

    phone_tmp="$OUT/.$name-${PHONE_WIDTH}w.tmp.webp"
    magick "$in" \
      -crop "x${keep}+0+${top}" +repage \
      -resize "$PHONE_WIDTH" \
      -quality 82 -define webp:method=6 \
      "webp:$phone_tmp"
    phone_out="$OUT/$name-${PHONE_WIDTH}w.webp"
    mv "$phone_tmp" "$phone_out"

    # Transfer size, not `du` — disk-block allocation is not what ships.
    printf "  ✓ %s.webp  %sx%s  ratio %s  %sK  (phone %sK)\n" \
      "$name" "$ow" "$oh" "$ratio" \
      "$(( $(wc -c < "$out") / 1024 ))" \
      "$(( $(wc -c < "$phone_out") / 1024 ))"
  done
done
