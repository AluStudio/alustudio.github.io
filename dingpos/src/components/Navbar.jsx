import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { Collapse } from "bootstrap";
import i18n, { supportedLanguages } from "../i18n.js";
import "../assets/scss/navbar.scss";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const anchor = (hash) => (isHome ? `#${hash}` : `${base}/#${hash}`);

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

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const currentLang = i18n.resolvedLanguage || i18n.language;

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
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="DingPOS"
            className="navbar-logo"
          />
        </Link>

        <button
          className="navbar-toggler order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <i className="bi bi-list"></i>
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
              <a className="nav-link text-center" href={anchor("pricing")} onClick={collapseNav}>
                {t("nav.pricing")}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/support" onClick={collapseNav}>
                {t("nav.support")}
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
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2 ms-3 order-2 order-lg-3">
          <select
            value={currentLang}
            onChange={handleChangeLang}
            className="lang-select"
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
