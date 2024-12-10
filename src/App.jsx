import "./App.css";
import ParticleCanvas from "./components/background/ParticleCanvas";
import Body from "./components/Body";
import Preloader from "./components/Preloader";
import About from "./components/About";
import { PrizeSection } from "./components/Prizes/PrizeSection";
import { SponsorSection } from "./components/Sponsor/SponsorSection";
import { FaqSection } from "./components/Faq/FaqSection";
import ResponsiveTimeline from "./components/Timeline/ResponsiveTimeline";
import { Background } from "./components/background/background2";

function App() {
  return (
    <>
      {/* <Background /> */}
      <ParticleCanvas />
      <div className="relative z-10">
        <Preloader />
        <Body />
        <About />
        <PrizeSection />
        <SponsorSection />
        <FaqSection />
        <ResponsiveTimeline />
      </div>
    </>
  );
}

export default App;