import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CaretRight, MagnifyingGlass, X } from "@phosphor-icons/react";
import "./support.scss";
import Navbar from "../components/Navbar";
import TransitionLink from "../components/TransitionLink";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import CategoryIcon from "../components/CategoryIcon";
import { getFaq } from "../data/faq";
import { VERIFIED_APP_VERSION } from "../data/faq/version";
import { tokenize, buildIndex, searchFaq, highlightParts } from "../utils/faqSearch";

function Highlight({ text, tokens }) {
  return highlightParts(text, tokens).map((part, i) =>
    part.hit ? <mark key={i}>{part.text}</mark> : <span key={i}>{part.text}</span>,
  );
}

function SupportPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { categories, articles } = getFaq();

  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${t("support.doc_title")} — DingPOS`;
    return () => {
      document.title = previousTitle;
    };
  }, [t]);

  // Debounce keystrokes so ranking runs on settled input.
  // Keyboard selection resets whenever the effective query changes.
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(rawQuery);
      setActiveIndex(-1);
    }, 120);
    return () => clearTimeout(timer);
  }, [rawQuery]);

  // "/" focuses search from anywhere on the page (Notion/Linear convention).
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const categoryLabelByKey = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.key, c.label])),
    [categories],
  );
  const index = useMemo(
    () => buildIndex(articles, categoryLabelByKey),
    [articles, categoryLabelByKey],
  );

  const tokens = useMemo(() => tokenize(query), [query]);
  const results = useMemo(() => searchFaq(index, tokens), [index, tokens]);
  const searching = tokens.length > 0;

  const clearSearch = () => {
    setRawQuery("");
    setQuery("");
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Escape") {
      if (rawQuery) {
        clearSearch();
      } else {
        inputRef.current?.blur();
      }
      return;
    }
    if (!searching || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[activeIndex === -1 ? 0 : activeIndex];
      if (target) navigate(`/support/${target.article.slug}/`);
    }
  };

  return (
    <>
      <Navbar />
      <main id="main" className="page support-page">
        <header className="shell page-head page-head--center">
          <h1>{t("support.title")}</h1>
          <p>{t("support.subtitle")}</p>
          <div className="search" role="search">
            <MagnifyingGlass size={20} weight="bold" className="search__icon" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              placeholder={t("support.search_placeholder")}
              aria-label={t("support.search_placeholder")}
              value={rawQuery}
              onChange={(e) => setRawQuery(e.target.value)}
              onKeyDown={handleInputKeyDown}
            />
            {rawQuery && (
              <button type="button" className="search__clear" aria-label={t("support.clear")} onClick={clearSearch}>
                <X size={16} weight="bold" aria-hidden="true" />
              </button>
            )}
          </div>
          <p className="search__hint">
            {t("support.search_hint_keywords")}
            <span className="search__shortcut">
              {" · "}
              {t("support.search_hint_shortcut_pre")}
              <kbd>/</kbd>
              {t("support.search_hint_shortcut_post")}
            </span>
          </p>
        </header>

        <div className="shell support-body">
          {searching ? (
            <section className="results">
              {results.length > 0 ? (
                <>
                  {/* Only the count is a live region: announcing the whole
                      result list on every keystroke is unusable with a screen
                      reader once there are dozens of articles. */}
                  <p className="results__count" aria-live="polite">
                    {t("support.results_count", { num: results.length })}
                  </p>
                  <ul className="results__list">
                    {results.map(({ article, snippet }, i) => (
                      <li key={article.slug}>
                        <TransitionLink
                          to={`/support/${article.slug}/`}
                          className={`result${i === activeIndex ? " is-active" : ""}`}
                          onMouseEnter={() => setActiveIndex(i)}
                        >
                          <span className="pill">{categoryLabelByKey[article.category]}</span>
                          <h3>
                            <Highlight text={article.question} tokens={tokens} />
                          </h3>
                          <p>
                            <Highlight text={snippet} tokens={tokens} />
                          </p>
                        </TransitionLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="empty" aria-live="polite">
                  <span className="empty__icon" aria-hidden="true">
                    <MagnifyingGlass size={24} weight="duotone" />
                  </span>
                  <h3>{t("support.no_results_title")}</h3>
                  <p>{t("support.no_results_desc")}</p>
                </div>
              )}
            </section>
          ) : (
            <section className="browse">
              {["faq", "guide", "roadmap"].map((groupKey) => {
                const groupCats = categories.filter((c) => c.group === groupKey);
                if (groupCats.length === 0) return null;
                const desc = t(`support.group_${groupKey}_desc`, { defaultValue: "" });
                const single = groupCats.length === 1;
                return (
                  <div className="browse__group" key={groupKey}>
                    <div className="browse__head">
                      <h2>{t(`support.group_${groupKey}`)}</h2>
                      {desc && <p>{desc}</p>}
                    </div>
                    <div className={`browse__grid${single ? " browse__grid--single" : ""}`}>
                      {groupCats.map((cat) => {
                        const catArticles = articles.filter((a) => a.category === cat.key);
                        return (
                          <div className="category" key={cat.key}>
                            {/* `standalone` categories carry the group title
                                themselves, so a card head would just repeat it */}
                            {!cat.standalone && (
                              <div className="category__head">
                                <span className="category__icon">
                                  <CategoryIcon name={cat.icon} />
                                </span>
                                <h3>{cat.label}</h3>
                              </div>
                            )}
                            <ul className="link-list">
                              {catArticles.map((a) => (
                                <li key={a.slug}>
                                  <TransitionLink to={`/support/${a.slug}/`}>
                                    {a.question}
                                    <CaretRight size={14} weight="bold" aria-hidden="true" />
                                  </TransitionLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </section>
          )}

          <p className="support-version">{t("support.verified_version", { version: VERIFIED_APP_VERSION })}</p>

          <ContactCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SupportPage;
