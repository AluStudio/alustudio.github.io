/** App icon plus the wordmark, drawn as text so it stays sharp. */
function Brand({ size = 28 }) {
  return (
    <span className="brand">
      <img
        src={`${import.meta.env.BASE_URL}app-icon.webp`}
        alt=""
        width={size}
        height={size}
        className="brand__icon"
      />
      <span className="brand__word">Babbby</span>
    </span>
  );
}

export default Brand;
