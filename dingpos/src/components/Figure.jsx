// A product screenshot crop: pure screen pixels, framed by CSS (.figure in
// pages/article.scss). Guide image blocks and FAQ shot blocks both render here.

// Width of a figure's `phone` file; the build checks it.
const PHONE_IMAGE_WIDTH = 1080;

// Rendered image width, mirroring .figure in pages/article.scss: capped at
// 480px, else the article column inside the shell's 24px gutters.
const IMAGE_SIZES = "(min-width: 528px) 480px, calc(100vw - 48px)";

/** `src` and `phone` are paths relative to the app base. */
function Figure({ src, phone, width, height, alt, caption }) {
  const base = import.meta.env.BASE_URL;
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

export default Figure;
