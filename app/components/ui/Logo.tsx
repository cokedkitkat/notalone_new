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
      <Image
        src="/logo-original.png"
        alt="NOT ALONE"
        width={size}
        height={size}
        className="shrink-0 object-contain"
        priority
      />

      {showText && (
        <span className="font-heading text-[17px] font-semibold tracking-tight text-[#111827]">
          NOT ALONE
        </span>
      )}
    </div>
  );
}
