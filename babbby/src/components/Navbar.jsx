import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n, { supportedLanguages } from "../i18n.js";
import "../assets/scss/navbar.scss";

function Navbar() {
  const { t } = useTranslation();

  const handleChangeLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language.startsWith("zh") ? "zh-Hant" : i18n.language;

  // Scroll detection for navbar background
  useEffect(() => {
    const navbar = document.querySelector(".navbar-scroll");
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track navbar height for content offset
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        const height = navbar.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "inherit" }}>
            Babbby
          </span>
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Nav links */}
        <div
          className="collapse navbar-collapse ms-auto order-4 order-lg-2"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-center" to="/faq">
                {t("nav.faq")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/privacy">
                {t("nav.privacy")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/terms">
                {t("nav.terms")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Language switcher */}
        <div className="d-flex align-items-center gap-2 ms-3 order-2 order-lg-3">
          <select
            value={currentLang}
            onChange={handleChangeLang}
            className="form-select form-select-sm"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
