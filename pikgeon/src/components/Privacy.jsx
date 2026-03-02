import { useTranslation } from 'react-i18next';
import '../assets/scss/privacy.scss';

function Privacy() {
    const { t } = useTranslation();

  const features = [
    { key: 'local_storage', icon: 'bi-device-hdd' },
    { key: 'offline_ocr', icon: 'bi-eye-slash' },
    { key: 'no_tracking', icon: 'bi-shield-check' }
  ];

  return (
    <section id='privacy' className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-primary">{t('privacy.title')}</h2>
          <p className="text-muted">{t('privacy.subtitle')}</p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((item) => (
            <div className="col-md-4" key={item.key}>
              <div className="privacy-card h-100">
                <div className="icon-wrapper mb-3">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className='text-center'>{t(`privacy.${item.key}.title`)}</h3>
                <p className='text-center'>{t(`privacy.${item.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy