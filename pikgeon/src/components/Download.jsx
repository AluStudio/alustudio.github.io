import "../assets/scss/download.scss"
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Download() {
  const { t } = useTranslation();
  const isRtl = (i18n.resolvedLanguage || i18n.language) === 'ar';
  return (
    <>
      <section id="download" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="iOSview.png"
                className="img-fluid"
                alt="App Screenshot"
              />
            </div>

            <div className="col-md-6">
              <h2 className={`mb-3 text-center text-md-start ${isRtl ? 'rtl-text' : ''}`}>
                {t("download.title")}
              </h2>
              <p className={`mb-4 text-center text-md-start  ${isRtl ? 'rtl-text' : ''}`}>
                {t("download.subTitle")}
              </p>

              <div className="download-wrapper">
                {/* Apple 區塊 */}
                <div className="download-item">
                  <a
                    href="https://apps.apple.com/ca/app/pikgeon/id6759579587"
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center px-3 mb-3"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="bi bi-apple me-2"></i>
                    <span>
                      <small className="d-block">
                        {t("download.download_action")}
                      </small>
                    </span>
                  </a>

                  <div className="border bg-white p-2 text-center">
                    <div className="mb-1">
                      <small className={`text-muted ${isRtl ? 'rtl-text' : ''}`}>
                        {t("download.download_iOS_action")}
                      </small>
                    </div>
                    <img
                      src="download_iOS.png"
                      className="img-fluid"
                      alt="iOS App QR Code"
                    />
                  </div>
                </div>

                {/* Android 區塊 */}
                <div className="download-item">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.alu.pikgeon"
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center px-3 mb-3"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="bi bi-google-play me-2"></i>
                    <span>
                      <small className="d-block">
                        {t("download.download_action")}
                      </small>
                    </span>
                  </a>

                  <div className="border bg-white p-2 text-center">
                    <div className="mb-1">
                      <small className={`text-muted ${isRtl ? 'rtl-text' : ''}`}>
                        {t("download.download_android_action")}
                      </small>
                    </div>
                    <img
                      src="download_Android.png"
                      className="img-fluid"
                      alt="Android App QR Code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
