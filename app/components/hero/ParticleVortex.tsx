"use client";

import { useEffect, useRef } from "react";

export default function ParticleVortex() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let isVisible = true;
    let lastTime = performance.now();

    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    let cssWidth = canvas.offsetWidth;
    let cssHeight = canvas.offsetHeight;
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);

    const colorPalette = [
      "#4285f4", // Google Blue
      "#34a853", // Google Green
      "#fbbc05", // Google Yellow
      "#ea4335", // Google Red
      "#8b5cf6", // Purple
      "#ec4899", // Pink
      "#06b6d4", // Cyan
      "#f97316", // Orange
      "#3b82f6", // Royal Blue
    ];

    interface Particle {
      radiusX: number;
      radiusY: number;
      angle: number;
      speed: number;
      length: number;
      width: number;
      colorIndex: number;
      alpha: number;
    }

    const colorGroups: Particle[][] = colorPalette.map(() => []);

    // Exact ring distribution matching Google Antigravity reference (Screenshot 2)
    // Tightly wraps around the 2-line headline without zooming out
    const numRings = 24;
    const particlesPerRing = 26;

    for (let r = 0; r < numRings; r++) {
      // Inner ring starts close to headline: rx=175, ry=95
      const rx = 175 + r * 22;
      const ry = 95 + r * 14;

      for (let p = 0; p < particlesPerRing; p++) {
        const baseAngle = (p / particlesPerRing) * Math.PI * 2 + r * 0.11;
        const colorIndex = (r * 3 + p) % colorPalette.length;

        const particle: Particle = {
          radiusX: rx + (Math.random() - 0.5) * 10,
          radiusY: ry + (Math.random() - 0.5) * 7,
          angle: baseAngle + (Math.random() - 0.5) * 0.04,
          speed: 0.00028 + (r % 2 === 0 ? 0.00009 : -0.00007),
          length: 5.5 + (r % 3) * 1.1,
          width: 2.2 + (r % 2) * 0.4,
          colorIndex,
          alpha: Math.min(0.88, 0.28 + (r / numRings) * 0.58),
        };

        colorGroups[colorIndex].push(particle);
      }
    }

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 16.67, 2.0);
      lastTime = now;

      // Reset transform and clear in physical device pixels
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set scale to dpr so all coordinates are pure CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const centerX = cssWidth / 2;
      const centerY = cssHeight / 2 - 20; // Center around the headline

      // Adapt gracefully on smaller viewports without blowing up on wide screens
      const scale = Math.min(1.0, Math.max(0.55, cssWidth / 1280));

      ctx.lineCap = "round";

      for (let c = 0; c < colorGroups.length; c++) {
        const group = colorGroups[c];
        ctx.strokeStyle = colorPalette[c];

        for (let i = 0; i < group.length; i++) {
          const p = group[i];
          p.angle += p.speed * delta;

          const cx = centerX + Math.cos(p.angle) * p.radiusX * scale;
          const cy = centerY + Math.sin(p.angle) * p.radiusY * scale;

          const tangent = p.angle + Math.PI / 2;
          const halfLen = p.length / 2;
          const dx = Math.cos(tangent) * halfLen;
          const dy = Math.sin(tangent) * halfLen;

          ctx.globalAlpha = p.alpha;
          ctx.lineWidth = p.width;

          ctx.beginPath();
          ctx.moveTo(cx - dx, cy - dy);
          ctx.lineTo(cx + dx, cy + dy);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!animationFrameId) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      if (!canvas) return;
      cssWidth = canvas.offsetWidth;
      cssHeight = canvas.offsetHeight;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    startLoop();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      stopLoop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90 will-change-transform"
      style={{ width: "100%", height: "100%", transform: "translateZ(0)" }}
      aria-hidden="true"
    />
  );
}
