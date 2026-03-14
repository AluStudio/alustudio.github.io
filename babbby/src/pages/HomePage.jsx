import "../assets/scss/home.scss";
import "../assets/scss/footer.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <section className="hero-section">
            <div>
              <h1 className="hero-title">{t("landing.title")}</h1>
              <p className="hero-subtitle">{t("landing.subtitle")}</p>
              <div className="hero-links">
                <Link to="/privacy" className="hero-link hero-link--primary">
                  <i className="bi bi-shield-check"></i>
                  {t("landing.privacy_link")}
                </Link>
                <Link to="/terms" className="hero-link hero-link--outline">
                  <i className="bi bi-file-earmark-text"></i>
                  {t("landing.terms_link")}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
