import React, { useEffect, useRef, useState } from "react";
import GlitchText from "./Glitch";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../index.css"; // Import CSS file for additional styles if needed

gsap.registerPlugin(ScrollTrigger);

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen size dynamically
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    const initTl = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh(); // Refresh ScrollTrigger after the initial animation
      },
    });

    // Animate text elements
    textRefs.current.forEach((el, index) => {
      initTl.fromTo(
        el,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power1.out" },
        index * 0.1
      );
    });

    // Animate container exit
    initTl.to(containerRef.current, {
      y: -500,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false); // Hide preloader
        document.body.style.overflow = ""; // Restore scrolling
        if (onComplete) onComplete(); // Notify parent that preloader is complete
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
      // Clean up ScrollTriggers and restore overflow
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Calculate the size for GlitchText based on screen size
  const calculateGlitchSize = () => {
    if (screenSize < 600) {
      return "1.7rem"; // Small size for mobile
    } else if (screenSize < 768) {
      return "5rem"; // Medium size for tablets
    } else {
      return "8rem"; // Large size for desktops
    }
  };

  return isVisible ? (
    <div
      className="preloader-container backdrop-blur-sm"
      ref={containerRef}
      style={{
        zIndex: 100,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Prevent overflow issues
        padding: "10px",
      }}
    >
      <div
        className="text-container"
        style={{
          display: "flex", // Flexbox layout for horizontal alignment
          gap: "0.1rem", // Adjust spacing between characters
          flexDirection: "row", // Ensure text is in a row
          alignItems: "center", // Vertical alignment
          justifyContent: "center", // Center horizontally
        }}
      >
        {[
          "<", "h", "a", "c", "k", "n", "o", "c", "t", "u", "r", "n", "e", "/", ">",
        ].map((char, index) => (
          <span
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            style={{
              fontSize: calculateGlitchSize(), // Adjust font size dynamically
              color: "white",
              fontFamily: "monospace",
              display: "inline-block", // Inline for horizontal layout
            }}
          >
            <GlitchText size={calculateGlitchSize()} heading={char} />
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Preloader;
