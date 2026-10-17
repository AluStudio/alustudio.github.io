import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "../assets/scss/hero.scss";
import "./guides.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GuideBlocks from "../components/GuideBlocks";
import StoreButtons from "../components/StoreButtons";
import { getGuides } from "../data/guides";

function GuidePage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const guides = getGuides();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const related = guide.related.map((s) => guides.find((g) => g.slug === s)).filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <article className="guide-article">
            <nav className="guide-breadcrumb" aria-label={t("guides.breadcrumb")}>
              <Link to="/guides">
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
                {t("guides.back")}
              </Link>
            </nav>

            <h1>{guide.title}</h1>

            <div className="guide-content">
              <GuideBlocks blocks={guide.content} />
            </div>

            <aside className="guide-cta">
              <h2>{t("guides.cta_title")}</h2>
              <p>{t("guides.cta_text")}</p>
              <StoreButtons />
            </aside>

            {related.length > 0 && (
              <aside className="guide-related">
                <h2>{t("guides.related_title")}</h2>
                <ul>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to={`/guides/${r.slug}`}>
                        {r.title}
                        <i className="bi bi-chevron-right" aria-hidden="true"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GuidePage;
