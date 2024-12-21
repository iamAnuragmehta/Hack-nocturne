import React, { useState, useEffect } from "react";
import GlitchText from "./Glitch";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (screenSize <= 768) {
      setMenuOpen(false);
    }
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
    } else if (screenSize < 800) {
      return "1rem"; // Medium size for tablets
    } else {
      return "1.7rem"; // Large size for desktops
    }
  };

  const calculateLogoSize = () => {
    const baseSize = calculateFontSize();
    const sizeValue = parseFloat(baseSize); // Extract numeric part
    return `${sizeValue + 0.55}rem`; // Increase by 0.6rem for logo
  };

  return (
    <nav className="navbar backdrop-blur-sm text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <a to="/">
        <div className="logo font-bold">
          <GlitchText heading="<hacknocturne/>" size={calculateLogoSize()} />
        </div>
      </a>

      {/* Hamburger Icon */}
      <button
        className={`hamburger md:hidden text-3xl`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu Links */}
      <div
        className={`menu-links flex-col md:flex-row md:flex gap-6 md:gap-8 md:items-end ${
          menuOpen ? "flex mt-72" : "hidden"
        } absolute md:static w-full md:w-auto bg-black opacity-85 backdrop-blur-md md:bg-transparent p-4 md:p-0`}
      >
        <a
          href="#about"
          onClick={closeMenu}
          className="hover:border-b-2 border-purple-500"
        >
          <GlitchText size={calculateFontSize()} heading="About" />
        </a>
        <a
          href="#prizes"
          onClick={closeMenu}
          className="hover:border-b-2 border-purple-500"
        >
          <GlitchText size={calculateFontSize()} heading="prizes" />
        </a>
        <a
          href="#timeline"
          onClick={closeMenu}
          className="hover:border-b-2 border-purple-500"
        >
          <GlitchText size={calculateFontSize()} heading="timeline" />
        </a>
        <a
          href="#faq's"
          onClick={closeMenu}
          className="hover:border-b-2 border-purple-500"
        >
          <GlitchText size={calculateFontSize()} heading="faq's" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
