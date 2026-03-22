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
 *   id          — unique key (matches translation namespace)
 *   icon        — Bootstrap Icons class
 *   badge       — { labelKey, variant } version/requirement badge (optional)
 *   video       — { src, poster? }  embedded video (optional)
 *   steps       — array of { src, alt, captionKey }  numbered step images (optional)
 *   images      — array of { src, alt, captionKey? }  gallery images (optional)
 *   downloads   — array of { href, labelKey, icon }  download buttons (optional)
 */
const faqItems = [
  {
    id: "shortcut_tutorial",
    icon: "bi-arrow-repeat",
    badge: { labelKey: "faq.items.shortcut_tutorial.badge", variant: "warning" },
    video: { src: `${base}faq/shortcut-tutorial.mp4` },
    steps: [
      {
        src: `${base}faq/shortcut-step1.png`,
        alt: "shortcut-step-1",
        captionKey: "faq.items.shortcut_tutorial.step1_caption",
      },
      {
        src: `${base}faq/shortcut-step2.png`,
        alt: "shortcut-step-2",
        captionKey: "faq.items.shortcut_tutorial.step2_caption",
      },
      {
        src: `${base}faq/shortcut-step3.png`,
        alt: "shortcut-step-3",
        captionKey: "faq.items.shortcut_tutorial.step3_caption",
      },
    ],
    downloads: [
      {
        href: `${base}faq/import-to-pikgeon.shortcut`,
        labelKey: "faq.items.shortcut_tutorial.download_shortcut",
        icon: "bi-download",
      },
    ],
  },
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

function TutorialTabs({ item, t }) {
  const [tab, setTab] = useState("video");
  const hasVideo = !!item.video;
  const hasSteps = item.steps && item.steps.length > 0;

  // If only one type, skip tabs
  if (!hasVideo && !hasSteps) return null;
  if (hasVideo && !hasSteps) {
    return (
      <div className="faq-card__video-wrap">
        <video
          src={item.video.src}
          controls
          playsInline
          preload="metadata"
          className="faq-card__video"
        />
      </div>
    );
  }
  if (!hasVideo && hasSteps) {
    return <StepImages steps={item.steps} t={t} />;
  }

  return (
    <div className="faq-tutorial">
      <div className="faq-tutorial__tabs">
        <button
          className={`faq-tutorial__tab ${tab === "video" ? "faq-tutorial__tab--active" : ""}`}
          onClick={() => setTab("video")}
        >
          <i className="bi bi-play-circle"></i>
          {t("faq.tab_video")}
        </button>
        <button
          className={`faq-tutorial__tab ${tab === "steps" ? "faq-tutorial__tab--active" : ""}`}
          onClick={() => setTab("steps")}
        >
          <i className="bi bi-images"></i>
          {t("faq.tab_steps")}
        </button>
      </div>

      {tab === "video" && (
        <div className="faq-card__video-wrap">
          <video
            src={item.video.src}
            controls
            playsInline
            preload="metadata"
            className="faq-card__video"
          />
        </div>
      )}

      {tab === "steps" && <StepImages steps={item.steps} t={t} />}
    </div>
  );
}

function StepImages({ steps, t }) {
  return (
    <div className="faq-steps">
      {steps.map((step, i) => (
        <figure key={i} className="faq-steps__item">
          <div className="faq-steps__badge">{i + 1}</div>
          <img
            src={step.src}
            alt={step.alt}
            className="faq-steps__img"
            loading="lazy"
          />
          {step.captionKey && (
            <figcaption className="faq-steps__caption">
              {t(step.captionKey)}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

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
        <div className="faq-card__header-text">
          <h2 className="faq-card__title">
            {t(`faq.items.${item.id}.title`)}
          </h2>
          {item.badge && (
            <span className={`faq-card__badge faq-card__badge--${item.badge.variant || "info"}`}>
              {t(item.badge.labelKey)}
            </span>
          )}
        </div>
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

          {/* Download buttons */}
          {item.downloads && item.downloads.length > 0 && (
            <div className="faq-card__downloads">
              {item.downloads.map((dl, i) => (
                <a
                  key={i}
                  href={dl.href}
                  download
                  className="faq-card__download-btn"
                >
                  <i className={`bi ${dl.icon}`}></i>
                  {t(dl.labelKey)}
                </a>
              ))}
            </div>
          )}

          {/* Tutorial: video + step tabs */}
          <TutorialTabs item={item} t={t} />

          {/* Render gallery images */}
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
