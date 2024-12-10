import React, { useEffect, useRef, useState } from 'react';
import GlitchText from './Glitch';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Preloader = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  // Prevent scrolling during preloader animation
  document.body.style.overflow = 'hidden';

  const initTl = gsap.timeline({
    onComplete: () => {
      ScrollTrigger.refresh();  // Refresh ScrollTrigger after the initial animation
      document.body.style.overflow = ''; // Restore scrolling after the animation
    },
  });

  // Animate text elements
  textRefs.current.forEach((el, index) => {
    initTl.fromTo(
      el,
      { y: -50, opacity: 0, scale: 0 },
      { y: 0, opacity: 1, scale: 1.2, duration: 0.4, ease: 'power1.out' },
      index * 0.1
    );
  });

  // Scroll-triggered exit animation
  const exitTrigger = ScrollTrigger.create({
    trigger: containerRef.current,
    start: 'top top',
    end: 'bottom top',
    scrub: false, // Disable scrubbing to allow normal scroll behavior
    onEnter: () => {
      gsap.to(textRefs.current, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power1.in',
      });
      gsap.to(containerRef.current, {
        y: -500,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false); // Hide preloader after animation
          document.body.style.overflow = ''; // Enable scrolling again
        },
      });
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    document.body.style.overflow = '';
  };
}, []);


  return isVisible ? (
    <div
      className="relative"
      ref={containerRef}
      // style={{
      //   zIndex: 100,
      //   pointerEvents: 'none',
      //   position: 'fixed',
      //   top: 0,
      //   left: 0,
      //   width: '100%',
      //   height: '100%',
      // }}
    >
      <div className="text-container gap-5  h-screen p-10 backdrop-blur-sm top-0 left-0 w-full flex items-center  justify-center">
        {['<', 'h', 'a', 'c', 'k', 'n', 'o', 'c', 't', 'u', 'r', 'n', '/', '>'].map((char, index) => (
          <span
            key={index}
            className={`t${index + 1}`}
            ref={(el) => (textRefs.current[index] = el)}
          >
            <GlitchText size="9rem" heading={char}></GlitchText>
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Preloader;
