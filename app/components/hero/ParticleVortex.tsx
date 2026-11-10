"use client";

import { useEffect, useRef } from "react";

type Particle = { radiusX: number; radiusY: number; angle: number; speed: number; length: number; width: number; colorIndex: number; alpha: number };

export default function ParticleVortex() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let visible = true;
    let lastTime = performance.now();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const colors = ["#4285f4", "#34a853", "#fbbc05", "#ea4335", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316", "#3b82f6"];
    const groups: Particle[][] = colors.map(() => []);

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };
    resize();

    for (let ring = 0; ring < 24; ring++) {
      for (let point = 0; point < 26; point++) {
        const colorIndex = (ring * 3 + point) % colors.length;
        groups[colorIndex].push({
          radiusX: 175 + ring * 22 + (Math.random() - 0.5) * 10,
          radiusY: 95 + ring * 14 + (Math.random() - 0.5) * 7,
          angle: (point / 26) * Math.PI * 2 + ring * 0.11 + (Math.random() - 0.5) * 0.04,
          speed: 0.00028 + (ring % 2 === 0 ? 0.00009 : -0.00007),
          length: 5.5 + (ring % 3) * 1.1, width: 2.2 + (ring % 2) * 0.4,
          colorIndex, alpha: Math.min(0.88, 0.28 + (ring / 24) * 0.58),
        });
      }
    }

    const render = () => {
      if (!visible) { frame = 0; return; }
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const responsiveScale = Math.min(1, Math.max(0.55, width / 1280));
      const scale = responsiveScale * 1.3;
      ctx.lineCap = "round";

      groups.forEach((group, colorIndex) => {
        ctx.strokeStyle = colors[colorIndex];
        group.forEach((particle) => {
          particle.angle += particle.speed * delta;
          const x = width / 2 + Math.cos(particle.angle) * particle.radiusX * scale;
          const y = height / 2 - 20 + Math.sin(particle.angle) * particle.radiusY * scale;
          const tangent = particle.angle + Math.PI / 2;
          const dx = Math.cos(tangent) * particle.length / 2;
          const dy = Math.sin(tangent) * particle.length / 2;
          ctx.globalAlpha = particle.alpha;
          ctx.lineWidth = particle.width;
          ctx.beginPath(); ctx.moveTo(x - dx, y - dy); ctx.lineTo(x + dx, y + dy); ctx.stroke();
        });
      });
      frame = requestAnimationFrame(render);
    };

    const stop = () => { if (frame) cancelAnimationFrame(frame); frame = 0; };
    const start = () => { if (!frame) { lastTime = performance.now(); frame = requestAnimationFrame(render); } };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop(); }, { threshold: 0.05 });
    observer.observe(canvas);
    window.addEventListener("resize", resize, { passive: true });
    start();

    return () => { observer.disconnect(); window.removeEventListener("resize", resize); stop(); };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-90 will-change-transform" style={{ width: "100%", height: "100%", transform: "translateZ(0)" }} aria-hidden="true" />;
}
