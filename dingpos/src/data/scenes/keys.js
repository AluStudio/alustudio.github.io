// The app strings the home page's scenes draw, by their key in the app's
// Localizable.strings. scripts/sync-scene-strings.mjs copies exactly these
// into strings.<code>.json, and the build rejects a pack that lacks one or
// whose placeholders differ from en's.
export const SCENE_STRING_KEYS = [
  // Inventory
  "products.stock.badge",
  "products.stock.out",
  "products.detail.stock_history",
  "products.detail.movement.sale",
  "products.detail.movement.purchase",
  // Members & points
  "customer.select",
  "customers.points_pill",
  "cashier.subtotal",
  "cashier.subtotal.points",
  "customers.points_reason.earn",
  // Onboarding wizard
  "onboarding.step_indicator",
  "onboarding.country.title",
  "onboarding.country.tagline",
  "onboarding.store.title",
  "onboarding.store.tagline",
  "onboarding.store.name_label",
  "onboarding.store.tax_section",
  "onboarding.store.currency_label",
  "onboarding.store.tax_rate",
  "settings.tax_mode.inclusive",
  "settings.tax_mode.exclusive",
  "onboarding.back",
  "onboarding.continue",
  "onboarding.success.title",
  "onboarding.success.subtitle",
  "onboarding.summary.region",
  "onboarding.success.cta",
  // Cloud backup
  "settings.backup",
  "settings.backup.subtitle",
  "settings.backup.providers_title",
  "settings.backup.overview_title",
  "backup.provider.icloud",
  "backup.provider.google_drive",
  "backup.provider.dropbox",
  "backup.status.today_at",
  "backup.status.yesterday_at",
  "backup.status.not_connected",
  "backup.status.backing_up",
  "backup.action.backup",
  "backup.action.restore",
  "backup.action.connect",
  "backup.overview.device_column",
  "settings.backup.row.products",
  "settings.backup.row.orders",
  "settings.backup.row.customers",
];

// Country tiles in the onboarding scene: the first three of the app's
// CountryPreset.primaryMarketCodes, with their presets. Names come from CLDR
// at sync time (the app uses Locale.localizedString(forRegionCode:)).
export const SCENE_COUNTRIES = [
  { code: "TW", currency: "TWD", rate: 5 },
  { code: "JP", currency: "JPY", rate: 10 },
  { code: "KR", currency: "KRW", rate: 10 },
];

// Clock times the backup scene shows ("HH:MM"), formatted per language at
// sync time the way the app's Formatters.formatTime does (time style short),
// so rendering never reads a clock or a locale.
export const SCENE_TIMES = ["21:08", "21:09", "14:32", "14:33"];

/** Every printf placeholder in `value`, sorted, e.g. ["%1$d", "%2$d"]. */
export function placeholders(value) {
  return (value.match(/%(\d+\$)?[@d]/g) ?? []).sort();
}
