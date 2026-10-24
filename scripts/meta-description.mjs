/**
 * Build a meta description from a page's opening text, in any language.
 *
 * The opening of a FAQ answer is often a lead-in to a list ("Discounts work at
 * two levels:"), and its first paragraph is often far longer than a snippet.
 * Taking that paragraph alone ships a half sentence with no answer, and a hard
 * cut ships a sentence chopped mid-word. Instead, whole text units (a
 * paragraph, one list item) are packed in reading order while they fit; only
 * a unit that cannot fit is cut, at the latest sentence, clause or word
 * boundary. Rules: docs/specs/seo-aeo.md §HTML 與 URL.
 */

/** Bing flags descriptions over 160 characters; Sotto guide summaries share the cap. */
export const DESCRIPTION_MAX = 160;

const ELLIPSIS = "…";

// A full-width terminator ends a sentence on its own; an ASCII one only before
// whitespace, so "v3.2" and "1.5x" are not sentence ends.
const SENTENCE_END = /[.!?](?=\s|$)|[。！？؟।॥။។]/gu;
const CLAUSE_END = /[,;:](?=\s)|[，、；：]/gu;
const WHITESPACE = /\s/gu;

// Chinese and Japanese run sentences together without spaces; every other
// shipped script, Korean included, separates them with one.
const NO_SPACE_SCRIPT = /[\u3000-\u30FF\u3400-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]$/u;
const LEAD_IN = /[:：]$/u;
// What a cut must not leave dangling before the ellipsis: "tap Item →…".
const DANGLING = /[\s→—–,;:，、；：-]+$/u;

const length = (text) => [...text].length;
const normalize = (text) => (text ?? "").replace(/\s+/gu, " ").trim();
const join = (head, tail) => (NO_SPACE_SCRIPT.test(head) ? head + tail : `${head} ${tail}`);
const elide = (chars) => chars.join("").replace(DANGLING, "") + ELLIPSIS;

/** Index just past the last `pattern` match that ends inside `chars`, if it ends past `floor`. */
function lastBoundary(chars, pattern, floor) {
  const text = chars.join("");
  let best = -1;
  for (const match of text.matchAll(pattern)) {
    const end = length(text.slice(0, match.index)) + length(match[0]);
    if (end > floor) best = end;
  }
  return best;
}

/** Cut `text` to at most `max` characters at the best available boundary. */
export function truncate(text, max) {
  const chars = [...text];
  if (chars.length <= max) return text;
  // Never cut so early that the snippet loses most of its room ("Yes.").
  const floor = Math.floor(max / 2);

  const sentence = lastBoundary(chars.slice(0, max), SENTENCE_END, floor);
  if (sentence > 0) return chars.slice(0, sentence).join("").trimEnd();

  const room = chars.slice(0, max - 1);
  const clause = lastBoundary(room, CLAUSE_END, floor);
  if (clause > 0) return elide(chars.slice(0, clause - 1));

  const space = lastBoundary(room, WHITESPACE, floor);
  if (space > 0) return elide(chars.slice(0, space - 1));

  return elide(room);
}

/**
 * Pack text units into one description of at most `max` characters. Packing
 * stops at the first unit that does not fit, so the description never skips
 * ahead; a lead-in ending in a colon is the exception and takes as much of the
 * next unit as fits, so it never ships without its answer.
 */
export function fitDescription(units, max = DESCRIPTION_MAX) {
  const [first, ...rest] = units.map(normalize).filter(Boolean);
  if (!first) return "";
  let description = truncate(first, max);
  if (description !== first) return description;

  for (const unit of rest) {
    const next = join(description, unit);
    if (length(next) <= max) {
      description = next;
      continue;
    }
    if (LEAD_IN.test(description)) {
      const room = max - length(join(description, ""));
      description = join(description, truncate(unit, room));
    }
    break;
  }
  return description;
}

/** The text units of a FAQ answer, in reading order: paragraphs, notes, and each list or step item. */
export function contentUnits(content) {
  return content.flatMap((block) => block.items ?? [block.text]);
}
