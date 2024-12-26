import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import location from "../assest/location.jpg";
import "./contact.css";

function ContactSection() {
  const canvasRef = useRef(null);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      const isScrollingDown =
        window.event &&
        window.event.wheelDelta !== undefined &&
        window.event.wheelDelta < 0;

      if (scrolledToBottom && isScrollingDown) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const socialLinks = [
    { icon: faTwitter, url: "https://github.com/glugmvit" },
    { icon: faInstagram, url: "https://www.instagram.com/glugmvit" },
    { icon: faLinkedin, url: "https://in.linkedin.com/company/glugmvit" },
    { icon: faGithub, url: "https://github.com/glugmvit" },
  ];

  return (
    <div className={`contact-footer text-white`}>
      <div className="contact-container">
        <div className="contact-info">
          <div className="image-container">
            <a
              href="https://maps.app.goo.gl/aetAnwLKbzb32tdz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={location}
                alt="Location"
                className="location-image"
              />
            </a>
          </div>
          <div className="contact-details">
            {/* <a href="mailto:hackonauts@example.com" className="contact-item">
              📧 hackonauts@example.com
            </a> */}
            {/* <a href="tel:+1234567890" className="contact-item">
              📱 +1234567890
            </a> */}
            <a
              href="https://maps.app.goo.gl/aetAnwLKbzb32tdz9"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              📍 Sir M Visvesvaraya Institute of Technology, Bangalore
            </a>
          </div>
        </div>
        <div className="social-handles">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ContactSection };
