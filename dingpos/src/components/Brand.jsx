/** App icon plus the two-tone wordmark, drawn as text so it stays sharp. */
function Brand({ size = 28 }) {
  return (
    <span className="brand">
      <img
        src={`${import.meta.env.BASE_URL}app-icon-sm.png`}
        alt=""
        width={size}
        height={size}
        className="brand__icon"
      />
      <span className="brand__word">
        Ding<span>POS</span>
      </span>
    </span>
  );
}

export default Brand;
