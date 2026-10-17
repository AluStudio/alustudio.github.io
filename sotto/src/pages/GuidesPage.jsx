import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./guides.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getGuides } from "../data/guides";

/** Guide cards: a title link plus its summary. Shared by the index and the home page. */
export function GuideList({ headingLevel: Heading = "h2" }) {
  const guides = getGuides();
  return (
    <ul className="guide-list">
      {guides.map((guide) => (
        <li key={guide.slug} className="guide-card">
          <Heading className="guide-card__title">
            <Link to={`/guides/${guide.slug}`}>{guide.title}</Link>
          </Heading>
          <p className="guide-card__summary">{guide.summary}</p>
        </li>
      ))}
    </ul>
  );
}

function GuidesPage() {
  const { t } = useTranslation();
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
            <GuideList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GuidesPage;
