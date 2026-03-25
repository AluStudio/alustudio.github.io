import { useEffect } from "react";
import "../assets/scss/all.scss";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Privacy from "../components/Privacy";
import Languages from "../components/Languages";
import Download from "../components/Download";
import Footer from "../components/Footer";
import "../assets/scss/footer.scss";

function HomePage() {
  // Scroll to hash target after render (covers cross-page anchor nav)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <HeroBanner />
          <Features />
          <Stats />
          <Privacy />
          <Languages />
          <Download />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
