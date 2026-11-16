#!/usr/bin/env bash
#
# Capture the home page's four app screens in every site language from the
# DingPOS app on an iPad simulator. Feed the output to build-screenshots.sh.
#
# Local authoring tool, like build-screenshots.sh — CI never runs it.
#
# Usage:
#   ./scripts/capture-screenshots.sh <out-root> [code ...]
#
# Before running:
#   - The Debug app is built from the DingPOS repo and installed on the
#     simulator named by SIM_NAME (default "iPad Pro 11-inch (M5)"), which is
#     booted, with app accessibility on (`make sim-ax-enable AX_SIM=<udid>` in
#     the app repo) and rotated with `sim-use ios rotate landscape-right`.
#   - The product photos are in the app container (recipe in the app repo's
#     scripts/screenshots/README.md); the fixtures carry no images.
#   - sim-use, axe and jq are on PATH.
#
# Per language (codes from l10n/languages.json, default all) it launches the
# app in that language on a fresh screenshots fixture — screenshots-zh for
# zh-Hant and zh-Hans, screenshots-en for the rest, since the fixtures only
# hold English and Chinese shop data — and writes <out-root>/<code>/:
#   cashier.png     coat, two beanies (second-item 50%), vest, belt; VIP Amy Lin
#   dashboard.png   Reports, This Month
#   orders.png      Orders, the newest order selected
#   promotions.png  Settings → Promotions
# Each step prints what it verified; a "!" line means that shot needs a look.
#
set -uo pipefail

OUT="${1:-}"
[[ -n "$OUT" ]] || { echo "usage: $0 <out-root> [code ...]" >&2; exit 1; }
shift

SIM_NAME="${SIM_NAME:-iPad Pro 11-inch (M5)}"
BID=com.ohlulu.DingPOS.debug
REG="$(cd "$(dirname "$0")/.." && pwd)/l10n/languages.json"

UDID=$(xcrun simctl list devices booted | grep -F "$SIM_NAME (" | grep -o "[0-9A-F-]\{36\}" | head -1)
[[ -n "$UDID" ]] || { echo "no booted simulator named \"$SIM_NAME\"" >&2; exit 1; }

CODES=("$@")
(( ${#CODES[@]} )) || CODES=($(jq -r '.languages[].code' "$REG"))

s() { sim-use "$@" --device "$UDID"; }
ui_json() { s ui --json --no-raw 2>/dev/null; }

# Center of the first entry a jq filter over the outline selects, as "x,y".
center() { ui_json | jq -r "[$1] | .[0].frame // empty | \"\\(.x + .width/2 | floor),\\(.y + .height/2 | floor)\""; }

# simctl returns the device-native portrait buffer; the app runs landscape-right.
capture() {
  local raw
  raw=$(mktemp /tmp/dingpos-capture-XXXXXX).png
  xcrun simctl io "$UDID" screenshot "$raw" >/dev/null 2>&1 && sips -r 270 "$raw" --out "$1" >/dev/null
  rm -f "$raw"
}

for code in "${CODES[@]}"; do
  locale=$(jq -r --arg c "$code" '.languages[] | select(.code==$c) | .ogLocale' "$REG")
  [[ "$locale" == "es_LA" ]] && locale=es_419   # og:locale's es_LA is not an Apple locale
  case "$code" in
    zh-Hant|zh-Hans) fixture=screenshots-zh; coat=羊毛大衣; beanie=羊毛毛帽; vest=針織背心; belt=皮革腰帶 ;;
    *) fixture=screenshots-en; coat="Wool Coat"; beanie="Wool Beanie"; vest="Knit Vest"; belt="Leather Belt" ;;
  esac
  dir="$OUT/$code"
  mkdir -p "$dir"
  echo "== $code ($locale, $fixture)"

  xcrun simctl launch --terminate-running-process "$UDID" "$BID" \
    -AppleLanguages "($code)" -AppleLocale "$locale" \
    -uitest-reset -uitest-seed "$fixture" -DisableDevTweakBall -DingSubscriptionTier pro >/dev/null
  sleep 5
  s app-state --reset >/dev/null 2>&1   # an intentional relaunch is not a crash

  # Cashier. The grid is left of x=800; the cart repeats each name on the right.
  for p in "$coat" "$beanie" "$vest" "$belt" "$beanie"; do
    s tap --label "$p" --frame maxX=800 --wait-timeout 3 >/dev/null 2>&1 || echo "  ! tap $p failed"
    sleep 1
  done
  s tap --point 900,115 >/dev/null 2>&1   # the cart's customer row
  sleep 1.5
  s tap --label-contains "0912-345-678" --wait-timeout 3 >/dev/null 2>&1 || echo "  ! customer pick failed"
  sleep 2
  j=$(ui_json)
  echo "  cashier: $(jq '[.data.entries[] | select(.uniqueId=="cartItem.name")] | length' <<<"$j") lines," \
    "$(jq '[.data.entries[] | select(.uniqueId=="cartItem.quantity" and .label=="2")] | length' <<<"$j") with qty 2," \
    "customer $(jq '[.data.entries[] | select(.label | tostring | test("0912-345-678"))] | length' <<<"$j") (want 4, 1, 1)"
  capture "$dir/cashier.png"

  # Reports, This Month: the period control is a segmented control whose
  # segments are sized by their titles, so read the frame of the 4th from AXe.
  s tap '#sidebar.item.dashboard' >/dev/null 2>&1
  sleep 2.5
  point=$(axe describe-ui --udid "$UDID" 2>/dev/null | jq -r '.. | objects | select(.AXUniqueId=="dashboard.range") | .children[3].frame | "\(.x + .width/2 | floor),\(.y + .height/2 | floor)"')
  if [[ -n "$point" ]]; then s tap --point "$point" >/dev/null 2>&1; else echo "  ! no period segments"; fi
  sleep 3.5
  echo "  dashboard: $(axe describe-ui --udid "$UDID" 2>/dev/null | jq -r '.. | objects | select(.AXUniqueId=="dashboard.range.span") | .AXLabel') (want this month)"
  capture "$dir/dashboard.png"

  # Orders: the topmost cell of the fresh outline (a #N alias would hit the
  # previous screen's cached list).
  s tap '#sidebar.item.orders' >/dev/null 2>&1
  sleep 2
  point=$(center '.data.entries[] | select(.uniqueId=="orderList.cell")] | sort_by(.frame.y) | [.[0]')
  if [[ -n "$point" ]]; then s tap --point "$point" >/dev/null 2>&1; else echo "  ! no order cells"; fi
  sleep 2
  echo "  orders: newest selected $(ui_json | jq '[.data.entries[] | select(.label=="#041" and .frame.x > 400)] | length') (want 1)"
  capture "$dir/orders.png"

  # Promotions: the third row under the Loyalty & Promotions heading, found by
  # position because a long heading can wrap and push the rows down.
  s tap '#sidebar.menu' >/dev/null 2>&1
  sleep 2
  point=$(ui_json | jq -r '
    (.data.entries[] | select(.uniqueId=="settings.group.loyaltyPromotions") | .frame.y) as $top
    | (.data.entries[] | select(.uniqueId=="settings.group.thisDevice") | .frame.y) as $bottom
    | [.data.entries[] | select(.role=="StaticText" and .frame.x > 120 and .frame.x < 200 and .frame.y > $top and .frame.y < $bottom)]
    | sort_by(.frame.y) | .[2].frame // empty | "\(.x + 40 | floor),\(.y + .height/2 | floor)"')
  if [[ -n "$point" ]]; then s tap --point "$point" >/dev/null 2>&1; else echo "  ! promotions row not found"; fi
  sleep 2
  echo "  promotions: $(ui_json | jq '[.data.entries[] | select(.uniqueId=="promotionList.nav.add")] | length') (want 1)"
  capture "$dir/promotions.png"
done
