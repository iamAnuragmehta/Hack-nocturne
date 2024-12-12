import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlitchText from "../Glitch";

import google from "./sponsors/google_logo.png";
import react from "./sponsors/react_logo.png";
import canva from "./sponsors/canva_logo.png";
import discord from "./sponsors/discord_logo.png";
import GSAP from "./sponsors/GSAP.svg";

import "./SponorSection.css";

gsap.registerPlugin(ScrollTrigger);

function SponsorSection() {
  const SponsorRef = useRef(null);
  const sponsors = [react, google, canva, discord, GSAP];
  const infiniteSponsors = [...sponsors, ...sponsors];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#redbar",
            start: "top bottom",
            end: "bottom top",
            markers: false,
            toggleActions: "play none none reverse",
          },
        })
        .from("#redbar", { duration: 2, width: "0" })
        .to("#redbar", { width: "12rem" });
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  // State to store the screen width
  const screenSize = window.innerWidth;

  // Function to calculate font size based on screen size
  const calculateFontSize = () => {
    if (screenSize < 600) {
      return "2rem"; // Small screen: font size 3rem
    } else if (screenSize < 768) {
      return "3rem"; // Medium screen: font size 4rem
    } else {
      return "4rem"; // Large screen: font size 7rem
    }
  };

  return (
    <section id="sponsors" className="rubik px-4 my-20">
      <div className="p-12">
        <div className="text-center">
          <div className="fade-animation text-center">
            <GlitchText size={calculateFontSize()} heading="Our Sponsors" />
          </div>
        </div>

        {/* create a infinte carousel for sponsors */}
        <div className="relative w-full md:overflow-hidden fade-animation">
          <div className="animate-infinite-scroll flex items-center justify-center">
            {infiniteSponsors.map((sponsor, index) => (
              <div
                key={index}
                id="eachsponsor"
                className="m-4 px-4 rounded-3xl flex-shrink-0 w-48 h-24 flex items-center justify-center transition-transform hover:scale-110"
              >
                <img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          id="redbar"
          ref={SponsorRef}
          className="w-48 h-1 bg-red-600 mx-auto mt-8"
        />
      </div>
    </section>
  );
}

export { SponsorSection };
