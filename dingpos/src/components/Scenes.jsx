import { useEffect, useRef, useState } from "react";
import {
  Barcode,
  CaretLeft,
  CaretRight,
  CaretUpDown,
  Check,
  CloudCheck,
  DropboxLogo,
  GoogleDriveLogo,
  ShoppingCartSimple,
  Storefront,
  TShirt,
  UserPlus,
  Warning,
} from "@phosphor-icons/react";
import { useStory } from "../story";
import { SCENE_COUNTRIES } from "../data/scenes/keys";
import { sceneCountry, sceneString, sceneTemplate, sceneTime } from "../data/scenes";
import { STORE_GLYPHS, STORE_NAME } from "./wizardStory";

// Each scene redraws one part of the iPad app and acts out what it does
// (design-to-motion B4). Step 0 is the finished frame: the prerender, reduced
// motion and the end of every loop all show it. Interface strings are the
// app's own, synced per language into src/data/scenes; shop data (product
// photos, prices, the tier name, the store name) is the same in every
// language, and product names are never shown. Scenes are decorative and
// hidden from assistive tech, since the copy beside them says the same.

/** Counts to `value` whenever it changes; the first render shows it as is. */
function useCount(value, duration = 700) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = from.current;
    if (start === value) return;
    let frame;
    const began = performance.now();
    const tick = (now) => {
      const k = Math.min(1, (now - began) / duration);
      const eased = 1 - (1 - k) ** 3;
      const next = Math.round(start + (value - start) * eased);
      from.current = next;
      setShown(next);
      if (k < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return shown;
}

/**
 * A stack where a new row lands on top and the oldest leaves at the bottom.
 * `n` rows rotate through `n - 1` visible slots; before each beat the row
 * about to land jumps, untransitioned, to the slot above the stack.
 */
function stackSlot(entry, step, n) {
  if (step.pre && entry === (2 * n - step.r - 1) % n) return { slot: -1, instant: true };
  return { slot: (entry + step.r) % n, instant: false };
}

function Stack({ n, step, rowClass, children }) {
  return (
    <div className="stack" style={{ "--rows": n - 1 }}>
      {Array.from({ length: n }, (_, entry) => {
        const { slot, instant } = stackSlot(entry, step, n);
        return (
          <div
            key={entry}
            className={`stack__row ${rowClass}`}
            style={{ "--slot": slot }}
            data-out={slot < 0 || slot >= n - 1 || undefined}
            data-instant={instant || undefined}
          >
            {children(entry)}
          </div>
        );
      })}
    </div>
  );
}

/** A product photo from the app's demo catalogue (public/scene-<name>.webp). */
function ProductPhoto({ name }) {
  return (
    <img
      className="scene-photo"
      src={`${import.meta.env.BASE_URL}scene-${name}.webp`}
      width="120"
      height="120"
      alt=""
      loading="lazy"
      decoding="async"
    />
  );
}

/** An app string whose one placeholder is replaced by an element. */
function Template({ text, value }) {
  const [before, after = ""] = text.split(/%(?:\d+\$)?[@d]/);
  return (
    <>
      {before}
      {value}
      {after}
    </>
  );
}

/**
 * A number whose digits roll to their new value, each in its own column. The
 * digits are drawn by CSS (.roll__digit::before), so the markup holds no
 * text and a value always renders at rest. `pad` keeps room for shorter
 * values: the missing digits roll to blank at the end (or, with align "end",
 * at the start), so the text beside the number never moves.
 */
function Roll({ value, pad = 0, align = "start" }) {
  const text = align === "end" ? String(value).padStart(pad, " ") : String(value).padEnd(pad, " ");
  return (
    <span className="roll">
      {Array.from(text, (char, i) => (
        <span key={i} className="roll__digit" style={{ "--d": char === " " ? 0 : Number(char) + 1, "--i": i }} />
      ))}
    </span>
  );
}

/** A check that draws itself when its parent turns it on. */
function CheckMark({ className }) {
  return (
    <svg className={`check-mark ${className}`} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5l4.5 4.5L19 7.5" pathLength="1" />
    </svg>
  );
}

// ─── Products & variants ────────────────────────────────────────
// A barcode is scanned, then each variant shows its own price.
const SWATCHES = ["slate", "green", "amber"];
const SIZES = ["S", "M", "L"];
const productSteps = [
  { color: 0, size: 1, price: 480, ms: 2600 },
  { color: 0, size: 1, price: 480, scan: true, ms: 1300 },
  { color: 0, size: 2, price: 520, ms: 1200 },
  { color: 1, size: 2, price: 520, ms: 1200 },
  { color: 2, size: 0, price: 440, ms: 1600 },
];

export function ProductsScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, productSteps, delay, 1);
  const price = useCount(step.price, 500);

  return (
    <div className="scene scene--products" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="product" data-color={SWATCHES[step.color]} data-scan={step.scan || undefined}>
        <div className="product__photo">
          <TShirt size={56} weight="duotone" />
        </div>
        <span className="product__name" />
        <span className="product__price">{price}</span>
      </div>
      <div className="variants">
        <div className="variants__row">
          {SWATCHES.map((swatch, i) => (
            <span key={swatch} className={`swatch swatch--${swatch}`} data-on={i === step.color || undefined} />
          ))}
        </div>
        <div className="variants__row">
          {SIZES.map((size, i) => (
            <span key={size} className="size" data-on={i === step.size || undefined}>
              {size}
            </span>
          ))}
        </div>
        <div className="barcode" data-scan={step.scan || undefined}>
          <Barcode size={32} weight="regular" />
          <span className="barcode__line" />
          <span className="barcode__beam" />
        </div>
      </div>
    </div>
  );
}

// ─── Inventory ──────────────────────────────────────────────────
// A sale pulls a product into low stock and the row warns, a second sale
// sells it out, then a purchase restocks it. Every movement lands on top of
// the stock history, as in the app's product detail.
const LOW_STOCK = 5;
const STOCK_ROWS = [
  { photo: "scented-candle", price: 690 },
  { photo: "coffee-beans", price: 520, stock: 37 },
];
const stockSteps = [
  { r: 0, stock: 12, ms: 2600 },
  { r: 0, pre: true, stock: 12, ms: 60 },
  { r: 1, stock: 3, press: true, ms: 2200 },
  { r: 1, pre: true, stock: 3, ms: 60 },
  { r: 2, stock: 0, press: true, ms: 1800 },
  { r: 2, pre: true, stock: 0, ms: 60 },
];
// History rows by stack entry; entry 0 is the newest at rest.
const MOVEMENTS = [
  { kind: "purchase", before: 0, after: 12 },
  { kind: "sale", before: 3, after: 0 },
  { kind: "sale", before: 12, after: 3 },
];

function stockState(count) {
  if (count <= 0) return "out";
  return count <= LOW_STOCK ? "low" : undefined;
}

function signed(delta) {
  return delta > 0 ? `+${delta}` : `\u2212${-delta}`;
}

export function InventoryScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, stockSteps, delay, 1);

  return (
    <div className="scene scene--stock" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="app-card stock">
        {STOCK_ROWS.map(({ photo, price, stock = step.stock }, i) => {
          const state = stockState(stock);
          return (
            <div
              key={photo}
              className="stock__row"
              data-state={state}
              data-press={(i === 0 && step.press) || undefined}
            >
              <ProductPhoto name={photo} />
              <span className="stock__text">
                <span className="stock__price">{price}</span>
                <span className="stock__badge">
                  <span className="stock__count">
                    <Template text={sceneTemplate("products.stock.badge")} value={<Roll value={stock} pad={2} />} />
                  </span>
                  <span className="stock__out">{sceneString("products.stock.out")}</span>
                </span>
              </span>
              <span className="stock__alert">
                <Warning size={16} weight="fill" />
              </span>
            </div>
          );
        })}
      </div>
      <div className="history">
        <p className="history__title">{sceneString("products.detail.stock_history")}</p>
        <Stack n={MOVEMENTS.length} step={step} rowClass="movement">
          {(entry) => {
            const { kind, before, after } = MOVEMENTS[entry];
            return (
              <>
                <span className="movement__kind" data-kind={kind}>
                  {sceneString(`products.detail.movement.${kind}`)}
                </span>
                <span className="movement__delta" data-kind={kind}>
                  {signed(after - before)}
                </span>
                <span className="movement__change">
                  {before} → {after}
                </span>
              </>
            );
          }}
        </Stack>
      </div>
    </div>
  );
}

// ─── Members & points ───────────────────────────────────────────
// A member is attached at checkout and redeems points for money off; the
// sale is charged and earns the points back.
const MEMBER = { initials: "MC", tier: "Gold" };
const SUBTOTAL = 909;
const REDEEMED = 90;
const pointsSteps = [
  { member: true, redeem: true, points: 1190, ms: 2600 },
  { member: true, redeem: true, points: 1190, press: true, ms: 240 },
  { member: true, redeem: true, points: 1280, paid: true, ms: 1900 },
  { redeem: false, points: 1280, ms: 900 },
  { member: true, redeem: false, points: 1280, ms: 1400 },
];
const pointsEntry = pointsSteps.findIndex((step) => !step.member);

export function LoyaltyScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, pointsSteps, delay, pointsEntry);
  const discount = REDEEMED / 10;
  const total = step.redeem ? SUBTOTAL - discount : SUBTOTAL;

  return (
    <div className="scene scene--loyalty" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="app-card cart">
        <div className="cart__customer" data-member={step.member || undefined}>
          <span className="cart__select">
            <UserPlus size={16} weight="bold" />
            {sceneString("customer.select")}
          </span>
          <span className="cart__member">
            <span className="cart__avatar">{MEMBER.initials}</span>
            <span className="tier-pill">{MEMBER.tier}</span>
            <span className="points-pill">
              <Template text={sceneTemplate("customers.points_pill")} value={<Roll value={step.points} />} />
            </span>
          </span>
        </div>
        <div className="cart__line">
          <span className="cart__thumb">
            <ProductPhoto name="green-tea" />
            <span className="cart__qty">3</span>
          </span>
          <span className="cart__price">{SUBTOTAL}</span>
        </div>
        <div className="cart__sums">
          <span className="cart__sum">
            <span>{sceneString("cashier.subtotal")}</span>
            <span>{SUBTOTAL}</span>
          </span>
          <span className="cart__sum cart__sum--points" data-shown={step.redeem || undefined}>
            <span>{sceneString("cashier.subtotal.points", REDEEMED)}</span>
            <span>{signed(-discount)}</span>
          </span>
        </div>
        <div className="cart__charge" data-press={step.press || undefined} data-paid={step.paid || undefined}>
          <CheckMark className="cart__check" />
          <Roll value={total} />
        </div>
        <span className="cart__earned" data-shown={step.paid || undefined}>
          <strong>{sceneString("customers.points_pill", `+${REDEEMED}`)}</strong>
          {sceneString("customers.points_reason.earn")}
        </span>
      </div>
    </div>
  );
}

// ─── Backup ─────────────────────────────────────────────────────
// Settings → Cloud Backup. Both connected clouds hold yesterday's copy, so the
// Data Overview flags their counts against this iPad. iCloud backs up, its
// copy is replaced and its counts roll level with the device; Google Drive
// follows. Dropbox stays unconnected: every destination is independent.
const DEVICE_COUNTS = [88, 437, 64];
const STALE_COUNTS = [86, 412, 63];
const COUNT_ROWS = ["products", "orders", "customers"];
const CLOUDS = [
  { id: "icloud", Icon: CloudCheck, stale: "21:08", fresh: "14:32" },
  { id: "google_drive", Icon: GoogleDriveLogo, stale: "21:09", fresh: "14:33" },
  { id: "dropbox", Icon: DropboxLogo },
];
const uploading = (cloud, steps) => steps.map(([pct, ms]) => ({ busy: cloud, pct, ms }));
const backupSteps = [
  { fresh: 2, ms: 2600 },
  { fresh: 0, reset: true, ms: 1300 },
  { fresh: 0, press: 0, ms: 260 },
  ...uploading(0, [[18, 450], [46, 450], [79, 450], [100, 400]]).map((s) => ({ ...s, fresh: 0 })),
  { fresh: 1, ms: 1100 },
  { fresh: 1, press: 1, ms: 260 },
  ...uploading(1, [[31, 400], [72, 400], [100, 350]]).map((s) => ({ ...s, fresh: 1 })),
];

export function BackupScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, backupSteps, delay, 1);

  return (
    <div className="tablet" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="tablet__screen backup" data-reset={step.reset || undefined}>
        <h4 className="backup__title">{sceneString("settings.backup")}</h4>
        <p className="backup__subtitle">{sceneString("settings.backup.subtitle")}</p>

        <p className="backup__section">{sceneString("settings.backup.providers_title")}</p>
        <div className="backup__card">
          {CLOUDS.map((cloud, i) => {
            const { id, stale, fresh } = cloud;
            const Icon = cloud.Icon;
            const connected = Boolean(stale);
            const busy = step.busy === i;
            return (
              <div
                key={id}
                className="provider"
                data-busy={busy || undefined}
                data-fresh={i < step.fresh || undefined}
              >
                <span className={`provider__icon provider__icon--${id}`}>
                  <Icon size={20} weight={id === "icloud" ? "regular" : "fill"} />
                </span>
                <span className="provider__text">
                  <span className="provider__name">{sceneString(`backup.provider.${id}`)}</span>
                  {connected ? (
                    <span className="provider__status">
                      <span>{sceneString("backup.status.yesterday_at", sceneTime(stale))}</span>
                      <span>{sceneString("backup.status.today_at", sceneTime(fresh))}</span>
                    </span>
                  ) : (
                    <span className="provider__status provider__status--off">
                      {sceneString("backup.status.not_connected")}
                    </span>
                  )}
                </span>
                <span className="provider__side">
                  {connected ? (
                    <>
                      <span className="provider__actions">
                        <span className="app-button" data-press={step.press === i || undefined}>
                          {sceneString("backup.action.backup")}
                        </span>
                        <span className="app-button app-button--secondary provider__restore">
                          {sceneString("backup.action.restore")}
                        </span>
                      </span>
                      <span className="upload">
                        <span className="upload__head">
                          <span>{sceneString("backup.status.backing_up")}</span>
                          <span>
                            <Roll value={busy ? step.pct : 0} pad={3} align="end" />%
                          </span>
                        </span>
                        <span className="upload__track">
                          <span className="upload__fill" style={{ "--p": busy ? step.pct / 100 : 0 }} />
                        </span>
                      </span>
                    </>
                  ) : (
                    <span className="provider__actions">
                      <span className="app-button app-button--secondary">{sceneString("backup.action.connect")}</span>
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <p className="backup__section">{sceneString("settings.backup.overview_title")}</p>
        <div className="backup__card overview">
          <span className="overview__row overview__row--head">
            <span />
            <span>{sceneString("backup.overview.device_column")}</span>
            <span>{sceneString("backup.provider.icloud")}</span>
            <span>{sceneString("backup.provider.google_drive")}</span>
          </span>
          {COUNT_ROWS.map((row, r) => (
            <span key={row} className="overview__row">
              <span className="overview__label">{sceneString(`settings.backup.row.${row}`)}</span>
              <span className="overview__device">{DEVICE_COUNTS[r]}</span>
              {[0, 1].map((cloud) => {
                const fresh = cloud < step.fresh;
                const value = fresh ? DEVICE_COUNTS[r] : STALE_COUNTS[r];
                return (
                  <span key={cloud} className="overview__cloud" data-drift={value !== DEVICE_COUNTS[r] || undefined}>
                    <Roll value={value} />
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Onboarding wizard ──────────────────────────────────────────
// The app's three-step setup: a country is picked, the store is named, and
// the store is ready. Steps (HomePage) drives it together with its step list.
const STORE_COUNTRY = SCENE_COUNTRIES[0];

function taxSummary({ currency, rate }) {
  return `${currency} · ${rate}% ${sceneString("settings.tax_mode.inclusive")}`;
}

export function WizardScene({ step }) {
  const typed = step.typed ?? STORE_GLYPHS.length;
  const typing = step.screen === 1 && !step.logo;

  return (
    <div className="tablet wizard" aria-hidden="true" data-nosnippet>
      <div className="tablet__screen wizard__screen">
        <div className="wizard__progress">
          {[0, 1, 2].map((i) => (
            <span key={i} className="wizard__segment" data-on={i <= step.screen || undefined} />
          ))}
        </div>
        <div className="wizard__indicator">
          {[0, 1, 2].map((i) => (
            <span key={i} data-on={i === step.screen || undefined}>
              {sceneString("onboarding.step_indicator", i + 1, 3)}
            </span>
          ))}
        </div>
        <div className="wizard__card">
          <section className="wizard__page" data-on={step.screen === 0 || undefined}>
            <h4 className="wizard__title">{sceneString("onboarding.country.title")}</h4>
            <p className="wizard__tagline">{sceneString("onboarding.country.tagline")}</p>
            <div className="countries">
              {SCENE_COUNTRIES.map((country, i) => (
                <span key={country.code} className="country" data-picked={(i === 0 && step.picked) || undefined}>
                  <span className="country__code">{country.code}</span>
                  <span className="country__text">
                    <span className="country__name">{sceneCountry(country.code)}</span>
                    <span className="country__summary">{taxSummary(country)}</span>
                  </span>
                  <span className="country__check">
                    <Check size={12} weight="bold" />
                  </span>
                </span>
              ))}
            </div>
            <span
              className="wizard__button"
              data-disabled={!step.picked || undefined}
              data-press={(step.screen === 0 && step.press) || undefined}
            >
              {sceneString("onboarding.continue")}
              <CaretRight size={14} weight="bold" />
            </span>
          </section>

          <section className="wizard__page" data-on={step.screen === 1 || undefined}>
            <h4 className="wizard__title">{sceneString("onboarding.store.title")}</h4>
            <p className="wizard__tagline">{sceneString("onboarding.store.tagline")}</p>
            <div className="store">
              <span className="store__logo" data-on={step.logo || undefined}>
                <Storefront size={24} weight="regular" />
                <img src={`${import.meta.env.BASE_URL}app-icon-sm.png`} width="64" height="64" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="field store__name">
                <span className="field__label">{sceneString("onboarding.store.name_label")}</span>
                <span className="field__input" data-focus={typing || undefined}>
                  {STORE_GLYPHS.slice(0, typed).join("")}
                  {typing && <span className="field__caret" />}
                </span>
              </span>
            </div>
            <p className="field__label wizard__section">{sceneString("onboarding.store.tax_section")}</p>
            <div className="store__tax">
              <span className="field">
                <span className="field__label">{sceneString("onboarding.store.currency_label")}</span>
                <span className="field__input">
                  {STORE_COUNTRY.currency}
                  <CaretUpDown size={12} weight="bold" />
                </span>
              </span>
              <span className="field">
                <span className="field__label">{sceneString("onboarding.store.tax_rate")}</span>
                <span className="field__input">{STORE_COUNTRY.rate} %</span>
              </span>
            </div>
            <span className="segmented">
              <span data-on>{sceneString("settings.tax_mode.inclusive")}</span>
              <span>{sceneString("settings.tax_mode.exclusive")}</span>
            </span>
            <span className="wizard__actions">
              <span className="wizard__button wizard__button--secondary">
                <CaretLeft size={14} weight="bold" />
                {sceneString("onboarding.back")}
              </span>
              <span className="wizard__button" data-press={(step.screen === 1 && step.press) || undefined}>
                {sceneString("onboarding.continue")}
                <CaretRight size={14} weight="bold" />
              </span>
            </span>
          </section>

          <section className="wizard__page wizard__page--done" data-on={step.screen === 2 || undefined}>
            <span className="done__badge">
              <CheckMark className="done__check" />
            </span>
            <h4 className="wizard__title done__title">{sceneString("onboarding.success.title")}</h4>
            <p className="wizard__tagline">{sceneString("onboarding.success.subtitle")}</p>
            <span className="summary">
              <span className="summary__row">
                <span>{sceneString("onboarding.store.name_label")}</span>
                <span>{STORE_NAME}</span>
              </span>
              <span className="summary__row">
                <span>{sceneString("onboarding.summary.region")}</span>
                <span>
                  {sceneCountry(STORE_COUNTRY.code)} · {STORE_COUNTRY.currency}
                </span>
              </span>
              <span className="summary__row">
                <span>{sceneString("onboarding.store.tax_section")}</span>
                <span>
                  {sceneString("settings.tax_mode.inclusive")} · {STORE_COUNTRY.rate}%
                </span>
              </span>
            </span>
            <span className="wizard__button done__cta">
              {sceneString("onboarding.success.cta")}
              <ShoppingCartSimple size={16} weight="bold" />
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}
