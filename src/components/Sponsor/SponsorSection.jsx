import React, { useState } from "react";
import GlitchText from "../Glitch";

import EthIndia from "./sponsors/ethindia.svg";
import DevFolio from "./sponsors/devfolio.svg";
import Concurrent from "./sponsors/Concurrent.svg";
import Polygon from "./sponsors/polygon.svg";

const SponsorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // platinum, gold, silver, bronze
  // [logo, altvalue, link]
  const platinumSponsors = [];
  const goldSponsors = [[Concurrent, "Concurrent", ""]];
  const silverSponsors = [
    [EthIndia, "EthIndia", "https://"],
    [DevFolio, "DEVFOLIO LOGO", "https://devfolio.co"],
    [Polygon, "Polygon", "https://polygon.technology"],
  ];
  const bronzeSponsors = [];

  const sponsors = [
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
  ];

  const tierTitles = ["Platinum", "Gold", "Silver", "Bronze"];

  const getGridCols = (sponsorCount) => {
    if (sponsorCount === 1) return "grid-cols-1";
    if (sponsorCount === 2) return "grid-cols-1 sm:grid-cols-2";
    if (sponsorCount === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  };

  return (
    <div className="bg-transparent py-12">
      <div className="container mx-auto" id="id-sponsors">
        <div className="text-center">
          <div className="fade-animation text-center">
            <div className="text-white uppercase maintext text-8xl">
              Sponsors
            </div>
          </div>
        </div>

        <div className="space-y-12 mt-12">
        {sponsors.map((tier, index) => (
            tier.length > 0 && (
              <div key={index} className="sponsor-tier">
                <h3 className="text-white maintext text-xl md:text-2xl font-bold mb-8 text-center fade-animation">
                  {tierTitles[index]}
                </h3>
                <div className="flex justify-center">
                  <div className={`grid ${getGridCols(tier.length)} fade-animation gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl`}>
                    {tier.map(([logo, alt, link], idx) => (
                      <div key={logo} className="flex justify-center">
                        <a
                          key={idx}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sponsor-featur bg-white p-4 sm:p-6 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300 w-full max-w-xs"
                        >
                          <img
                            src={logo}
                            alt={alt}
                            className="max-w-[80%] max-h-20 md:max-h-24 object-contain"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
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
