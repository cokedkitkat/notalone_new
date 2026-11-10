import SectionWrapper from "../ui/SectionWrapper";
import FadeIn from "../ui/FadeIn";
import CompanionCard from "./CompanionCard";

const companions = [
  {
    name: "Luna",
    role: "Empathy & Reflection",
    emoji: "🌙",
    tagline: "A calm, thoughtful listener who loves deep late-night conversations and perspective.",
    gradient: "bg-indigo-50 border border-indigo-100/60 text-indigo-600",
  },
  {
    name: "Blaze",
    role: "Energy & Motivation",
    emoji: "🔥",
    tagline: "Energetic, witty, and always ready with banter to boost your spirits and brainstorm ideas.",
    gradient: "bg-amber-50 border border-amber-100/60 text-amber-600",
  },
  {
    name: "Sage",
    role: "Mindfulness & Advice",
    emoji: "🌿",
    tagline: "Grounded and gentle. Ideal for de-stressing, mindful check-ins, and thoughtful reflection.",
    gradient: "bg-emerald-50 border border-emerald-100/60 text-emerald-600",
  },
  {
    name: "Nova",
    role: "Games & Curiosity",
    emoji: "✨",
    tagline: "Playful and inventive. Your companion for chess matches, riddles, and exploring curiosity.",
    gradient: "bg-sky-50 border border-sky-100/60 text-sky-600",
  },
  {
    name: "Ember",
    role: "Creative Storyteller",
    emoji: "🎭",
    tagline: "Expressive and warm. A storyteller who loves writing together, humor, and shared stories.",
    gradient: "bg-rose-50 border border-rose-100/60 text-rose-600",
  },
  {
    name: "Atlas",
    role: "Grounded & Reliable",
    emoji: "🧭",
    tagline: "Steady, dependable, and always ready to help you organize thoughts and plan your day.",
    gradient: "bg-violet-50 border border-violet-100/60 text-violet-600",
  },
];

export default function Companions() {
  return (
    <SectionWrapper id="companions" className="bg-[#fafafa]">
      <FadeIn>
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#f1f3f4] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6368]">
            AI Personalities
          </span>
          <h2 className="antigravity-headline mt-4 text-3xl font-medium tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            Meet your companions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5f6368] sm:text-lg">
            Each companion has a distinct voice and temperament. Chat freely,
            share your thoughts, or play games anytime.
          </p>
        </div>
      </FadeIn>

      <div className="flex gap-6 overflow-x-auto pb-6 sm:flex-wrap sm:justify-center sm:overflow-x-visible">
        {companions.map((c, i) => (
          <CompanionCard
            key={c.name}
            name={c.name}
            role={c.role}
            emoji={c.emoji}
            tagline={c.tagline}
            gradient={c.gradient}
            delay={i * 0.07}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
