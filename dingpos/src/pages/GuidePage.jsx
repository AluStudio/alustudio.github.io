import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/home.scss";
import "../assets/scss/footer.scss";
import "./guides.scss";
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
      <main className="main-content">
        <div className="container">
          <article className="guide-article">
            <nav className="guide-breadcrumb" aria-label="breadcrumb">
              <TransitionLink to="/guides/">
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
                {ui.back}
              </TransitionLink>
            </nav>

            <p className="guide-market">{ui.markets[guide.market]}</p>
            <h1>{guide.title}</h1>

            <div className="guide-content">
              <GuideBlocks blocks={guide.content} />
            </div>

            <p className="guide-checked">{ui.checked.replace("{{date}}", guide.checked)}</p>

            {guide.sources.length > 0 && (
              <aside className="guide-sources">
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

            <aside className="guide-cta">
              <h2>{ui.cta_title}</h2>
              <p>{ui.cta_text}</p>
              <AppStoreButton>{ui.cta_button}</AppStoreButton>
            </aside>

            {related.length > 0 && (
              <aside className="guide-related">
                <h2>{ui.related_title}</h2>
                <ul>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <TransitionLink to={`/guides/${r.slug}/`}>
                        {r.title}
                        <i className="bi bi-chevron-right" aria-hidden="true"></i>
                      </TransitionLink>
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
