import Particles from "react-tsparticles";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import AOS from "aos";

function Background() {
  const [isMobile, setIsMobile] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    // Check if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        detectRetina: true,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: !isMobile, // Disable on mobile
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
}

export { Background };
