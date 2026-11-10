import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Check, LockSimple, Plus, Sparkle, UsersThree } from "@phosphor-icons/react";
import "../assets/scss/home.scss";
import "../assets/scss/scenes.scss";
import "../assets/scss/pages.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppStoreButton from "../components/AppStoreButton";
import TaglineReveal from "../components/TaglineReveal";
import GuideList from "../components/GuideList";
import { LibraryScene, MaterialsScene, StatsScene, TodayScene } from "../components/Scenes";

// Bento order: the two cards with a screen lead, stats runs wide, and the
// three text cards share the last row. Story delays keep the scenes from
// acting in unison.
const FEATURES = [
  { key: "age", span: "half", scene: <LibraryScene delay={300} /> },
  { key: "materials", span: "half", scene: <MaterialsScene delay={1100} /> },
  { key: "stats", span: "wide", scene: <StatsScene delay={600} /> },
  { key: "photos", span: "third", icon: <Camera size={20} weight="duotone" /> },
  { key: "children", span: "third", icon: <UsersThree size={20} weight="duotone" /> },
  { key: "privacy", span: "third", icon: <LockSimple size={20} weight="duotone" /> },
];

// The FAQ entries the home page answers in place; /faq/ has every one.
const HOME_FAQ = ["what_ages", "is_babbby_free", "does_it_need_an_account", "is_my_data_private"];

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
        <Facts />
        <Features />
        <Tagline />
        <Steps />
        <HomeFaq />
        <Guides />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  const { t } = useTranslation();
  const proof = useList("home.hero.proof");
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <Sparkle size={16} weight="fill" aria-hidden="true" />
            {t("home.hero.eyebrow")}
          </p>
          <h1 className="hero__title">
            {sentences(t("home.hero.title")).map((line, i) => (
              <span key={i} className="hero__line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{t("home.hero.description")}</p>
          <div className="hero__actions">
            <AppStoreButton />
            <p className="hero__note">{t("home.hero.note")}</p>
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
        <div className="hero__visual">
          <span className="hero__orb" aria-hidden="true" />
          <TodayScene delay={1200} />
        </div>
      </div>
    </section>
  );
}

function Facts() {
  const { t } = useTranslation();
  const items = useList("home.facts.items");
  return (
    <section className="facts" aria-label={t("home.facts.label")}>
      <div className="shell">
        <ul className="facts__list reveal">
          {items.map(({ value, label }) => (
            <li key={value}>
              <span className="facts__value">{value}</span>
              <span className="facts__label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Features() {
  const { t } = useTranslation();
  return (
    <section className="section features" id="features" aria-labelledby="features-title">
      <div className="shell">
        <div className="section-head section-head--center reveal">
          <h2 id="features-title">{t("home.features.title")}</h2>
          <p>{t("home.features.subtitle")}</p>
        </div>
        <div className="bento">
          {FEATURES.map(({ key, span, scene, icon }) => (
            <article key={key} className={`feature feature--${span} reveal-card`}>
              {scene && <div className="feature__visual">{scene}</div>}
              <div className="feature__body">
                {icon && <span className="feature__icon">{icon}</span>}
                <h3>{t(`home.features.${key}.title`)}</h3>
                <p>{t(`home.features.${key}.desc`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tagline() {
  const { t } = useTranslation();
  return (
    <section className="section tagline-band">
      <div className="shell">
        <TaglineReveal text={t("home.tagline")} className="tagline-band__text" />
      </div>
    </section>
  );
}

function Steps() {
  const { t } = useTranslation();
  const items = useList("home.steps.items");
  return (
    <section className="section steps-section" aria-labelledby="steps-title">
      <div className="shell">
        <div className="section-head section-head--center reveal">
          <h2 id="steps-title">{t("home.steps.title")}</h2>
          <p>{t("home.steps.subtitle")}</p>
        </div>
        <ol className="steps">
          {items.map(({ title, text }, i) => (
            <li key={title} className="steps__item reveal">
              <span className="steps__num">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HomeFaq() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true });
  return (
    <section className="section" id="faq" aria-labelledby="home-faq-title">
      <div className="shell shell--narrow">
        <div className="section-head section-head--center reveal">
          <h2 id="home-faq-title">{t("home.faq.title")}</h2>
        </div>
        <div className="faq reveal">
          {HOME_FAQ.map((id) => (
            <details key={id} className="faq__item">
              <summary>
                <h3>{items[id].title}</h3>
                <Plus size={20} weight="bold" aria-hidden="true" />
              </summary>
              <div className="faq__answer">
                <p>{items[id].answer}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="faq-more">
          <Link to="/faq/">
            {t("home.faq.more")}
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}

function Guides() {
  const { t } = useTranslation();
  return (
    <section className="section home-guides" id="guides" aria-labelledby="home-guides-title">
      <div className="shell">
        <div className="section-head section-head--center reveal">
          <h2 id="home-guides-title">{t("guides.title")}</h2>
          <p>{t("guides.subtitle")}</p>
        </div>
        <GuideList headingLevel="h3" />
      </div>
    </section>
  );
}

function Closing() {
  const { t } = useTranslation();
  return (
    <section className="section closing">
      <div className="shell">
        <div className="closing__card reveal">
          <img
            src={`${import.meta.env.BASE_URL}app-icon.webp`}
            width="72"
            height="72"
            alt=""
            loading="lazy"
            className="closing__icon"
          />
          <h2>{t("home.closing.title")}</h2>
          <p>{t("home.closing.text")}</p>
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
