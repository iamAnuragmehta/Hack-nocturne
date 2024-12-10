import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../assest/comp.webp";
import GlitchText from "./Glitch";
import "../CSS files/Body.css";
import Navbar from "./Navbar";
import Timer from "./Timer";
import Typewriter from "typewriter-effect";

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
        x: -100, // Start position
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
      <div className="flex items-center justify-between">
        <div className="text-white ml-20">
          <div className="text-4xl">
            A 24-hour <br /> Hackathon
          </div>

          <div className="text-xl my-4">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3000)
                  .typeString("Build, ")
                  .pauseFor(2000)
                  .typeString("Innovate, ")
                  .pauseFor(2000)
                  .typeString("and Conquer!")
                  .pauseFor(4000)
                  .start();
              }}
            />
          </div>

          <button className="bg-blue-500 p-2 rounded-lg mt-4">
            Register Now
          </button>
        </div>
        <div className="">
          <img src={bg} className="h-[38vw] max-w-max" alt="" />
        </div>
      </div>
      <Timer className="timer-animate" targetDate="2025-02-22T00:00:00" />
    </>
  );
};

export default Body;
