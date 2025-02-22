import React, { useState, useEffect } from "react";
import { TimelineSection } from "./TimelineSection";
import Mobiletimeline from "./Mobiletimeline";
import GlitchText from "../Glitch";
import { calculateFontSize } from "../calculateFontSize";

const ResponsiveTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width and set mobile state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener to update on resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <section id="timeline" className="flex flex-col text-white">
      <div className="fade-animation text-center">
      <div className="text-white uppercase maintext text-8xl">Timeline</div>
      </div>
        {isMobile ? <Mobiletimeline /> : <TimelineSection />}
      </section>
    </>
  );
};

export default ResponsiveTimeline;
