import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CaretDown, Globe } from "@phosphor-icons/react";
import { supportedLanguages, localizedUrl, currentLanguage } from "../i18n.js";
import { getGuides, guideLanguages } from "../data/guides";
import AppStoreButton from "./AppStoreButton";
import Brand from "./Brand";
import "../assets/scss/navbar.scss";

/**
 * Where the language switcher sends `code` from `pathname`. Guides are written
 * per market, not translated, so a guide page has no counterpart in another
 * language: that language's guides index, or its home when it has none.
 */
function switchPath(code, pathname) {
  if (code === currentLanguage || !pathname.startsWith("/guides")) return pathname;
  return guideLanguages.has(code) ? "/guides/" : "/";
}

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
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggleRef = useRef(null);
  useDismiss(open, setOpen, ref, toggleRef);

  const current = supportedLanguages.find((lang) => lang.code === currentLanguage);

  // A plain click carries the query and hash over to the other language.
  const handleChange = (event, code) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!location.search && !location.hash) return;
    // A different page in that language: its query and hash mean nothing there.
    if (switchPath(code, location.pathname) !== location.pathname) return;
    event.preventDefault();
    window.location.assign(localizedUrl(code, location.pathname, location.search, location.hash));
  };

  return (
    <div className="lang" ref={ref}>
      <button
        ref={toggleRef}
        type="button"
        className="lang__toggle"
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
              href={localizedUrl(lang.code, switchPath(lang.code, location.pathname))}
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
  const guidesUi = getGuides().ui;
  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", handleKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleHome = () => {
    close();
    if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { to: "/pricing/", label: t("nav.pricing") },
    { to: "/support/", label: t("nav.support") },
    ...(guidesUi ? [{ to: "/guides/", label: guidesUi.nav }] : []),
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
        <nav className="nav__links" aria-label="DingPOS">
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
        <nav className="menu__links" aria-label="DingPOS">
          {menuLinks.map(({ to, label, end }, i) => (
            <span key={to} className="menu__item" style={{ "--i": i }}>
              <NavLink to={to} end={end} className="menu__link" onClick={to === "/" ? handleHome : close}>
                {label}
              </NavLink>
            </span>
          ))}
          <span className="menu__item" style={{ "--i": menuLinks.length }}>
            <AppStoreButton className="button button--primary button--lg">{t("hero.download")}</AppStoreButton>
          </span>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
