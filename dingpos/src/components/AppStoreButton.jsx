import { AppleLogo } from "@phosphor-icons/react";

export const APP_STORE_URL = "https://apps.apple.com/app/id6788988943";

function AppStoreButton({ className = "button button--primary", children }) {
  return (
    <a href={APP_STORE_URL} className={className} target="_blank" rel="noopener noreferrer">
      <AppleLogo size={18} weight="fill" aria-hidden="true" />
      {children}
    </a>
  );
}

export default AppStoreButton;
