// Regression tests for scripts/meta-description.mjs — run with
// `node --test scripts/meta-description.test.mjs`.

import { test } from "node:test";
import assert from "node:assert/strict";
import { contentUnits, fitDescription, truncate } from "./meta-description.mjs";

const length = (text) => [...text].length;

test("keeps a description that already fits untouched", () => {
  const text = "Compare DingPOS plans for iPad: Lite, Standard and Pro.";
  assert.equal(fitDescription([text]), text);
});

test("a colon lead-in carries its list items instead of shipping alone", () => {
  const out = fitDescription(["Discounts work at two levels:", "Item discount: tap the item.", "Order discount: tap Discount."]);
  assert.equal(out, "Discounts work at two levels: Item discount: tap the item. Order discount: tap Discount.");
});

test("Chinese and Japanese units join without a space; Korean keeps one", () => {
  assert.equal(fitDescription(["折扣分兩層：", "單品折扣。", "整單折扣。"]), "折扣分兩層：單品折扣。整單折扣。");
  assert.equal(fitDescription(["原因を確認してください。", "同期を確認。"]), "原因を確認してください。同期を確認。");
  assert.equal(fitDescription(["할인은 두 단계입니다.", "품목 할인."]), "할인은 두 단계입니다. 품목 할인.");
});

test("a short opening packs following units until the next one does not fit", () => {
  const long = "x".repeat(150);
  assert.equal(fitDescription(["Yes.", "Short follow-up.", long, "Never reached."]), "Yes. Short follow-up.");
});

test("a lead-in fills the remaining room with a cut of the next unit", () => {
  const item = "Open Settings, then Promotions, then tap New, pick a type, set the dates and the products it covers, and save it so checkout applies it on its own.";
  const out = fitDescription(["Create one in Settings:", item], 80);
  assert.ok(out.startsWith("Create one in Settings: Open Settings,"));
  assert.ok(length(out) <= 80);
  assert.ok(out.endsWith("…"));
});

test("a long paragraph is cut at the last sentence end, without an ellipsis", () => {
  const text = `${"First sentence is here and it runs on for a while. ".repeat(2)}${"Third sentence keeps going well past the limit ".repeat(3)}`;
  assert.equal(truncate(text.trim(), 120), "First sentence is here and it runs on for a while. First sentence is here and it runs on for a while.");
});

test("version numbers are not sentence ends", () => {
  const text = `Since v3.2 the app ${"keeps every order safe on the iPad and syncs nothing ".repeat(4)}`.trim();
  const out = truncate(text, 60);
  assert.ok(!out.endsWith("v3."), out);
  assert.ok(out.endsWith("…"));
});

test("falls back to a clause boundary, then a word boundary", () => {
  const clause = `Setup covers the currency, ${"tax rules and printers and the cash drawer and staff accounts ".repeat(3)}`.trim();
  assert.equal(truncate(clause, 40), "Setup covers the currency…");
  const thai = "ความช่วยเหลือสำหรับ DingPOS คำตอบและคู่มือทีละขั้นตอน สำหรับแอป POS บน iPad การตั้งค่า การชำระเงิน ออเดอร์ สินค้าคงคลัง";
  const cut = truncate(thai, 60);
  assert.ok(length(cut) <= 60);
  assert.ok(cut.endsWith("…"));
  assert.ok(thai.startsWith(cut.slice(0, -1)), "a word-boundary cut keeps whole words");
});

test("a cut never leaves an arrow or separator dangling before the ellipsis", () => {
  const text = "Item discount: tap an item in the cart → choose Discount → enter an amount or a percentage";
  const out = truncate(text, 60);
  assert.ok(out.endsWith("Discount…"), out);
});

test("never cuts so early that most of the room is lost", () => {
  const text = `Yes. ${"the rest of this answer is one long run without any stop ".repeat(4)}`.trim();
  const out = truncate(text, 100);
  assert.ok(length(out) > 50, out);
});

test("text without any boundary is hard-cut to the limit", () => {
  const out = truncate("字".repeat(200), 160);
  assert.equal(length(out), 160);
  assert.ok(out.endsWith("…"));
});

test("contentUnits flattens paragraphs, notes, and each list or step item", () => {
  const units = contentUnits([
    { type: "p", text: "Intro:" },
    { type: "list", items: ["A.", "B."] },
    { type: "note", text: "Note." },
    { type: "steps", items: ["One.", "Two."] },
  ]);
  assert.deepEqual(units, ["Intro:", "A.", "B.", "Note.", "One.", "Two."]);
});
