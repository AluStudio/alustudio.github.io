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

const formatPoint = ([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`;

// An irregular closed curve: a circle whose radius wobbles with a few low
// harmonics. Neighbouring rings use nearby phases, so the set reads like
// growth rings or contour lines rather than identical copies.
function ringPath(cx, cy, radius, phase) {
  const steps = 36;
  const points = Array.from({ length: steps }, (_, k) => {
    const t = (k / steps) * Math.PI * 2;
    const r =
      radius *
      (1 +
        0.06 * Math.sin(3 * t + phase) +
        0.035 * Math.sin(5 * t - phase * 1.7) +
        0.02 * Math.sin(2 * t + phase * 0.5));
    return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  });
  const midpoint = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let d = `M${formatPoint(midpoint(points[steps - 1], points[0]))}`;
  points.forEach((point, k) => {
    const next = points[(k + 1) % steps];
    d += `Q${formatPoint(point)} ${formatPoint(midpoint(point, next))}`;
  });
  return `${d}Z`;
}

const rings = Array.from({ length: 10 }, (_, i) =>
  ringPath(300 - i * 4, 300 + i * 3, 36 + i * 27, i * 0.32)
);

const strands = Array.from({ length: 8 }, (_, i) => {
  const y = 560 - i * 16;
  return `M-20 ${y}C180 ${y - 30 - i * 4} 300 ${y - 200 - i * 10} 620 ${y - 300 - i * 26}`;
});

// Abstract botanical backdrop: wash, paper grain, growth rings, flowing strands.
function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <svg className="backdrop__rings" viewBox="0 0 600 600" fill="none">
        {rings.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
      <svg className="backdrop__strands" viewBox="0 0 600 600" fill="none">
        {strands.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    </div>
  );
}

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
    <article className="app-card" data-app-id={app.id}>
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
        {app.website && (
          <a href={app.website} className="support-link app-card__website">
            <span>{t("common.website")}</span>
            <i className="bi bi-arrow-up-right"></i>
          </a>
        )}
      </div>
    </article>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <Backdrop />

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
          <span className="profile__rule" aria-hidden="true" />
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
