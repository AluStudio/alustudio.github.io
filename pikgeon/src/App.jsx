import "./assets/scss/all.scss";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Privacy from "./components/Privacy";
import Languages from "./components/Languages";
import Download from "./components/Download";
import Footer from "./components/Footer";
import "./assets/scss/footer.scss";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <HeroBanner />
          <Features />
          <Stats />
          <Privacy />
          <Languages />
          <Download />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
