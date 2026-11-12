import { Lightbulb } from "@phosphor-icons/react";

// Renders a guide's content blocks (schema in src/data/guides/guides.en.js).

// Width of an image block's `phone` file; the build checks it.
const PHONE_IMAGE_WIDTH = 1080;

// Rendered image width, mirroring .prose in pages.scss: capped at 680px, else
// the article column inside the shell's 24px gutters.
const IMAGE_SIZES = "(min-width: 728px) 680px, calc(100vw - 48px)";

function GuideBlocks({ blocks }) {
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
          <ol key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="note">
            <Lightbulb size={20} weight="duotone" aria-hidden="true" />
            <p>{block.text}</p>
          </div>
        );
      case "image":
        return <GuideImage key={i} block={block} />;
      default:
        throw new Error(`Unknown guide block type "${block.type}"`);
    }
  });
}

/** An illustration, the same file in every language; alt and caption are translated. */
function GuideImage({ block }) {
  const base = import.meta.env.BASE_URL;
  const { src, phone, width, height, alt, caption } = block;
  return (
    <figure className="figure">
      <img
        src={`${base}${src}`}
        srcSet={phone ? `${base}${phone} ${PHONE_IMAGE_WIDTH}w, ${base}${src} ${width}w` : undefined}
        sizes={phone ? IMAGE_SIZES : undefined}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default GuideBlocks;
