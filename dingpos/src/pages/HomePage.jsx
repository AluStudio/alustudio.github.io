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

  const features = [
    { icon: "bi-wifi-off",         key: "offline" },
    { icon: "bi-rocket-takeoff",   key: "setup" },
    { icon: "bi-basket3",          key: "cashier" },
    { icon: "bi-box-seam",         key: "inventory" },
    { icon: "bi-tags",             key: "promotion" },
    { icon: "bi-cloud-check",      key: "sync" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <img
            src={`${import.meta.env.BASE_URL}app-icon.png`}
            alt="DingPOS"
            className="hero-icon"
          />
          <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
          <h1 className="hero-title">DingPOS</h1>
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
      <section className="features-section" id="features">
        <div className="container">
          <h2 className="features-title">{t("features.title")}</h2>
          <p className="features-subtitle">{t("features.subtitle")}</p>
          <div className="row g-4">
            {features.map((f) => (
              <div className="col-md-6 col-lg-4" key={f.key}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h3>{t(`features.${f.key}.title`)}</h3>
                  <p>{t(`features.${f.key}.desc`)}</p>
                </div>
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
