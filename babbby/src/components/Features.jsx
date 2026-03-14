import { useTranslation } from "react-i18next";
import "../assets/scss/features.scss";

const features = [
  {
    key: "daily_plan",
    icon: "bi-calendar2-check",
  },
  {
    key: "library",
    icon: "bi-collection",
  },
  {
    key: "materials",
    icon: "bi-box-seam",
  },
  {
    key: "stats",
    icon: "bi-bar-chart-line",
  },
];

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.key}>
            <div className="feature-icon">
              <i className={`bi ${f.icon}`}></i>
            </div>
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
