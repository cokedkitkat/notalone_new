"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import ParticleVortex from "./ParticleVortex";
import ChatMockup from "./ChatMockup";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center overflow-hidden bg-white px-6 pt-12 pb-24 sm:px-8 sm:pt-16 md:pt-20 lg:px-12">
      <ParticleVortex />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Empty gap that keeps the headline where it was (this used to hold the logo pill: 40px + 32px margin) */}
        <div aria-hidden="true" className="h-[4.5rem]" />
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="antigravity-headline mx-auto max-w-5xl text-center text-4xl font-normal tracking-[-0.04em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] lg:leading-[1.08]">
          <span className="block sm:whitespace-nowrap">Explore a vision for more</span>
          <span className="block font-medium text-black sm:whitespace-nowrap">connected digital moments</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }} className="mx-auto mt-6 max-w-2xl text-lg text-[#5f6368] sm:text-xl">
          A product preview for ideas around AI companionship, shared games, and community. The screens below are illustrative concepts, not a live chat service.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#features" className="px-8 py-3.5 text-sm font-medium tracking-tight shadow-md">Explore the preview</Button>
          <Button href="/safety" variant="secondary" className="px-7 py-3.5 text-sm font-medium">Product status</Button>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }} className="mt-14 w-full max-w-2xl"><ChatMockup /></motion.div>
      </div>
    </section>
  );
}
