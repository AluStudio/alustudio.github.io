import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

  const handleChangeLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };
  const currentLang = i18n.language.startsWith("zh") ? "zh" : i18n.language;

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
          {/* 1. 最左側：Logo */}
          <a className="navbar-brand" href="#home">
            <img src="LOGO.PNG" alt="LOGO" width={"60px"} />
          </a>

          {/* 2. 手機版：漢堡按鈕 (在電腦版會自動隱藏) */}
          {/* 註：我們把它放在這裡，並在 CSS 或 Class 調整順序，讓它在手機版維持在最右邊 */}
          <button
            className="navbar-toggler order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* 3. 中間偏右：導覽選項 */}
          {/* 使用 ms-auto 讓此區塊與左側 Logo 之間產生最大間距 */}
          <div
            className="collapse navbar-collapse ms-auto order-4 order-lg-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-center" href="#features">
                  {t("nav.features")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="#stats">
                  {t("nav.statistics")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="#privacy">
                  {t("nav.privacy")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="#languages">
                  {t("nav.languages")}
                </a>
              </li>
            </ul>
            <div className="text-center">
              <a
                href="#download"
                className="btn btn-primary ms-lg-3 mt-2 mt-lg-0"
                style={{ color: "black", textDecoration: "none" }}
              >
                {t("nav.download")}
              </a>
            </div>
          </div>
          {/* 4. 最右側：語系與主題切換 */}
          {/* order-2 讓它在手機版排在漢堡左邊；order-lg-3 讓它在電腦版排在導覽列右邊 */}
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
