import { useTranslation } from "react-i18next";
import "../assets/scss/stats.scss";
function Stats() {
  const { t } = useTranslation();
  const statsList = [
    { key: "ranking_friends", icon: "bi-people-fill" },
    { key: "ranking_postcards", icon: "bi-card-image" },
    { key: "monthly_trend", icon: "bi-graph-up-arrow" },
  ];
  return (
    <>
      <section id="stats" className="stats-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="text-primary text-center fw-bold mb-3">
              {t("stats.title")}
            </h2>
            <p className="text-center text-muted mb-5">{t("stats.subtitle")}</p>
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src="stats.png"
                alt="Statistics Illustration"
                className="img-fluid stats-image shadow-sm"
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="stats-list">
                {statsList.map((item) => (
                  <div
                    className="stats-item d-flex align-items-start mb-4"
                    key={item.key}
                  >
                    <div className="stats-icon-box me-3">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">
                        {t(`stats.${item.key}.title`)}
                      </h4>
                      <p className="text-secondary mb-0">
                        {t(`stats.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
