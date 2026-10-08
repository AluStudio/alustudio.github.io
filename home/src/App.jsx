import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./i18n";
import "bootstrap-icons/font/bootstrap-icons.css";

const base = import.meta.env.BASE_URL;

const apps = [
  {
    id: "dingpos",
    name: "DingPOS",
    icon: `${base}dingpos-icon.png`,
    website: "/dingpos/",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/id6788988943",
        icon: "bi-apple",
      },
    ],
  },
  {
    id: "sotto",
    name: "Sotto",
    icon: `${base}sotto-icon.png`,
    website: "/sotto/",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/sotto-for-the-people-you-love/id6763928854",
        icon: "bi-apple",
      },
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.alustudio.sotto",
        icon: "bi-google-play",
      },
    ],
  },
  {
    id: "pikgeon",
    name: "Pikgeon",
    icon: `${base}pikgeon-icon.png`,
    website: "/pikgeon/",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/pikgeon/id6759579587",
        icon: "bi-apple",
      },
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.alu.pikgeon",
        icon: "bi-google-play",
      },
    ],
  },
  {
    id: "babbby",
    name: "Babbby",
    icon: `${base}babbby-icon.png`,
    website: "/babbby/",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/babbby-daily-baby-activities/id6760455078",
        icon: "bi-apple",
      },
    ],
  },
];

function LanguagePicker() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handlePointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const current = supportedLanguages.find(
    (l) => l.code === i18n.resolvedLanguage
  );

  return (
    <div className="lang-picker" ref={ref}>
      <button
        className="lang-picker__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
      >
        <i className="bi bi-globe2"></i>
        <span>{current?.label ?? "Language"}</span>
        <i className="bi bi-chevron-down lang-picker__chevron"></i>
      </button>
      {open && (
        <ul className="lang-picker__menu">
          {supportedLanguages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`lang-picker__item${
                  lang.code === i18n.resolvedLanguage ? " active" : ""
                }`}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
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

const formatIndex = (n) => String(n).padStart(2, "0");

// Three long hairline arcs sweeping in from the top-right corner; a linear
// mask fades each one out so no line has a hard end. Every path must end past
// the gradient's 0.88 stop (t = (0.5·(1 − x/1000) + y/600) / 1.25), or its tip
// shows as a cut line.
const arcs = [
  "M1000 40C800 90 620 230 520 520",
  "M1000 120C840 170 700 290 640 560",
  "M880 0C790 120 740 330 760 600",
];

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <svg className="backdrop__arcs" viewBox="0 0 1000 600" fill="none">
        <defs>
          <linearGradient id="arc-fade" x1="1" y1="0" x2="0.5" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.25" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.6" stopColor="#fff" stopOpacity="0.45" />
            <stop offset="0.88" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="arc-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="600">
            <rect width="1000" height="600" fill="url(#arc-fade)" />
          </mask>
        </defs>
        <g mask="url(#arc-mask)">
          {arcs.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function AppEntry({ app, index }) {
  const { t } = useTranslation();

  return (
    <article className="entry" data-app-id={app.id}>
      <span className="entry__index" aria-hidden="true">
        {formatIndex(index + 1)}
      </span>
      <div className="entry__identity">
        <img
          src={app.icon}
          alt={app.name}
          className="entry__icon"
          width="60"
          height="60"
          loading="lazy"
        />
        <div className="entry__title">
          <h2 className="entry__name">{app.name}</h2>
          <p className="entry__tagline">{t(`${app.id}.tagline`)}</p>
        </div>
      </div>
      <div className="entry__body">
        <p className="entry__desc">{t(`${app.id}.desc`)}</p>
        <div className="entry__actions">
          {app.stores.map((store) => (
            <a
              key={store.platform}
              href={store.url}
              className="store-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bi ${store.icon}`}></i>
              <span>{store.label}</span>
            </a>
          ))}
          <a href={app.website} className="site-link">
            <span>{t("common.website")}</span>
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <Backdrop />

      <div className="shell">
        <header className="masthead">
          <img
            src={`${base}avatar.jpeg`}
            alt=""
            className="masthead__mark"
            width="40"
            height="40"
          />
          <LanguagePicker />
        </header>

        <main>
          <section className="intro">
            <h1 className="intro__title">Alu Studio</h1>
            <div className="intro__aside">
              <p className="intro__bio">{t("profile.bio")}</p>
              <a href="mailto:alustudio14@gmail.com" className="intro__contact">
                <span>alustudio14@gmail.com</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </section>

          <section className="catalog" aria-labelledby="catalog-heading">
            <div className="catalog__head">
              <p id="catalog-heading" className="catalog__label">
                {t("apps.heading")}
              </p>
              <span className="catalog__count" aria-hidden="true">
                {formatIndex(apps.length)}
              </span>
            </div>
            {apps.map((app, index) => (
              <AppEntry key={app.id} app={app} index={index} />
            ))}
          </section>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Alu Studio. {t("footer.rights")}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
