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
          <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
          <h1 className="hero-title">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="DingPOS"
              className="hero-logo"
            />
          </h1>
          <p className="hero-tagline">{t("hero.tagline")}</p>
          <p className="hero-desc">{t("hero.description")}</p>
          {/* TODO: replace '#' with real App Store URL after launch */}
          <a
            href="#"
            className="hero-cta"
            onClick={(e) => e.preventDefault()}
          >
            <i className="bi bi-apple"></i>
            {t("hero.download")}
          </a>
          <p className="hero-note">{t("hero.note")}</p>
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
