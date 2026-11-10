type LogoProps = {
  size?: number;
  className?: string;
  showText?: boolean;
};

export default function Logo({
  size = 36,
  className = "",
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* 
        Sleek black badge container matching the site's dark pill accents
        ensures logo-original.png is 100% visible with high contrast and
        never mixes with the white website background.
      */}
      <div
        className="flex shrink-0 items-center justify-center rounded-xl bg-color-grey p-2 border-neutral-800 shadow-xs transition-transform duration-200 hover:scale-105"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img
          src="/logo-original-cropped.png"
          alt="NOT ALONE Logo"
          style={{
            width: `${Math.round(size * 0.72)}px`,
            height: `${Math.round(size * 0.72)}px`,
          }}
          className="object-contain"
        />
      </div>

      {showText && (
        <span className="font-heading text-[17px] font-semibold tracking-tight text-[#111827]">
          NOT ALONE
        </span>
      )}
    </div>
  );
}
