"use client";

import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#f1f3f4] bg-[#fafafa] py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl" style={{ background: "radial-gradient(circle, rgba(66, 133, 244, 0.08) 0%, rgba(234, 67, 53, 0.05) 40%, rgba(251, 188, 5, 0.05) 70%, transparent 100%)" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <FadeIn><span className="rounded-full border border-[#dadce0] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#111827] shadow-xs">Product Preview</span><h2 className="antigravity-headline mt-6 text-4xl font-normal tracking-[-0.04em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[68px]">See what is being explored</h2></FadeIn>
        <FadeIn delay={0.15}><p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5f6368]">Review the concepts, product status, and safety commitments behind NOT ALONE before any live service launches.</p></FadeIn>
        <FadeIn delay={0.3}><div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"><Button href="/safety" className="px-9 py-4 text-sm font-medium shadow-md">Read product status</Button></div></FadeIn>
      </div>
    </section>
  );
}
