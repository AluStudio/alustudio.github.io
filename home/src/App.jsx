import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AppleLogo,
  ArrowDown,
  ArrowUpRight,
  CaretDown,
  EnvelopeSimple,
  Globe,
  GooglePlayLogo,
} from "@phosphor-icons/react";
import { supportedLanguages } from "./i18n";
import { apps, appUrl, CONTACT_EMAIL, sceneLanguage } from "./apps";
import Scene from "./scenes";

const base = import.meta.env.BASE_URL;
const sections = ["apps", "contact"];
const storeIcons = { ios: AppleLogo, android: GooglePlayLogo };

// Highlights the nav link of the section that crosses the middle of the viewport.
function useActiveSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    const hero = document.getElementById("top");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return active;
}

function LanguagePicker() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handlePointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => {
      if (e.key !== "Escape") return;
      if (ref.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
      setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const current = supportedLanguages.find((l) => l.code === i18n.resolvedLanguage);

  return (
    <div className="lang" ref={ref}>
      <button
        ref={toggleRef}
        type="button"
        className="lang__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("nav.language")}
        aria-expanded={open}
      >
        <Globe size={16} weight="bold" />
        <span className="lang__current">{current?.label ?? "Language"}</span>
        <CaretDown size={12} weight="bold" className="lang__caret" />
      </button>
      {open && (
        <ul className="lang__menu">
          {supportedLanguages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                className="lang__item"
                aria-current={lang.code === i18n.resolvedLanguage || undefined}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  toggleRef.current?.focus();
                  setOpen(false);
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", handleKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const links = sections.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      className="nav__link"
      aria-current={active === id ? "location" : undefined}
      onClick={() => setOpen(false)}
    >
      {t(`nav.${id}`)}
    </a>
  ));

  return (
    <>
      <header className="nav" data-open={open || undefined}>
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={`${base}avatar.jpeg`} alt="" width="32" height="32" />
          <span>Alu Studio</span>
        </a>
        <nav className="nav__links" aria-label={t("nav.label")}>
          {links}
        </nav>
        <div className="nav__end">
          <LanguagePicker />
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={t(open ? "nav.menu_close" : "nav.menu_open")}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="menu" className="menu" data-open={open || undefined} inert={!open}>
        <nav className="menu__links" aria-label={t("nav.label")}>
          {links.map((link, i) => (
            <span key={link.key} className="menu__item" style={{ "--i": i }}>
              {link}
            </span>
          ))}
          <span className="menu__item" style={{ "--i": sections.length }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="menu__mail">
              {CONTACT_EMAIL}
            </a>
          </span>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">{t("hero.eyebrow")}</p>
      <h1 className="hero__title">
        <span className="hero__line">{t("hero.title_1")}</span>
        <span className="hero__sep">{t("hero.title_sep")}</span>
        <span className="hero__line">{t("hero.title_2")}</span>
      </h1>
      <p className="hero__sub">{t("hero.sub")}</p>
      <a href="#apps" className="button button--primary hero__cta">
        {t("hero.cta")}
        <ArrowDown size={16} weight="bold" />
      </a>
      <div className="hero__proof">
        <span className="hero__icons" aria-hidden="true">
          {apps.map((app) => (
            <img key={app.id} src={app.icon} alt="" width="32" height="32" data-app-id={app.id} />
          ))}
        </span>
        <span>{t("hero.proof")}</span>
      </div>
    </section>
  );
}

function AppCard({ app }) {
  const { t, i18n } = useTranslation();
  const lng = sceneLanguage(app, i18n.resolvedLanguage);
  return (
    <article className={`app-card app-card--${app.id} reveal-card`}>
      <div className="app-card__visual scene" lang={lng} aria-hidden="true" data-nosnippet>
        <Scene app={app.id} lng={lng} />
      </div>
      <div className="app-card__body">
        <div className="app-card__head">
          <img src={app.icon} alt="" className="app-card__icon" width="48" height="48" loading="lazy" data-app-id={app.id} />
          <div>
            <h3 className="app-card__name">
              <a href={appUrl(app, "", i18n.resolvedLanguage)} className="app-card__link">
                {app.name}
              </a>
              <ArrowUpRight size={16} weight="bold" className="app-card__arrow" aria-hidden="true" />
            </h3>
            <p className="app-card__tagline">{t(`${app.id}.tagline`)}</p>
          </div>
        </div>
        <p className="app-card__desc">{t(`${app.id}.desc`)}</p>
        <div className="app-card__actions">
          {app.stores.map((store) => {
            const Icon = storeIcons[store.platform];
            return (
              <a key={store.platform} href={store.url} className="button button--store" target="_blank" rel="noopener noreferrer">
                <Icon size={16} weight="fill" />
                {store.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section">
      <div className="contact reveal">
        <h2 className="contact__title">{t("contact.heading")}</h2>
        <p className="contact__sub">{t("contact.sub")}</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="button button--light">
          <EnvelopeSimple size={16} weight="bold" />
          {t("contact.cta")}
        </a>
        <p className="contact__mail">{CONTACT_EMAIL}</p>
      </div>
    </section>
  );
}

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={`${base}avatar.jpeg`} alt="" width="32" height="32" />
        <div>
          <p className="footer__name">Alu Studio</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} Alu Studio. {t("footer.rights")}
          </p>
        </div>
      </div>
      <div className="footer__cols">
        <div>
          <p className="footer__label">{t("footer.apps")}</p>
          <ul>
            {apps.map((app) => (
              <li key={app.id}>
                <a href={appUrl(app, "", i18n.resolvedLanguage)}>{app.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer__label">{t("footer.privacy")}</p>
          <ul>
            {apps.map((app) => (
              <li key={app.id}>
                <a href={appUrl(app, "privacy/", i18n.resolvedLanguage)} aria-label={t("footer.privacy_of", { name: app.name })}>
                  {app.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#main" className="skip">
        {t("nav.skip")}
      </a>
      <Nav />
      <main id="main" className="shell">
        <Hero />
        <section id="apps" className="section">
          <div className="section__head reveal">
            <h2 className="section__title">{t("apps.heading")}</h2>
            <p className="section__sub">{t("apps.sub")}</p>
          </div>
          <div className="bento">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <div className="shell">
        <Footer />
      </div>
    </>
  );
}

export default App;
