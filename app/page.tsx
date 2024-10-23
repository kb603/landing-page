import Navbar from "./components/Navbar";
import HeroScreen from "./components/HeroScreen";
import CardPresentation from "./components/CardPresentation";

export default function LandingPage() {
  return (
    <div className="mx-10 mt-5">
      <Navbar />
      <HeroScreen />
      <CardPresentation />
    </div>
  );
}
