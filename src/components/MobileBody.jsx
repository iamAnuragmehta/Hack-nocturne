import icon from "../assest/tabicon.png";
import techhub from "../assest/2.png";
import glug from "../assest/3.png";

import Timer from "./Timer";
import "../index.css";
import "../CSS files/Body.css";

const Body = () => {
  return (
    <section className="flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-between ">
        {/* Left Text Section */}
        <div className="text-white text-center mt-4 ">
          <img className="mt-6" src={icon} />

          {/* Buttons and Timer */}
          <div className="flex flex-col justify-start">
            <Timer
              className="m-10"
              targetDate="2025-02-22T00:00:00"
            />
            <div className="button flex flex-row gap-4 justify-center my-4">
              <button className="rounded-xl bg-purple-500 p-2">
                <div className="uppercase maintext text-2xl">Register Now</div>
              </button>
              <button className="rounded-xl bg-purple-500 p-2">
                <div className="uppercase maintext text-2xl">Brochure</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Handles Section */}
      <div className="flex justify-center items-center flex-col">
        <p className="text-white uppercase maintext">PRESENTED BY:</p>
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
    </section>
  );
};

export default Body;
