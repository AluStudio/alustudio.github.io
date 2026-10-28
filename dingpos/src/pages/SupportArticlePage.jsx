import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router-dom";
import { ArrowLeft, BookOpenText, CaretRight, LinkSimple } from "@phosphor-icons/react";
import "./article.scss";
import Navbar from "../components/Navbar";
import TransitionLink from "../components/TransitionLink";
import Footer from "../components/Footer";
import FaqBlocks from "../components/FaqBlocks";
import ContactCard from "../components/ContactCard";
import CategoryIcon from "../components/CategoryIcon";
import { getFaq } from "../data/faq";
import { getGuides, getGuidesLinkingTo } from "../data/guides";

function SupportArticlePage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { categories, articles } = getFaq();

  const article = articles.find((a) => a.slug === slug);
  const category = article && categories.find((c) => c.key === article.category);
  const related = article
    ? article.related
        .map((relatedSlug) => articles.find((a) => a.slug === relatedSlug))
        .filter(Boolean)
    : [];
  // Guides that cite this article: the article explains the feature, the
  // guide the market's fees behind it, so the link runs both ways.
  const guidesUi = getGuides().ui;
  const citingGuides = article ? getGuidesLinkingTo(`/support/${article.slug}/`) : [];

  useEffect(() => {
    const previousTitle = document.title;
    if (article) document.title = `${article.question} — DingPOS`;
    return () => {
      document.title = previousTitle;
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/support/" replace />;
  }

  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <article className="shell shell--narrow article">
          <nav className="crumbs" aria-label="breadcrumb">
            <TransitionLink to="/support/">
              <ArrowLeft size={16} weight="bold" aria-hidden="true" />
              {t("support.back")}
            </TransitionLink>
            <span className="crumbs__sep" aria-hidden="true">/</span>
            <span className="crumbs__here">
              <CategoryIcon name={category.icon} size={16} />
              {category.label}
            </span>
          </nav>

          {article.since && <p className="pill article__since">{t("support.since", { version: article.since })}</p>}
          <h1>{article.question}</h1>

          <div className="prose">
            <FaqBlocks blocks={article.content} />
          </div>

          {related.length > 0 && (
            <aside className="related">
              <h2>
                <LinkSimple size={18} weight="bold" aria-hidden="true" />
                {t("support.related_title")}
              </h2>
              <ul className="link-list">
                {related.map((r) => (
                  <li key={r.slug}>
                    <TransitionLink to={`/support/${r.slug}/`}>
                      {r.question}
                      <CaretRight size={14} weight="bold" aria-hidden="true" />
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {citingGuides.length > 0 && (
            <aside className="related">
              <h2>
                <BookOpenText size={18} weight="bold" aria-hidden="true" />
                {guidesUi.related_title}
              </h2>
              <ul className="link-list">
                {citingGuides.map((guide) => (
                  <li key={guide.slug}>
                    <TransitionLink to={`/guides/${guide.slug}/`}>
                      {guide.title}
                      <CaretRight size={14} weight="bold" aria-hidden="true" />
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <ContactCard />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default SupportArticlePage;
