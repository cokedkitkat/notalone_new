import SectionWrapper from "../ui/SectionWrapper";
import FadeIn from "../ui/FadeIn";
import StepCard from "./StepCard";

const steps = [
  {
    number: "1",
    title: "Quick, secure sign-in",
    description:
      "Sign in with Google or email in seconds. No long surveys or invasive questionnaires.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a73e8"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Choose your companion",
    description:
      "Explore diverse personalities. Pick Luna for calm talks, Nova for games, or Blaze for energy.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Start chatting immediately",
    description:
      "Say hello, talk through your feelings, or challenge them to chess. They're ready whenever you are.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ea4335"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper className="bg-white">
      <FadeIn>
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#f1f3f4] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6368]">
            Simple Onboarding
          </span>
          <h2 className="antigravity-headline mt-4 text-3xl font-medium tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            Get started in three easy steps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5f6368] sm:text-lg">
            No friction, no barrier to entry. Connect with an understanding
            presence in less than a minute.
          </p>
        </div>
      </FadeIn>

      {/* Steps connector */}
      <div className="relative">
        <div
          className="absolute top-8 left-[15%] right-[15%] hidden h-[1px] bg-[#dadce0] lg:block"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-8">
          {steps.map((step, i) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
