/**
 * Shared traversal of the site's copy sources: UI string files (nested JSON)
 * and content packs (modules exporting `articles`, plus `categories` for
 * DingPOS's FAQ). Used by the zh-Hans generator and the translated-language
 * tooling, so both agree on which fields are copy and how an entry is named.
 *
 * Unit ids:
 *   ui:<dotted.path>                     one UI string
 *   <prefix>:<slug>:<field path>         one string inside an article
 *   <prefix>:category:<key>:<field path> one string inside a category
 */

/** Fields of a pack entry that hold copy; everything else (slug, related, since, icon, src…) is structure. */
export const PACK_TEXT_FIELDS = {
  dingpos: new Set(["label", "question", "keywords", "text", "items", "alt", "caption"]),
  sotto: new Set(["title", "summary", "text", "items", "head", "rows", "caption"]),
};

const PLACEHOLDER = /\{\{\s*[^}]+?\s*\}\}/g;

/** The `{{…}}` placeholders of `text`, sorted, as one comparable string. */
export const placeholders = (text) => (text.match(PLACEHOLDER) ?? []).sort().join(" ");

/** Map every string in `value`, passing its key path. Structure is preserved. */
export function mapStrings(value, path, fn) {
  if (typeof value === "string") return fn(value, path);
  if (Array.isArray(value)) return value.map((item, i) => mapStrings(item, [...path, i], fn));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, [...path, k], fn)]));
  }
  return value;
}

/** The innermost named field of a path: `content.2.items.0` → `items`. */
export const fieldOf = (path) => [...path].reverse().find((segment) => typeof segment === "string");

export const uiId = (path) => `ui:${path.join(".")}`;

/** `<prefix>:<slug>:<path>` for article strings, `<prefix>:category:<key>:<field>` for categories. */
export function packId(prefix, pack, path) {
  const [list, index, ...rest] = path;
  if (list === "articles") return `${prefix}:${pack.articles[index].slug}:${rest.join(".")}`;
  return `${prefix}:category:${pack.categories[index].key}:${rest.join(".")}`;
}

/** The lists a pack module exports; categories are optional (Sotto's guides have none). */
export const packData = (pack) => ({
  ...(pack.categories ? { categories: pack.categories } : {}),
  articles: pack.articles,
});

/** `ui:<dotted.path>` → value for every leaf of a UI strings object; the generator's "//" note is not copy. */
export function uiLeaves(object, path = [], out = new Map()) {
  for (const [key, value] of Object.entries(object ?? {})) {
    if (key === "//") continue;
    if (value && typeof value === "object") uiLeaves(value, [...path, key], out);
    else out.set(uiId([...path, key]), value);
  }
  return out;
}
