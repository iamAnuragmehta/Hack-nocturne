import React, { useEffect, useState } from "react";

const Timer = ({ targetDate, className }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    return Math.max(target - now, 0);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen size dynamically
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Start countdown interval
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [timeLeft]);

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds %= 24 * 60 * 60;

    let hours = Math.floor(totalSeconds / (60 * 60));
    totalSeconds %= 60 * 60;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return (
      <div className="flex flex-row justify-center md:justify-start">
        <div className="flex flex-col">
          <p className="flex justify-center text-6xl maintext">{days}</p>
          <p className="flex justify-center text-xl maintext">DAYS</p>
        </div>
        <div className="flex items-center text-4xl font-bold mx-1">:</div>

        <div className="flex flex-col">
          <p className="flex justify-center text-6xl maintext">{hours}</p>
          <p className="flex justify-center text-xl maintext">Hours</p>
        </div>
        <div className="flex items-center text-4xl font-bold mx-1">:</div>

        <div className="flex flex-col">
          <p className="flex justify-center text-6xl maintext">{minutes}</p>
          <p className="flex justify-center text-xl maintext">Minutes</p>
        </div>
        <div className="flex items-center text-4xl font-bold mx-1">:</div>

        <div className="flex flex-col">
          <p className="flex justify-center text-6xl maintext">{seconds}</p>
          <p className="flex justify-center text-xl maintext">Seconds</p>
        </div>
      </div>
    );
  };

  // Function to determine font size based on screen size
  const flexDirection = screenSize < 768 ? "column" : "row"; // Column for mobile, row for desktop

  return (
    <div
      className={` text-slate-300`}
      style={{ flexDirection }}
    >
      <h1
        className="text-purple-500 font-bold text-center md:text-left text-4xl maintext"
      >
        TIME LEFT
      </h1>
      
        {timeLeft > 0 ? getFormattedTime(timeLeft) : "The event has started!"}
     
    </div>
  );
};

export default Timer;
