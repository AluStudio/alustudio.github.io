import { useTranslation } from "react-i18next";
import "../assets/scss/features.scss";

function Features() {
  const { t } = useTranslation();
  const steps = [
    { key: "step1", icon: "bi-send-plus" },
    { key: "step2", icon: "bi-text-paragraph" },
    { key: "step3", icon: "bi-journal-text" },
  ];
  return (
    <>
      <section id="features" className="feature-flow py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="fw-bold display-6"
              style={{ color: "var(--bs-primary)" }}
            >
              {t("features.title")}
            </h2>
            <p className="text-muted">{t("features.subtitle")}</p>
          </div>

          <div className="row g-0 justify-content-center">
            {steps.map((step, index) => (
              <div className="col-lg-4 col-md-6 process-item" key={step.key}>
                <div className="process-card">
                  <div className="step-number">{index + 1}</div>

                  {/* 圖示區域與動畫線 */}
                  <div className="icon-wrapper mb-4">
                    <div className="icon-circle">
                      <i className={`bi ${step.icon}`}></i>
                    </div>
                    {/* 在第二步 (OCR) 加入掃描動畫線 */}
                    {step.key === "step2" && <div className="scan-line"></div>}
                  </div>

                  <h4 className="text-center text-primary">
                    {t(`features.${step.key}.title`)}
                  </h4>
                  <p className="text-center text-dark">
                    {t(`features.${step.key}.desc`)}
                  </p>
                </div>

                {index < 2 && (
                  <div className="d-none d-lg-block connector-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
