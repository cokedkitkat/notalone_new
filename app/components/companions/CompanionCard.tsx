"use client";

import { motion, useReducedMotion } from "framer-motion";

type CompanionCardProps = {
  name: string;
  role: string;
  emoji: string;
  tagline: string;
  gradient: string;
  delay?: number;
};

export default function CompanionCard({
  name,
  role,
  emoji,
  tagline,
  gradient,
  delay = 0,
}: CompanionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <div className="group relative flex w-64 shrink-0 flex-col items-center rounded-2xl border border-[#e8eaed] bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#dadce0] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
      {/* Avatar Icon */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-sm ${gradient}`}
        aria-hidden="true"
      >
        {emoji}
      </div>

      {/* Name and Role */}
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#111827]">
        {name}
      </h3>
      <span className="text-xs font-medium text-[#1a73e8]">{role}</span>

      {/* Tagline */}
      <p className="mt-2.5 text-xs leading-relaxed text-[#5f6368]">
        {tagline}
      </p>

      {/* Action pill */}
      <a
        href="https://notalone-community.vercel.app"
        className="mt-5 inline-flex items-center gap-1 rounded-full border border-[#dadce0] px-3.5 py-1 text-xs font-medium text-[#3c4043] transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white"
      >
        Start chat <span>→</span>
      </a>
    </div>
  );

  if (shouldReduceMotion) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {card}
    </motion.div>
  );
}
