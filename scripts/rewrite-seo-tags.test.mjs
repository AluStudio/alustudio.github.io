// Regression tests for scripts/rewrite-seo-tags.mjs — run with
// `node --test scripts/rewrite-seo-tags.test.mjs`.

import { test } from "node:test";
import assert from "node:assert/strict";
import { setSelfCanonical } from "./rewrite-seo-tags.mjs";

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
