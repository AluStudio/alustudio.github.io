// Regression tests for scripts/rewrite-seo-tags.mjs — run with
// `node --test scripts/rewrite-seo-tags.test.mjs`.

import { test } from "node:test";
import assert from "node:assert/strict";
import { setSelfCanonical, setRouteMetadata } from "./rewrite-seo-tags.mjs";

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

test("setRouteMetadata sets title, description and og pairs", () => {
  const html = [
    "<html><head>",
    "<title>Pikgeon</title>",
    '<meta name="description" content="app root description" />',
    '<meta property="og:title" content="Pikgeon" />',
    '<meta property="og:description" content="app root description" />',
    "</head><body></body></html>",
  ].join("\n");

  const out = setRouteMetadata(html, {
    url: ROUTE_URL,
    title: "Privacy & Data Security — Pikgeon",
    description: "Records stay on your device.",
  });

  assert.match(out, /<title>Privacy &amp; Data Security — Pikgeon<\/title>/);
  assert.match(out, /<meta property="og:title" content="Privacy &amp; Data Security — Pikgeon" \/>/);
  assert.match(out, /<meta name="description" content="Records stay on your device\." \/>/);
  assert.match(out, /<meta property="og:description" content="Records stay on your device\." \/>/);
  // canonical/og:url still handled
  assert.match(out, /<link rel="canonical" href="https:\/\/alu-studio\.com\/pikgeon\/privacy\/" \/>/);
  // no duplicated tags left behind
  for (const attr of [/<title>/g, /name="description"/g, /property="og:title"/g, /property="og:description"/g]) {
    assert.equal((out.match(attr) || []).length, 1);
  }
  assert.doesNotMatch(out, /app root description/);
});

test("setRouteMetadata inserts tags that do not exist yet", () => {
  const html = "<html><head></head><body></body></html>";
  const out = setRouteMetadata(html, { url: ROUTE_URL, title: "T", description: "D" });
  assert.match(out, /<title>T<\/title>/);
  assert.match(out, /<meta name="description" content="D" \/>/);
  assert.match(out, /<meta property="og:title" content="T" \/>/);
  assert.match(out, /<meta property="og:description" content="D" \/>/);
});

test("setRouteMetadata treats $ sequences in copy as literal text", () => {
  // String.prototype.replace would otherwise interpret $& / $1 as substitution
  // patterns and silently corrupt the copy.
  const html = '<html><head><title>x</title><meta name="description" content="y" /></head></html>';
  const out = setRouteMetadata(html, {
    url: ROUTE_URL,
    title: "Plans from $9 — save $&more",
    description: "Costs $1 today",
  });
  assert.match(out, /<title>Plans from \$9 — save \$&amp;more<\/title>/);
  assert.match(out, /content="Costs \$1 today"/);
});

test("setRouteMetadata leaves title alone when no title is given", () => {
  const html = "<html><head><title>Keep me</title></head><body></body></html>";
  const out = setRouteMetadata(html, { url: ROUTE_URL, description: "only desc" });
  assert.match(out, /<title>Keep me<\/title>/);
  assert.match(out, /content="only desc"/);
});
