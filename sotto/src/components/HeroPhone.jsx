import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useStory } from "../story";
import { RING_SIZE_ROWS } from "../data/guides/ring-sizes";

// The app's person page, redrawn: a gift idea is cleared and written again,
// then saved. Field labels are the app's own localized strings.

const US_SIX = RING_SIZE_ROWS[2];

function typingSteps(length) {
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

function HeroPhone() {
  const { t } = useTranslation();
  const s = t("scene", { returnObjects: true });
  const ref = useRef(null);
  const glyphs = useMemo(() => Array.from(s.fields[0].value), [s.fields]);
  const steps = useMemo(() => typingSteps(glyphs.length), [glyphs.length]);
  const step = useStory(ref, steps, 900, 1);

  const fields = [...s.fields, { label: s.ring_label, value: `${US_SIX[0]} US` }];

  return (
    <div className="phone" ref={ref} role="img" aria-label={s.alt}>
      <div className="phone__screen">
        <div className="phone__status" aria-hidden="true">
          <span>9:41</span>
          <span className="phone__glyphs">
            <i className="bi bi-reception-4"></i>
            <i className="bi bi-wifi"></i>
            <i className="bi bi-battery-full"></i>
          </span>
        </div>
        <div className="app">
          <div className="app__nav">
            <span className="app__circle">
              <i className="bi bi-chevron-left"></i>
            </span>
            <span className="app__pill">{s.edit}</span>
          </div>
          <div className="app__profile">
            <span className="app__avatar">{s.initials}</span>
            <div>
              <p className="app__name">{s.name}</p>
              <p className="app__meta">{s.meta}</p>
            </div>
          </div>
          <p className="app__bio">{s.bio}</p>
          <ul className="app__fields">
            {fields.map((field, i) => (
              <li
                key={field.label}
                className="app__field"
                data-editing={(i === 0 && (step.editing || step.saved)) || undefined}
              >
                <span className="app__label">{field.label}</span>
                <span className="app__value">
                  {i === 0 ? glyphs.slice(0, step.typed).join("") : field.value}
                  {i === 0 && step.editing && <span className="app__caret" />}
                </span>
                {i === 0 && (
                  <span className="app__saved" data-shown={step.saved || undefined}>
                    <i className="bi bi-check-lg"></i>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroPhone;
