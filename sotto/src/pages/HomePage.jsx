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
    { icon: "bi-person-lines-fill", key: "profiles" },
    { icon: "bi-rulers",            key: "measurements" },
    { icon: "bi-palette2",          key: "themes" },
    { icon: "bi-shield-lock",       key: "privacy" },
    { icon: "bi-journal-text",      key: "notes" },
    { icon: "bi-search",            key: "search" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <img
            src={`${import.meta.env.BASE_URL}app-icon.png`}
            alt="Sotto"
            className="hero-icon"
          />
          <h1 className="hero-title">Sotto</h1>
          <p className="hero-tagline">{t("hero.tagline")}</p>
          <hr className="hero-divider" />
          <p className="hero-desc">{t("hero.description")}</p>
          <a
            href="https://apps.apple.com/app/sotto"
            className="hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-apple"></i>
            {t("hero.download")}
          </a>
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

      <Footer />
    </>
  );
}

export default HomePage;
