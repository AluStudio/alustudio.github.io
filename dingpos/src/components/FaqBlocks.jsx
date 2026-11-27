// Renders FAQ article content blocks (schema in src/data/faq/articles.zh-Hant.js).
import { Info } from "@phosphor-icons/react";
import Figure from "./Figure";
import { currentLanguage } from "../i18n";
import { faqShotPath, faqShotSize, hasPhoneShot } from "../data/faq/shots";

function FaqBlocks({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return <p key={i}>{block.text}</p>;
      case "h2":
        return <h2 key={i}>{block.text}</h2>;
      case "list":
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      case "steps":
        return (
          <ol key={i} className="steps-list">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="note">
            <Info size={20} weight="fill" aria-hidden="true" />
            <p>{block.text}</p>
          </div>
        );
      case "shot": {
        const [width, height] = faqShotSize(currentLanguage, block.name);
        return (
          <Figure
            key={i}
            src={faqShotPath(currentLanguage, block.name)}
            phone={hasPhoneShot(currentLanguage, block.name) ? faqShotPath(currentLanguage, block.name, true) : undefined}
            width={width}
            height={height}
            displayWidth={Math.round(width / 2)}
            alt={block.alt}
            caption={block.caption}
          />
        );
      }
      case "video":
        return (
          <figure key={i} className="media">
            <video src={block.src} poster={block.poster} controls playsInline preload="metadata" />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
      case "youtube":
        return (
          <figure key={i} className="media media--embed">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${block.id}`}
              title={block.caption || "video"}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
      default:
        return null;
    }
  });
}

export default FaqBlocks;
