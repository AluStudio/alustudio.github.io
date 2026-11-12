// Renders a guide's content blocks (schema in src/data/guides/guides.en.js).

// Width of an image block's `phone` file; the build checks it.
const PHONE_IMAGE_WIDTH = 1080;

// Rendered image width, mirroring .guide-article in guides.scss: capped at
// 720px, else the viewport minus the page gutters (24px, 40px below 576px).
// Measured in the browser; change it with the article's layout.
const IMAGE_SIZES = "(min-width: 744px) 720px, (min-width: 576px) calc(100vw - 24px), calc(100vw - 40px)";

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
          <ol key={i} className="guide-steps">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="guide-note">
            <i className="bi bi-lightbulb" aria-hidden="true"></i>
            <p>{block.text}</p>
          </div>
        );
      case "table":
        return (
          <div key={i} className="guide-table-wrap">
            <table className="guide-table">
              {block.caption && <caption>{block.caption}</caption>}
              <thead>
                <tr>
                  {block.head.map((cell, j) => (
                    <th key={j} scope="col">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
    <figure className="guide-figure">
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
