import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
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
      <main className="main-content">
        <div className="container">
          <div className="guides-page">
            <header className="guides-header">
              <h1>{ui.title}</h1>
              <p className="guides-subtitle">{ui.subtitle}</p>
            </header>
            <ul className="guide-list">
              {articles.map((guide) => (
                <li key={guide.slug} className="guide-card">
                  <p className="guide-market">{ui.markets[guide.market]}</p>
                  <h2 className="guide-card-title">
                    <TransitionLink to={`/guides/${guide.slug}/`}>{guide.title}</TransitionLink>
                  </h2>
                  <p className="guide-card-summary">{guide.summary}</p>
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
