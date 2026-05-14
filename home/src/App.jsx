import "bootstrap-icons/font/bootstrap-icons.css";

const base = import.meta.env.BASE_URL;

const apps = [
  {
    id: "pikgeon",
    name: "Pikgeon",
    tagline: "Keep Your Postcard Memories Organized",
    description:
      "Smart OCR recognition to track your Pikmin Bloom mailing journey. Fully local processing to protect your privacy.",
    icon: `${base}pikgeon-icon.png`,
    color: "#4aba7a",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/ca/app/pikgeon/id6759579587",
        icon: "bi-apple",
      },
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/apps/internaltest/4701026660821795019",
        icon: "bi-google-play",
        badge: "Beta",
      },
    ],
    supportUrl: "/pikgeon/",
  },
  {
    id: "babbby",
    name: "Babbby",
    tagline: "Daily Activity Ideas for Ages 0–6",
    description:
      "Track milestones, build routines, and make every day count with 340+ curated activities.",
    icon: `${base}babbby-icon.png`,
    color: "#e8a44a",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/babbby/id6744145981",
        icon: "bi-apple",
      },
    ],
    supportUrl: "/babbby/",
  },
  {
    id: "sotto",
    name: "Sotto",
    tagline: "Remember the Details That Matter",
    description:
      "Heights, preferences, the things only you would know — kept safe on your phone for the people you care about.",
    icon: `${base}sotto-icon.png`,
    color: "#7c8cf8",
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/tw/app/sotto-for-the-people-you-love/id6763928854",
        icon: "bi-apple",
      },
    ],
    supportUrl: "/sotto/",
  },
];

function AppCard({ app }) {
  return (
    <article className="app-card" style={{ "--accent": app.color }}>
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
          <p className="app-card__tagline">{app.tagline}</p>
        </div>
      </div>
      <p className="app-card__desc">{app.description}</p>
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
            {store.badge && <span className="store-badge">{store.badge}</span>}
          </a>
        ))}
        <a href={app.supportUrl} className="support-link">
          <i className="bi bi-question-circle"></i>
          <span>Support</span>
        </a>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="page">
      {/* Ambient glow */}
      <div className="ambient-glow" aria-hidden="true" />

      <div className="container">
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
          <p className="profile__bio">
            Indie app studio — tools for everyday life
          </p>
          <a
            href="mailto:alustudio14@gmail.com"
            className="profile__contact"
          >
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
          <p>© {new Date().getFullYear()} Alu Studio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
