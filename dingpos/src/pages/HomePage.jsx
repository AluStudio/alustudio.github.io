import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowsLeftRight,
  Bell,
  CalendarCheck,
  Check,
  DeviceTabletSpeaker,
  Globe,
  Plus,
  Receipt,
  ShieldCheck,
  Storefront,
} from "@phosphor-icons/react";
import "../assets/scss/home.scss";
import "../assets/scss/scenes.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppStoreButton from "../components/AppStoreButton";
import TransitionLink from "../components/TransitionLink";
import Device from "../components/Device";
import TaglineReveal from "../components/TaglineReveal";
import { ProductsScene, InventoryScene, LoyaltyScene, BackupScene } from "../components/Scenes";
import { Price } from "../components/Price";
import { PLANS } from "../data/plans";
import { getFaq } from "../data/faq";
import { useStory } from "../story";

const STARTING_PRICE = PLANS[0].price;

// The screenshot-backed sections after checkout, in page order. Checkout has
// none of its own: its screenshot is the hero shot, and its copy runs as the
// caption directly beneath it.
const STORIES = [
  { key: "promotion", shot: "promotions", id: "promotions" },
  { key: "reports", shot: "dashboard", id: "reports" },
  { key: "orders", shot: "orders", id: "orders" },
];

// Rendered image width, mirroring home.scss: the hero frame is capped at 1120px
// inside the shell's gutters (24px, 32px from 768px) less its bezel (4px, 8px
// from 768px); a story shot fills the 7fr column from 1024px.
const HERO_SHOT_SIZES = "(min-width: 1184px) 1104px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 56px)";
const STORY_SHOT_SIZES =
  "(min-width: 1200px) 610px, (min-width: 1024px) calc(58vw - 90px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 56px)";

// Story start offsets, so the three cards never act in unison.
const FEATURES = [
  { key: "products", scene: <ProductsScene delay={200} /> },
  { key: "inventory", scene: <InventoryScene delay={900} /> },
  { key: "loyalty", scene: <LoyaltyScene delay={1600} /> },
];

const STEP_ICONS = [Globe, Storefront, Bell];

// Objections a first-time visitor raises before installing, answered by the
// opening paragraph of the matching support article.
const FAQ_SLUGS = [
  "offline-usage",
  "account-required",
  "supported-devices",
  "free-trial",
  "after-trial",
  "backup-data",
  "multi-device",
  "import-csv",
];

const ASSURANCES = [
  { key: "trial", icon: <CalendarCheck size={20} weight="duotone" /> },
  { key: "fees", icon: <Receipt size={20} weight="duotone" /> },
  { key: "data", icon: <ShieldCheck size={20} weight="duotone" /> },
  { key: "switch", icon: <ArrowsLeftRight size={20} weight="duotone" /> },
];

/** Splits a headline after each sentence, so lines break where the thought does. */
function sentences(text) {
  const parts = text.match(/[^.!?。！？]+[.!?。！？]*/g) ?? [text];
  return parts.map((part) => part.trim()).filter(Boolean);
}

function useList(key) {
  const { t } = useTranslation();
  const value = t(key, { returnObjects: true });
  return Array.isArray(value) ? value : [];
}

function HomePage() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main id="main" className="home">
        <Hero />
        <Checkout />
        {STORIES.map((story, index) => (
          <Story key={story.key} storyKey={story.key} shot={story.shot} id={story.id} flip={index % 2 === 1} />
        ))}
        <Features />
        <Privacy />
        <Steps />
        <HomeFaq />
        <PricingCta />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  const { t } = useTranslation();
  const proof = useList("proof.items");
  return (
    <section className="hero">
      <div className="shell hero__copy">
        <p className="hero__eyebrow">
          <DeviceTabletSpeaker size={16} weight="bold" aria-hidden="true" />
          {t("hero.eyebrow")}
        </p>
        <h1 className="hero__title">
          {sentences(t("hero.title")).map((line, i) => (
            <span key={i} className="hero__line">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__sub">{t("hero.description")}</p>
        <div className="hero__actions">
          <AppStoreButton className="button button--primary button--lg">{t("hero.download")}</AppStoreButton>
          <p className="hero__note">{t("hero.note")}</p>
        </div>
        <ul className="hero__proof">
          {proof.map((item) => (
            <li key={item}>
              <Check size={16} weight="bold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="shell">
        <div className="hero__visual">
          <Device shot="cashier" sizes={HERO_SHOT_SIZES} alt={t("hero.shot_alt")} priority />
        </div>
      </div>
    </section>
  );
}

function Checkout() {
  const { t } = useTranslation();
  const items = useList("stories.cashier.items");
  return (
    <section className="section checkout" id="checkout">
      <div className="shell checkout__inner">
        <div className="section-head reveal">
          <p className="eyebrow">{t("stories.cashier.eyebrow")}</p>
          <h2>{t("stories.cashier.title")}</h2>
          <p>{t("stories.cashier.lead")}</p>
        </div>
        <ul className="check-list check-list--split reveal">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Story({ storyKey, shot, id, flip }) {
  const { t } = useTranslation();
  const items = useList(`stories.${storyKey}.items`);
  return (
    <section className={`section story${flip ? " story--flip" : ""}`} id={id}>
      <div className="shell story__inner">
        <div className="story__copy reveal">
          <p className="eyebrow">{t(`stories.${storyKey}.eyebrow`)}</p>
          <h2>{t(`stories.${storyKey}.title`)}</h2>
          <p className="story__lead">{t(`stories.${storyKey}.lead`)}</p>
          <ul className="check-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="story__shot reveal-shot">
          <Device shot={shot} sizes={STORY_SHOT_SIZES} alt={t(`stories.${storyKey}.shot_alt`)} />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const { t } = useTranslation();
  return (
    <section className="section features" id="features">
      <div className="shell">
        <div className="section-head section-head--center reveal">
          <h2>{t("features.title")}</h2>
          <p>{t("features.subtitle")}</p>
        </div>
        <div className="bento">
          {FEATURES.map(({ key, scene }) => (
            <FeatureCard key={key} id={key} scene={scene} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ id, scene }) {
  const { t } = useTranslation();
  const items = useList(`features.${id}.items`);
  return (
    <article className="feature-card reveal-card">
      <div className="feature-card__visual">{scene}</div>
      <div className="feature-card__body">
        <h3>{t(`features.${id}.title`)}</h3>
        <ul className="check-list check-list--compact">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Privacy() {
  const { t } = useTranslation();
  const items = useList("privacy_band.items");
  return (
    <section className="privacy" id="privacy-band">
      <div className="shell">
        <p className="eyebrow eyebrow--dark">{t("privacy_band.eyebrow")}</p>
        <TaglineReveal text={t("privacy_band.title")} className="privacy__title" />
        <div className="privacy__grid">
          <div className="reveal">
            <p className="privacy__lead">{t("privacy_band.lead")}</p>
            <ul className="check-list check-list--dark">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="privacy__visual reveal-card">
            <BackupScene delay={300} />
          </div>
        </div>
      </div>
    </section>
  );
}

// At rest every step is done; the story clears them and lights them again
// in order, as a store goes from download to its first sale.
const stepSteps = [
  { active: 3, ms: 3200 },
  { active: 0, ms: 600 },
  { active: 1, ms: 1200 },
  { active: 2, ms: 1200 },
];

function Steps() {
  const { t } = useTranslation();
  const items = useList("features.onboarding.items");
  const ref = useRef(null);
  const step = useStory(ref, stepSteps, 200, 1);
  return (
    <section className="section steps-section" id="onboarding">
      <div className="shell">
        <div className="section-head section-head--center reveal">
          <h2>{t("features.onboarding.title")}</h2>
        </div>
        <ol className="steps" ref={ref}>
          {items.map((item, i) => {
            const Icon = STEP_ICONS[i] ?? Check;
            return (
              <li key={item} className="step reveal-card" data-done={i < step.active || undefined}>
                <span className="step__head">
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="step__wire" aria-hidden="true" />
                </span>
                <span className="step__icon" aria-hidden="true">
                  <Icon size={24} weight="duotone" />
                </span>
                <p className="step__text">{item}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function HomeFaq() {
  const { t } = useTranslation();
  const { articles } = getFaq();
  const entries = FAQ_SLUGS.map((slug) => articles.find((a) => a.slug === slug)).filter(
    (article) => article?.content[0]?.type === "p",
  );
  return (
    <section className="section home-faq" id="faq">
      <div className="shell shell--narrow">
        <div className="section-head section-head--center reveal">
          <h2>{t("pricing.faq.title")}</h2>
        </div>
        <div className="faq">
          {entries.map((article) => (
            <details className="faq__item" key={article.slug}>
              <summary>
                <span>{article.question}</span>
                <Plus size={20} weight="bold" aria-hidden="true" />
              </summary>
              <div className="faq__answer">
                <p>{article.content[0].text}</p>
                <TransitionLink to={`/support/${article.slug}/`} aria-label={`${t("support.back")}: ${article.question}`}>
                  {t("support.back")}
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </TransitionLink>
              </div>
            </details>
          ))}
        </div>
        <p className="faq-more">
          {t("pricing.faq.more")} <Link to="/support/">{t("pricing.faq.more_link")}</Link>
        </p>
      </div>
    </section>
  );
}

function PricingCta() {
  const { t } = useTranslation();
  return (
    <section className="section cta" id="pricing">
      <div className="shell">
        <div className="cta__card reveal-card">
          <h2>{t("home_pricing.title")}</h2>
          <p className="cta__price">
            {t("home_pricing.price_before")}
            <strong>
              <Price value={(c) => STARTING_PRICE[c].monthly} />
            </strong>
            {t("home_pricing.price_after")}
          </p>
          <p className="cta__sub">{t("home_pricing.sub")}</p>
          <div className="cta__actions">
            <AppStoreButton className="button button--light button--lg">{t("home_pricing.cta")}</AppStoreButton>
            <Link to="/pricing/" className="button button--ghost button--lg">
              {t("home_pricing.compare")}
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ul className="assurances">
          {ASSURANCES.map(({ key, icon }) => (
            <li key={key} className="reveal">
              <span className="assurances__icon" aria-hidden="true">
                {icon}
              </span>
              <h3>{t(`pricing.assurances.${key}.title`)}</h3>
              <p>{t(`pricing.assurances.${key}.desc`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
