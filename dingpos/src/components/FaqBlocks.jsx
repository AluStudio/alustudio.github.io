// Renders FAQ article content blocks. Media types (image / video / youtube)
// are supported so future articles can embed screenshots and walkthroughs
// without touching the renderer.
import { Info } from "@phosphor-icons/react";

function FaqBlocks({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return <p key={i}>{block.text}</p>;
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
      case "image":
        return (
          <figure key={i} className="media">
            <img src={block.src} alt={block.alt || ""} loading="lazy" />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
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
