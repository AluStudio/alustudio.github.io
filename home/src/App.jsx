import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./i18n";
import "bootstrap-icons/font/bootstrap-icons.css";

const base = import.meta.env.BASE_URL;

const apps = [
  {
    id: "sotto",
    name: "Sotto",
    icon: `${base}sotto-icon.png`,
    color: "#7c8cf8",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/sotto-for-the-people-you-love/id6763928854",
        icon: "bi-apple",
      },
    ],
  },
  {
    id: "pikgeon",
    name: "Pikgeon",
    icon: `${base}pikgeon-icon.png`,
    color: "#4aba7a",
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
    color: "#e8a44a",
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
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
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
      >
        <i className="bi bi-globe2"></i>
        <span>{current?.label ?? "Language"}</span>
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

function AppCard({ app }) {
  const { t } = useTranslation();

  return (
    <article className="app-card" data-app-id={app.id} style={{ "--accent": app.color }}>
      <div className="app-card__header">
        <img
          src={app.icon}
          alt={app.name}
          className="app-card__icon"
          width="64"
          height="64"
          loading="lazy"
        />
        <div className="app-card__info">
          <h2 className="app-card__name">{app.name}</h2>
          <p className="app-card__tagline">{t(`${app.id}.tagline`)}</p>
        </div>
      </div>
      <p className="app-card__desc">{t(`${app.id}.desc`)}</p>
      <div className="app-card__actions">
        {app.stores.map((store) => (
          <a
            key={store.platform}
            href={store.url}
            className="store-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`bi ${store.icon}`}></i>
            <span>{store.label}</span>
          </a>
        ))}
      </div>
    </article>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Language picker */}
        <LanguagePicker />

        {/* Profile */}
        <header className="profile">
          <img
            src={`${base}avatar.jpeg`}
            alt="Alu Studio"
            className="profile__avatar"
            width="96"
            height="96"
          />
          <h1 className="profile__name">Alu Studio</h1>
          <p className="profile__bio">{t("profile.bio")}</p>
          <a href="mailto:alustudio14@gmail.com" className="profile__contact">
            <i className="bi bi-envelope"></i>
            <span>alustudio14@gmail.com</span>
          </a>
        </header>

        {/* Apps */}
        <section className="apps" aria-label="Our Apps">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Alu Studio. {t("footer.rights")}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
