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

  // Another language is another URL (and document), so switch by navigating.
  const handleChangeLang = (e) => {
    window.location.assign(
      localizedUrl(e.target.value, location.pathname, location.search, location.hash),
    );
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
        <Link className="navbar-brand" to="/">
          <img
            src={`${import.meta.env.BASE_URL}app-icon-sm.png`}
            alt=""
            width="40"
            height="40"
          />
          Sotto
        </Link>

        <button
          className="navbar-toggler order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label={t("nav.toggle")}
        >
          <i className="bi bi-list" aria-hidden="true"></i>
        </button>

        <div
          className="collapse navbar-collapse ms-auto order-4 order-lg-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {isHome ? (
                <a className="nav-link text-center" href="#features" onClick={collapseNav}>
                  {t("nav.features")}
                </a>
              ) : (
                <Link className="nav-link text-center" to="/#features" onClick={collapseNav}>
                  {t("nav.features")}
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/guides" onClick={collapseNav}>
                {t("nav.guides")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/privacy" onClick={collapseNav}>
                {t("nav.privacy")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/terms" onClick={collapseNav}>
                {t("nav.terms")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/faq" onClick={collapseNav}>
                {t("nav.faq")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2 ms-3 order-2 order-lg-3">
          <select
            value={currentLanguage}
            onChange={handleChangeLang}
            className="lang-select"
            aria-label={t("nav.language")}
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
