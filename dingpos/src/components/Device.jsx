// Pixel size of each full-size public/shot-<name>.webp; every shot also ships
// a shot-<name>-1080w.webp for phones. Both come from scripts/build-screenshots.sh.
const SHOT_SIZES = {
  cashier: [2240, 1471],
  promotions: [1720, 1129],
  dashboard: [1720, 1129],
  orders: [1720, 1129],
};
const PHONE_SHOT_WIDTH = 1080;

/** An iPad bezel drawn in CSS around a raw screen capture (see .device). */
function Device({ shot, sizes, alt, priority = false }) {
  const base = import.meta.env.BASE_URL;
  const [width, height] = SHOT_SIZES[shot];
  return (
    <figure className="device">
      <img
        src={`${base}shot-${shot}.webp`}
        srcSet={`${base}shot-${shot}-${PHONE_SHOT_WIDTH}w.webp ${PHONE_SHOT_WIDTH}w, ${base}shot-${shot}.webp ${width}w`}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </figure>
  );
}

export default Device;
