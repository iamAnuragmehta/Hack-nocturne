import React, { useState, useEffect } from "react";
import GlitchText from "./Glitch";
import "../components/Faq/Faq.css";
import { calculateFontSize } from "./calculateFontSize";

const About = () => {
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
    <section id="about" className="flex flex-col p-8 md:p-12">
      {/* Title Section */}

      <div className="fade-animation text-center mb-4">
        <div className="text-white uppercase maintext text-8xl">About us</div>
      </div>

      {/* Text Section */}
      <div className="text-left text-xs md:text-lg text-white">
        <p className=" fade-animation">
        HackNocturn is the flagship hackathon organized by CodeShack, bringing together the brightest minds to collaborate, create, and compete. This 24-hour coding marathon is a celebration of creativity and technology, offering participants the unique opportunity to solve real-world problems through software-based solutions.      
        </p>

        {/* List of domains */}
        <h2 className="font-bold" > At HackNocturn, we focus on:</h2>
        <ul className="list-inside list-disc mt-4 space-y-2 md:space-y-3 fade-animation">
          <li className="ml-5">
            <b className="text-purple-500">Fostering creativity:</b>  Mix and match different technologies to craft innovative solutions.
          </li>
          <li className="ml-5">
            <b className="text-purple-500">
            Real-world problem solving: </b> Work on challenges that matter and create impactful projects.
          </li>
          <li className="ml-5">
            <b className="text-purple-500">Collaboration and mentorship: </b>          
            Learn from industry experts and like-minded peers.
  
          </li>
          <li className="ml-5">
            <b className="text-purple-500">Software-focused innovation:</b>  All solutions must be entirely software-based, ensuring a level playing field for all participants.
          </li>
        </ul>
        <h2 className="font-bold" > Why participate in HackNocturn?</h2>
        <ul className="list-inside list-disc mt-4 space-y-2 md:space-y-3 fade-animation">
          <li className="ml-5">
            <b className="text-purple-500">Turn your ideas into reality:</b>  Build impactful solutions from scratch.
          </li>
          <li className="ml-5">
            <b className="text-purple-500">
            Challenge yourself: </b> Push your limits in a competitive and time-bound environment.
          </li>
          <li className="ml-5">
            <b className="text-purple-500">Connect with the community: </b>          
            Network with tech enthusiasts, developers, and designers from diverse backgrounds.
          </li>
        </ul>
        {/* Closing Paragraph */}
        <p className="mt-4 fade-animation">
        Get ready to utilize your skills, unleash your creativity, and experience the thrill of solving complex problems. HackNocturn is more than just a hackathon – it's a journey of innovation and discovery. Let the night of brilliance and breakthroughs begin with HackNocturn!
        </p>
      </div>
    </section>
  );
};

export default About;
