// Renders a guide's content blocks (schema in src/data/guides/guides.zh-Hant.js).
import { Info } from "@phosphor-icons/react";
import TransitionLink from "./TransitionLink";
import { INLINE_LINK } from "../data/guides/links.js";

// Width of an image block's `phone` file; the build checks it.
const PHONE_IMAGE_WIDTH = 1080;

// Rendered image width, mirroring .figure in pages/article.scss: capped at
// 480px, else the article column inside the shell's 24px gutters.
const IMAGE_SIZES = "(min-width: 528px) 480px, calc(100vw - 48px)";

/** Text with [label](/route/) and [label](https://…) links; the build checks every target. */
function InlineText({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_LINK)) {
    const [whole, label, href] = match;
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      href.startsWith("/") ? (
        <TransitionLink key={match.index} to={href}>
          {label}
        </TransitionLink>
      ) : (
        <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ),
    );
    last = match.index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function GuideBlocks({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return (
          <p key={i}>
            <InlineText text={block.text} />
          </p>
        );
      case "h2":
        return <h2 key={i}>{block.text}</h2>;
      case "list":
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                <InlineText text={item} />
              </li>
            ))}
          </ul>
        );
      case "steps":
        return (
          <ol key={i} className="steps-list">
            {block.items.map((item, j) => (
              <li key={j}>
                <InlineText text={item} />
              </li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="note">
            <Info size={20} weight="fill" aria-hidden="true" />
            <p>
              <InlineText text={block.text} />
            </p>
          </div>
        );
      case "table":
        return (
          <div key={i} className="table-wrap">
            <table className="table">
              {block.caption && <caption>{block.caption}</caption>}
              <thead>
                <tr>
                  {block.head.map((cell, j) => (
                    <th key={j} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) =>
                      k === 0 ? (
                        <th key={k} scope="row">
                          <InlineText text={cell} />
                        </th>
                      ) : (
                        <td key={k}>
                          <InlineText text={cell} />
                        </td>
                      ),
                    )}
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

/** A product screenshot crop: pure screen pixels, framed by CSS. */
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
