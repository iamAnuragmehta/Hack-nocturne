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
    { icon: faFacebook, url: "https://facebook.com", label: "Facebook" },
    { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: faInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: faGithub, url: "https://github.com/your_username", label: "GitHub" },
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

      <div className="flex-grow flex flex-col md:flex-row items-center justify-between mt-[7vh] pt-[60px]">
        {/* Left Text Section */}
        <div className="text-white text-center md:text-left px-4 md:px-12 md:w-1/2">
          <div className="space-y-6 text-animate">
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

          {/* Buttons and Timer */}
          <div className="bodybutton flex flex-col justify-start mt-7">
            <div className="button flex  flex-col md:flex-row  gap-4 md:gap-10 items-center">
              <button className="registerbutton rounded-xl bg-purple-500 p-2.5">
                <GlitchText size="1.5rem" heading="Register Now" />
              </button>
              <button className="registerbutton rounded-xl bg-purple-500 p-2.5">
                <GlitchText size="1.5rem" heading="Brochure" />
              </button>
            </div>
            <Timer
              className="timer-animate mt-10"
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
        <div className="h-[8vh] mb-10 flex items-center justify-evenly">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[2rem] text-white hover:text-purple-700 transition-transform"
              aria-label={social.label}
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
