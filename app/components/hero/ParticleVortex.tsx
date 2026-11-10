"use client";

import { useEffect, useRef } from "react";

export default function ParticleVortex() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const colors = [
      "#4285f4", // blue
      "#34a853", // green
      "#fbbc05", // yellow
      "#ea4335", // red
      "#8b5cf6", // purple
      "#ec4899", // pink
      "#06b6d4", // cyan
      "#f97316", // orange
      "#3b82f6", // royal blue
    ];

    interface Particle {
      radiusX: number;
      radiusY: number;
      angle: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
      rotation: number;
    }

    const particles: Particle[] = [];
    const numRings = 24;
    const particlesPerRing = 26;

    for (let r = 0; r < numRings; r++) {
      const rx = 160 + r * 28;
      const ry = 90 + r * 16;
      for (let p = 0; p < particlesPerRing; p++) {
        const baseAngle = (p / particlesPerRing) * Math.PI * 2 + (r * 0.12);
        const color = colors[(r * 3 + p) % colors.length];
        particles.push({
          radiusX: rx + (Math.random() - 0.5) * 12,
          radiusY: ry + (Math.random() - 0.5) * 8,
          angle: baseAngle + (Math.random() - 0.5) * 0.05,
          speed: 0.0003 + (r % 2 === 0 ? 0.0001 : -0.0001),
          size: 2.5 + (r % 3) * 0.8,
          color,
          alpha: Math.min(0.85, 0.25 + (r / numRings) * 0.6),
          rotation: baseAngle + Math.PI / 4,
        });
      }
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      for (const p of particles) {
        p.angle += p.speed;

        const x = centerX + Math.cos(p.angle) * (p.radiusX * (width / 1400));
        const y = centerY + Math.sin(p.angle) * (p.radiusY * (height / 850));

        // Draw small dash particle aligned with the ellipse tangent
        ctx.save();
        ctx.translate(x, y);
        // Tangent angle
        const tangent = p.angle + Math.PI / 2;
        ctx.rotate(tangent);

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        // Draw elongated rounded confetti dash
        const dashLength = p.size * 2.2;
        const dashWidth = p.size * 0.9;
        ctx.beginPath();
        ctx.roundRect(-dashWidth / 2, -dashLength / 2, dashWidth, dashLength, 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

