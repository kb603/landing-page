import Navbar from "./components/Navbar";
import HeroScreen from "./components/HeroScreen";
import CardPresentation from "./components/CardPresentation";
import AppPresentation from "./components/AppPresentation";
import CashBack from "./components/CashBack";
import Brands from "./components/Brands";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="mx-10 mt-5">
      <Navbar />
      <HeroScreen />
      <CardPresentation />
      <AppPresentation />
      <CashBack />
      <Brands />
      <DownloadApp />
      <Footer />
    </div>
  );
}
