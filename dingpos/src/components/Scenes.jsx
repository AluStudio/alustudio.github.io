import { useEffect, useRef, useState } from "react";
import {
  Barcode,
  CloudCheck,
  Cloud,
  Coffee,
  Cookie,
  Crown,
  DeviceTablet,
  DropboxLogo,
  GoogleDriveLogo,
  Leaf,
  Receipt,
  ShoppingCartSimple,
  Star,
  TShirt,
  UserCircle,
  Wrench,
} from "@phosphor-icons/react";
import { useStory } from "../story";

// Each scene redraws one part of the iPad app and acts out what it does
// (design-to-motion B4). Step 0 is the finished frame: the prerender, reduced
// motion and the end of every loop all show it. Scenes carry numbers and
// icons only, so one drawing serves all 32 languages; they are decorative and
// hidden from assistive tech, since the card copy says the same in words.

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
// Two sales draw a product down to its low-stock warning; a manual
// adjustment fills it back. Each movement lands on the ledger.
const STOCK_MAX = 30;
const LOW_STOCK = 5;
const stockSteps = [
  { r: 0, stock: 18, ms: 2600 },
  { r: 0, pre: true, stock: 18, ms: 60 },
  { r: 1, stock: 12, ms: 1500 },
  { r: 1, pre: true, stock: 12, ms: 60 },
  { r: 2, stock: 4, ms: 2000 },
  { r: 2, pre: true, stock: 4, ms: 60 },
];
// Ledger rows by entry; entry 0 is the newest movement at rest.
const MOVEMENTS = [
  { kind: "adjust", delta: "+14" },
  { kind: "sale", delta: "\u22128" },
  { kind: "sale", delta: "\u22126" },
];
const stockIcons = [Coffee, Cookie, Leaf];

export function InventoryScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, stockSteps, delay, 1);
  const stock = useCount(step.stock, 600);
  const rows = [24, stock, 27];

  return (
    <div className="scene scene--stock" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="stock">
        {rows.map((count, i) => {
          const Icon = stockIcons[i];
          const low = count <= LOW_STOCK;
          return (
            <div key={i} className="stock__row" data-low={low || undefined}>
              <span className={`stock__icon stock__icon--${i}`}>
                <Icon size={16} weight="duotone" />
              </span>
              <span className="stock__track">
                <span className="stock__fill" style={{ "--fill": count / STOCK_MAX }} />
              </span>
              <span className="stock__count">{count}</span>
            </div>
          );
        })}
      </div>
      <Stack n={MOVEMENTS.length} step={step} rowClass="ledger">
        {(entry) => {
          const { kind, delta } = MOVEMENTS[entry];
          const Icon = kind === "sale" ? ShoppingCartSimple : Wrench;
          return (
            <>
              <span className="ledger__icon" data-kind={kind}>
                <Icon size={14} weight="bold" />
              </span>
              <span className="ledger__line" />
              <span className="ledger__delta" data-kind={kind}>
                {delta}
              </span>
            </>
          );
        }}
      </Stack>
    </div>
  );
}

// ─── Members & points ───────────────────────────────────────────
// A sale earns points, then the member redeems them for money off.
const pointsSteps = [
  { points: 1280, ms: 2600 },
  { points: 1280, fresh: true, ms: 800 },
  { points: 1400, chip: "+120", ms: 1700 },
  { points: 1280, chip: "\u2212120", redeem: true, ms: 1900 },
];

export function LoyaltyScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, pointsSteps, delay, 1);
  const points = useCount(step.points, 700);

  return (
    <div className="scene scene--loyalty" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="member">
        <UserCircle size={40} weight="duotone" className="member__avatar" />
        <span className="member__lines">
          <span />
          <span />
        </span>
        <span className="member__tier">
          <Crown size={14} weight="fill" />
        </span>
      </div>
      <div className="points">
        <Star size={20} weight="fill" className="points__star" />
        <span className="points__value">{points}</span>
        {step.chip && (
          <span key={step.chip} className="points__chip" data-redeem={step.redeem || undefined}>
            {step.chip}
          </span>
        )}
      </div>
      {/* The last sale; a new one lands when the attribute turns on. */}
      <div className="receipt" data-fresh={step.fresh || undefined}>
        <span className="receipt__icon">
          <Receipt size={16} weight="bold" />
        </span>
        <span className="receipt__line" />
        <span className="receipt__amount">
          <span className="receipt__discount" data-shown={step.redeem || undefined}>
            {"\u221212"}
          </span>
          1200
        </span>
      </div>
    </div>
  );
}

// ─── Backup ─────────────────────────────────────────────────────
// A backup travels from the iPad to the owner's cloud; the newest snapshot
// lands on top and the sixth-oldest drops off, so five are always kept.
const SNAPSHOTS = 6;
const backupSteps = [{ r: 0, ms: 2400 }];
for (let r = 0; r < SNAPSHOTS; r++) {
  if (r > 0) backupSteps.push({ r, ms: 1400 });
  backupSteps.push({ r, pre: true, ms: 600 });
}
const snapshotWidths = [64, 52, 72, 58, 68, 48];

export function BackupScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, backupSteps, delay, 1);

  return (
    <div className="scene scene--backup" ref={ref} aria-hidden="true" data-nosnippet>
      <div className="flow">
        <span className="flow__node">
          <DeviceTablet size={24} weight="duotone" />
        </span>
        <span className="flow__wire">
          {/* Remounts each beat so the pulse travels once per backup. */}
          {step.pre && <span key={step.r} className="flow__pulse" />}
        </span>
        <span className="flow__clouds">
          <span className="flow__cloud" data-on>
            <Cloud size={20} weight="fill" />
          </span>
          <span className="flow__cloud">
            <GoogleDriveLogo size={20} weight="fill" />
          </span>
          <span className="flow__cloud">
            <DropboxLogo size={20} weight="fill" />
          </span>
        </span>
      </div>
      <Stack n={SNAPSHOTS} step={step} rowClass="snapshot">
        {(entry) => (
          <>
            <CloudCheck size={16} weight="bold" className="snapshot__icon" />
            <span className="snapshot__line" style={{ "--w": `${snapshotWidths[entry]}%` }} />
            <span className="snapshot__size" />
          </>
        )}
      </Stack>
    </div>
  );
}
