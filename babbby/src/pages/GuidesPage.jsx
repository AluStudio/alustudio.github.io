import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./guides.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getGuides } from "../data/guides";

function GuidesPage() {
  const { t } = useTranslation();
  const guides = getGuides();
  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="guides-page">
            <header className="guides-header">
              <h1>{t("guides.title")}</h1>
              <p className="guides-subtitle">{t("guides.subtitle")}</p>
            </header>
            <ul className="guide-list">
              {guides.map((guide) => (
                <li key={guide.slug} className="guide-card">
                  <h2 className="guide-card__title">
                    <Link to={`/guides/${guide.slug}/`}>{guide.title}</Link>
                  </h2>
                  <p className="guide-card__summary">{guide.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GuidesPage;
