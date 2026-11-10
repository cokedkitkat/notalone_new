"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import ParticleVortex from "./ParticleVortex";
import ChatMockup from "./ChatMockup";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center overflow-hidden bg-white px-6 pt-12 pb-24 sm:px-8 sm:pt-16 md:pt-20 lg:px-12">
      {/* Particle Vortex Background matching Screenshot 2 */}
      <ParticleVortex />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Top Product Pill / Badge with User's Exact Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-[#dadce0] bg-white/95 px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-sm"
        >
          <Logo size={22} showText={true} />
        </motion.div>

        {/* Big Headline matching Screenshot 2: strictly 2 lines */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="antigravity-headline mx-auto max-w-5xl text-center text-4xl font-normal tracking-[-0.04em] text-[#111827] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] lg:leading-[1.08]"
        >
          <span className="block sm:whitespace-nowrap">
            Experience connection with the
          </span>
          <span className="block font-medium text-black sm:whitespace-nowrap">
            next-gen companion platform
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[#5f6368] sm:text-xl"
        >
          Talk to intelligent AI companions anytime, play classic games together,
          and be part of a caring community. You are never truly alone.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            href="https://notalone-community.vercel.app"
            className="px-8 py-3.5 text-sm font-medium tracking-tight shadow-md"
          >
            Get started
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
          <Button
            href="#companions"
            variant="secondary"
            className="px-7 py-3.5 text-sm font-medium"
          >
            Meet the companions
          </Button>
        </motion.div>

        {/* Floating Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-14 w-full max-w-2xl"
        >
          <ChatMockup />
        </motion.div>
      </div>
    </section>
  );
}
