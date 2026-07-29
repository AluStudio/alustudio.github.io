// Client-side FAQ search: whitespace-separated keywords, AND semantics,
// field-weighted scoring (question > keywords > category > body), CJK-friendly
// substring matching (no word boundaries).

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Split a query into unique lowercase tokens (half- and full-width spaces). */
export function tokenize(query) {
  return [
    ...new Set(
      String(query || "")
        .toLowerCase()
        .split(/[\s\u3000]+/)
        .filter(Boolean),
    ),
  ];
}

/** Flatten article content blocks into plain searchable text. */
export function flattenContent(content) {
  return content
    .map((block) => {
      switch (block.type) {
        case "p":
        case "note":
          return block.text;
        case "list":
        case "steps":
          return block.items.join(" ");
        case "image":
        case "video":
        case "youtube":
          return [block.alt, block.caption].filter(Boolean).join(" ");
        default:
          return "";
      }
    })
    .join(" ");
}

/** Pre-compute lowercase haystacks once per language pack. */
export function buildIndex(articles, categoryLabelByKey) {
  return articles.map((article) => {
    const bodyRaw = flattenContent(article.content);
    return {
      article,
      question: article.question.toLowerCase(),
      keywords: article.keywords.join(" ").toLowerCase(),
      category: (categoryLabelByKey[article.category] || "").toLowerCase(),
      bodyRaw,
      body: bodyRaw.toLowerCase(),
    };
  });
}

const SNIPPET_RADIUS = 42;

function makeSnippet(entry, tokens) {
  let earliest = -1;
  for (const token of tokens) {
    const pos = entry.body.indexOf(token);
    if (pos !== -1 && (earliest === -1 || pos < earliest)) earliest = pos;
  }
  if (earliest === -1) return entry.bodyRaw.slice(0, SNIPPET_RADIUS * 2);
  const start = Math.max(0, earliest - SNIPPET_RADIUS);
  const end = Math.min(entry.bodyRaw.length, earliest + SNIPPET_RADIUS * 2);
  return (
    (start > 0 ? "…" : "") +
    entry.bodyRaw.slice(start, end).trim() +
    (end < entry.bodyRaw.length ? "…" : "")
  );
}

/**
 * Search the pre-built index. Every token must match at least one field (AND);
 * results are sorted by summed field-weight score.
 * Returns [{ article, score, snippet }].
 */
export function searchFaq(index, tokens) {
  if (!tokens.length) return [];
  const results = [];
  for (const entry of index) {
    let score = 0;
    let allMatched = true;
    for (const token of tokens) {
      let tokenScore = 0;
      if (entry.question.includes(token)) tokenScore += 5;
      if (entry.keywords.includes(token)) tokenScore += 3;
      if (entry.category.includes(token)) tokenScore += 2;
      if (entry.body.includes(token)) tokenScore += 1;
      if (tokenScore === 0) {
        allMatched = false;
        break;
      }
      score += tokenScore;
    }
    if (allMatched) {
      results.push({ article: entry.article, score, snippet: makeSnippet(entry, tokens) });
    }
  }
  return results.sort((a, b) => b.score - a.score);
}

/**
 * Split text into [{ text, hit }] parts for <mark> highlighting.
 * A part is a hit iff it equals one of the tokens (case-insensitive) —
 * guaranteed because the regex alternation is built from the tokens themselves.
 */
export function highlightParts(text, tokens) {
  if (!tokens.length) return [{ text, hit: false }];
  // Longest first: alternation matches the leftmost branch that fits, so an
  // unsorted list lets "備" shadow "備份" and highlight only half the word.
  const ordered = [...tokens].sort((a, b) => b.length - a.length);
  const re = new RegExp(`(${ordered.map(escapeRegExp).join("|")})`, "gi");
  return text
    .split(re)
    .filter((part) => part !== "")
    .map((part) => ({ text: part, hit: tokens.includes(part.toLowerCase()) }));
}
