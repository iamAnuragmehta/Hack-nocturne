import { useState } from "react";
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
import { ContactSection } from "./components/ContactSection";

function App() {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const handlePreloaderComplete = () => {
    setIsPreloaderVisible(false);
  };
  return (
    <>
      <div>
        <div>
          {/* <Background /> */}
          <ParticleCanvas />
        </div>
        {isPreloaderVisible && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
        {!isPreloaderVisible && (
          <>
            <div className="z-[-20]">
              <Body />
            </div>
            <About />
            <PrizeSection />
            <SponsorSection />
            <FaqSection />
            <ResponsiveTimeline />
            <section />
            <ContactSection />
          </>
        )}
      </div>
    </>
  );
}

export default App;
