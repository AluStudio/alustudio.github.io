import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./support.scss";
import Navbar from "../components/Navbar";
import TransitionLink from "../components/TransitionLink";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import { getFaq } from "../data/faq";
import { tokenize, buildIndex, searchFaq, highlightParts } from "../utils/faqSearch";

function Highlight({ text, tokens }) {
  return highlightParts(text, tokens).map((part, i) =>
    part.hit ? <mark key={i}>{part.text}</mark> : <span key={i}>{part.text}</span>,
  );
}

function SupportPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.resolvedLanguage || i18n.language;
  const { categories, articles } = getFaq(lang);

  const [rawQuery, setRawQuery] = useState("");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `${t("support.doc_title")} — DingPOS`;
    return () => {
      document.title = "DingPOS";
    };
  }, [t, lang]);

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
      if (target) navigate(`/support/${target.article.slug}`);
    }
  };

  return (
    <>
      <Navbar />
      <main className="main-content">
        {/* Search hero */}
        <section className="support-hero">
          <div className="support-hero-inner">
            <h1>{t("support.title")}</h1>
            <p className="support-subtitle">{t("support.subtitle")}</p>
            <div className="support-search" role="search">
              <i className="bi bi-search" aria-hidden="true"></i>
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
                <button
                  type="button"
                  className="support-search-clear"
                  aria-label={t("support.clear")}
                  onClick={clearSearch}
                >
                  <i className="bi bi-x-lg" aria-hidden="true"></i>
                </button>
              )}
            </div>
            <p className="support-search-hint">
              {t("support.search_hint_keywords")}
              <span className="support-search-hint-shortcut">
                {" · "}
                {t("support.search_hint_shortcut_pre")}
                <kbd>/</kbd>
                {t("support.search_hint_shortcut_post")}
              </span>
            </p>
          </div>
        </section>

        <div className="container support-body">
          {searching ? (
            /* Search results */
            <section className="support-results">
              {results.length > 0 ? (
                <>
                  {/* Only the count is a live region: announcing the whole
                      result list on every keystroke is unusable with a screen
                      reader once there are dozens of articles. */}
                  <p className="support-results-count" aria-live="polite">
                    {t("support.results_count", { num: results.length })}
                  </p>
                  <ul className="support-result-list">
                    {results.map(({ article, snippet }, i) => (
                      <li key={article.slug}>
                        <TransitionLink
                          to={`/support/${article.slug}`}
                          className={`support-result-card${i === activeIndex ? " is-active" : ""}`}
                          onMouseEnter={() => setActiveIndex(i)}
                        >
                          <span className="support-result-category">
                            {categoryLabelByKey[article.category]}
                          </span>
                          <h3>
                            <Highlight text={article.question} tokens={tokens} />
                          </h3>
                          <p className="support-result-snippet">
                            <Highlight text={snippet} tokens={tokens} />
                          </p>
                        </TransitionLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="support-no-results" aria-live="polite">
                  <i className="bi bi-search-heart" aria-hidden="true"></i>
                  <h3>{t("support.no_results_title")}</h3>
                  <p>{t("support.no_results_desc")}</p>
                </div>
              )}
            </section>
          ) : (
            /* Browse by group → category */
            <section className="support-browse">
              {["faq", "guide", "roadmap"].map((groupKey) => {
                const groupCats = categories.filter((c) => c.group === groupKey);
                if (groupCats.length === 0) return null;
                const desc = t(`support.group_${groupKey}_desc`, { defaultValue: "" });
                const groupTitle = t(`support.group_${groupKey}`);
                return (
                  <div className="support-group" key={groupKey}>
                    <h2 className="support-group-title">{groupTitle}</h2>
                    {desc && <p className="support-group-desc">{desc}</p>}
                    <div
                      className={`support-cat-grid${groupCats.length === 1 ? " support-cat-grid-single" : ""}`}
                    >
                      {groupCats.map((cat) => {
                        const catArticles = articles.filter((a) => a.category === cat.key);
                        return (
                          <div className="support-cat-card" key={cat.key}>
                            {/* `standalone` categories carry the group title
                                themselves, so a card head would just repeat it */}
                            {!cat.standalone && (
                              <div className="support-cat-head">
                                <span className="support-cat-icon">
                                  <i className={`bi ${cat.icon}`} aria-hidden="true"></i>
                                </span>
                                <h3>{cat.label}</h3>
                              </div>
                            )}
                            <ul className="support-cat-list">
                              {catArticles.map((a) => (
                                <li key={a.slug}>
                                  <TransitionLink to={`/support/${a.slug}`}>
                                    {a.question}
                                    <i className="bi bi-chevron-right" aria-hidden="true"></i>
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

          <ContactCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SupportPage;
