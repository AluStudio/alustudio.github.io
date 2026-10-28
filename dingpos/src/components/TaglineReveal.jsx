import { currentLanguage } from "../i18n.js";

// Chinese and Japanese run without spaces: every character is a unit, with
// punctuation kept on the character before it.
const UNSPACED = /^(zh|ja)/;
const CLOSING = /^[、。，．！？：；」』）〉》]/u;

function units(text) {
  if (!UNSPACED.test(currentLanguage)) return text.split(/\s+/).filter(Boolean);
  const out = [];
  for (const char of text) {
    if (out.length && CLOSING.test(char)) out[out.length - 1] += char;
    else out.push(char);
  }
  return out;
}

/**
 * A large statement whose words turn from muted to full colour one at a time
 * as it scrolls through the viewport (landing-page-design B11). Driven by a CSS
 * scroll timeline, not JS: prerendered HTML ships every word, and browsers
 * without scroll timelines show the finished colour.
 */
function TaglineReveal({ text, className = "" }) {
  const words = units(text);
  const spaced = !UNSPACED.test(currentLanguage);
  return (
    <h2 className={`tagline ${className}`} style={{ "--n": words.length }}>
      {words.map((word, i) => (
        <span key={i}>
          {spaced && i > 0 && " "}
          <span className="tagline__word" style={{ "--i": i }}>
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
}

export default TaglineReveal;
