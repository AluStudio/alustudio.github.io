import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useStory } from "../story";
import { RING_SIZE_ROWS } from "../data/guides/ring-sizes";

// Small redraws of three app screens for the feature cards. Each one rests on
// its finished frame (what prerender captures) and acts out its feature once
// in view; the card's own copy carries the meaning, so these are aria-hidden.

// ─── Ring size: one size, read in each system the app converts between ───

const US_SIX = RING_SIZE_ROWS[2];
// The app's ring unit picker order: US, EU, UK, JP.
const RING_SYSTEMS = [
  ["US", US_SIX[0]],
  ["EU", US_SIX[4]],
  ["UK", US_SIX[3]],
  ["JP", US_SIX[5]],
];
const ringSteps = RING_SYSTEMS.map((_, i) => ({ active: i, ms: i === 0 ? 2600 : 1700 }));

export function RingVisual() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const step = useStory(ref, ringSteps, 500, 0);

  return (
    <div className="visual visual--ring" ref={ref} aria-hidden="true">
      <div className="ring">
        <div className="ring__head">
          <span className="ring__label">{t("scene.ring_label")}</span>
          <span className="ring__mm">⌀ {US_SIX[2]} mm</span>
        </div>
        <div className="ring__values">
          {RING_SYSTEMS.map(([system, size], i) => (
            <span key={system} className="ring__value" data-active={i === step.active || undefined}>
              {size}
              <small>{system}</small>
            </span>
          ))}
        </div>
        <div className="ring__segments" style={{ "--active": step.active }}>
          <span className="ring__thumb" />
          {RING_SYSTEMS.map(([system], i) => (
            <span key={system} className="ring__segment" data-active={i === step.active || undefined}>
              {system}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Questions: the top card is set aside and the next one comes forward ───

const promptSteps = [0, 1, 2].flatMap((front) => [
  { front, ms: 2800 },
  { front, leaving: true, ms: 420 },
]);

export function PromptVisual() {
  const { t } = useTranslation();
  const prompts = t("scene.prompts", { returnObjects: true });
  const ref = useRef(null);
  const step = useStory(ref, promptSteps, 1300, 0);
  const count = prompts.length;

  return (
    <div className="visual visual--prompts" ref={ref} aria-hidden="true">
      <p className="prompts__title">
        <i className="bi bi-chat-heart"></i>
        {t("scene.prompts_title")}
      </p>
      <div className="prompts__stack">
        {prompts.map((text, i) => {
          const slot = (i - step.front + count) % count;
          const leaving = slot === 0 && step.leaving;
          return (
            <p
              key={text}
              className="prompts__card"
              data-slot={slot}
              data-leaving={leaving || undefined}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

// ─── Themes: the selection steps through the app's eight color themes ───

// Mirrors sotto-ios AppTheme: background, surface, primary text, accent.
const THEMES = [
  ["#F4EFE8", "#FBF8F3", "#1C1A17", "#8B6B3A"], // Porcelain
  ["#EDEDEE", "#FAFAFB", "#111113", "#1A1A1E"], // Graphite
  ["#E5E7ED", "#ECEDF2", "#4A4D58", "#868EB2"], // Mist
  ["#EFEAE0", "#F8F4EB", "#2A2720", "#5C6B3E"], // Linen
  ["#E4E7E1", "#F1F3ED", "#1E231B", "#3E6B47"], // Moss
  ["#E2E4EB", "#F0F1F6", "#161926", "#3B4E88"], // Indigo
  ["#EDE3D9", "#F6EFE4", "#2A201A", "#A14A2F"], // Clay
  ["#15161A", "#1C1D22", "#F0EEE9", "#D9C38A"], // Obsidian
];
const themeSteps = THEMES.map((_, i) => ({ active: i, ms: i === 0 ? 2400 : 1300 }));

export function ThemeVisual() {
  const ref = useRef(null);
  const step = useStory(ref, themeSteps, 700, 0);
  const [bg, surface, ink, accent] = THEMES[step.active];

  return (
    <div className="visual visual--themes" ref={ref} aria-hidden="true">
      <div
        className="themes__preview"
        style={{ "--t-bg": bg, "--t-surface": surface, "--t-ink": ink, "--t-accent": accent }}
      >
        <span className="themes__avatar" />
        <span className="themes__lines">
          <span />
          <span />
        </span>
        <span className="themes__rows">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="themes__swatches">
        {THEMES.map(([swatchBg, , , swatchAccent], i) => (
          <span
            key={swatchBg}
            className="themes__swatch"
            data-active={i === step.active || undefined}
            style={{ "--s-bg": swatchBg, "--s-accent": swatchAccent }}
          />
        ))}
      </div>
    </div>
  );
}
