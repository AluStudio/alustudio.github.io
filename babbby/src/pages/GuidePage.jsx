import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CaretRight } from "@phosphor-icons/react";
import "../assets/scss/pages.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GuideBlocks from "../components/GuideBlocks";
import AppStoreButton from "../components/AppStoreButton";
import { getGuides } from "../data/guides";

function GuidePage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const guides = getGuides();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <Navigate to="/guides/" replace />;
  }

  const related = guide.related.map((s) => guides.find((g) => g.slug === s)).filter(Boolean);

  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <article className="shell shell--narrow article">
          <nav className="breadcrumb" aria-label={t("guides.breadcrumb")}>
            <Link to="/guides/">
              <ArrowLeft size={16} weight="bold" aria-hidden="true" />
              {t("guides.back")}
            </Link>
          </nav>

          <header className="page-head">
            <h1>{guide.title}</h1>
          </header>

          <div className="prose">
            <GuideBlocks blocks={guide.content} />
          </div>

          <aside className="article-cta">
            <h2>{t("guides.cta_title")}</h2>
            <p>{t("guides.cta_text")}</p>
            <AppStoreButton />
          </aside>

          {related.length > 0 && (
            <aside className="related">
              <h2>{t("guides.related_title")}</h2>
              <ul className="link-list">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/guides/${r.slug}/`}>
                      {r.title}
                      <CaretRight size={16} weight="bold" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

export default GuidePage;
