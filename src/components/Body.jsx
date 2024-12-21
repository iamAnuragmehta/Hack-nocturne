import React, { useEffect, useState } from "react";
import GlitchText from "./Glitch";
import gsap from "gsap";
import bg from "../assest/comp.webp";
import Navbar from "./Navbar";
import Timer from "./Timer";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../components/contact.css";
const Body = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const socialLinks = [
    { icon: faFacebook, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faGithub, url: "https://github.com/your_username" },
  ];

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Animations
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power2.out", delay: 0.2 }
    );

    gsap.fromTo(
      ".text-animate",
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".image-animate",
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: "power2.out", delay: 0.8 }
    );

    gsap.fromTo(
      ".bodybutton button",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1.2,
      }
    );
    gsap.fromTo(
      ".timer-animate",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1.2,
      }
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateHeadingSize = () => {
    if (screenSize < 600) {
      return "2rem"; // Small size for mobile
    } else if (screenSize < 800) {
      return "2rem"; // Medium size for tablets
    } else {
      return "2.5rem"; // Large size for desktops
    }
  };

  const shouldHideImage = screenSize < 600; // Hide image for screens smaller than 600px

  return (
    <section className="flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex flex-col md:flex-row items-center md:items-start justify-between mt-[7vh] md:mt-[7vh] pt-[60px]">
        {/* Left Text Section */}
        <div className="text-white items-center text-center md:right-[50%] md:text-left px-4 md:px-12 md:w-1/2">
          <div className="space-y- text-animate">
            <GlitchText
              size={calculateHeadingSize()}
              heading="Dive into the future"
            />
            <GlitchText
              size={calculateHeadingSize()}
              heading="Build, Innovate, and Conquer"
            />
            <GlitchText
              size={calculateHeadingSize()}
              heading="The metaverse at HackNocturne"
            />
          </div>
          {/* Button and Timer below the text */}
          <div className="bodybutton flex flex-col items-center mt-7">
            <button className="registerbutton rounded-xl bg-purple-500 p-2.5 w-auto">
              <GlitchText size="1.5rem" heading="Register Now" />
            </button>
            <Timer
              className="timer-animate mt-8 text-nowrap"
              targetDate="2025-02-22T00:00:00"
            />
          </div>
        </div>

        {/* Right Image Section */}
        {!shouldHideImage && (
          <div className="image-section image-animate md:w-1/2 flex justify-end px-4">
            <img
              src={bg}
              className="h-[40vw] md:h-[38vw] max-w-[90%] md:max-w-[100%] rounded-lg"
              alt="Hackathon concept"
            />
          </div>
        )}
      </div>

      {/* Social Handles Section */}
      {screenSize < 768 && (
        <div className=" h-[8vh] mb-10 flex items-center justify-evenly">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[2rem] text-white hover:text-purple-700  transition-transform:e mx-2"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Body;
