import React, { useState, useEffect } from "react";
import GlitchText from "./Glitch";

const About = () => {
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="flex flex-col p-8 md:p-12 min-h-screen">
      {/* Title Section */}
      <div className="fade-animation text-center mb-8">
        <h1 className="text-white uppercase maintext text-6xl md:text-8xl">
          <div className="text-white uppercase maintext text-8xl">About US</div>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-white">
        {/* Welcome Section */}
        <div className="fade-animation text-center">
          <p className="text-lg md:text-xl mb-4">
            Welcome to{" "}
            <span className="font-bold text-purple-400">
              Hack-Nocturne 2025
            </span>
            , the premier hackathon experience brought to you by the
            <span className="font-bold text-blue-400">
              {" "}
              TechHub Community
            </span>{" "}
            &<span className="font-bold text-green-400"> Glug MVIT</span>, the
            technical clubs of{" "}
            <span className="font-bold">
              Sir M. Visvesvaraya Institute Of Technology
            </span>
            !
          </p>
          <p className="text-lg md:text-xl">
            Join us in{" "}
            <span className="font-bold text-yellow-400">February 2025</span> for
            a thrilling 24-hour journey of innovation, creativity, and
            collaboration! 🚀
          </p>
        </div>

        {/* Track Section */}
        <div className="fade-animation ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400">
            🎯 Track
          </h2>
          <div className="p-6 border rounded-lg border-gray-500">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">
              🌟 Open Track
            </h3>
            <p className="text-gray-300">
              Combine elements from multiple tracks or go completely out of the
              box. Your creativity is the only limit here! 🎨
            </p>
          </div>
        </div>

        {/* Why Participate Section */}
        <div className="fade-animation">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400">
            🛠️ Why Participate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-500 p-6 rounded-lg">
              <h3 className="font-bold text-blue-400 mb-2">Learn</h3>
              <p className="text-gray-300">
                Gain hands-on experience with the latest technologies.
              </p>
            </div>
            <div className="border border-gray-500 p-6 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">Build</h3>
              <p className="text-gray-300">
                Create impactful solutions and showcase your skills.
              </p>
            </div>
            <div className="border border-gray-500 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-2">Collaborate</h3>
              <p className="text-gray-300">
                Work with like-minded innovators from diverse backgrounds.
              </p>
            </div>
            <div className="border border-gray-500 p-6 rounded-lg">
              <h3 className="font-bold text-purple-400 mb-2">Win</h3>
              <p className="text-gray-300">
                Exciting prizes and opportunities await the most creative minds!
                🏆
              </p>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="fade-animation text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400">
            📅 Mark Your Calendar
          </h2>
          <div className="border border-gray-500 p-6 rounded-lg inline-block">
            <p className="text-xl">
              🗓️{" "}
              <span className="text-yellow-400 font-bold">February 2025</span>
              <span className="mx-4 hidden sm:inline">|</span>
              <br className="inline sm:hidden"></br>
              <a
                href="https://maps.app.goo.gl/aetAnwLKbzb32tdz9"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍{" "}
                <span className="text-blue-400 font-bold">Sir MVIT Campus</span>
              </a>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="fade-animation text-center space-y-4 hidden sm:">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
            🚀 Ready to Hack?
          </h2>
          <p className="text-lg">
            Follow us on our socials to stay updated. Gear up to code, create,
            and collaborate!
          </p>
          <p className="text-xl font-bold text-purple-400">
            Let's make the night come alive with ideas and innovation! 🌌✨
          </p>
          <p className="text-lg">Let the countdown begin! ⏳</p>
        </div>

        {/* Rules Section */}
        <div className="fade-animation text-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400">
            Rules
          </h2>
          <p className="text-lg">
            Follow the{" "}
            <a href="https://devfolio.co/code-of-conduct">
              <span className="font-bold underline text-blue-500">
                Code of Conduct
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
