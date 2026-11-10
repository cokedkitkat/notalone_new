import FadeIn from "../ui/FadeIn";

type StepCardProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
};

export default function StepCard({
  number,
  title,
  description,
  icon,
  delay = 0,
}: StepCardProps) {
  return (
    <FadeIn delay={delay} className="flex-1">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Number Badge and Icon */}
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dadce0] bg-[#f8f9fa] shadow-sm">
            {icon}
          </div>
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white shadow-sm">
            {number}
          </span>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-[#111827]">
          {title}
        </h3>
        <p className="max-w-xs text-sm leading-relaxed text-[#5f6368]">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}
