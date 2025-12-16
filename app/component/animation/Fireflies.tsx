"use client";

import { useEffect, useRef } from "react";

export default function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const parent = canvas.parentElement!;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;

    // 密度調整（SPだけ軽く）
    const DENSITY = isMobile ? 59000 : 18000;

    const COUNT = Math.floor(
      (canvas.width * canvas.height) / DENSITY
    );
    
    const fireflies = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * (isMobile ? 0.4 : 0.6) + 0.3,
      vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4),
      vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4),
      alpha: Math.random() * 0.6 + 0.4,
      pulse: Math.random() * (isMobile ? 0.015 : 0.02) + 0.008,
    }));
    

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireflies.forEach(f => {
        f.x += f.vx;
        f.y += f.vy;
        f.alpha += f.pulse;

        if (f.alpha > 1 || f.alpha < 0.3) f.pulse *= -1;
        if (f.x < 0 || f.x > canvas.width) f.vx *= -1;
        if (f.y < 0 || f.y > canvas.height) f.vy *= -1;

        const glow = ctx.createRadialGradient(
          f.x,
          f.y,
          0,
          f.x,
          f.y,
          f.r * 14
        );

        glow.addColorStop(0, `rgba(255,255,220,${f.alpha})`);
        glow.addColorStop(1, "rgba(255,255,220,0)");

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(f.x, f.y, f.r * 14, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20 pointer-events-none"
    />
  );
}
