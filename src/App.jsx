import { useState } from "react";
import "./App.css";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Timer from "./components/Timer";
import Preloader from "./components/Preloader";
import About from "./components/About";
import { PrizeSection } from "./components/Prizes/PrizeSection";
import { SponsorSection } from "./components/Sponsor/SponsorSection";
import { FaqSection } from "./components/Faq/FaqSection";
import { TimelineSection } from "./components/TimelineSection";

function App() {
  const [isPreloaderVisible , setIsPreloaderVisible] = useState(true);
  const handlePreloaderComplete = () =>{
    setIsPreloaderVisible(false);
  }
  
  return (

    <>
      <div>
        <div>
          <ParticleCanvas />
        </div>
        {isPreloaderVisible && (
          <Preloader onComplete = {handlePreloaderComplete} />
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
          <TimelineSection />
          </>

        )}

      </div>
    </>
  );
}

export default App;
