import React, { useState } from "react";
import GlitchText from "../Glitch";

import EthIndia from "./sponsors/ethindia.webp"
import DevFolio from "./sponsors/devfolio-logo.44696a43.webp"
import Concurrent from "./sponsors/Concurrent.svg"
import Polygon from "./sponsors/Polygon-01.webp"

const SponsorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sponsors = [
    [
      EthIndia, DevFolio , Concurrent ,Polygon
    ]
    
  ];

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

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
  const screenSize = window.innerWidth;

  return (
    <div className="bg-transparent py-12">
      <div className="container mx-auto" id="id-sponsors">
        <div className="text-center">
          <div className="fade-animation text-center">
            <GlitchText size={calculateFontSize()} heading="Our Sponsors" />
          </div>
        </div>
        <div className="relative m-3">
          
          {/* Slides */}
          <div>
            {sponsors.map((slide, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } grid grid-cols-2 md:grid-cols-4 gap-4`}
              >
                {slide.map((src, idx) => (
                  <div
                    key={idx}
                    className="sponsor-feature  p-5 rounded-lg flex items-center justify-center"
                  >
                    <img
                      alt={`Sponsor ${idx}`}
                      src={src}
                      className="max-w-full"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Indicators */}
          <div className="flex justify-center mb-5 mt-5">
            {sponsors.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`rounded-full w-3 h-3 mx-1 ${
                  activeIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SponsorSection;

// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GlitchText from "../Glitch";


// import "./SponorSection.css";

// gsap.registerPlugin(ScrollTrigger);

// function SponsorSection() {
//   const SponsorRef = useRef(null);
//   const sponsors = [ EthIndia, DevFolio, Polygon, Concurrent];
//   const infiniteSponsors = [...sponsors, ...sponsors ] ;

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: "#redbar",
//             start: "top bottom",
//             end: "bottom top",
//             markers: false,
//             toggleActions: "play none none reverse",
//           },
//         })
//         .from("#redbar", { duration: 2, width: "0" })
//         .to("#redbar", { width: "12rem" });
//     });

//     return () => ctx.revert(); // Cleanup GSAP context on component unmount
//   }, []);

//   // State to store the screen width
//   const screenSize = window.innerWidth;

//   return (
//     <section id="sponsors" className="rubik px-4 my-20">
//       <div className="p-12">
//         <div className="text-center">
//           <div className="fade-animation text-center">
//             <GlitchText size={calculateFontSize()} heading="Our Sponsors" />
//           </div>
//         </div>

//         {/* create a infinte carousel for sponsors */}
//         <div className="relative w-full md:overflow-hidden fade-animation">
//           <div className="animate-infinite-scroll flex items-center justify-center">
//             {infiniteSponsors.map((sponsor, index) => (
//               <div
//                 key={index}
//                 id="eachsponsor"
//                 className="m-4 px-4 rounded-3xl flex-shrink-0 w-48 h-24 flex items-center justify-center transition-transform hover:scale-110"
//               >
//                 <img
//                   src={sponsor}
//                   alt={`Sponsor ${index + 1}`}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           id="redbar"
//           ref={SponsorRef}
//           className="w-48 h-1 bg-red-600 mx-auto mt-8"
//         />
//       </div>
//     </section>
//   );
// }

// export { SponsorSection };
