import Image from "next/image";

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
        className="flex shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-[#111827] p-2 shadow-xs transition-transform duration-200 hover:scale-105"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <Image
          src="/logo-original-cropped.png"
          alt="NOT ALONE Logo"
          width={Math.round(size * 0.72)}
          height={Math.round(size * 0.72)}
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
