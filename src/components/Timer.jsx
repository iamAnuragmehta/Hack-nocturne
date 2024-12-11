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

    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  };

  // Adjust the flex direction based on screen size
  const flexDirection = screenSize < 768 ? "column" : "row"; // Column for mobile, row for desktop

  return (
    <div
      className={`h-[vh] ${className} text-[5vh] text-slate-300 flex items-center justify-center timer`}
      style={{ flexDirection }}
    >
      <h1 className="mr-2 text-purple-500 font-bold">Event Starts In:</h1>
      <h1 className="text-purple-500 font-normal">{timeLeft > 0 ? getFormattedTime(timeLeft) : "The event has started!"}</h1>
    </div>
  );
};

export default Timer;
