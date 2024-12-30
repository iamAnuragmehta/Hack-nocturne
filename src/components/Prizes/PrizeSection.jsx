import { useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlitchText from "../Glitch";
import { calculateFontSize } from "../calculateFontSize";


gsap.registerPlugin(ScrollTrigger);

function PrizeSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  /* useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // ScrollTrigger for #first (Gold Prize)
      gsap.from("#first", {
        opacity: 0,
        y: 100,
        duration: 0.3, // Quick animation for Gold
        scrollTrigger: {
          trigger: "#first",
          start: "top 80%",
          end: "top 60%",
          onEnter: () => console.log("Gold prize revealed!"),
        },
      });

      // ScrollTrigger for #second (Silver Prize)
      gsap.from("#second", {
        opacity: 0,
        x: 100,
        duration: 0.2, // Faster animation for Silver
        scrollTrigger: {
          trigger: "#second",
          start: "top 90%",
          end: "top 70%",
          onEnter: () => console.log("Silver prize revealed!"),
        },
      });

      // ScrollTrigger for #third (Bronze Prize)
      gsap.from("#third", {
        opacity: 0,
        x: -100,
        duration: 0.2, // Faster animation for Bronze
        scrollTrigger: {
          trigger: "#third",
          start: "top 100%",
          end: "bottom 100%",
          onEnter: () => console.log("Bronze prize revealed!"),
        },
      });

      // ScrollTrigger for #participation (Participation Award)
      gsap.from("#participation", {
        opacity: 0,
        y: -100,
        duration: 0.4, // Faster animation for Participation Award
        scrollTrigger: {
          trigger: "#participation",
          start: "top 80%",
          end: "top 60%",
          onEnter: () => console.log("Participation award revealed!"),
        },
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []); */

  return (
    <section id="prizes" className="rubik my-20">
      {/* Heading */}
      <div className="fade-animation text-center">
      <div className="text-white uppercase maintext text-8xl">Prizes</div>
      </div>

      {/* 🥈🏆🥉 */}
      <div className="flex flex-col m-12 md:mx-auto md:flex-row px-4 md:px-8 justify-center gap-8">
        {/* Silver */}
        <div
          id="second"
          className={`${isMobile?'flex':'flex-1'} justify-center w-full md:max-w-[30%] lg:max-w-[25%]`}
        >
          {isMobile ? (
            <MobileCard
              icon={"🥈"}
              place={"2nd Prize"}
              cash={"₹10,000"}
              credits={"OpenAI credits"}
              medal={"Silver"}
              iconbackground={"bg-[#FF530A1A]"}
              theme={"bg-gray-600"}
              border={"border-2 border-gray-500"}
            />
          ) : (
            <PrizeCard
              icon={"🥈"}
              place={"2nd Prize"}
              cash={"₹10,000"}
              credits={"OpenAI credits"}
              medal={"Silver"}
              iconbackground={"bg-[#FF530A1A]"}
              theme={"bg-gray-600"}
              border={"border-2 border-gray-500"}
            />
          )}
        </div>

        {/* Gold */}
        <div
          id="first"
          className={`${isMobile?'flex':'flex-1'} justify-center w-full md:max-w-[40%] lg:max-w-[30%] order-first md:order-none md:-mt-8`}
        >
          {isMobile ? (
            <MobileCard
              icon={"🏆"}
              place={"1st Prize"}
              cash={"₹15,000"}
              credits={"OpenAI credits"}
              medal={"Gold"}
              iconbackground={"bg-[#2C1E36]"}
              theme={"bg-yellow-600"}
              border={"border-[3px] border-yellow-500"}
            />
          ) : (
            <PrizeCard
              icon={"🏆"}
              place={"1st Prize"}
              cash={"₹15,000"}
              credits={"OpenAI credits"}
              medal={"Gold"}
              iconbackground={"bg-[#2C1E36]"}
              theme={"bg-yellow-600"}
              border={"border-[3px] border-yellow-500"}
            />
          )}
        </div>

        {/* Bronze */}
        <div id="third" className={`${isMobile?'flex':'flex-1'} justify-center w-full md:max-w-[30%] lg:max-w-[25%]`}>
          {isMobile ? (
            <MobileCard
              icon={"🥉"}
              place={"3rd Prize"}
              cash={"₹5,000"}
              credits={"OpenAI credits"}
              medal={"Bronze"}
              iconbackground={"bg-[#FF530A1A]"}
              theme={"bg-yellow-900"}
              border={"border-[1px] border-yellow-900"}
            />
          ) : (
            <PrizeCard
              icon={"🥉"}
              place={"3rd Prize"}
              cash={"₹5,000"}
              credits={"OpenAI credits"}
              medal={"Bronze"}
              iconbackground={"bg-[#FF530A1A]"}
              theme={"bg-yellow-900"}
              border={"border-[1px] border-yellow-900"}
            />
          )}
        </div>
      </div>

      {/* Participation Award */}
      <div className="">
        <div
          id="participation"
          className="w-full lg:max-w-lg md:max-w-2xl mx-auto px-4"
        >
          <div className="fade-animation clear-glass rounded-xl md:rounded-3xl p-8 text-center border-2 border-purple-500">
            <div className="text-5xl mb-6 mx-auto w-20 sm:h-20 flex items-center justify-center rounded-full">
              🎉
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-500">
              Don&apos;t Worry!
            </h3>
            <p className="text-sm mb-4 text-gray-300">
              Even if you didn&apos;t win, your experience is invaluable.
            </p>
            <p className="text-sm sm:font-semibold mb-6 text-gray-300">
              Every participant will receive a Certificate of Participation as a
              token of achievement!
            </p>
            <div className="mt-4">
              <span className="inline-block text-sm px-4 py-2 rounded-full font-semibold bg-purple-500 text-purple-950">
                Participation Award
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PrizeCard = ({
  icon,
  iconbackground,
  theme,
  place,
  cash,
  credits,
  medal,
  border,
}) => {
  return (
    <div
      className={`clear-glass rounded-xl p-8 text-center ${border} fade-animation`}
    >
      <div
        className={`text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full ${iconbackground} text-primary`}
      >
        {icon}
      </div>
      <h3 className="text-lg sm:text-2xl mb-3 text-white">{place}</h3>
      <p className="text-3xl sm:text-3xl font-bold mb-6 text-white">{cash}</p>
      <p className="text-xl sm:text-xl mb-6 text-white">
        {credits}
      </p>
      <div className="mt-4 text-center">
        <span
          className={`inline-block text-sm px-4 py-2 rounded-full font-semibold ${theme}`}
        >
          {medal}
        </span>
      </div>
    </div>
  );
};

const MobileCard = ({
  icon,
  iconbackground,
  theme,
  place,
  cash,
  credits,
  medal,
  border,
}) => {
  return (
    <div
      className={`clear-glass flex flex-col rounded-xl p-8 text-center w-72 ${border} fade-animation`}
    >
      <div className="flex flex-row justify-center w-full">
        <div
          className={`flex px-auto text-5xl w-20 h-20 items-center justify-center rounded-full ${iconbackground} text-primary`}
        >
          {icon}
        </div>
        <div className="flex md:w-1/2 flex-col ml-6">
          <h3 className="text-lg h-auto sm:text-2xl mb-3 text-white">
            {place}
          </h3>
          <p className="text-lg sm:text-3xl font-bold mb-6 text-white">
            {cash}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg sm:text-xl md:mb-6 text-white">
          {credits}
        </p>
        <div className="mt-4 text-center">
          <span
            className={`inline-block text-sm px-4 py-2 rounded-full font-semibold ${theme}`}
          >
            {medal}
          </span>
        </div>
      </div>
    </div>
  );
};

export { PrizeSection };
