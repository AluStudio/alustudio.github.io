import { useTranslation } from "react-i18next";
import "../assets/scss/pages.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GuideList from "../components/GuideList";

function GuidesPage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <div className="shell article">
          <header className="page-head">
            <h1>{t("guides.title")}</h1>
            <p>{t("guides.subtitle")}</p>
          </header>
          <GuideList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GuidesPage;
