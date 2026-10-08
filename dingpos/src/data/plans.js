// Plan prices and the feature matrix behind the pricing page.
//
// Source of truth: ~/Developer/alustudio/DingPOS/docs/specs/subscription/tiers.md
// (tier table, fence matrix, App Store prices). TWD is the App Store
// equalization base; USD is the explicit US override. Every other storefront
// is Apple's auto-converted price, so the page never claims to know it.

export const TIERS = ["lite", "standard", "pro"];

export const PLANS = [
  {
    key: "lite",
    price: { TWD: { monthly: 149, annual: 1490 }, USD: { monthly: 4.99, annual: 49.99 } },
  },
  {
    key: "standard",
    recommended: true,
    price: { TWD: { monthly: 299, annual: 2990 }, USD: { monthly: 12.99, annual: 129.99 } },
  },
  {
    key: "pro",
    price: { TWD: { monthly: 599, annual: 5990 }, USD: { monthly: 24.99, annual: 249.99 } },
  },
];

export const CURRENCIES = {
  TWD: { prefix: "NT$", fractionDigits: 0 },
  USD: { prefix: "US$", fractionDigits: 2 },
};

export function formatPrice(currency, amount) {
  const { prefix, fractionDigits } = CURRENCIES[currency];
  const number = amount.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return `${prefix}${number}`;
}

/** Annual price spread over twelve months, rounded at the currency's precision. */
export function monthlyEquivalent(currency, price) {
  const scale = 10 ** CURRENCIES[currency].fractionDigits;
  return Math.round((price.annual / 12) * scale) / scale;
}

/** What a year of monthly billing costs beyond the annual price. */
export function annualSaving(currency, price) {
  const scale = 10 ** CURRENCIES[currency].fractionDigits;
  return Math.round((price.monthly * 12 - price.annual) * scale) / scale;
}

/**
 * The annual discount as a whole percent, taken from the smallest discount
 * across every plan and currency so the one badge never overstates any of them.
 */
export function annualSavingPercent() {
  const percents = PLANS.flatMap(({ price }) =>
    Object.keys(CURRENCIES).map((currency) => {
      const { monthly, annual } = price[currency];
      return ((monthly * 12 - annual) / (monthly * 12)) * 100;
    }),
  );
  return Math.round(Math.min(...percents));
}

// Tiers nest (Pro ⊃ Standard ⊃ Lite), so each row names the lowest tier that
// includes it. Copy lives in the locale packs under pricing.compare.rows.
export const COMPARISON = [
  {
    key: "checkout",
    rows: [
      { key: "checkout_flow", from: "lite" },
      { key: "discounts_tax", from: "lite" },
      { key: "offline", from: "lite" },
      { key: "returns", from: "lite" },
      { key: "preorder", from: "standard" },
      { key: "on_account", from: "standard" },
    ],
  },
  {
    key: "catalog",
    rows: [
      { key: "products", from: "lite" },
      { key: "import", from: "lite" },
      { key: "inventory", from: "standard" },
      { key: "purchasing", from: "standard" },
    ],
  },
  {
    key: "customers",
    rows: [
      { key: "promotions", from: "standard" },
      { key: "loyalty", from: "standard" },
      { key: "member_tiers", from: "standard" },
    ],
  },
  {
    key: "reports",
    rows: [
      { key: "dashboard", from: "lite" },
      { key: "comparison", from: "pro" },
      { key: "heatmap", from: "pro" },
      { key: "slow_movers", from: "pro" },
      { key: "valuation", from: "pro" },
      { key: "repeat", from: "pro" },
    ],
  },
  {
    key: "team",
    rows: [
      { key: "staff", from: "pro" },
      { key: "permissions", from: "pro" },
      { key: "activity_log", from: "pro" },
      { key: "restore_records", from: "pro" },
    ],
  },
  {
    key: "data",
    rows: [
      { key: "local_data", from: "lite" },
      { key: "backup", from: "lite" },
      { key: "undo_restore", from: "lite" },
    ],
  },
];

export function includes(tier, from) {
  return TIERS.indexOf(tier) >= TIERS.indexOf(from);
}
