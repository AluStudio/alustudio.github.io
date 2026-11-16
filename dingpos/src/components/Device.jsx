import { currentLanguage } from "../i18n";
import { PHONE_SHOT_WIDTH, SHOT_SIZES, shotPath } from "../data/shots";

/** An iPad bezel drawn in CSS around a raw screen capture in the page's language (see .device). */
function Device({ shot, sizes, alt, priority = false }) {
  const base = import.meta.env.BASE_URL;
  const [width, height] = SHOT_SIZES[shot];
  const full = `${base}${shotPath(currentLanguage, shot)}`;
  const phone = `${base}${shotPath(currentLanguage, shot, true)}`;
  return (
    <figure className="device">
      <img
        src={full}
        srcSet={`${phone} ${PHONE_SHOT_WIDTH}w, ${full} ${width}w`}
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
