import React from "react";
import GlitchText from "./Glitch";

const About = () => {
  return (
    <section className="flex flex-col p-12">
      <div className="flex items-center justify-center p-5 mb-4 border-b-4">
        <h1>
          <GlitchText size="7rem" heading="About us"></GlitchText>
        </h1>
      </div>
      <div className="text-left">
        <p className="text-xl leading-10 text-white">
          HackNocturn is the flagship hackathon organized by CodeShack, bringing
          together innovative minds to collaborate, create, and compete. This
          24-hour coding marathon is a celebration of creativity and technology,
          designed to challenge participants to push their limits in
          problem-solving and software development. HackNocturn provides an
          exciting platform for developers, designers, and tech enthusiasts to
          showcase their skills across four cutting-edge domains: <br></br>
          <ul className="leading-[3rem]">
            <h1 className="ml-10">
              <b>Web Development:</b> Build impactful and user-friendly web
              solutions
            </h1>
            <h1 className="ml-10">
              <b>App Development:</b> Craft mobile applications that enhance
              daily life.
            </h1>
            <h1 className="ml-10">
              <b>Blockchain:</b> Innovate with secure, decentralized
              technologies.{" "}
            </h1>
            <h1 className="ml-10">
              <b>AI/ML:</b> Solve complex problems with artificial intelligence
              and machine learning.
            </h1>
          </ul>
          Whether you&apos;re a seasoned coder or a budding tech enthusiast,
          HackNocturn offers a collaborative environment, expert mentorship, and
          the thrill of competing against the best. Join us to turn your ideas
          into reality, learn from like-minded peers, and leave your mark in the
          tech world! Let the night of innovation begin with HackNocturn!
        </p>
      </div>
    </section>
  );
};

export default About;
