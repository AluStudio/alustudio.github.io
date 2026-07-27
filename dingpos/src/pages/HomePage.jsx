import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/scss/all.scss";
import "../assets/scss/hero.scss";
import "../assets/scss/footer.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const { t } = useTranslation();

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

  const groups = [
    { icon: "bi-rocket-takeoff",   key: "onboarding" },
    { icon: "bi-basket3",          key: "cashier" },
    { icon: "bi-box-seam",         key: "products" },
    { icon: "bi-boxes",            key: "inventory" },
    { icon: "bi-tags",             key: "promotion" },
    { icon: "bi-person-badge",     key: "loyalty" },
    { icon: "bi-graph-up-arrow",   key: "reports" },
    { icon: "bi-cloud-check",      key: "backup" },
  ];

  const items = (key) => {
    const value = t(`features.${key}.items`, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="DingPOS"
              className="hero-logo"
            />
          </h1>
          <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
          <p className="hero-tagline">{t("hero.tagline")}</p>
          <p className="hero-desc">{t("hero.description")}</p>
          {/* Pre-launch. At App Store launch, restore the real CTA:
              <a href="<store URL>" className="hero-cta">
                <i className="bi bi-apple"></i>{t("hero.download")}
              </a>
              and re-add the trial note (see git history for hero.note). */}
          <span className="hero-cta hero-cta--pending" aria-disabled="true">
            <i className="bi bi-apple"></i>
            {t("hero.coming_soon")}
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="capabilities" id="features">
        <div className="container">
          <h2 className="features-title">{t("features.title")}</h2>
          <p className="features-subtitle">{t("features.subtitle")}</p>
          <div className="cap-grid">
            {groups.map((g) => (
              <div className="cap-card" key={g.key}>
                <div className="cap-head">
                  <span className="cap-icon">
                    <i className={`bi ${g.icon}`}></i>
                  </span>
                  <h3>{t(`features.${g.key}.title`)}</h3>
                </div>
                <ul className="cap-list">
                  {items(g.key).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-strip" id="pricing">
        <div className="pricing-inner">
          <h2 className="pricing-title">{t("pricing.title")}</h2>
          <p className="pricing-price">{t("pricing.price")}</p>
          <p className="pricing-sub">{t("pricing.sub")}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
