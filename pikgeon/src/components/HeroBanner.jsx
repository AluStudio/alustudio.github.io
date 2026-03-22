import { useTranslation } from "react-i18next";
import "../assets/scss/HeroBanner.scss";
import i18n from "../i18n";
const HeroBanner = () => {
  const { t } = useTranslation();
  const isRtl = (i18n.resolvedLanguage || i18n.language) === 'ar';

  return (
    <section id="home" className="hero-banner d-flex align-items-center">
      {/* 背景裝飾光暈 */}
      <div className="blob-decoration"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* 左側：文案與按鈕 */}
          <div className="col-lg-6 text-start mb-5 mb-lg-0 content-fade-in">
            <h1 className={`display-4 fw-bold mb-3 main-title ${isRtl ? 'rtl-text' : ''}`}>
              {t("banner.title")}
            </h1>
            <p className={`lead mb-5 subtitle-text ${isRtl ? 'rtl-text' : ''}`}>{t("banner.subtitle")}</p>

            <div className="download-buttons d-flex flex-wrap gap-3">
              {/* App Store */}
              <a
                href="https://apps.apple.com/ca/app/pikgeon/id6759579587"
                className={`btn download-btn d-flex align-items-center py-2 px-3 ${isRtl ? 'rtl-text' : ''}`}
              >
                <i className="bi bi-apple fs-2 me-2"></i>
                <div className="btn-text-container">
                  <small>{t("banner.app_store.sub")}</small>
                  <strong>{t("banner.app_store.main")}</strong>
                </div>
              </a>

              {/* Play Store */}
              <a
                href="#"
                className={`btn download-btn d-flex align-items-center py-2 px-3 ${isRtl ? 'rtl-text' : ''}`}
              >
                <i className="bi bi-google-play fs-3 me-2"></i>
                <div className="btn-text-container">
                  <small>{t("banner.play_store.sub")}</small>
                  <strong>{t("banner.play_store.main")}</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center position-relative">
            <div className="hero-img-wrapper">
              <img
                src="iOSview.png"
                alt="App Preview"
                className="img-fluid floating-mockup ios-view-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
