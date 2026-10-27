import { useTranslation } from "react-i18next";

// Chinese and Japanese have no spaces between words, so each character is a
// step there; every other language steps word by word. The split is plain
// string work, so prerender and the visitor's browser produce the same spans.
const NO_SPACE_SCRIPT = /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/;

function tokenize(text) {
  return NO_SPACE_SCRIPT.test(text) ? Array.from(text) : text.split(/(\s+)/).filter(Boolean);
}

/**
 * The store promise in large type. Each word starts muted and comes up to full
 * color in reading order as the section scrolls through the viewport — a CSS
 * scroll timeline, so the served HTML is never hidden and browsers without
 * scroll timelines show it fully colored.
 */
function TaglineReveal() {
  const { t } = useTranslation();
  const tokens = tokenize(t("tagline.text"));
  const words = tokens.filter((token) => !/^\s+$/.test(token)).length;
  let index = 0;

  return (
    <section className="tagline" aria-labelledby="tagline-text">
      <div className="container">
        <p className="tagline__text" id="tagline-text" style={{ "--n": words }}>
          {tokens.map((token, i) =>
            /^\s+$/.test(token) ? (
              token
            ) : (
              <span key={i} className="tagline__word" style={{ "--i": index++ }}>
                {token}
              </span>
            ),
          )}
        </p>
      </div>
    </section>
  );
}

export default TaglineReveal;
