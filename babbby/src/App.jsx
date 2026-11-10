import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import FaqPage from "./pages/FaqPage";
import GuidesPage from "./pages/GuidesPage";
import GuidePage from "./pages/GuidePage";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <a className="skip-link" href="#main">
        {t("nav.skip")}
      </a>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:slug" element={<GuidePage />} />
      </Routes>
    </>
  );
}

export default App;
