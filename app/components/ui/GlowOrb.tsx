type GlowOrbProps = {
  color?: "blue" | "purple" | "pink";
  size?: string;
  className?: string;
};

export default function GlowOrb({
  color = "blue",
  size = "600px",
  className = "",
}: GlowOrbProps) {
  const colors = {
    blue: "rgba(77, 124, 255, 0.12)",
    purple: "rgba(124, 92, 255, 0.1)",
    pink: "rgba(192, 92, 255, 0.08)",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute animate-glow-float rounded-full blur-[120px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
      }}
    />
  );
}
