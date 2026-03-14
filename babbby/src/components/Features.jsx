import { useTranslation } from "react-i18next";
import "../assets/scss/features.scss";

const features = [
  {
    key: "daily_plan",
    emoji: "☀️",
  },
  {
    key: "library",
    emoji: "📚",
  },
  {
    key: "materials",
    emoji: "🧶",
  },
  {
    key: "stats",
    emoji: "📊",
  },
];

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.key}>
            <span className="feature-emoji">{f.emoji}</span>
            <h3 className="feature-title">
              {t(`features.${f.key}.title`)}
            </h3>
            <p className="feature-desc">
              {t(`features.${f.key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
