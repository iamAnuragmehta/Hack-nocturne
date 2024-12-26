import React, { useEffect, useState } from "react";
import GlitchText from "./Glitch";
import gsap from "gsap";

import bg from "../assest/comp.webp";
import techhub from "../assest/2.png";
import glug from "../assest/3.png";
import glug2 from "../assest/glug_logo.png";
import techhub2 from "../assest/techhub_logo.png";

import Navbar from "./Navbar";
import Timer from "./Timer";
import "../index.css";
import "../CSS files/Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../components/contact.css";
import MobileBody from "./MobileBody";

const Body = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const socialLinks = [
    { icon: faFacebook, url: "https://facebook.com", label: "Facebook" },
    { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: faInstagram, url: "https://instagram.com", label: "Instagram" },
    {
      icon: faGithub,
      url: "https://github.com/your_username",
      label: "GitHub",
    },
  ];

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // GSAP Animations
    const animations = [
      {
        target: ".navbar",
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.1, ease: "power2.out", delay: 0.2 },
      },
      {
        target: ".text-animate",
        from: { x: -150, opacity: 0 },
        to: {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.3,
          delay: 0.5,
        },
      },
      {
        target: ".image-animate",
        from: { x: 150, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 1.8, ease: "power2.out", delay: 0.8 },
      },
      {
        target: ".bodybutton button",
        from: { y: 50, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.3,
          delay: 1.2,
        },
      },
      {
        target: ".timer-animate",
        from: { x: 100, opacity: 0 },
        to: {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.3,
          delay: 1.2,
        },
      },
    ];

    animations.forEach(({ target, from, to }) => {
      gsap.fromTo(target, from, to);
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col justify-between">
      <Navbar />

      {screenSize < 600 ? <MobileBody /> : <DesktopBody />}
    </section>
  );
};
function DesktopBody() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const shouldHideImage = screenSize < 600; // Hide image for screens smaller than 600px

  return (
    <div className="flex-grow flex flex-col md:flex-row items-center justify-between mt-[7vh] pt-[60px]">
      {/* Left Text Section */}
      <div className="text-white text-center md:text-left px-4 md:px-12 md:w-1/2">
        <div className="space-y-6 text-animate">
          <h1
            className="uppercase maintext"
            style={{
              fontSize:
                screenSize < 600
                  ? "2rem"
                  : screenSize < 800
                  ? "2.5rem"
                  : "3rem", // Adjust sizes as needed
            }}
          >
            Dive into the future
          </h1>
          <h1
            className="uppercase maintext"
            style={{
              fontSize:
                screenSize < 600
                  ? "2rem"
                  : screenSize < 800
                  ? "2.5rem"
                  : "3rem", // Adjust sizes as needed
            }}
          >
            Build, Innovate, and Conquer
          </h1>
          <h1
            className="uppercase maintext"
            style={{
              fontSize:
                screenSize < 600
                  ? "2rem"
                  : screenSize < 800
                  ? "2.5rem"
                  : "3rem", // Adjust sizes as needed
            }}
          >
            The metaverse at Hack-Nocturne
          </h1>
        </div>

        {/* Buttons and Timer */}
        <div className="bodybutton flex flex-col justify-start">
          <Timer
            className="timer-animate m-10"
            targetDate="2025-02-22T00:00:00"
          />
          <div className="button flex  flex-col md:flex-row  gap-4 md:gap-10 items-center">
            <button className="registerbutton rounded-xl bg-purple-500 p-2">
              <div className="uppercase maintext text-2xl">Register Now</div>
            </button>
            <button className="registerbutton rounded-xl bg-purple-500 p-2">
              <div className="uppercase maintext text-2xl">Brochure</div>
            </button>
          </div>
        </div>
      </div>
      {/* Right Image Section */}
      {!shouldHideImage && (
        <div className="image-section image-animate md:w-1/2 flex justify-end px-4">
          <img
            src={bg}
            className="h-[42vw] md:h-[38vw] max-w-[90%] md:max-w-[100%] rounded-lg"
            alt="Hackathon concept"
          />
        </div>
      )}
      {screenSize < 768 && (
        <div className="flex justify-center items-center flex-col mt-4">
          <p className="text-white uppercase maintext">presented by:</p>
          <div className="flex flex-row gap-4 my-4">
            <a href="https://www.instagram.com/glugmvit">
              <img className="h-20 rounded-full" src={glug} alt="Glug MVIT" />
            </a>
            <a href="https://www.instagram.com/techhub_community?igsh=OGVld2xsNzBtbWVm">
              <img
                className="h-20 rounded-full"
                src={techhub}
                alt="TechHub community"
              />
            </a>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
export default Body;
