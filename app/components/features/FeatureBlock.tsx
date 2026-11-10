import FadeIn from "../ui/FadeIn";

type FeatureBlockProps = {
  badge: string;
  title: string;
  description: string;
  mockup: React.ReactNode;
  reversed?: boolean;
};

export default function FeatureBlock({
  badge,
  title,
  description,
  mockup,
  reversed = false,
}: FeatureBlockProps) {
  return (
    <div
      className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Column */}
      <FadeIn
        direction={reversed ? "right" : "left"}
        className="flex-1 text-center lg:text-left"
      >
        <span className="rounded-full bg-[#f1f3f4] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6368]">
          {badge}
        </span>
        <h3 className="antigravity-headline mt-4 text-2xl font-medium tracking-tight text-[#111827] sm:text-3xl md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-[#5f6368] sm:text-lg">
          {description}
        </p>
      </FadeIn>

      {/* Mockup Column */}
      <FadeIn
        direction={reversed ? "left" : "right"}
        className="flex flex-1 justify-center"
      >
        {mockup}
      </FadeIn>
    </div>
  );
}
