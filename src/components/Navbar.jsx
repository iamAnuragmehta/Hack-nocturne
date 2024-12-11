import React, { useState, useEffect } from "react";
import "../index.css"; // Add any required custom styles
import GlitchText from "./Glitch";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Update screen size dynamically
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to calculate font size dynamically
  const calculateFontSize = () => {
    if (screenSize < 600) {
      return "1.3rem"; // Small size for mobile
    } else if (screenSize < 768) {
      return "1.5rem"; // Medium size for tablets
    } else {
      return "1.7rem"; // Large size for desktops
    }
  };

  const calculateLogoSize = () => {
    const baseSize = calculateFontSize();
    const sizeValue = parseFloat(baseSize); // Extract numeric part
    return `${sizeValue + 0.6}rem`; // Increase by 0.6rem for logo
  };

  return (
    <nav className="navbar backdrop-blur-sm text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="logo font-bold">
        <GlitchText heading="<hacknocturne/>" size={calculateLogoSize()} />
      </div>

      {/* Hamburger Icon */}
      <button
        className={`hamburger md:hidden`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu Links */}
      <div
        className={`menu-links flex-col md:flex-row md:flex gap-6 md:gap-8 md:items-end ${
          menuOpen ? "flex" : "hidden"
        } absolute md:static top-[70px] left-[50%] w-full md:w-auto bg-black opacity-85 backdrop-blur-md md:bg-transparent p-4 md:p-0`}
      >
        <a href="#home" className="hover:underline border-b-2">
          <GlitchText size={calculateFontSize()} heading="Home" />
        </a>
        <a href="#about" className="hover:underline border-b-2 border-purple-500 ">
          <GlitchText size={calculateFontSize()} heading="About" />
        </a>
        <a href="#register" className="hover:underline border-b-2 border-purple-500">
          <GlitchText size={calculateFontSize()} heading="Register" />
        </a>
        <a href="#contact" className="hover:underline border-b-2 border-purple-500">
          <GlitchText size={calculateFontSize()} heading="Contact" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
