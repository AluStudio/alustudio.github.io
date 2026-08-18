import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/scss/all.scss";
import "../assets/scss/home.scss";
import "../assets/scss/footer.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const APP_STORE_URL = "https://apps.apple.com/app/id6788988943";

// The three screenshot-backed sections, in page order. `cashier` is absent on
// purpose: its screenshot is the hero shot, so its copy runs as a full-width
// band directly beneath it rather than as another side-by-side story.
const STORIES = [
  { key: "promotion", shot: "shot-promotions.webp", id: "promotions" },
  { key: "reports", shot: "shot-dashboard.webp", id: "reports" },
  { key: "orders", shot: "shot-orders.webp", id: "orders" },
];

const FEATURES = [
  { key: "onboarding", icon: "bi-rocket-takeoff" },
  { key: "products", icon: "bi-box-seam" },
  { key: "inventory", icon: "bi-boxes" },
  { key: "loyalty", icon: "bi-person-badge" },
];

function HomePage() {
  const { t } = useTranslation();
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      if (id) {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, []);

  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  const appStoreButton = (className, label) => (
    <a
      href={APP_STORE_URL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-apple" aria-hidden="true"></i>
      {label}
    </a>
  );

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <img
              src={`${base}logo.png`}
              alt="DingPOS"
              className="hero-logo"
              width="220"
              height="58"
            />
            <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
            <h1 className="hero-title">{t("hero.title")}</h1>
            <p className="hero-desc">{t("hero.description")}</p>
            {appStoreButton("btn-store btn-store--lg", t("hero.download"))}
            <p className="hero-note">{t("hero.note")}</p>
            <ul className="hero-proof">
              {list("proof.items").map((item) => (
                <li key={item}>
                  <i className="bi bi-check-lg" aria-hidden="true"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-shot">
            <Device src={`${base}shot-cashier.webp`} alt={t("hero.shot_alt")} priority />
          </div>
        </section>

        {/* Checkout — the hero shot above is this section's screenshot. */}
        <section className="checkout" id="checkout">
          <div className="container">
            <div className="checkout-head">
              <span className="eyebrow">{t("stories.cashier.eyebrow")}</span>
              <h2>{t("stories.cashier.title")}</h2>
              <p className="lead">{t("stories.cashier.lead")}</p>
            </div>
            <ul className="spec-list spec-list--split">
              {list("stories.cashier.items").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {STORIES.map(({ key, shot, id }, index) => (
          <section
            className={`story ${index % 2 === 1 ? "story--alt story--flip" : ""}`}
            id={id}
            key={key}
          >
            <div className="story-inner">
              <div className="story-copy">
                <span className="eyebrow">{t(`stories.${key}.eyebrow`)}</span>
                <h2>{t(`stories.${key}.title`)}</h2>
                <p className="lead">{t(`stories.${key}.lead`)}</p>
                <ul className="spec-list">
                  {list(`stories.${key}.items`).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="story-shot">
                <Device src={`${base}${shot}`} alt={t(`stories.${key}.shot_alt`)} />
              </div>
            </div>
          </section>
        ))}

        <section className="features" id="features">
          <div className="container">
            <h2 className="section-title">{t("features.title")}</h2>
            <p className="section-sub">{t("features.subtitle")}</p>
            <div className="feature-grid">
              {FEATURES.map(({ key, icon }) => (
                <article className="feature-card" key={key}>
                  <span className="feature-icon">
                    <i className={`bi ${icon}`} aria-hidden="true"></i>
                  </span>
                  <h3>{t(`features.${key}.title`)}</h3>
                  <ul className="spec-list">
                    {list(`features.${key}.items`).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="privacy-band" id="privacy-band">
          <div className="container">
            <div className="privacy-inner">
              <div className="privacy-copy">
                <span className="eyebrow">{t("privacy_band.eyebrow")}</span>
                <h2>{t("privacy_band.title")}</h2>
                <p className="lead">{t("privacy_band.lead")}</p>
              </div>
              <ul className="spec-list spec-list--split">
                {list("privacy_band.items").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="container">
            <div className="pricing-card">
              <h2>{t("pricing.title")}</h2>
              <p className="pricing-price">{t("pricing.price")}</p>
              <p className="pricing-sub">{t("pricing.sub")}</p>
              {appStoreButton("btn-store btn-store--lg", t("pricing.cta"))}
              <p className="hero-note">{t("hero.note")}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/**
 * An iPad frame drawn in CSS around a raw screen capture.
 *
 * The bezel is CSS rather than baked into the PNG so the assets stay pure
 * screen pixels — `scripts/build-screenshots.sh` can regenerate them from a
 * fresh capture without anyone having to redraw a frame.
 */
function Device({ src, alt, priority = false }) {
  return (
    <figure className="device">
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </figure>
  );
}

export default HomePage;
