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
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-[#111827] shadow-sm"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo-original.png"
          alt=""
          width={size}
          height={size}
          unoptimized
          priority
          className="block"
        />
      </span>

      {showText && (
        <span className="font-heading text-[17px] font-semibold tracking-tight text-[#111827]">
          NOT ALONE
        </span>
      )}
    </div>
  );
}
