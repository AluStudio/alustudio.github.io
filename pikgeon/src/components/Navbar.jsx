import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import i18n, { supportedLanguages } from "../i18n.js";
import "../assets/scss/navbar.scss";

const THEME_KEY = "theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") {
    return saved;
  }

  return "light";
}

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  // On subpages, anchor links should navigate to home first
  const anchor = (hash) => (isHome ? `#${hash}` : `/#${hash}`);

  const handleChangeLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };
  const currentLang = i18n.resolvedLanguage || i18n.language;

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        const height = navbar.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`,
        );
      }
    };

    updateNavbarHeight();

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={`${import.meta.env.BASE_URL}LOGO.PNG`} alt="LOGO" width={"60px"} />
          </Link>

          {/* Mobile toggler */}
          <button
            className="navbar-toggler order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Nav links */}
          <div
            className="collapse navbar-collapse ms-auto order-4 order-lg-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-center" href={anchor("features")}>
                  {t("nav.features")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href={anchor("stats")}>
                  {t("nav.statistics")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href={anchor("privacy")}>
                  {t("nav.privacy")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href={anchor("languages")}>
                  {t("nav.languages")}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" to="/faq">
                  {t("nav.faq")}
                </Link>
              </li>
            </ul>
            <div className="text-center">
              <a
                href={anchor("download")}
                className="btn btn-primary ms-lg-3 mt-2 mt-lg-0"
                style={{ color: "black", textDecoration: "none" }}
              >
                {t("nav.download")}
              </a>
            </div>
          </div>

          {/* Language & theme switcher */}
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
            <button
              type="button"
              className="btn btn-toggle-theme d-inline-flex align-items-center"
              onClick={handleToggleTheme}
            >
              {isDark ? (
                <i className="bi bi-sun-fill" />
              ) : (
                <i className="bi bi-moon-stars-fill" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
