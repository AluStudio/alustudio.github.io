#!/usr/bin/env bash
#
# Turn the cropped fee-screen captures into the web images the guides use.
#
# Local authoring tool, not part of the CI build — the .webp outputs are
# committed, so CI never runs this and `magick` is not a build dependency.
#
# Usage:
#   ./scripts/build-guide-shots.sh <dir-with-crops>
#
# Expects <market>-settings.png and <market>-report.png for every market in
# MARKETS below, already cropped to their final framing (this script never crops).
#
# What it does, and why:
#   - Writes public/guides/fees-<market>-<kind>.webp at min(source width, 1440).
#     Guide images render at most 480 CSS px wide, so 1440 is 3x; a narrower
#     source is kept as is rather than upscaled.
#   - When that file is wider than 1080, also writes
#     fees-<market>-<kind>-1080w.webp at exactly 1080 wide for phones. The
#     build (copy-spa-pages.js imageBlockErrors) requires the phone file to be
#     exactly 1080 wide with the same aspect ratio (height within 1 px).
#   - Fails on a missing crop or one narrower than 480 px, the widest the image
#     is ever shown.
#
set -euo pipefail

SRC="${1:-}"
if [[ -z "$SRC" || ! -d "$SRC" ]]; then
  echo "usage: $0 <dir-with-crops>" >&2
  exit 1
fi

command -v magick >/dev/null || { echo "magick not found (brew install imagemagick)" >&2; exit 1; }

OUT="$(cd "$(dirname "$0")/.." && pwd)/public/guides"
mkdir -p "$OUT"

MARKETS="tw hk au ca nz sg us gb jp fr mx dk ee fi it nl in id kh kr my br th vn cn"
KINDS="settings report"

MAX_WIDTH=1440
PHONE_WIDTH=1080
MIN_WIDTH=480

# Check every input first so a missing pair never leaves a half-written set.
for market in $MARKETS; do
  for kind in $KINDS; do
    in="$SRC/$market-$kind.png"
    [[ -f "$in" ]] || { echo "missing: $in" >&2; exit 1; }
    w="$(magick identify -format "%w" "$in")"
    if (( w < MIN_WIDTH )); then
      echo "$market-$kind: ${w}px wide is narrower than the ${MIN_WIDTH}px it is shown at" >&2
      exit 1
    fi
  done
done

# Encode to a temp file, then publish. Keep .webp last: magick picks the
# encoder from the extension, and a .tmp suffix silently writes PNG bytes.
encode() { # <in> <width> <out>
  local tmp="$OUT/.guide-shot.tmp.webp"
  magick "$1" -resize "${2}x" -quality 82 -define webp:method=6 "webp:$tmp"
  mv "$tmp" "$3"
  # Transfer size, not `du` — disk-block allocation is not what ships.
  printf "  ✓ %s  %sx%s  %sK\n" "$(basename "$3")" \
    "$(magick identify -format "%w" "$3")" "$(magick identify -format "%h" "$3")" \
    "$(( $(wc -c < "$3") / 1024 ))"
}

for market in $MARKETS; do
  for kind in $KINDS; do
    in="$SRC/$market-$kind.png"
    w="$(magick identify -format "%w" "$in")"
    width=$(( w < MAX_WIDTH ? w : MAX_WIDTH ))
    encode "$in" "$width" "$OUT/fees-$market-$kind.webp"
    if (( width > PHONE_WIDTH )); then
      encode "$in" "$PHONE_WIDTH" "$OUT/fees-$market-$kind-${PHONE_WIDTH}w.webp"
    fi
  done
done
