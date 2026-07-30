import "../assets/scss/home.scss";
import "../assets/scss/footer.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          {/* Hero */}
          <section className="hero-section">
            <div className="hero-left">
              <img
                src={`${base}app-icon.png`}
                alt="Babbby"
                className="hero-icon"
                width="96"
                height="96"
              />
              <h1 className="hero-title">{t("landing.title")}</h1>
              <p className="hero-subtitle">{t("landing.subtitle")}</p>
              <div className="hero-actions">
                <a
                  href="https://apps.apple.com/app/babbby-daily-baby-activities/id6760455078"
                  className="appstore-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-apple"></i>
                  <div className="badge-text">
                    <small>{t("landing.appstore_sub")}</small>
                    <strong>{t("landing.appstore_main")}</strong>
                  </div>
                </a>
              </div>
              <div className="hero-links">
                <Link to="/privacy" className="hero-link">
                  {t("landing.privacy_link")}
                </Link>
                <span className="hero-link-sep">•</span>
                <Link to="/terms" className="hero-link">
                  {t("landing.terms_link")}
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <div className="phone-frame">
                <img
                  src={`${base}screenshot-today.png`}
                  alt="Babbby Today view"
                  className="hero-screenshot"
                />
              </div>
            </div>
          </section>

          {/* Features */}
          <Features />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
