#!/usr/bin/env bash
#
# Capture the FAQ screenshots (src/data/faq/shots.js) in every site language
# from the DingPOS app on an iPad simulator. Feed the output to
# build-faq-shots.sh.
#
# Local authoring tool, like capture-screenshots.sh — CI never runs it.
#
# Usage:
#   ./scripts/capture-faq-shots.sh <out-root> [code ...]
#
# Before running:
#   - The Debug app of the released version is built from the DingPOS repo
#     (a clone at the release tag, so unreleased work never shows) and
#     installed on the simulator named by SIM_NAME (default "iPad Pro 11-inch
#     (M5)"), which is booted, with app accessibility on
#     (`make sim-ax-enable AX_SIM=<udid>` in the app repo) and rotated with
#     `sim-use ios rotate landscape-right`.
#   - sim-use, axe and jq are on PATH.
#
# Per language (codes from l10n/languages.json, default all) it launches the
# app on fresh UI-test fixtures (DingPOS docs/codemap/uitest-fixtures.md) and
# writes <out-root>/<code>/<name>.png (the whole screen, upright) plus
# <name>.crop ("x y w h" in points, worked out from the accessibility frames
# so a longer language's wrapped text stays inside):
#   dashboard-tiles     Stats, This Month: the first three columns of both tile rows
#   report-periods      the period bar with the Custom popover open
#   profit-not-tracked  the Products Without Cost sheet
#   tax-report          Tax Report: Sales and tax by rate and Totals
#   tax-export          Tax Report: the Export menu
#   return-boxes        Tax Report of the UK store: the Return boxes card
#   input-tax-toggle    Settings → Store Info: the tax card with Claim input tax
#   input-tax-po        Purchasing: a purchase order with its Input tax card
#   profit-loss-month   P&L: this month's page
#   expense-form        P&L → All Expenses → Rent: the fixed expense form
#   advanced-reports    Stats, This Week compared with last week: the first tile row
# zh-Hant and zh-Hans use the Taiwan fixtures (taxReport, inputTax,
# screenshots-zh); the other languages use the UK store (taxReportGB) and
# screenshots-en. return-boxes uses taxReportGB everywhere, profitLoss serves
# every language. Each step prints what it verified; a "!" line means that
# shot needs a look.
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

# Frame of the entry with an accessibility id, from a saved outline: "x y w h".
frame() { jq -r --arg id "$2" '[.data.entries[] | select(.uniqueId==$id)] | .[0].frame // empty | "\(.x) \(.y) \(.width) \(.height)"' <<<"$1"; }

# Center of segment i of a segmented control, from AXe (sim-use lists no segments).
segment() { axe describe-ui --udid "$UDID" 2>/dev/null | jq -r --arg id "$1" --argjson i "$2" '.. | objects | select(.AXUniqueId==$id) | .children[$i].frame // empty | "\(.x + .width/2 | floor),\(.y + .height/2 | floor)"'; }

launch() { # <code> <locale> <fixture>
  xcrun simctl launch --terminate-running-process "$UDID" "$BID" \
    -AppleLanguages "($1)" -AppleLocale "$2" \
    -uitest-reset -uitest-seed "$3" -DisableDevTweakBall -DingSubscriptionTier pro >/dev/null
  sleep 6
  s app-state --reset >/dev/null 2>&1   # an intentional relaunch is not a crash
}

# simctl returns the device-native portrait buffer; the app runs landscape-right.
capture() { # <name> <x> <y> <w> <h>   (points)
  local raw
  raw=$(mktemp /tmp/dingpos-faq-XXXXXX).png
  xcrun simctl io "$UDID" screenshot "$raw" >/dev/null 2>&1 && sips -r 270 "$raw" --out "$dir/$1.png" >/dev/null
  rm -f "$raw"
  # Clamped to the 1210 × 834 pt screen.
  awk -v x="$2" -v y="$3" -v w="$4" -v h="$5" 'BEGIN {
    if (x < 0) { w += x; x = 0 } if (y < 0) { h += y; y = 0 }
    if (x + w > 1210) w = 1210 - x; if (y + h > 834) h = 834 - y
    printf "%.0f %.0f %.0f %.0f\n", x, y, w, h }' >"$dir/$1.crop"
}

# Drag a scroll view until the entry with <id> sits near <target-y>; slow drags
# keep momentum low, and a few rounds absorb what is left.
scroll_to() { # <id> <target-y> <x>
  local y d last=""
  for _ in 1 2 3 4 5; do
    y=$(ui_json | jq -r --arg id "$1" '[.data.entries[] | select(.uniqueId==$id)] | .[0].frame.y // empty')
    [[ -n "$y" ]] || { s swipe --from "$3,650" --to "$3,350" --duration 2 >/dev/null 2>&1; sleep 1.2; continue; }
    [[ "$y" == "$last" ]] && return 0   # the scroll view hit its end
    last=$y
    d=$(awk -v y="$y" -v t="$2" 'BEGIN { printf "%d", y - t }')
    (( d > -25 && d < 25 )) && return 0
    if (( d > 0 )); then
      (( d > 450 )) && d=450
      s swipe --from "$3,700" --to "$3,$((700 - d * 4 / 3))" --duration 3 >/dev/null 2>&1
    else
      (( d < -450 )) && d=-450
      s swipe --from "$3,200" --to "$3,$((200 - d * 4 / 3))" --duration 3 >/dev/null 2>&1
    fi
    sleep 1.2
  done
  echo "  ! could not scroll $1 to y=$2 (at $y)"
}

stats_month() { # Stats on This Month
  s tap '#sidebar.item.dashboard' >/dev/null 2>&1
  sleep 2.5
  local p; p=$(segment dashboard.range 3)
  if [[ -n "$p" ]]; then s tap --point "$p" >/dev/null 2>&1; else echo "  ! no period segments"; fi
  sleep 3
}

shot_dashboard_tiles() {
  local j
  j=$(ui_json)
  read -r rx ry rw rh <<<"$(frame "$j" dashboard.range)"
  read -r wx wy ww wh <<<"$(frame "$j" dashboard.kpi.profit.waterfall)"
  # Row two's tiles share the tallest one's height; its footers end lowest.
  local bottom
  bottom=$(jq -r '[.data.entries[] | select(.uniqueId=="dashboard.kpi.tax.open" or .uniqueId=="dashboard.kpi.net.open" or .uniqueId=="dashboard.kpi.profitTracked.view" or .uniqueId=="dashboard.kpi.repeat") | .frame.y + .frame.height] | max // empty' <<<"$j")
  if [[ -z "$rx" || -z "$wx" || -z "$bottom" ]]; then echo "  ! dashboard-tiles: tiles not found"; return; fi
  echo "  dashboard-tiles: tax tile $(jq '[.data.entries[] | select(.uniqueId=="dashboard.kpi.tax")] | length' <<<"$j"), net profit tile $(jq '[.data.entries[] | select(.uniqueId // "" | startswith("dashboard.kpi.net"))] | length > 0' <<<"$j") (want 1, true)"
  capture dashboard-tiles 84 "$(awk -v a="$ry" -v b="$rh" 'BEGIN{print a+b+8}')" \
    "$(awk -v a="$wx" -v b="$ww" 'BEGIN{print a+b+28-84}')" "$(awk -v a="$ry" -v b="$rh" -v c="$bottom" 'BEGIN{print c+28-(a+b+8)}')"
}

shot_report_periods() {
  local p j
  # A modal lists only its own elements, so read the period bar first.
  read -r rx ry rw rh <<<"$(frame "$(ui_json)" dashboard.range)"
  p=$(segment dashboard.range 6)
  [[ -n "$p" ]] && s tap --point "$p" >/dev/null 2>&1
  sleep 2
  j=$(ui_json)
  # The popover spans its close and done buttons (its own id is its localized title).
  local cx cw
  read -r cx _ _ _ <<<"$(frame "$j" dashboard.customPeriod.cancel)"
  cw=$(jq -r '[.data.entries[] | select(.uniqueId=="dashboard.customPeriod.apply")] | .[0].frame // empty | .x + .width' <<<"$j")
  [[ -n "$cx" && -n "$cw" ]] && cw=$(awk -v a="$cx" -v b="$cw" 'BEGIN{print b-a+14}')
  # Its date pickers are the buttons below the close button (their label is localized).
  local bottom cy
  cy=$(jq -r '[.data.entries[] | select(.uniqueId=="dashboard.customPeriod.cancel")] | .[0].frame.y // empty' <<<"$j")
  bottom=$(jq -r --argjson cy "${cy:-0}" '[.data.entries[] | select(.role=="Button" and .frame.y > $cy + 40) | .frame.y + .frame.height] | max // empty' <<<"$j")
  if [[ -z "$rx" || -z "$cx" || -z "$bottom" ]]; then
    echo "  ! report-periods: Custom popover not found"
  else
    echo "  report-periods: popover open, $(jq --argjson cy "${cy:-0}" '[.data.entries[] | select(.role=="Button" and .frame.y > $cy + 40)] | length' <<<"$j") date pickers (want 2)"
    local right; right=$(awk -v a="$rx" -v b="$rw" -v c="$cx" -v d="$cw" 'BEGIN{r=a+b; if (c+d>r) r=c+d; print r+16}')
    capture report-periods "$(awk -v a="$rx" 'BEGIN{print a-12}')" "$(awk -v a="$ry" 'BEGIN{print a-12}')" \
      "$(awk -v a="$rx" -v r="$right" 'BEGIN{print r-(a-12)}')" "$(awk -v a="$ry" -v c="$bottom" 'BEGIN{print c+28-(a-12)}')"
  fi
  s tap '#dashboard.customPeriod.cancel' >/dev/null 2>&1
  sleep 1.5
}

shot_profit_not_tracked() {
  local j
  s tap '#dashboard.kpi.profitTracked.view' >/dev/null 2>&1
  sleep 2.5
  j=$(ui_json)
  read -r hx hy hw hh <<<"$(frame "$j" missingCost.subtitle)"
  read -r lx ly lw lh <<<"$(frame "$j" missingCost.list)"
  local bottom n
  n=$(jq '[.data.entries[] | select(.uniqueId=="missingCost.cell")] | length' <<<"$j")
  bottom=$(jq -r '[.data.entries[] | select(.uniqueId=="missingCost.cell") | .frame.y + .frame.height] | sort | .[5] // max // empty' <<<"$j")
  [[ -z "$bottom" ]] && bottom=$(jq -r '[.data.entries[] | select(.uniqueId=="missingCost.cell") | .frame.y + .frame.height] | max // empty' <<<"$j")
  if [[ -z "$lx" || -z "$bottom" ]]; then
    echo "  ! profit-not-tracked: sheet not found"
  else
    echo "  profit-not-tracked: $n rows (want 6)"
    capture profit-not-tracked "$lx" "$(awk -v a="$hy" 'BEGIN{print a-46}')" \
      "$lw" "$(awk -v a="$hy" -v c="$bottom" 'BEGIN{print c+12-(a-46)}')"
  fi
  s tap '#missingCost.nav.close' >/dev/null 2>&1
  sleep 1.5
}

open_tax_report() {
  s tap '#dashboard.kpi.tax.open' >/dev/null 2>&1
  sleep 3
}

shot_return_boxes() {
  local j
  j=$(ui_json)
  read -r ax ay aw ah <<<"$(frame "$j" taxReport.filing.gb1)"
  read -r bx by bw bh <<<"$(frame "$j" taxReport.filing.note.basis)"
  if [[ -z "$ax" || -z "$bx" ]]; then echo "  ! return-boxes: card not found"; return; fi
  echo "  return-boxes: $(jq '[.data.entries[] | select(.uniqueId // "" | startswith("taxReport.filing.gb"))] | length' <<<"$j") boxes (want 4)"
  capture return-boxes 92 "$(awk -v a="$ay" 'BEGIN{print a-80}')" 1098 "$(awk -v a="$ay" -v b="$by" -v c="$bh" 'BEGIN{print b+c+27-(a-80)}')"
}

shot_tax_report() {
  local j
  scroll_to taxReport.sales.info 120 640
  j=$(ui_json)
  read -r ix iy iw ih <<<"$(frame "$j" taxReport.sales.info)"
  read -r gx gy gw gh <<<"$(frame "$j" taxReport.totals.gross)"
  if [[ -z "$ix" || -z "$gx" ]]; then echo "  ! tax-report: cards not found"; return; fi
  echo "  tax-report: $(jq '[.data.entries[] | select(.uniqueId // "" | test("^taxReport.row.[0-9]+.title$"))] | length' <<<"$j") rows (want 3)"
  capture tax-report 92 "$(awk -v a="$iy" 'BEGIN{print a-22}')" 1098 "$(awk -v a="$iy" -v b="$gy" -v c="$gh" 'BEGIN{print b+c+27-(a-22)}')"
}

shot_tax_export() {
  local j
  s tap '#taxReport.export' >/dev/null 2>&1
  sleep 1.5
  j=$(ui_json)
  local box n
  n=$(jq '[.data.entries[] | select(.role=="Button" and .frame.x > 700 and .frame.width < 400)] | length' <<<"$j")
  box=$(jq -r '[.data.entries[] | select(.role=="Button" and .frame.x > 700 and .frame.width < 400) | .frame] | if length == 0 then empty else "\(map(.x) | min) \(map(.y) | min) \(map(.x + .width) | max) \(map(.y + .height) | max)" end' <<<"$j")
  if [[ -z "$box" ]]; then
    echo "  ! tax-export: menu not found"
  else
    read -r x0 y0 x1 y1 <<<"$box"
    echo "  tax-export: $n formats (want $(( taiwan ? 5 : 6 )))"
    capture tax-export "$(awk -v a="$x0" 'BEGIN{print a-24}')" "$(awk -v a="$y0" 'BEGIN{print a-12}')" \
      "$(awk -v a="$x0" -v b="$x1" 'BEGIN{print b-a+48}')" "$(awk -v a="$y0" -v b="$y1" 'BEGIN{print b-a+36}')"
  fi
  s tap --point 300,700 >/dev/null 2>&1   # dismiss the menu
  sleep 1.5
}

shot_input_tax_toggle() {
  local j
  s tap '#sidebar.menu' >/dev/null 2>&1
  sleep 2.5
  scroll_to storeInfo.taxCollection 220 780
  j=$(ui_json)
  read -r tx ty tw th <<<"$(frame "$j" storeInfo.taxCollection)"
  read -r cx cy cw ch <<<"$(frame "$j" storeInfo.inputTaxClaiming)"
  local taxes
  taxes=$(jq -r '[.data.entries[] | select(.uniqueId=="storeInfo.taxes.cell") | .frame.y] | min // empty' <<<"$j")
  if [[ -z "$tx" || -z "$cx" || -z "$taxes" ]]; then echo "  ! input-tax-toggle: tax card not found"; return; fi
  echo "  input-tax-toggle: claiming $(jq -r '[.data.entries[] | select(.uniqueId=="storeInfo.inputTaxClaiming")] | .[0].states // [] | index("selected") != null' <<<"$j") (want true)"
  capture input-tax-toggle 375 "$(awk -v a="$ty" 'BEGIN{print a-93}')" 815 "$(awk -v a="$ty" -v b="$taxes" 'BEGIN{print b-28-(a-93)}')"
}

shot_input_tax_po() {
  local j point
  s tap '#sidebar.item.purchasing' >/dev/null 2>&1
  sleep 2.5
  point=$(ui_json | jq -r '[.data.entries[] | select(.uniqueId=="purchaseOrderList.cell")] | sort_by(.frame.y) | .[0].frame // empty | "\(.x + .width/2 | floor),\(.y + .height/2 | floor)"')
  if [[ -z "$point" ]]; then echo "  ! input-tax-po: no purchase orders"; return; fi
  s tap --point "$point" >/dev/null 2>&1
  sleep 2.5
  j=$(ui_json)
  read -r ex ey ew eh <<<"$(frame "$j" purchaseOrderDetail.inputTax.edit)"
  read -r hx hy hw hh <<<"$(frame "$j" purchaseOrderDetail.title)"
  if [[ -z "$ex" || -z "$hx" ]]; then echo "  ! input-tax-po: input tax card not found"; return; fi
  # The card's last line is the last text before the gap to the next card.
  local last
  last=$(jq -r --argjson ey "$ey" '[.data.entries[] | select(.role=="StaticText" and .frame.x >= 470 and .frame.y > $ey) | .frame.y + .frame.height] | sort
    | reduce .[] as $b ({prev: null, end: null}; if .end != null then . elif .prev != null and $b - .prev > 50 then .end = .prev else .prev = $b end)
    | .end // .prev // empty' <<<"$j")
  echo "  input-tax-po: invoice number $(jq '[.data.entries[] | select(.role=="StaticText" and (.label | test("INV-2041|AB-12345678")))] | length' <<<"$j") (want 1)"
  capture input-tax-po 458 "$(awk -v a="$hy" 'BEGIN{print a-17}')" 740 "$(awk -v a="$hy" -v b="$last" 'BEGIN{print b+27-(a-17)}')"
}

shot_profit_loss_month() {
  local j
  s tap '#sidebar.item.profitLoss' >/dev/null 2>&1
  sleep 2.5
  j=$(ui_json)
  read -r tx ty tw th <<<"$(frame "$j" profitLossMonth.title)"
  read -r nx ny nw nh <<<"$(frame "$j" profitLossMonth.bridge.net)"
  if [[ -z "$tx" || -z "$nx" ]]; then echo "  ! profit-loss-month: month page not found"; return; fi
  echo "  profit-loss-month: in progress $(jq '[.data.entries[] | select(.uniqueId=="profitLossMonth.inProgress")] | length' <<<"$j") (want 1)"
  capture profit-loss-month 462 "$(awk -v a="$ty" 'BEGIN{print a-24}')" 732 "$(awk -v a="$ty" -v b="$ny" -v c="$nh" 'BEGIN{print b+c+27-(a-24)}')"
}

shot_expense_form() {
  local j point
  s tap '#profitLossList.allExpenses' >/dev/null 2>&1
  sleep 2
  point=$(ui_json | jq -r '[.data.entries[] | select(.uniqueId=="allExpenses.fixedRow")] | sort_by(.frame.y) | .[0].frame // empty | "\(.x + .width/2 | floor),\(.y + .height/2 | floor)"')
  if [[ -z "$point" ]]; then echo "  ! expense-form: no fixed expenses"; return; fi
  s tap --point "$point" >/dev/null 2>&1
  sleep 2
  j=$(ui_json)
  read -r bx by bw bh <<<"$(frame "$j" fixedExpenseForm.titleBar)"
  read -r dx dy dw dh <<<"$(frame "$j" fixedExpenseForm.delete)"
  if [[ -z "$bx" || -z "$dx" ]]; then echo "  ! expense-form: form not found"; return; fi
  echo "  expense-form: $(jq -r '[.data.entries[] | select(.uniqueId=="fixedExpenseForm.name")] | .[0].label // "?"' <<<"$j") (want Rent)"
  capture expense-form "$bx" "$(awk -v a="$by" 'BEGIN{print a-10}')" \
    "$bw" "$(awk -v a="$by" -v b="$dy" -v c="$dh" 'BEGIN{print b+c+24-(a-10)}')"
  s tap '#fixedExpenseForm.nav.leading' >/dev/null 2>&1
  sleep 1
}

shot_advanced_reports() {
  local j p
  s tap '#sidebar.item.dashboard' >/dev/null 2>&1
  sleep 2.5
  p=$(segment dashboard.range 2)
  [[ -n "$p" ]] && s tap --point "$p" >/dev/null 2>&1
  sleep 2.5
  p=$(segment dashboard.comparison 1)
  [[ -n "$p" ]] && s tap --point "$p" >/dev/null 2>&1
  sleep 4
  j=$(ui_json)
  read -r cx cy cw ch <<<"$(frame "$j" dashboard.comparison.caption)"
  read -r wx wy ww wh <<<"$(frame "$j" dashboard.kpi.profit.waterfall)"
  if [[ -z "$cx" || -z "$wx" ]]; then echo "  ! advanced-reports: no comparison"; return; fi
  echo "  advanced-reports: $(jq -r '[.data.entries[] | select(.uniqueId=="dashboard.comparison.caption")] | .[0].label' <<<"$j")"
  capture advanced-reports 84 "$(awk -v a="$cy" 'BEGIN{print a-10}')" "$(awk -v a="$wx" -v b="$ww" 'BEGIN{print a+b+28-84}')" \
    "$(awk -v a="$cy" -v b="$wy" -v c="$wh" 'BEGIN{print b+c+28-(a-10)}')"
}

for code in "${CODES[@]}"; do
  locale=$(jq -r --arg c "$code" '.languages[] | select(.code==$c) | .ogLocale' "$REG")
  [[ "$locale" == "es_LA" ]] && locale=es_419   # og:locale's es_LA is not an Apple locale
  dir="$OUT/$code"
  mkdir -p "$dir"
  case "$code" in
    zh-Hant|zh-Hans) taiwan=1; tax=taxReport; shop=screenshots-zh ;;
    *) taiwan=0; tax=taxReportGB; shop=screenshots-en ;;
  esac
  echo "== $code ($locale)"

  launch "$code" "$locale" "$tax"
  stats_month
  shot_dashboard_tiles
  shot_report_periods
  shot_profit_not_tracked
  open_tax_report
  (( taiwan )) || shot_return_boxes
  shot_tax_report
  shot_tax_export

  if (( taiwan )); then
    launch "$code" "$locale" taxReportGB
    stats_month
    open_tax_report
    shot_return_boxes
    launch "$code" "$locale" inputTax
  fi
  shot_input_tax_toggle
  shot_input_tax_po

  launch "$code" "$locale" profitLoss
  shot_profit_loss_month
  shot_expense_form

  launch "$code" "$locale" "$shop"
  shot_advanced_reports
done
