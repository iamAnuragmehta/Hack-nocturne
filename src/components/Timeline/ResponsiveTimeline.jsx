import React, { useState, useEffect } from "react";
import { TimelineSection } from "./TimelineSection";
import Mobiletimeline from "./Mobiletimeline";

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
      <section className="flex flex-col text-white mb-12 font-robox">
        <div className="mb-4 text-3xl text-center md:text-6xl font-bold text-purple-500">
          Timeline
        </div>
        {isMobile ? <Mobiletimeline /> : <TimelineSection />}
      </section>
    </>
  );
};

export default ResponsiveTimeline;
