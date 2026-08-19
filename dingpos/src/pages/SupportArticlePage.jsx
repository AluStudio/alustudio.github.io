import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./support.scss";
import Navbar from "../components/Navbar";
import TransitionLink from "../components/TransitionLink";
import Footer from "../components/Footer";
import FaqBlocks from "../components/FaqBlocks";
import ContactCard from "../components/ContactCard";
import { getFaq } from "../data/faq";

function SupportArticlePage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language;
  const { categories, articles } = getFaq(lang);

  const article = articles.find((a) => a.slug === slug);
  const category = article && categories.find((c) => c.key === article.category);
  const related = article
    ? article.related
        .map((relatedSlug) => articles.find((a) => a.slug === relatedSlug))
        .filter(Boolean)
    : [];

  useEffect(() => {
    if (article) document.title = `${article.question} — DingPOS`;
    return () => {
      document.title = "DingPOS";
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/support" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <article className="faq-article">
            <nav className="faq-breadcrumb" aria-label="breadcrumb">
              <TransitionLink to="/support">
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
                {t("support.back")}
              </TransitionLink>
              <span className="faq-breadcrumb-sep">/</span>
              <span className="faq-breadcrumb-cat">
                <i className={`bi ${category.icon}`} aria-hidden="true"></i>
                {category.label}
              </span>
            </nav>

            <h1>{article.question}</h1>

            <div className="faq-content">
              <FaqBlocks blocks={article.content} />
            </div>

            {related.length > 0 && (
              <aside className="faq-related">
                <h2>
                  <i className="bi bi-link-45deg" aria-hidden="true"></i>
                  {t("support.related_title")}
                </h2>
                <ul>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <TransitionLink to={`/support/${r.slug}`}>
                        {r.question}
                        <i className="bi bi-chevron-right" aria-hidden="true"></i>
                      </TransitionLink>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <ContactCard />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SupportArticlePage;
