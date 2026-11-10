import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BatteryFull,
  BookOpen,
  Camera,
  CaretDown,
  CaretLeft,
  CaretRight,
  CellSignalFull,
  ChartBar,
  ChatText,
  Check,
  Eye,
  GearSix,
  HandPalm,
  Heart,
  House,
  Palette,
  PencilSimple,
  PersonSimpleRun,
  Plus,
  PuzzlePiece,
  Sun,
  WifiHigh,
} from "@phosphor-icons/react";
import { useStory } from "../story";
import { sceneActivity, sceneCalendar, sceneMaterial, sceneString } from "../data/scenes";
import {
  AGE_RANGES,
  LIBRARY_CELLS,
  MATERIAL_CHIPS,
  MATERIAL_STEPS,
  TODAY_ACTIVITIES,
  activityKey,
} from "../data/scenes/keys";

// Redraws of the Babbby app's screens (babbby-ios, "Soft Earth" design). Each
// rests on its finished frame, which is what prerender captures and reduced
// motion shows, and acts out its feature once in view. Every label is the
// app's own string or activity (data/scenes); the child's name and the stats
// are demo data.

// The app's category glyphs (ActivityCategory.icon), as Phosphor icons.
const CATEGORY_ICONS = {
  gross_motor: [PersonSimpleRun, "bold"],
  fine_motor: [HandPalm, "regular"],
  language: [ChatText, "regular"],
  cognitive: [PuzzlePiece, "fill"],
  social_emotional: [Heart, "fill"],
  sensory: [Eye, "regular"],
  creative: [Palette, "fill"],
  daily_life: [House, "fill"],
};

function CategoryIcon({ id, size = 12 }) {
  const [Icon, weight] = CATEGORY_ICONS[id];
  return <Icon size={size} weight={weight} />;
}

function CategoryChip({ id }) {
  return (
    <span className={`bb-chip cat--${id}`}>
      <CategoryIcon id={id} />
      {sceneString(`category.${id}`)}
    </span>
  );
}

function Phone({ children, className = "" }) {
  return (
    <div className={`bb-phone ${className}`}>
      <div className="bb-phone__screen">
        <div className="bb-phone__status">
          <span>9:41</span>
          <span className="bb-phone__glyphs">
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

const TABS = [
  { key: "tab.today", Icon: Sun },
  { key: "tab.library", Icon: BookOpen },
  { key: "tab.stats", Icon: ChartBar },
  { key: "tab.settings", Icon: GearSix },
];

function TabBar({ active }) {
  return (
    <div className="bb-tabs">
      {TABS.map((tab) => (
        <span key={tab.key} className="bb-tabs__item" data-active={tab.key === active || undefined}>
          <tab.Icon size={18} weight="regular" />
          {sceneString(tab.key)}
        </span>
      ))}
    </div>
  );
}

// ─── Today: the first activity is checked off and moves to the end ───────

// Slot of each activity per step. Done cards go last, the way TodayView
// sorts them; the list then fades out and back in at its resting order.
const RESTING = [0, 1, 2, 3];
const MOVED = [3, 0, 1, 2];

const todaySteps = [
  { slots: RESTING, ms: 3200 },
  { slots: RESTING, tap: true, ms: 260 },
  { slots: RESTING, done: true, burst: true, ms: 700 },
  { slots: MOVED, done: true, prompt: true, ms: 2200 },
  { slots: MOVED, done: true, ms: 1300 },
  { slots: MOVED, done: true, hidden: true, ms: 420 },
  { slots: RESTING, hidden: true, instant: true, ms: 80 },
];

export function TodayScene({ delay = 0 }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const step = useStory(ref, todaySteps, delay, 1);
  const calendar = sceneCalendar();

  return (
    <div className="today-scene" ref={ref} role="img" aria-label={t("home.hero.phone_alt")}>
      <Phone>
        <div className="bb-today" aria-hidden="true">
          <div className="bb-nav">
            <span className="bb-nav__title">{sceneString("today.title")}</span>
            <span className="bb-nav__button">
              <PencilSimple size={16} />
            </span>
          </div>

          <div className="bb-babies">
            <span className="bb-baby">
              <span className="bb-baby__avatar">{t("scene.child_initial")}</span>
              {t("scene.child")}
            </span>
            <span className="bb-babies__add">
              <Plus size={14} />
            </span>
          </div>

          <div className="bb-week">
            <p className="bb-week__range">{calendar.week}</p>
            <div className="bb-week__row">
              <CaretLeft size={14} weight="bold" className="bb-week__arrow" />
              {calendar.weekdays.map((day, i) => (
                <span key={i} className="bb-week__day" data-today={i === 6 || undefined}>
                  <span>{day}</span>
                  <span className="bb-week__date">{i + 1}</span>
                </span>
              ))}
              <CaretRight size={14} weight="bold" className="bb-week__arrow" data-disabled />
            </div>
          </div>

          <ul className="bb-plan" data-hidden={step.hidden || undefined} data-instant={step.instant || undefined}>
            {TODAY_ACTIVITIES.map((ref, i) => {
              const done = i === TODAY_ACTIVITIES.length - 1 || (i === 0 && step.done);
              return (
                <li key={activityKey(ref)} className="bb-card" data-done={done || undefined} style={{ "--slot": step.slots[i] }}>
                  <span className={`bb-card__edge cat--${ref.category}`} />
                  <span className="bb-check" data-pressed={(i === 0 && step.tap) || undefined}>
                    <span className="bb-check__fill">
                      <Check size={12} weight="bold" />
                    </span>
                    {i === 0 && step.burst && (
                      <span className="bb-burst">
                        {Array.from({ length: 8 }, (_, k) => (
                          <span key={k} className={`cat--${["gross_motor", "fine_motor", "language", "cognitive"][k % 4]}`} style={{ "--a": `${k * 45}deg` }} />
                        ))}
                      </span>
                    )}
                  </span>
                  <span className="bb-card__body">
                    <span className="bb-card__title">{sceneActivity(ref)}</span>
                    <span className="bb-card__meta">
                      <CategoryChip id={ref.category} />
                      <span className="bb-card__age">{sceneString(`ageRange.${ref.age}`)}</span>
                    </span>
                  </span>
                  <Camera size={16} className="bb-card__icon" />
                  <CaretDown size={12} weight="bold" className="bb-card__icon" />
                </li>
              );
            })}
          </ul>

          <span className="bb-toast" data-shown={step.prompt || undefined}>
            <Camera size={14} weight="fill" />
            {sceneString("photo.prompt")}
          </span>
        </div>
        <TabBar active="tab.today" />
      </Phone>
    </div>
  );
}

// ─── Library: the age filter steps through every stage ──────────────────

const RESTING_AGE = AGE_RANGES.indexOf("12-18m");
const libraryAgeOrder = AGE_RANGES.map((_, i) => (RESTING_AGE + i) % AGE_RANGES.length);
const librarySteps = libraryAgeOrder.map((age, i) => ({ age, ms: i === 0 ? 2200 : 1150 }));

export function LibraryScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, librarySteps, delay, 0);
  const age = AGE_RANGES[step.age];
  const cells = LIBRARY_CELLS[age];

  return (
    <div className="scene scene--library" ref={ref} aria-hidden="true">
      <div className="bb-panel">
        <p className="bb-label">{sceneString("filter.age")}</p>
        <div className="bb-chips">
          {AGE_RANGES.map((id, i) => (
            <span key={id} className="bb-filter" data-selected={i === step.age || undefined}>
              {sceneString(`ageRange.${id}`)}
            </span>
          ))}
        </div>
        <div className="bb-grid">
          {cells.map((cell) => (
            <span key={activityKey(cell)} className="bb-cell">
              <span className={`bb-cell__edge cat--${cell.category}`} />
              <span className={`bb-cell__icon cat--${cell.category}`}>
                <CategoryIcon id={cell.category} size={16} />
              </span>
              <span className="bb-cell__title">{sceneActivity(cell)}</span>
              <span className="bb-cell__age">{sceneString(`ageRange.${age}`)}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Materials: one material at a time is picked or put back ────────────

const materialSteps = MATERIAL_STEPS.map((_, i) => ({ index: i, ms: i === 0 ? 2400 : 1500 }));

export function MaterialsScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, materialSteps, delay, 0);
  const { selected, results } = MATERIAL_STEPS[step.index];

  return (
    <div className="scene scene--materials" ref={ref} aria-hidden="true">
      <div className="bb-panel">
        <p className="bb-sheet-title">{sceneString("materialSelector.title")}</p>
        <p className="bb-sheet-sub">{sceneString("materialSelector.subtitle")}</p>
        <div className="bb-chips">
          {MATERIAL_CHIPS.map((id) => (
            <span key={id} className="bb-filter" data-selected={selected.includes(id) || undefined}>
              {selected.includes(id) && <Check size={12} weight="bold" />}
              {sceneMaterial(id)}
            </span>
          ))}
        </div>
        <ul className="bb-results">
          {results.map((result) => (
            <li key={activityKey(result)} className="bb-row">
              <span className={`bb-cell__icon cat--${result.category}`}>
                <CategoryIcon id={result.category} size={16} />
              </span>
              <span className="bb-row__title">{sceneActivity(result)}</span>
              <span className="bb-row__age">{sceneString(`ageRange.${result.age}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Stats: the range switches from 7 days to 30 days to all time ───────

// Demo counts for a 12 to 18 month old, whose stage has six categories.
// Each range's categories and trend bars add up to its total.
const RANGES = [
  {
    key: "stats.range.week",
    total: 23,
    categories: [6, 5, 4, 4, 3, 1],
    bars: [3, 4, 2, 5, 3, 4, 2],
  },
  {
    key: "stats.range.month",
    total: 97,
    categories: [22, 19, 17, 16, 14, 9],
    bars: [2, 3, 4, 3, 2, 5, 4, 3, 2, 4, 3, 5, 4, 3, 2, 3, 4, 3, 5, 4, 2, 3, 4, 3, 2, 4, 3, 4, 2, 2],
  },
  {
    key: "stats.range.all",
    total: 286,
    categories: [62, 55, 49, 47, 41, 32],
    bars: [31, 44, 52, 49, 58, 52],
  },
];
const STATS_CATEGORIES = ["gross_motor", "fine_motor", "language", "cognitive", "social_emotional", "sensory"];
const statsSteps = [0, 1, 2].map((range) => ({ range, ms: range === 0 ? 2600 : 2400 }));

// Counts from the shown number to the new one; the first render is the
// resting value itself, so prerender and hydration agree.
function useCount(target) {
  const [value, setValue] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const start = from.current;
    if (start === target) return undefined;
    const began = performance.now();
    let frame;
    const tick = (now) => {
      const k = Math.min(1, (now - began) / 700);
      const eased = 1 - Math.pow(1 - k, 3);
      const next = Math.round(start + (target - start) * eased);
      from.current = next;
      setValue(next);
      if (k < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}

const DONUT_R = 34;
const DONUT_C = 2 * Math.PI * DONUT_R;

export function StatsScene({ delay = 0 }) {
  const ref = useRef(null);
  const step = useStory(ref, statsSteps, delay, 0);
  const range = RANGES[step.range];
  const count = useCount(range.total);
  const max = Math.max(...range.bars);
  // Each segment starts where the ones before it end.
  const lengths = range.categories.map((value) => (value / range.total) * DONUT_C);
  const starts = lengths.map((_, i) => lengths.slice(0, i).reduce((sum, length) => sum + length, 0));

  return (
    <div className="scene scene--stats" ref={ref} aria-hidden="true">
      <div className="bb-panel bb-stats">
        <div className="bb-segment" style={{ "--active": step.range }}>
          <span className="bb-segment__thumb" />
          {RANGES.map(({ key }, i) => (
            <span key={key} className="bb-segment__item" data-active={i === step.range || undefined}>
              {sceneString(key)}
            </span>
          ))}
        </div>

        <div className="bb-stats__grid">
          <div className="bb-stats__card">
            <p className="bb-label">{sceneString("stats.summary.label")}</p>
            <p className="bb-stats__count">{count}</p>
            <p className="bb-label bb-stats__trend-title">{sceneString("stats.trend.title")}</p>
            <div className="bb-bars" style={{ "--n": range.bars.length }}>
              {range.bars.map((value, i) => (
                <span key={`${step.range}-${i}`} className="bb-bars__bar" style={{ "--h": value / max }} />
              ))}
            </div>
          </div>

          <div className="bb-stats__card">
            <p className="bb-label">{sceneString("stats.category.title")}</p>
            <div className="bb-donut">
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r={DONUT_R} className="bb-donut__track" />
                {lengths.map((length, i) => (
                  <circle
                    key={STATS_CATEGORIES[i]}
                    cx="40"
                    cy="40"
                    r={DONUT_R}
                    className={`bb-donut__segment cat--${STATS_CATEGORIES[i]}`}
                    style={{ strokeDasharray: `${Math.max(length - 2, 0)} ${DONUT_C}`, strokeDashoffset: -starts[i] }}
                  />
                ))}
              </svg>
            </div>
            <ul className="bb-legend">
              {STATS_CATEGORIES.slice(0, 4).map((id, i) => (
                <li key={id}>
                  <span className={`bb-legend__dot cat--${id}`} />
                  <span className="bb-legend__name">{sceneString(`category.${id}`)}</span>
                  <span className="bb-legend__value">{range.categories[i]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
