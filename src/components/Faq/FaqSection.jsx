import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Faq.css";
import GlitchText from "../Glitch";

function FaqSection() {
  const faqs = [
    {
      question: "Who can participate?",
      answer: "All undergrad students having valid College Id card are eligible to participate and cross-college teams are allowed (at least 2 participants of a team should be from one college)",
    },
    {
      question: "What's the team size?",
      answer: "Teams can have 2-4 members.",
    },
    {
      question: "What is the participation cost?",
      answer: "Participation cost is Rs.350 per member",
    },
    {
      question: "How do I register?",
      answer: "Registration can be completed online through our website.",
    },
    {
      question: "Will accommodation and food be provided?",
      answer: "Yes, accommodation and food will be provided at the venue, it will be allotted once participant reaches the venue.",
    },
    {
      question: "When is the event?",
      answer: "The event will be held from 21 February 2025.",
    },
    {
      question: "What should I bring once selected for the hackathon?",
      answer: "Bring your valid College Id, your laptop, charger, blanket (if you want to take a nap), medicine (if any), etc.",
    },
    {
      question: "Whom can I contact if I have further questions?",
      answer: "Phone no: Owais +91 90088-28640, Saurabh +91 82907-10753 or Reach out to hacknocturne@gmail.com",
    },
  ];
  
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
    <section id="faq's" className="rubik px-2 my-20 mx-8 md:mx-20">
      <div className="md:p-12">
        <div className="text-center">
          <div className="fade-animation text-center">
          <div className="text-white uppercase maintext text-6xl">Any Questions?</div>
          <div className="text-white uppercase maintext text-4xl">check here</div>
          </div>

          <p className="text-purple-300 hidden sm:block fade-animation">
            Find answers to the most common questions about our event.
          </p>
        </div>
      </div>

      <div className="w-full grid justify-around grid-cols-1 gap-6 mt-12 md:grid-cols-2 text-white">
        <div className="space-y-6">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <div className="fade-animation" key={index}>
              <Question header={faq.question} text={faq.answer} />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <div className="fade-animation" key={index}>
              <Question header={faq.question} text={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Question = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="w-full rounded-lg clear-glass border-2 border-gray-700 p-4">
      <button
        className={`flex w-full text-left items-center focus:outline-none`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-white/5">
          {/* Arrow svg */}
          <svg
            className={`fill-white duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <h4 className="">{header}</h4>
      </button>

      {active && (
        <div className="pl-[62px] pt-4">
          {active && (
            <Typewriter
              key={1}
              options={{
                strings: [text],
                autoStart: true,
                delay: 15,
                deleteSpeed: Infinity,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export { FaqSection };
