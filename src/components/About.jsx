import React, { useState, useEffect } from "react";
import GlitchText from "./Glitch";
import "../components/Faq/Faq.css";

const About = () => {
  // State to store the screen width
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Function to calculate font size based on screen size
  const calculateFontSize = () => {
    if (screenSize < 600) {
      return "3.3rem"; // Small screen: font size 3rem
    } else if (screenSize < 768) {
      return "4rem"; // Medium screen: font size 4rem
    } else {
      return "7rem"; // Large screen: font size 7rem
    }
  };

  // Effect to listen for window resizing
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth); // Update screen size on resize
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col p-8 md:p-12">
      {/* Title Section */}
     
        <h2 className="text-purple-500 text-center md:mb-10 font-bold text-8xl fade-animation">
          About Us
        </h2>

      {/* Text Section */}
      <div className="clear-glass text-left md:text-lg text-white">
        <p className=" fade-animation">
          HackNocturn is the flagship hackathon organized by CodeShack, bringing
          together innovative minds to collaborate, create, and compete. This
          24-hour coding marathon is a celebration of creativity and technology,
          designed to challenge participants to push their limits in
          problem-solving and software development. HackNocturn provides an
          exciting platform for developers, designers, and tech enthusiasts to
          showcase their skills across four cutting-edge domains:
        </p>

        {/* List of domains */}
        <ul className="list-inside list-disc mt-4 space-y-2 md:space-y-3 fade-animation">
          <li className="ml-5">
            <b className="text-purple-500">Web Development:</b> Build impactful
            and user-friendly web solutions
          </li>
          <li className="ml-5">
            <b className="text-purple-500">App Development:</b> Craft mobile
            applications that enhance daily life.
          </li>
          <li className="ml-5">
            <b className="text-purple-500">Blockchain:</b> Innovate with secure,
            decentralized technologies.
          </li>
          <li className="ml-5">
            <b className="text-purple-500">AI/ML:</b> Solve complex problems
            with artificial intelligence and machine learning.
          </li>
        </ul>

        {/* Closing Paragraph */}
        <p className="mt-4 fade-animation">
          Whether you're a seasoned coder or a budding tech enthusiast,
          HackNocturne offers a collaborative environment, expert mentorship,
          and the thrill of competing against the best. Join us to turn your
          ideas into reality, learn from like-minded peers, and leave your mark
          in the tech world! Let the night of innovation begin with HackNocturn!
        </p>
      </div>
    </section>
  );
};

export default About;
