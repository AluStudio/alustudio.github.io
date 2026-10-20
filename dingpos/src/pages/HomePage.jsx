import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/home.scss";
import "../assets/scss/footer.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppStoreButton from "../components/AppStoreButton";
import { Price } from "../components/Price";
import { PLANS } from "../data/plans";

const STARTING_PRICE = PLANS[0].price;

// The three screenshot-backed sections, in page order. `cashier` is absent on
// purpose: its screenshot is the hero shot, so its copy runs as a full-width
// band directly beneath it rather than as another side-by-side story.
const STORIES = [
  { key: "promotion", shot: "promotions", id: "promotions" },
  { key: "reports", shot: "dashboard", id: "reports" },
  { key: "orders", shot: "orders", id: "orders" },
];

// Pixel size of each full-size public/shot-<name>.webp; every shot also ships
// a shot-<name>-1080w.webp for phones. Both come from scripts/build-screenshots.sh.
const SHOT_SIZES = {
  cashier: [2240, 1471],
  promotions: [1720, 1129],
  dashboard: [1720, 1129],
  orders: [1720, 1129],
};
const PHONE_SHOT_WIDTH = 1080;

// Rendered image width, mirroring home.scss: the .device frame's 0.7rem padding
// inside the hero's 1.5rem gutters (capped by .hero-shot's 1120px), or inside
// the 7fr column of .story-inner (one column below 992px).
const HERO_SHOT_SIZES = "(min-width: 1168px) 1098px, calc(100vw - 4.4rem)";
const STORY_SHOT_SIZES =
  "(min-width: 1200px) 612px, (min-width: 992px) calc(58.33vw - 5.5rem), calc(100vw - 4.4rem)";

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

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <img
              src={`${base}logo.webp`}
              alt="DingPOS"
              className="hero-logo"
              // Intrinsic size, not the rendered size — the browser reserves space
              // from this ratio, and CSS sets the width. Declaring the display
              // width with a guessed height shifts the hero when the logo decodes.
              width="600"
              height="266"
            />
            <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
            <h1 className="hero-title">{t("hero.title")}</h1>
            <p className="hero-desc">{t("hero.description")}</p>
            <AppStoreButton className="btn-store btn-store--lg">{t("hero.download")}</AppStoreButton>
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
            <Device shot="cashier" sizes={HERO_SHOT_SIZES} alt={t("hero.shot_alt")} priority />
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
                <Device shot={shot} sizes={STORY_SHOT_SIZES} alt={t(`stories.${key}.shot_alt`)} />
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
              <h2>{t("home_pricing.title")}</h2>
              <p className="pricing-price">
                {t("home_pricing.price_before")}
                <Price value={(c) => STARTING_PRICE[c].monthly} />
                {t("home_pricing.price_after")}
              </p>
              <p className="pricing-sub">{t("home_pricing.sub")}</p>
              <div className="pricing-actions">
                <AppStoreButton className="btn-store btn-store--lg">
                  {t("home_pricing.cta")}
                </AppStoreButton>
                <Link to="/pricing/" className="btn-plan">
                  {t("home_pricing.compare")}
                </Link>
              </div>
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
function Device({ shot, sizes, alt, priority = false }) {
  const base = import.meta.env.BASE_URL;
  const [width, height] = SHOT_SIZES[shot];
  return (
    <figure className="device">
      <img
        src={`${base}shot-${shot}.webp`}
        srcSet={`${base}shot-${shot}-${PHONE_SHOT_WIDTH}w.webp ${PHONE_SHOT_WIDTH}w, ${base}shot-${shot}.webp ${width}w`}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </figure>
  );
}

export default HomePage;
