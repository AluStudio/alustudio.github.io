import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CaretRight } from "@phosphor-icons/react";
import "./article.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransitionLink from "../components/TransitionLink";
import GuideBlocks from "../components/GuideBlocks";
import AppStoreButton from "../components/AppStoreButton";
import { getGuides } from "../data/guides";

function GuidePage() {
  const { slug } = useParams();
  const { ui, articles } = getGuides();
  const guide = articles.find((g) => g.slug === slug);

  useEffect(() => {
    if (!guide) return;
    const previousTitle = document.title;
    document.title = `${guide.title} — DingPOS`;
    return () => {
      document.title = previousTitle;
    };
  }, [guide]);

  if (!guide) return <Navigate to={ui ? "/guides/" : "/"} replace />;

  const related = guide.related.map((s) => articles.find((g) => g.slug === s)).filter(Boolean);

  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <article className="shell shell--narrow article">
          <nav className="crumbs" aria-label="breadcrumb">
            <TransitionLink to="/guides/">
              <ArrowLeft size={16} weight="bold" aria-hidden="true" />
              {ui.back}
            </TransitionLink>
          </nav>

          <p className="pill article__since">{ui.markets[guide.market]}</p>
          <h1>{guide.title}</h1>

          <div className="prose">
            <GuideBlocks blocks={guide.content} />
          </div>

          <p className="article__checked">{ui.checked.replace("{{date}}", guide.checked)}</p>

          {guide.sources.length > 0 && (
            <aside className="sources">
              <h2>{ui.sources_title}</h2>
              <ul>
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <aside className="article-cta">
            <h2>{ui.cta_title}</h2>
            <p>{ui.cta_text}</p>
            <AppStoreButton className="button button--light button--lg">{ui.cta_button}</AppStoreButton>
          </aside>

          {related.length > 0 && (
            <aside className="related">
              <h2>{ui.related_title}</h2>
              <ul className="link-list">
                {related.map((r) => (
                  <li key={r.slug}>
                    <TransitionLink to={`/guides/${r.slug}/`}>
                      {r.title}
                      <CaretRight size={14} weight="bold" aria-hidden="true" />
                    </TransitionLink>
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
