import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../assest/comp.webp";
import GlitchText from "./Glitch";
import "../CSS files/Body.css";
import Navbar from "./Navbar";
import Timer from "./Timer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  useEffect(() => {
    // Navbar animation: Start from y: -100 and move to y: 0
    gsap.fromTo(
      ".navbar",
      {
        y: -1500, // Start position from the top
        opacity: 1,
      },
      {
        y: 0, // Final position
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".navbar",
          start: "top top", // Trigger when the top of navbar reaches top of viewport
          end: "top+=100 bottom", // End when navbar reaches +100px scroll
          scrub: 0.1, // Slow down the scrub for smoother transition
        },
      }
    );

    // Text animation: Start from y: 100 and move to the final position
    gsap.fromTo(
      ".text-animate",
      {
        x:-100, // Start position
        opacity: 1,
      },
      {
        x: 0, // Final position
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-animate",
          start: "top 80%", // Start when the element reaches 80% of the viewport height
          end: "top 30%", // Stop when the element reaches 30% of the viewport height
          scrub: 0.7, // Moderate speed for smoother transition
        },
      }
    );

    // Image animation: Start from x: -100 and move to final position (horizontal movement)
    gsap.fromTo(
      ".image-animate",
      {
        x: -100, // Start from left
        opacity: 1,
      },
      {
        x: 0, // Move to original position
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-animate",
          start: "top 80%", // Trigger when image reaches 80% of the viewport height
          end: "top 30%", // End when image reaches 30% of the viewport height
          scrub: 1, // Smooth animation that matches scroll position
        },
      }
    );

    // Timer animation: Start from y: 100 and move to final position
    // gsap.fromTo(
    //   ".timer-animate",
    //   {
    //     y: 100, // Start position from below the viewport
    //     opacity: 0,
    //   },
    //   {
    //     y: 0, // Final position
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: ".timer-animate",
    //       start: "top 30%", // Trigger when timer reaches 30% of the viewport height
    //       end: "top 20%", // Stop when it reaches 20% of the viewport height
    //       scrub: 1,
    //     },
    //   }
    // );
  }, []);

  return (
    <>
      <Navbar className="navbar" />
      <div className="flex items-center justify-between mt-[7vh] h-[70vh]">
        <div className="text-white">
          <div className="m-[10vh] g-[1vh]">
            <GlitchText className="text-animate" size="4rem" heading="Dive into the future" />
            <div>
              <GlitchText className="text-animate" size="4rem" heading="Build, Innovate, and Conquer" />
            </div>
            <div>
              <GlitchText className="text-animate" size="2.5rem" heading="The metaverse at HackNocturn" />
            </div>
          </div>
          <div className="bodybutton m-[9vh]">
            <button className="registerbutton m-[2.2vh] rounded-xl p-1.5">
              <GlitchText size="2.2rem" heading="Register Now" />
            </button>
            <button className="learnmore m-[2.2vh] rounded-xl p-1.5">
              <GlitchText size="2.2rem" heading="Learn More" />
            </button>
          </div>
        </div>
        <div className="image-section image-animate">
          <img src={bg} className="h-[38vw]" alt="" />
        </div>
      </div>
      <Timer className="timer-animate" targetDate="2025-02-22T00:00:00" />
    </>
  );
};

export default Body;
