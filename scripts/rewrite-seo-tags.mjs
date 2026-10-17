/**
 * Shared by each sub-app's `scripts/copy-spa-pages.js`. When a route's
 * index.html is copied from the app root, its <link rel="canonical"> and
 * og:url must point at that route's own URL, not the app root — otherwise
 * search engines see every route (privacy, terms, faq...) claiming the app
 * homepage as canonical and treat them as duplicate content.
 *
 * Idempotent / order-independent: if the tag already exists it is replaced
 * in place; if it doesn't exist yet it is inserted before `</head>`. This
 * means the copy scripts work correctly whether or not the app's own
 * index.html already has canonical/og:url tags (see
 * docs/specs/seo-aeo.md §HTML 與 URL).
 */

function upsertTag(html, matchRe, tag) {
  // Replacer as a function, not a string: `$&`, `$'` etc. in the replacement
  // are substitution patterns for String.replace, and page titles are author
  // content that may legitimately contain `$`.
  if (matchRe.test(html)) {
    return html.replace(matchRe, () => tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

/** Escape a string for use inside a double-quoted HTML attribute. */
function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Escape a string for use as HTML text content. */
function escapeText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * @param {string} html - full index.html contents of the copied route page
 * @param {string} url - the route's own canonical URL, e.g. "https://alu-studio.com/pikgeon/privacy/"
 * @returns {string} html with canonical + og:url set to `url`
 */
export function setSelfCanonical(html, url) {
  html = upsertTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = upsertTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  return html;
}

/**
 * Give a copied route page its own title / description. Without this every
 * copy inherits the app root's <title> and description, so a sitemap full of
 * self-canonical routes still presents identical titles and snippets to search
 * engines and social cards — the exact duplicate-content signal
 * `setSelfCanonical` exists to avoid.
 *
 * @param {string} html - full index.html contents of the copied route page
 * @param {{ title?: string, description?: string }} meta - route-specific meta
 * @returns {string} html with title/og:title (and description/og:description) set
 */
export function setPageMeta(html, { title, description } = {}) {
  if (title) {
    html = upsertTag(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`);
    html = upsertTag(
      html,
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`,
    );
  }
  if (description) {
    html = upsertTag(
      html,
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeAttr(description)}" />`,
    );
    html = upsertTag(
      html,
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeAttr(description)}" />`,
    );
  }
  return html;
}

/**
 * Append a JSON-LD block to <head>. Structured data must ship in the initial
 * HTML (crawlers do not trust client-injected schema). `<` is escaped so
 * author text such as "</script>" cannot end the block early.
 */
export function addJsonLd(html, data) {
  const json = JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
  return html.replace("</head>", () => `    <script type="application/ld+json">\n${json}\n    </script>\n  </head>`);
}

/**
 * schema.org BreadcrumbList for an ordered trail of `{ name, url }`, root first.
 */
export function breadcrumbList(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, url }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: url,
    })),
  };
}

/**
 * Set the `lang` attribute on <html>, adding it when absent. `dir` ("rtl" for
 * Arabic) is written only when given, so pages that never pass it keep their
 * markup unchanged.
 */
export function setHtmlLang(html, lang, dir) {
  return html.replace(/<html\b([^>]*)>/, (_, attrs) => {
    let rest = attrs.replace(/\s+lang="[^"]*"/, "");
    if (dir) rest = rest.replace(/\s+dir="[^"]*"/, "");
    const dirAttr = dir ? ` dir="${escapeAttr(dir)}"` : "";
    return `<html lang="${escapeAttr(lang)}"${dirAttr}${rest}>`;
  });
}

/**
 * Declare a page's language versions: og:locale (+ og:locale:alternate) and
 * one `<link rel="alternate" hreflang>` per version. Google ignores hreflang
 * unless every version lists the full set, itself included, so callers pass
 * the same `versions` list to each page of the set. Any existing
 * alternates are replaced, keeping the rewrite idempotent.
 *
 * @param {string} html
 * @param {{ ogLocale: string, ogLocaleAlternates: string[], versions: { hreflang: string, href: string }[] }} opts
 */
export function setLanguageAlternates(html, { ogLocale, ogLocaleAlternates, versions }) {
  html = html
    .replace(/[ \t]*<meta property="og:locale:alternate"[^>]*>\n?/g, "")
    .replace(/[ \t]*<link rel="alternate" hreflang="[^"]*"[^>]*>\n?/g, "");
  html = upsertTag(html, /<meta property="og:locale"[^>]*>/, `<meta property="og:locale" content="${ogLocale}" />`);
  const tags = [
    ...ogLocaleAlternates.map((l) => `<meta property="og:locale:alternate" content="${l}" />`),
    ...versions.map(
      ({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${escapeAttr(href)}" />`,
    ),
  ];
  return html.replace("</head>", () => `${tags.map((t) => `    ${t}\n`).join("")}  </head>`);
}
