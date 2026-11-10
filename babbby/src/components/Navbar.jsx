import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CaretDown, Globe } from "@phosphor-icons/react";
import { supportedLanguages, localizedUrl, currentLanguage } from "../i18n.js";
import AppStoreButton from "./AppStoreButton";
import Brand from "./Brand";
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
    <div className="lang" ref={ref}>
      <button
        ref={toggleRef}
        type="button"
        className="lang__toggle"
        aria-label={`${t("nav.language")}: ${current.label}`}
        aria-expanded={open}
        aria-controls="lang-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <Globe size={16} weight="bold" aria-hidden="true" />
        <span className="lang__current">{current.label}</span>
        <CaretDown size={12} weight="bold" className="lang__caret" aria-hidden="true" />
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
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    // From $bp-md (navbar.scss) the menu and its toggle are hidden, so a menu
    // left open by rotating or widening the window would keep the page locked
    // with no way to close it.
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleWiden = (event) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    desktop.addEventListener("change", handleWiden);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", handleKey);
      desktop.removeEventListener("change", handleWiden);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleHome = () => {
    close();
    if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { to: "/guides/", label: t("nav.guides") },
    { to: "/faq/", label: t("nav.faq") },
  ];

  const menuLinks = [
    { to: "/", label: t("nav.home"), end: true },
    ...links,
    { to: "/privacy/", label: t("nav.privacy") },
    { to: "/terms/", label: t("nav.terms") },
  ];

  return (
    <>
      <header className="nav">
        <Link to="/" className="nav__brand" onClick={handleHome}>
          <Brand />
        </Link>
        <nav className="nav__links" aria-label="Babbby">
          {/* An in-page anchor on home, a link back to it elsewhere. */}
          {isHome ? (
            <a href="#features" className="nav__link">
              {t("nav.features")}
            </a>
          ) : (
            <Link to="/#features" className="nav__link">
              {t("nav.features")}
            </Link>
          )}
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className="nav__link">
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__end">
          <LanguagePicker />
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={t("nav.menu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="menu" className="menu" data-open={open || undefined} inert={!open}>
        <nav className="menu__links" aria-label="Babbby">
          {menuLinks.map(({ to, label, end }, i) => (
            <span key={to} className="menu__item" style={{ "--i": i }}>
              <NavLink to={to} end={end} className="menu__link" onClick={to === "/" ? handleHome : close}>
                {label}
              </NavLink>
            </span>
          ))}
          <span className="menu__item" style={{ "--i": menuLinks.length }}>
            <AppStoreButton />
          </span>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
