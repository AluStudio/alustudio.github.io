import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { supportedLanguages, localizedUrl, currentLanguage } from "../i18n.js";
import "../assets/scss/navbar.scss";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  // Another language is another URL (and document). The href is the bare page
  // URL, which the prerender and every visitor render alike; a plain click
  // also carries the query and hash over.
  const handleChangeLang = (event, code) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!location.search && !location.hash) return;
    event.preventDefault();
    window.location.assign(localizedUrl(code, location.pathname, location.search, location.hash));
  };

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
              <Link className="nav-link text-center" to="/privacy/">
                {t("nav.privacy")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/terms/">
                {t("nav.terms")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/faq/">
                {t("nav.faq")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Language switcher: real links crawlers follow, in registry order. */}
        <div className="lang-switch ms-3 order-2 order-lg-3" role="group" aria-label={t("nav.language")}>
          {supportedLanguages.map((lang) => (
            <a
              key={lang.code}
              className="lang-switch__item"
              href={localizedUrl(lang.code, location.pathname)}
              hrefLang={lang.hreflang}
              lang={lang.hreflang}
              aria-current={lang.code === currentLanguage ? "page" : undefined}
              onClick={(event) => handleChangeLang(event, lang.code)}
            >
              {lang.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
