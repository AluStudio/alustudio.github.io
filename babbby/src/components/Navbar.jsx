import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { supportedLanguages, localizedUrl, currentLanguage } from "../i18n.js";
import "../assets/scss/navbar.scss";

/** Closes on Escape or a press outside `ref`, returning focus to `toggleRef`. */
function useDismiss(open, setOpen, ref, toggleRef) {
  useEffect(() => {
    if (!open) return;
    const handlePointer = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    const handleKey = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, setOpen, ref, toggleRef]);
}

function LanguagePicker() {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggleRef = useRef(null);
  useDismiss(open, setOpen, ref, toggleRef);

  const current = supportedLanguages.find((lang) => lang.code === currentLanguage);

  // Another language is another URL (and document); a plain click also
  // carries the query and hash over.
  const handleChange = (event, code) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!location.search && !location.hash) return;
    event.preventDefault();
    window.location.assign(localizedUrl(code, location.pathname, location.search, location.hash));
  };

  return (
    <div className="lang ms-3 order-2 order-lg-3" ref={ref}>
      <button
        ref={toggleRef}
        type="button"
        className="lang__toggle"
        aria-label={`${t("nav.language")}: ${current.label}`}
        aria-expanded={open}
        aria-controls="lang-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <i className="bi bi-globe2" aria-hidden="true"></i>
        <span className="lang__current">{current.label}</span>
        <i className="bi bi-chevron-down lang__caret" aria-hidden="true"></i>
      </button>
      {/* Always rendered: each language is a real <a href> crawlers follow,
          so the closed menu is hidden, never unmounted. The href is the bare
          page URL, which the prerender and every visitor render alike. */}
      <ul id="lang-menu" className="lang__menu" hidden={!open}>
        {supportedLanguages.map((lang) => (
          <li key={lang.code}>
            <a
              className="lang__item"
              href={localizedUrl(lang.code, location.pathname)}
              hrefLang={lang.hreflang}
              lang={lang.hreflang}
              aria-current={lang.code === currentLanguage ? "page" : undefined}
              onClick={(event) => handleChange(event, lang.code)}
            >
              {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Navbar() {
  const { t } = useTranslation();

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
            <li className="nav-item">
              <Link className="nav-link text-center" to="/guides/">
                {t("nav.guides")}
              </Link>
            </li>
          </ul>
        </div>

        <LanguagePicker />
      </div>
    </nav>
  );
}

export default Navbar;
