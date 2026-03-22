import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./faq.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

/**
 * FAQ item data — each entry maps to a translation key under `faq.items.<id>`.
 * To add a new FAQ: append an object here and add matching i18n keys.
 *
 * Supported fields per item:
 *   id        — unique key (matches translation namespace)
 *   icon      — Bootstrap Icons class
 *   images    — array of { src, alt, caption? }  (optional)
 */
const faqItems = [
  {
    id: "merge_friends",
    icon: "bi-people",
    images: [
      {
        src: `${base}faq/merge-friends-button.png`,
        alt: "merge-friends-button",
        captionKey: "faq.items.merge_friends.caption",
      },
    ],
  },
  {
    id: "recognition_fail",
    icon: "bi-exclamation-triangle",
    images: [
      {
        src: `${base}faq/no-friend-name-vertical.png`,
        alt: "postcard-without-friend-name-1",
        captionKey: "faq.items.recognition_fail.caption_1",
      },
      {
        src: `${base}faq/no-friend-name-horizontal.png`,
        alt: "postcard-without-friend-name-2",
        captionKey: "faq.items.recognition_fail.caption_2",
      },
    ],
  },
];

function FaqItem({ item, isOpen, onToggle, t }) {
  return (
    <div className={`faq-card ${isOpen ? "faq-card--open" : ""}`}>
      <button
        className="faq-card__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="faq-card__icon">
          <i className={`bi ${item.icon}`}></i>
        </div>
        <h2 className="faq-card__title">
          {t(`faq.items.${item.id}.title`)}
        </h2>
        <i className={`bi bi-chevron-down faq-card__chevron`}></i>
      </button>

      <div className="faq-card__body-wrapper">
        <div className="faq-card__body">
          <p className="faq-card__answer">
            {t(`faq.items.${item.id}.answer`)}
          </p>

          {/* Render bullet points if present */}
          {t(`faq.items.${item.id}.bullets`, { returnObjects: true, defaultValue: null }) &&
            Array.isArray(t(`faq.items.${item.id}.bullets`, { returnObjects: true })) && (
              <ul className="faq-card__bullets">
                {t(`faq.items.${item.id}.bullets`, { returnObjects: true }).map(
                  (bullet, i) => (
                    <li key={i}>{bullet}</li>
                  )
                )}
              </ul>
            )}

          {/* Render images */}
          {item.images && item.images.length > 0 && (
            <div className="faq-card__images">
              {item.images.map((img, i) => (
                <figure key={i} className="faq-card__figure">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="faq-card__img"
                    loading="lazy"
                  />
                  {img.captionKey && (
                    <figcaption className="faq-card__caption">
                      {t(img.captionKey)}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {/* Render extra note if present */}
          {t(`faq.items.${item.id}.note`, { defaultValue: "" }) && (
            <p className="faq-card__note">
              <i className="bi bi-info-circle"></i>
              {t(`faq.items.${item.id}.note`)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-open first item
  useEffect(() => {
    if (faqItems.length > 0) {
      setOpenId(faqItems[0].id);
    }
  }, []);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="faq-page">
            <header className="faq-header">
              <h1>{t("faq.title")}</h1>
              <p className="faq-subtitle">{t("faq.subtitle")}</p>
            </header>

            <div className="faq-list">
              {faqItems.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  t={t}
                />
              ))}
            </div>

            {/* Contact CTA */}
            <div className="faq-contact">
              <p>{t("faq.contact_prompt")}</p>
              <a
                href="mailto:alustudio14@gmail.com?subject=[Pikgeon] FAQ"
                className="faq-contact__link"
              >
                <i className="bi bi-envelope"></i>
                alustudio14@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FaqPage;
