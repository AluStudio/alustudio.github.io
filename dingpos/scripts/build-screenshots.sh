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
# Expects these filenames in <dir> (any iPad landscape resolution):
#   cashier.png  promotions.png  dashboard.png  orders.png
#
# What it does, and why:
#   - Crops the iOS status bar off the top (24pt). It carries the capture's
#     battery level and date — dev-capture noise that dates the asset. The
#     device metaphor is supplied by the CSS bezel in hero.scss instead.
#   - Crops 26pt off the bottom. This is ONLY needed to remove the DingPOSTweak
#     dev ball, which sits in the bottom-right corner of any capture taken
#     without `-DisableDevTweakBall`. Captures made through the product repo's
#     screenshot pipeline (scripts/screenshots/README.md) pass that flag and
#     could use a smaller bottom crop — but keeping it uniform is what makes
#     all four assets share one aspect ratio, which the layout relies on.
#   - Crops are expressed in points and scaled from the input height, so this
#     works for an 11-inch capture (1668px tall) and a 13-inch one alike.
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

for name in cashier promotions dashboard orders; do
  in="$SRC/$name.png"
  [[ -f "$in" ]] || { echo "missing: $in" >&2; exit 1; }

  h=$(magick identify -format "%h" "$in")
  # Landscape iPad is 834pt tall at every size we ship, so points -> pixels is
  # a single scale factor derived from the capture itself.
  scale=$(awk "BEGIN { printf \"%.6f\", $h / 834 }")
  top=$(awk "BEGIN { printf \"%d\", $TOP_PT * $scale }")
  bottom=$(awk "BEGIN { printf \"%d\", $BOTTOM_PT * $scale }")
  keep=$((h - top - bottom))

  magick "$in" \
    -crop "x${keep}+0+${top}" +repage \
    -resize "$(target_width "$name")" \
    -quality 82 -define webp:method=6 \
    "$OUT/shot-$name.webp"

  printf "  ✓ shot-%s.webp  %s  %s\n" \
    "$name" \
    "$(magick identify -format '%wx%h' "$OUT/shot-$name.webp")" \
    "$(du -h "$OUT/shot-$name.webp" | cut -f1 | tr -d ' ')"
done
