import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowsLeftRight, CalendarCheck, Check, Minus, Plus, Receipt, ShieldCheck } from "@phosphor-icons/react";
import "../assets/scss/home.scss";
import "./pricing.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppStoreButton from "../components/AppStoreButton";
import { Price, CurrencyNote } from "../components/Price";
import {
  PLANS,
  TIERS,
  COMPARISON,
  includes,
  monthlyEquivalent,
  annualSaving,
  annualSavingPercent,
} from "../data/plans";

const CADENCES = ["monthly", "annual"];
const RECOMMENDED_TIER = PLANS.find((plan) => plan.recommended).key;
const ANNUAL_SAVING_PERCENT = annualSavingPercent();

const ASSURANCES = [
  { key: "trial", icon: <CalendarCheck size={20} weight="duotone" /> },
  { key: "fees", icon: <Receipt size={20} weight="duotone" /> },
  { key: "data", icon: <ShieldCheck size={20} weight="duotone" /> },
  { key: "switch", icon: <ArrowsLeftRight size={20} weight="duotone" /> },
];

function PricingPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language;
  const [billing, setBilling] = useState("monthly");
  const [selectedTier, setSelectedTier] = useState(RECOMMENDED_TIER);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${t("pricing.doc_title")} — DingPOS`;
    return () => {
      document.title = previousTitle;
    };
  }, [t, lang]);

  return (
    <>
      <Navbar />

      <main id="main" className="page pricing-page">
        <header className="shell page-head page-head--center">
          <p className="eyebrow">{t("pricing.eyebrow")}</p>
          <h1>{t("pricing.title")}</h1>
          <p>{t("pricing.subtitle")}</p>
          <BillingToggle billing={billing} onChange={setBilling} />
        </header>

        <section className="shell plans" aria-label={t("pricing.doc_title")}>
          <div className="plan-grid" role="radiogroup" aria-label={t("pricing.select_plan")}>
            {PLANS.map((plan) => (
              <PlanCard
                key={plan.key}
                plan={plan}
                billing={billing}
                selected={plan.key === selectedTier}
                onSelect={() => setSelectedTier(plan.key)}
              />
            ))}
          </div>
          <div className="plans-foot">
            <CurrencyNote />
            <p className="plans-fineprint">{t("pricing.fineprint")}</p>
          </div>
          <ul className="assurances">
            {ASSURANCES.map(({ key, icon }) => (
              <li key={key}>
                <span className="assurances__icon" aria-hidden="true">
                  {icon}
                </span>
                <h2>{t(`pricing.assurances.${key}.title`)}</h2>
                <p>{t(`pricing.assurances.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section compare" id="compare">
          <div className="shell">
            <div className="section-head section-head--center reveal">
              <h2>{t("pricing.compare.title")}</h2>
              <p>{t("pricing.compare.subtitle")}</p>
            </div>
            <div className="compare__wrap">
              <CompareTable billing={billing} selectedTier={selectedTier} onSelect={setSelectedTier} />
            </div>
          </div>
        </section>

        <section className="section pricing-faq" id="faq">
          <div className="shell shell--narrow">
            <div className="section-head section-head--center reveal">
              <h2>{t("pricing.faq.title")}</h2>
            </div>
            <div className="faq">
              {t("pricing.faq.items", { returnObjects: true, percent: ANNUAL_SAVING_PERCENT }).map(({ q, a }) => (
                // <details> keeps the answer in the DOM while collapsed, so the
                // prerendered HTML carries every answer for crawlers.
                <details className="faq__item" key={q}>
                  <summary>
                    <span>{q}</span>
                    <Plus size={20} weight="bold" aria-hidden="true" />
                  </summary>
                  <div className="faq__answer">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="faq-more">
              {t("pricing.faq.more")} <Link to="/support/">{t("pricing.faq.more_link")}</Link>
            </p>
          </div>
        </section>

        <section className="section cta pricing-final">
          <div className="shell">
            <div className="cta__card reveal-card">
              <h2>{t("pricing.final.title")}</h2>
              <p className="cta__sub">{t("pricing.final.sub")}</p>
              <div className="cta__actions">
                <AppStoreButton className="button button--light button--lg">{t("pricing.final.cta")}</AppStoreButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function BillingToggle({ billing, onChange }) {
  const { t } = useTranslation();
  return (
    <fieldset className="billing-toggle">
      <legend className="visually-hidden">{t("pricing.billing.label")}</legend>
      {CADENCES.map((cadence) => (
        <label key={cadence} className={billing === cadence ? "is-active" : ""}>
          <input
            type="radio"
            name="billing"
            value={cadence}
            checked={billing === cadence}
            onChange={() => onChange(cadence)}
          />
          {t(`pricing.billing.${cadence}`)}
          {cadence === "annual" && (
            <span className="billing-save">{t("pricing.billing.save", { percent: ANNUAL_SAVING_PERCENT })}</span>
          )}
        </label>
      ))}
    </fieldset>
  );
}

function PlanCard({ plan, billing, selected, onSelect }) {
  const { t } = useTranslation();
  const { key, price, recommended } = plan;
  const copy = `pricing.plans.${key}`;
  const features = t(`${copy}.features`, { returnObjects: true });

  return (
    // The whole card is the pointer target; the hidden radio carries keyboard
    // and screen-reader selection, since the card itself holds a link.
    <article
      className={`plan-card ${selected ? "is-selected" : ""}`}
      aria-labelledby={`plan-${key}`}
      onClick={onSelect}
    >
      <input
        type="radio"
        name="plan"
        value={key}
        className="plan-select visually-hidden"
        checked={selected}
        onChange={onSelect}
        aria-labelledby={`plan-${key}`}
      />
      <div className="plan-head">
        <h2 id={`plan-${key}`}>{t(`${copy}.name`)}</h2>
        {recommended && <span className="plan-badge">{t("pricing.recommended")}</span>}
      </div>
      <p className="plan-tagline">{t(`${copy}.tagline`)}</p>

      {/* Both cadences stay rendered; `hidden` swaps them so crawlers see each price. */}
      <div className="plan-price" hidden={billing !== "monthly"}>
        <p className="plan-amount">
          <Price value={(c) => price[c].monthly} />
          <span className="plan-unit">{t("pricing.unit.month")}</span>
        </p>
        <p className="plan-sub">
          {t("pricing.or_annual_before")}
          <Price value={(c) => price[c].annual} />
          {t("pricing.or_annual_after")}
        </p>
      </div>
      <div className="plan-price" hidden={billing !== "annual"}>
        <p className="plan-amount">
          <Price value={(c) => price[c].annual} />
          <span className="plan-unit">{t("pricing.unit.year")}</span>
        </p>
        <p className="plan-sub">
          {t("pricing.approx")}
          <Price value={(c) => monthlyEquivalent(c, price[c])} />
          {t("pricing.unit.month")}
          <span className="plan-save">
            {t("pricing.saving_before")}
            <Price value={(c) => annualSaving(c, price[c])} />
            {t("pricing.saving_after")}
          </span>
        </p>
      </div>

      <AppStoreButton className={`button button--block ${selected ? "button--primary" : "button--secondary"} plan-card__cta`}>
        {t(`${copy}.cta`)}
      </AppStoreButton>

      <p className="plan-heading">{t(`${copy}.heading`)}</p>
      <ul className="check-list check-list--compact">
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function CompareTable({ billing, selectedTier, onSelect }) {
  const { t } = useTranslation();
  return (
    <table className="compare-table">
      <caption className="visually-hidden">{t("pricing.compare.title")}</caption>
      <thead>
        <tr>
          <th scope="col" className="compare-feature">
            {t("pricing.compare.feature_col")}
          </th>
          {PLANS.map(({ key, price }) => (
            <th scope="col" key={key} className={key === selectedTier ? "is-selected" : ""}>
              <button
                type="button"
                className="compare-select"
                aria-pressed={key === selectedTier}
                onClick={() => onSelect(key)}
              >
                <span className="compare-plan">{t(`pricing.plans.${key}.name`)}</span>
                <span className="compare-price">
                  <Price value={(c) => price[c][billing]} />
                  {t(`pricing.unit.${billing === "monthly" ? "month" : "year"}`)}
                </span>
              </button>
            </th>
          ))}
        </tr>
      </thead>
      {COMPARISON.map((group) => (
        <tbody key={group.key}>
          <tr className="compare-group">
            <th scope="colgroup" colSpan={TIERS.length + 1}>
              {t(`pricing.compare.groups.${group.key}`)}
            </th>
          </tr>
          {group.rows.map((row) => (
            <tr key={row.key}>
              <th scope="row" className="compare-feature">
                <span className="compare-name">{t(`pricing.compare.rows.${row.key}.name`)}</span>
                <span className="compare-desc">{t(`pricing.compare.rows.${row.key}.desc`)}</span>
              </th>
              {TIERS.map((tier) => (
                <td key={tier} className={tier === selectedTier ? "is-selected" : ""}>
                  {includes(tier, row.from) ? (
                    <>
                      <Check size={20} weight="bold" className="compare-yes" aria-hidden="true" />
                      <span className="visually-hidden">{t("pricing.compare.included")}</span>
                    </>
                  ) : (
                    <>
                      <Minus size={16} weight="bold" className="compare-no" aria-hidden="true" />
                      <span className="visually-hidden">{t("pricing.compare.not_included")}</span>
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}

export default PricingPage;
