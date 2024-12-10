import React, { useEffect, useRef, forwardRef } from "react";
import "../index.css"
const ParticleCanvas = forwardRef((props, ref) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;
    let rate = 60;
    let arc = 100;
    let size = 6;
    let speed = 30;
    let parts = [];
    let time = 0;
    let mouse = { x: 0, y: 0 };
    let colors = ["#f801d7bf", "#00ccffbf", "#ffffff9a"];

    canvas.width = w;
    canvas.height = h;

    const createParticles = () => {
      parts = Array.from({ length: arc }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      }));
    };

    const DistanceBetween = (p1, p2) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const MouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, w, h);

      parts.forEach((p) => {
        const distanceFactor = Math.max(
          Math.min(15 - DistanceBetween(mouse, p) / 10, 10),
          1
        );
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = p.c;
        ctx.strokeStyle = p.c;
        Math.random() > 0.5 ? ctx.stroke() : ctx.fill();

        p.x += p.toX * (time * 0.05);
        p.y += p.toY * (time * 0.05);

        if (p.x > w) p.x = 0;
        if (p.y > h) p.y = 0;
        if (p.x < 0) p.x = w;
        if (p.y < 0) p.y = h;
      });

      time = time < speed ? time + 1 : speed;
      setTimeout(animateParticles, 1000 / rate);
    };

    createParticles();
    animateParticles();
    window.addEventListener("mousemove", MouseMove);

    return () => window.removeEventListener("mousemove", MouseMove);
  }, []);

  // Forward the canvas reference
  return <canvas ref={(el) => { canvasRef.current = el; if (ref) ref.current = el; }} className="particle-canvas" />;
});

export default ParticleCanvas;
