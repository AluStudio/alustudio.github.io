import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/scss/all.scss";
import "../assets/scss/home.scss";
import "../assets/scss/footer.scss";
import "../pages/guides.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreButtons from "../components/StoreButtons";
import HeroPhone from "../components/HeroPhone";
import TaglineReveal from "../components/TaglineReveal";
import Reviews from "../components/Reviews";
import { RingVisual, PromptVisual, ThemeVisual } from "../components/FeatureVisuals";
import { GuideList } from "./GuidesPage";
import { RATING } from "../data/reviews";

// Bento order: the two cards with a visual lead, the three text cards share a
// row, and themes closes as a wide card.
const FEATURES = [
  { key: "measurements", icon: "bi-rulers", span: "half", Visual: RingVisual },
  { key: "prompts", icon: "bi-chat-heart", span: "half", Visual: PromptVisual },
  { key: "profiles", icon: "bi-person-lines-fill", span: "third" },
  { key: "notes", icon: "bi-journal-text", span: "third" },
  { key: "privacy", icon: "bi-shield-lock", span: "third" },
  { key: "themes", icon: "bi-palette2", span: "wide", Visual: ThemeVisual },
];

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

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <a className="hero__proof" href="#reviews">
                <span className="stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </span>
                <span>{t("hero.proof", { average: RATING.average, n: RATING.count })}</span>
              </a>
              {/* Brand and category line form one heading, so the h1 never reads
                  as the bare brand name that several unrelated products share. */}
              <h1 className="hero__heading">
                <span className="hero__title">Sotto</span>
                <span className="visually-hidden"> — </span>
                <span className="hero__tagline">{t("hero.tagline")}</span>
              </h1>
              <p className="hero__desc">{t("hero.description")}</p>
              <StoreButtons />
              <p className="hero__assurance">{t("hero.assurance")}</p>
            </div>
            <div className="hero__visual">
              <span className="hero__orbit" aria-hidden="true" />
              <HeroPhone />
            </div>
          </div>
        </section>

        <TaglineReveal />

        <section className="features" id="features" aria-labelledby="features-title">
          <div className="container">
            <header className="section-head reveal">
              <h2 className="section-title" id="features-title">
                {t("features.title")}
              </h2>
              <p className="section-subtitle">{t("features.subtitle")}</p>
            </header>
            <div className="bento">
              {FEATURES.map(({ key, icon, span, Visual }) => (
                <article key={key} className={`feature feature--${span} reveal-card`}>
                  <div className="feature__copy">
                    <span className="feature__icon">
                      <i className={`bi ${icon}`} aria-hidden="true"></i>
                    </span>
                    <h3 className="feature__title">{t(`features.${key}.title`)}</h3>
                    <p className="feature__desc">{t(`features.${key}.desc`)}</p>
                    {key === "prompts" && (
                      <p className="feature__credits">{t("features.prompts.credits")}</p>
                    )}
                  </div>
                  {Visual && <Visual />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <Reviews />

        <section className="home-guides" id="guides" aria-labelledby="guides-title">
          <div className="container">
            <header className="section-head reveal">
              <h2 className="section-title" id="guides-title">
                {t("guides.title")}
              </h2>
              <p className="section-subtitle">{t("guides.subtitle")}</p>
            </header>
            <GuideList headingLevel="h3" />
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="container closing__inner reveal">
            <img
              src={`${import.meta.env.BASE_URL}app-icon.webp`}
              width="88"
              height="88"
              alt=""
              loading="lazy"
              className="closing__icon"
            />
            <h2 className="section-title" id="closing-title">
              {t("closing.title")}
            </h2>
            <p className="closing__text">{t("closing.text")}</p>
            <StoreButtons className="hero-actions--center" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
