import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { Collapse } from "bootstrap";
import { supportedLanguages, localizedUrl, currentLanguage } from "../i18n.js";
import "../assets/scss/navbar.scss";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  const collapseNav = () => {
    const el = document.getElementById("navbarSupportedContent");
    if (el && el.classList.contains("show")) {
      Collapse.getInstance(el)?.hide();
    }
  };

  const handleHome = () => {
    collapseNav();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Each language link is a real <a href> so crawlers can follow it; the href
  // is the bare page URL, which the prerender and every visitor render alike.
  // A plain click also carries the query and hash over to the other language.
  const handleChangeLang = (event, code) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!location.search && !location.hash) return;
    event.preventDefault();
    window.location.assign(localizedUrl(code, location.pathname, location.search, location.hash));
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar-scroll");
    if (!navbar) return;
    const onScroll = () => {
      navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navbar.offsetHeight}px`,
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-scroll fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleHome}>
          <img
            src={`${import.meta.env.BASE_URL}logo.webp`}
            alt="DingPOS"
            className="navbar-logo"
            width="600"
            height="266"
          />
        </Link>

        <button
          className="navbar-toggler order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label={t("nav.menu")}
        >
          <i className="bi bi-list" aria-hidden="true"></i>
        </button>

        <div
          className="collapse navbar-collapse ms-auto order-4 order-lg-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-center" to="/" onClick={handleHome}>
                {t("nav.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/pricing/" onClick={collapseNav}>
                {t("nav.pricing")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/support/" onClick={collapseNav}>
                {t("nav.support")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/privacy/" onClick={collapseNav}>
                {t("nav.privacy")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/terms/" onClick={collapseNav}>
                {t("nav.terms")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2 ms-3 order-2 order-lg-3">
          <div className="dropdown">
            <button
              type="button"
              className="lang-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-translate" aria-hidden="true"></i>
              {supportedLanguages.find((lang) => lang.code === currentLanguage).label}
            </button>
            <ul className="dropdown-menu dropdown-menu-end lang-menu">
              {supportedLanguages.map((lang) => (
                <li key={lang.code}>
                  <a
                    className={`dropdown-item${lang.code === currentLanguage ? " active" : ""}`}
                    href={localizedUrl(lang.code, location.pathname)}
                    hrefLang={lang.hreflang}
                    lang={lang.hreflang}
                    aria-current={lang.code === currentLanguage ? "page" : undefined}
                    onClick={(event) => handleChangeLang(event, lang.code)}
                  >
                    {lang.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
