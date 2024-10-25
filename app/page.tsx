import Navbar from "./components/Navbar";
import HeroScreen from "./components/HeroScreen";
import CardPresentation from "./components/CardPresentation";
import AppPresentation from "./components/AppPresentation";

export default function LandingPage() {
  return (
    <div className="mx-10 mt-5">
      <Navbar />
      <HeroScreen />
      <CardPresentation />
      <AppPresentation />
    </div>
  );
}
