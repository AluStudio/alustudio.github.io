// A product screenshot crop: pure screen pixels, framed by CSS (.figure in
// pages/article.scss). Guide image blocks and FAQ shot blocks both render here.

// Width of a figure's `phone` file; the build checks it.
const PHONE_IMAGE_WIDTH = 1080;

// Horizontal gutters of the shell around the article column.
const GUTTERS = 48;

// Rendered image width, mirroring .figure in pages/article.scss: capped at
// 480px, else the article column inside the shell's gutters. A FAQ shot passes
// `displayWidth` (its size in points on the iPad, so its text reads at the
// app's own size) and is capped there instead.
const imageSizes = (displayWidth = 480) =>
  `(min-width: ${displayWidth + GUTTERS}px) ${displayWidth}px, calc(100vw - ${GUTTERS}px)`;

/** `src` and `phone` are paths relative to the app base. */
function Figure({ src, phone, width, height, alt, caption, displayWidth }) {
  const base = import.meta.env.BASE_URL;
  return (
    <figure className="figure" style={displayWidth ? { maxWidth: displayWidth } : undefined}>
      <img
        src={`${base}${src}`}
        srcSet={phone ? `${base}${phone} ${PHONE_IMAGE_WIDTH}w, ${base}${src} ${width}w` : undefined}
        sizes={phone ? imageSizes(displayWidth) : undefined}
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
