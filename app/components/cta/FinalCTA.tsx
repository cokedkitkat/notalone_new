"use client";

import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28 md:py-36 border-t border-[#f1f3f4]">
      {/* Subtle colorful aura backdrop */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66, 133, 244, 0.08) 0%, rgba(234, 67, 53, 0.05) 40%, rgba(251, 188, 5, 0.05) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <FadeIn>
          <span className="rounded-full bg-white border border-[#dadce0] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#111827] shadow-xs">
            Start Today
          </span>
          <h2 className="antigravity-headline mt-6 text-4xl font-normal tracking-[-0.04em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[68px]">
            Your companion is waiting
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5f6368]">
            Experience the warmth of an attentive conversational partner.
            Say goodbye to isolation and discover true AI companionship.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="https://notalone-community.vercel.app"
              className="px-9 py-4 text-sm font-medium shadow-md"
            >
              Get started now
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
