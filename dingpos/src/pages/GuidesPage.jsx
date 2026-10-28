import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import "./guides.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransitionLink from "../components/TransitionLink";
import { getGuides } from "../data/guides";

function GuidesPage() {
  const { ui, articles } = getGuides();

  useEffect(() => {
    if (!ui) return;
    const previousTitle = document.title;
    document.title = `${ui.title} — DingPOS`;
    return () => {
      document.title = previousTitle;
    };
  }, [ui]);

  // A language without a guides pack has no guides section.
  if (!ui) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <header className="shell page-head page-head--center">
          <h1>{ui.title}</h1>
          <p>{ui.subtitle}</p>
        </header>
        <div className="shell">
          <ul className="guide-grid">
            {articles.map((guide) => (
              <li key={guide.slug} className="guide-card reveal-card">
                <p className="pill">{ui.markets[guide.market]}</p>
                <h2 className="guide-card__title">
                  <TransitionLink to={`/guides/${guide.slug}/`}>{guide.title}</TransitionLink>
                </h2>
                <p className="guide-card__summary">{guide.summary}</p>
                <ArrowRight size={20} weight="bold" className="guide-card__arrow" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GuidesPage;
