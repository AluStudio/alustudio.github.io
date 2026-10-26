import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  BatteryFull,
  Bread,
  Cake,
  CaretLeft,
  CellSignalFull,
  ChartBar,
  Check,
  CheckCircle,
  Coffee,
  Cookie,
  DotsThree,
  HourglassMedium,
  Leaf,
  MagnifyingGlass,
  OrangeSlice,
  Package,
  PencilSimple,
  Plus,
  Receipt,
  ShoppingCartSimple,
  User,
  UsersThree,
  WifiHigh,
} from "@phosphor-icons/react";
import { useStory } from "./story";

// Each scene redraws one app's real screen and acts out its core action. The
// resting frame is the finished design; see useStory for the loop.

function useScene(id) {
  const { t } = useTranslation();
  return t(`scene.${id}`, { returnObjects: true });
}

function Phone({ className, children }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__glyphs">
            <CellSignalFull size={12} weight="fill" />
            <WifiHigh size={12} weight="bold" />
            <BatteryFull size={16} weight="fill" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── DingPOS ────────────────────────────────────────────────────
// The order is charged, the cart clears, and the next order is rung up.

const productIcons = [Coffee, Leaf, Bread, Cookie, OrangeSlice, Cake];
const railIcons = [ShoppingCartSimple, Package, Receipt, UsersThree, ChartBar];
// Cart line → the product tile that adds it.
const lineProduct = [0, 2, 1];

const posSteps = [
  { count: 3, ms: 3200 },
  { count: 3, press: true, ms: 260 },
  { count: 3, paid: true, ms: 1500 },
  { count: 0, ms: 900 },
  { count: 0, tap: 0, ms: 280 },
  { count: 1, ms: 800 },
  { count: 1, tap: 2, ms: 280 },
  { count: 2, ms: 800 },
  { count: 2, tap: 1, ms: 280 },
];

function DingposScene() {
  const s = useScene("dingpos");
  const ref = useRef(null);
  const step = useStory(ref, posSteps, 400);

  return (
    <div className="ipad" ref={ref}>
      <div className="ipad__screen pos">
        <div className="pos__rail">
          <span className="pos__logo">D</span>
          {railIcons.map((Icon, i) => (
            <span key={i} className="pos__rail-item" data-active={i === 0 || undefined}>
              <Icon size={16} weight={i === 0 ? "fill" : "regular"} />
            </span>
          ))}
        </div>

        <div className="pos__catalog">
          <div className="pos__search">
            <MagnifyingGlass size={12} weight="bold" />
            {s.search}
          </div>
          <div className="pos__pills">
            {s.categories.map((category, i) => (
              <span key={category} className="pos__pill" data-active={i === 0 || undefined}>
                {category}
              </span>
            ))}
          </div>
          <div className="pos__grid">
            {s.products.map((product, i) => {
              const Icon = productIcons[i];
              return (
                <div key={product.name} className="pos__product" data-tapped={step.tap === i || undefined}>
                  <span className={`pos__thumb pos__thumb--${i}`}>
                    <Icon size={20} weight="duotone" />
                  </span>
                  <span className="pos__product-name">{product.name}</span>
                  <span className="pos__product-price">{product.price}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pos__cart">
          <div className="pos__tabs">
            <span className="pos__tab">{s.cart}</span>
            <Plus size={12} weight="bold" />
          </div>
          <div className="pos__customer">
            <User size={12} weight="bold" />
            {s.customer}
          </div>
          <div className="pos__lines">
            {s.lines.map((line, i) => {
              const Icon = productIcons[lineProduct[i]];
              return (
                <div key={line.name} className="pos__line" data-shown={i < step.count || undefined}>
                  <span className={`pos__thumb pos__thumb--sm pos__thumb--${lineProduct[i]}`}>
                    <Icon size={14} weight="duotone" />
                    <span className="pos__badge">{line.qty}</span>
                  </span>
                  <span className="pos__line-text">
                    <span className="pos__line-name">{line.name}</span>
                    {line.note && <span className="pos__line-note">{line.note}</span>}
                  </span>
                  <span className="pos__line-price">{line.price}</span>
                </div>
              );
            })}
            <p className="pos__empty" data-shown={step.count === 0 || undefined}>
              {s.empty}
            </p>
          </div>
          <div className="pos__checkout">
            <div className="pos__subtotal">
              <span>{s.subtotal}</span>
              <span key={step.count} className="pos__tick">
                {s.totals[step.count]}
              </span>
            </div>
            <div className="pos__charge" data-press={step.press || undefined} data-paid={step.paid || undefined}>
              <span className="pos__charge-total">
                <span key={step.count} className="pos__tick">
                  {s.totals[step.count]}
                </span>
              </span>
              <span className="pos__charge-paid">
                <Check size={14} weight="bold" />
                {s.paid}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sotto ──────────────────────────────────────────────────────
// A gift idea for her is cleared and written again, then saved.

function sottoSteps(length) {
  return [
    { typed: length, ms: 3000 },
    { typed: length, editing: true, ms: 700 },
    ...Array.from({ length }, (_, k) => ({ typed: length - k - 1, editing: true, ms: 40 })),
    { typed: 0, editing: true, ms: 500 },
    ...Array.from({ length }, (_, k) => ({ typed: k + 1, editing: true, ms: 60 + (k % 3) * 20 })),
    { typed: length, editing: true, ms: 400 },
    { typed: length, saved: true, ms: 1600 },
  ];
}

function SottoScene() {
  const s = useScene("sotto");
  const ref = useRef(null);
  const glyphs = useMemo(() => Array.from(s.fields[0].value), [s.fields]);
  const steps = useMemo(() => sottoSteps(glyphs.length), [glyphs.length]);
  const step = useStory(ref, steps, 1600);

  return (
    <Phone className="phone--sotto">
      <div className="sotto" ref={ref}>
        <div className="sotto__nav">
          <span className="sotto__circle">
            <CaretLeft size={14} weight="bold" />
          </span>
          <span className="sotto__pill">{s.edit}</span>
        </div>
        <div className="sotto__profile">
          <span className="sotto__avatar">{s.initials}</span>
          <div>
            <p className="sotto__name">{s.name}</p>
            <p className="sotto__meta">{s.meta}</p>
          </div>
        </div>
        <ul className="sotto__fields">
          {s.fields.map((field, i) => (
            <li
              key={field.label}
              className="sotto__field"
              data-editing={(i === 0 && (step.editing || step.saved)) || undefined}
            >
              <span className="sotto__label">{field.label}</span>
              <span className="sotto__value">
                {i === 0 ? glyphs.slice(0, step.typed).join("") : field.value}
                {i === 0 && step.editing && <span className="sotto__caret" />}
              </span>
              {i === 0 && (
                <span className="sotto__saved" data-shown={step.saved || undefined}>
                  <Check size={12} weight="bold" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Phone>
  );
}

// ─── Pikgeon ────────────────────────────────────────────────────
// A batch of postcard photos is recognized on the phone, one by one.

const pikgeonSteps = [
  { done: 4, ms: 3200 },
  { done: 0, ms: 700 },
  { done: 0, active: true, ms: 1000 },
  { done: 1, active: true, ms: 900 },
  { done: 2, active: true, ms: 900 },
  { done: 3, active: true, ms: 900 },
];

function rowState(i, step) {
  if (i < step.done) return "done";
  if (i === step.done && step.active) return "recognizing";
  return "waiting";
}

function PikgeonScene() {
  const { t } = useTranslation();
  const s = useScene("pikgeon");
  const ref = useRef(null);
  const step = useStory(ref, pikgeonSteps, 1000);
  const total = s.rows.length;

  return (
    <Phone className="phone--pikgeon">
      <div className="pk" ref={ref}>
        <div className="pk__nav">
          <span className="pk__pill">{s.cancel}</span>
          <span className="pk__pill" data-enabled={step.done === total || undefined}>
            {s.save}
          </span>
        </div>
        <p className="pk__title">{s.title}</p>
        <div className="pk__progress">
          <span>{t("scene.pikgeon.progress", { done: step.done, total })}</span>
          <span className="pk__bar">
            <span className="pk__bar-fill" style={{ transform: `scaleX(${step.done / total})` }} />
          </span>
        </div>
        <ul className="pk__rows">
          {s.rows.map((row, i) => {
            const state = rowState(i, step);
            return (
              <li key={row.name} className="pk__row" data-state={state}>
                <span className={`pk__thumb pk__thumb--${i}`} />
                <span key={state} className="pk__text">
                  <span className="pk__name">
                    {state === "done" ? row.name : state === "recognizing" ? s.recognizing : s.waiting}
                  </span>
                  <span className="pk__meta">{state === "done" ? row.meta : "—"}</span>
                </span>
                <span className="pk__status">
                  {state === "done" && <CheckCircle size={20} weight="fill" />}
                  {state === "recognizing" && <HourglassMedium size={16} weight="bold" />}
                  {state === "waiting" && <DotsThree size={16} weight="bold" />}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Phone>
  );
}

// ─── Babbby ─────────────────────────────────────────────────────
// Today's first activity is checked off and this week's chart grows.

const babbbySteps = [
  { done: false, ms: 3400 },
  { done: false, tap: true, ms: 280 },
  { done: true, ms: 2600 },
];
const weekBars = [2, 3, 1, 4, 2, 3, 0];
const TODAY = 5;
const BAR_MAX = 5;

function BabbbyScene() {
  const s = useScene("babbby");
  const ref = useRef(null);
  const step = useStory(ref, babbbySteps, 2200);
  const bars = weekBars.map((value, i) => (i === TODAY && step.done ? value + 1 : value));
  const total = bars.reduce((sum, value) => sum + value, 0);

  return (
    <div className="bb" ref={ref}>
      <Phone className="phone--babbby">
        <div className="bb__nav">
          <span className="bb__title">{s.title}</span>
          <span className="bb__circle">
            <PencilSimple size={14} weight="bold" />
          </span>
        </div>
        <div className="bb__child">
          <span className="bb__avatar">{s.child_initial}</span>
          {s.child}
        </div>
        <div className="bb__week">
          {s.days.map((day, i) => (
            <span key={i} className="bb__day" data-today={i === TODAY || undefined} data-future={i > TODAY || undefined}>
              <span>{day}</span>
              <span className="bb__date">{8 + i}</span>
            </span>
          ))}
        </div>
        <ul className="bb__list">
          {s.activities.map((activity, i) => (
            <li key={activity.name} className="bb__card" data-done={(i === 0 && step.done) || undefined}>
              <span className="bb__check" data-tapped={(i === 0 && step.tap) || undefined}>
                <span className="bb__check-fill">
                  <Check size={12} weight="bold" />
                </span>
                {i === 0 && step.done && (
                  <span className="bb__burst">
                    {Array.from({ length: 6 }, (_, k) => (
                      <span key={k} style={{ "--a": `${k * 60}deg` }} />
                    ))}
                  </span>
                )}
              </span>
              <span className="bb__card-text">
                <span className="bb__card-title">{activity.name}</span>
                <span className="bb__chips">
                  <span className={`bb__chip bb__chip--${activity.category_id}`}>
                    {activity.emoji} {activity.category}
                  </span>
                  <span className="bb__chip bb__chip--age">{s.age}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Phone>

      <div className="bb__stats">
        <p className="bb__stats-title">{s.week}</p>
        <p className="bb__stats-count">
          <span key={total} className="bb__tick">
            {total}
          </span>
          <span>{s.done_label}</span>
        </p>
        <div className="bb__bars">
          {bars.map((value, i) => (
            <span key={i} className="bb__bar-col">
              <span className="bb__bar" data-today={i === TODAY || undefined} style={{ transform: `scaleY(${Math.max(value, 0.25) / BAR_MAX})` }} />
              <span className="bb__bar-day">{s.days[i]}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const scenes = {
  dingpos: DingposScene,
  sotto: SottoScene,
  pikgeon: PikgeonScene,
  babbby: BabbbyScene,
};

export default function Scene({ app }) {
  const Component = scenes[app];
  return <Component />;
}
