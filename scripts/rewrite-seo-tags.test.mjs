// Regression tests for scripts/rewrite-seo-tags.mjs — run with
// `node --test scripts/rewrite-seo-tags.test.mjs`.

import { test } from "node:test";
import assert from "node:assert/strict";
import { setSelfCanonical, setPageMeta } from "./rewrite-seo-tags.mjs";

const ROUTE_URL = "https://alu-studio.com/pikgeon/privacy/";

test("inserts canonical + og:url when neither tag exists yet", () => {
  const html = "<html><head><title>Pikgeon</title></head><body></body></html>";
  const out = setSelfCanonical(html, ROUTE_URL);
  assert.match(out, /<link rel="canonical" href="https:\/\/alu-studio\.com\/pikgeon\/privacy\/" \/>/);
  assert.match(out, /<meta property="og:url" content="https:\/\/alu-studio\.com\/pikgeon\/privacy\/" \/>/);
});

test("replaces an existing canonical + og:url pointing at the app root", () => {
  const html = [
    "<html><head>",
    '<link rel="canonical" href="https://alu-studio.com/pikgeon/" />',
    '<meta property="og:url" content="https://alu-studio.com/pikgeon/" />',
    "</head><body></body></html>",
  ].join("\n");
  const out = setSelfCanonical(html, ROUTE_URL);
  // old app-root URL must be gone, not just appended alongside a new tag
  assert.equal((out.match(/rel="canonical"/g) || []).length, 1);
  assert.equal((out.match(/property="og:url"/g) || []).length, 1);
  assert.match(out, /<link rel="canonical" href="https:\/\/alu-studio\.com\/pikgeon\/privacy\/" \/>/);
  assert.match(out, /<meta property="og:url" content="https:\/\/alu-studio\.com\/pikgeon\/privacy\/" \/>/);
  assert.doesNotMatch(out, /href="https:\/\/alu-studio\.com\/pikgeon\/"/);
});

test("leaves unrelated head tags untouched", () => {
  const html = '<html><head><meta name="description" content="Pikgeon app" /></head><body></body></html>';
  const out = setSelfCanonical(html, ROUTE_URL);
  assert.match(out, /<meta name="description" content="Pikgeon app" \/>/);
});

// ── setPageMeta ─────────────────────────────────────────────

const FULL_HEAD = [
  "<html><head>",
  '<meta name="description" content="App root description." />',
  '<meta property="og:title" content="DingPOS" />',
  '<meta property="og:description" content="App root description." />',
  "<title>DingPOS</title>",
  "</head><body></body></html>",
].join("\n");

test("setPageMeta replaces title, og:title, description and og:description", () => {
  const out = setPageMeta(FULL_HEAD, {
    title: "Can I use it offline? — DingPOS",
    description: "Yes. DingPOS is offline-first.",
  });
  assert.match(out, /<title>Can I use it offline\? — DingPOS<\/title>/);
  assert.match(out, /<meta property="og:title" content="Can I use it offline\? — DingPOS" \/>/);
  assert.match(out, /<meta name="description" content="Yes\. DingPOS is offline-first\." \/>/);
  assert.match(out, /<meta property="og:description" content="Yes\. DingPOS is offline-first\." \/>/);
  // replaced in place, not appended alongside the app-root values
  assert.equal((out.match(/<title>/g) || []).length, 1);
  assert.equal((out.match(/name="description"/g) || []).length, 1);
  assert.doesNotMatch(out, /App root description/);
});

test("setPageMeta inserts tags when the page has none", () => {
  const html = "<html><head></head><body></body></html>";
  const out = setPageMeta(html, { title: "Terms — DingPOS", description: "The rules." });
  assert.match(out, /<title>Terms — DingPOS<\/title>/);
  assert.match(out, /<meta name="description" content="The rules\." \/>/);
});

test("setPageMeta only touches the fields it is given", () => {
  const out = setPageMeta(FULL_HEAD, { title: "Terms — DingPOS" });
  assert.match(out, /<meta name="description" content="App root description\." \/>/);
  assert.equal(setPageMeta(FULL_HEAD, {}), FULL_HEAD);
});

test("setPageMeta escapes characters that would break out of the markup", () => {
  const out = setPageMeta(FULL_HEAD, {
    title: "A & B <script>",
    description: 'He said "hi" & left',
  });
  assert.match(out, /<title>A &amp; B &lt;script&gt;<\/title>/);
  assert.match(out, /og:title" content="A &amp; B &lt;script&gt;"/);
  assert.match(out, /name="description" content="He said &quot;hi&quot; &amp; left"/);
});

// Article copy is author content and may contain `$`, which String.replace
// reads as a substitution pattern ($' splices in everything after the match).
test("setPageMeta treats $ in content literally", () => {
  const out = setPageMeta(FULL_HEAD, { title: "Total is $5", description: "Suffix $' and $1" });
  assert.ok(out.includes("<title>Total is $5</title>"));
  assert.ok(out.includes('<meta name="description" content="Suffix $\' and $1" />'));
});
