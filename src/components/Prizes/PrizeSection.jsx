import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PrizeSection() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#first",
            start: "top bottom",
            end: "bottom top",
            markers: false,
          },
        })
        .from("#first", { duration: 0.3, opacity: 0 })
        .from("#second", { duration: 0.5, opacity: 0, x: 100 })
        .from("#third", { duration: 0.7, opacity: 0, x: -100 })
        .from("#participation", { duration: 1, opacity: 0, y: -100 });
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <section className="rubik my-20">
      {/* Heading */}
      <h2 className="text-purple-500 text-center mb-20 font-bold text-8xl">
        Prizes
      </h2>

      {/* 🥈🏆🥉 */}
      <div className="flex flex-col md:flex-row px-4 md:px-8 justify-center gap-8 mb-8">
        {/* Silver */}
        <div
          id="second"
          className="flex-1 w-full md:max-w-[30%] lg:max-w-[25%]"
        >
          <PrizeCard
            icon={"🥈"}
            place={"2nd Prize"}
            cash={"₹10,000"}
            credits={"+ 30,000"}
            medal={"Silver"}
            iconbackground={"bg-[#FF530A1A]"}
            theme={"bg-gray-600"}
            border={"border-2 border-gray-500"}
          />
        </div>

        {/* Gold */}
        <div
          id="first"
          className="flex-1 md:max-w-[40%] lg:max-w-[30%] order-first md:order-none md:-mt-8"
        >
          <PrizeCard
            icon={"🏆"}
            place={"1st Prize"}
            cash={"₹15,000"}
            credits={"+ 50,000"}
            medal={"Gold"}
            iconbackground={"bg-[#2C1E36]"}
            theme={"bg-yellow-600"}
            border={"border-[3px] border-yellow-500"}
          />
        </div>

        {/* Bronze */}
        <div id="third" className="flex-1 md:max-w-[30%] lg:max-w-[25%]">
          <PrizeCard
            icon={"🥉"}
            place={"3rd Prize"}
            cash={"₹5,000"}
            credits={"+ 10,000"}
            medal={"Bronze"}
            iconbackground={"bg-[#FF530A1A]"}
            theme={"bg-yellow-900"}
            border={"border-[1px] border-yellow-900"}
          />
        </div>
      </div>

      {/* Participation Award */}
      <div
        id="participation"
        className="w-full lg:max-w-lg md:max-w-2xl mx-auto px-4"
      >
        <div className="clear-glass rounded-xl md:rounded-3xl p-8 text-center border-2 border-purple-500">
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
    <div className={`clear-glass rounded-xl p-8 text-center ${border}`}>
      <div
        className={`text-5xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full ${iconbackground} text-primary`}
      >
        {icon}
      </div>
      <h3 className="text-lg sm:text-2xl mb-3 text-white">{place}</h3>
      <p className="text-3xl sm:text-3xl font-bold mb-6 text-white">{cash}</p>
      <p className="text-xl sm:text-xl mb-6 text-white">
        {credits}
        <br /> OpenAI credits
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

export { PrizeSection };
