import { useTranslation } from "react-i18next";
import { CURRENCIES, formatPrice } from "../data/plans";
import "../assets/scss/price.scss";

// Every price ships in both currencies. The inline script in index.html sets
// <html data-currency> before first paint and price.scss hides the other one,
// so the prerendered HTML never flashes the wrong currency.
// The key is duplicated in that script; keep the two in step.
const STORAGE_KEY = "dingpos.currency";

function chooseCurrency(currency) {
  document.documentElement.dataset.currency = currency;
  try {
    localStorage.setItem(STORAGE_KEY, currency);
  } catch {
    // Private mode: the choice still holds for this page view.
  }
}

/** `value` maps a currency code to the amount to show in it. */
export function Price({ value }) {
  return Object.keys(CURRENCIES).map((currency) => (
    <span key={currency} data-cur={currency}>
      {formatPrice(currency, value(currency))}
    </span>
  ));
}

/** Says which storefront the prices belong to, with a switch to the other. */
export function CurrencyNote({ className = "" }) {
  const { t } = useTranslation();
  return (
    <p className={`currency-note ${className}`}>
      <span data-cur="TWD">
        {t("pricing.currency.twd")}{" "}
        <button type="button" onClick={() => chooseCurrency("USD")}>
          {t("pricing.currency.to_usd")}
        </button>
      </span>
      <span data-cur="USD">
        {t("pricing.currency.usd")}{" "}
        <button type="button" onClick={() => chooseCurrency("TWD")}>
          {t("pricing.currency.to_twd")}
        </button>
      </span>
    </p>
  );
}
