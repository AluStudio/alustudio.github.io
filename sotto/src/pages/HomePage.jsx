import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/scss/all.scss";
import "../assets/scss/hero.scss";
import "../assets/scss/footer.scss";
import "../pages/guides.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreButtons from "../components/StoreButtons";
import { GuideList } from "./GuidesPage";

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
    { icon: "bi-chat-heart",        key: "prompts" },
    { icon: "bi-person-lines-fill", key: "profiles" },
    { icon: "bi-rulers",            key: "measurements" },
    { icon: "bi-palette2",          key: "themes" },
    { icon: "bi-shield-lock",       key: "privacy" },
    { icon: "bi-journal-text",      key: "notes" },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <img
              src={`${import.meta.env.BASE_URL}app-icon.webp`}
              width="120"
              height="120"
              alt=""
              className="hero-icon"
            />
            {/* Brand and category line form one heading, so the h1 never reads
                as the bare brand name that several unrelated products share. */}
            <h1 className="hero-heading">
              <span className="hero-title">Sotto</span>
              <span className="visually-hidden"> — </span>
              <span className="hero-tagline">{t("hero.tagline")}</span>
            </h1>
            <hr className="hero-divider" />
            <p className="hero-desc">{t("hero.description")}</p>
            <StoreButtons />
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
                      <i className={`bi ${f.icon}`} aria-hidden="true"></i>
                    </div>
                    <h3>{t(`features.${f.key}.title`)}</h3>
                    <p>{t(`features.${f.key}.desc`)}</p>
                    {f.key === "prompts" && (
                      <p className="feature-card-credits">
                        {t("features.prompts.credits")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-guides" id="guides">
          <div className="container">
            <h2 className="features-title">{t("guides.title")}</h2>
            <p className="features-subtitle">{t("guides.subtitle")}</p>
            <GuideList headingLevel="h3" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
