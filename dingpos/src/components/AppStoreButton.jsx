export const APP_STORE_URL = "https://apps.apple.com/app/id6788988943";

function AppStoreButton({ className = "btn-store", children }) {
  return (
    <a href={APP_STORE_URL} className={className} target="_blank" rel="noopener noreferrer">
      <i className="bi bi-apple" aria-hidden="true"></i>
      {children}
    </a>
  );
}

export default AppStoreButton;
