import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  showText?: boolean;
};

// The mark image is 468 x 416 pixels (cropped tight, black, transparent background).
const MARK_RATIO = 468 / 416;

export default function Logo({
  size = 36,
  className = "",
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt={showText ? "" : "NOT ALONE"}
        width={Math.round(size * MARK_RATIO)}
        height={size}
        priority
        unoptimized
        className="block shrink-0"
      />

      {showText && (
        <span className="font-heading text-[17px] font-semibold tracking-tight text-[#111827]">
          NOT ALONE
        </span>
      )}
    </div>
  );
}
