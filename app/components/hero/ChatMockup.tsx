"use client";

import { motion, useReducedMotion } from "framer-motion";

const messages = [
  {
    sender: "ai",
    name: "Luna",
    avatar: "🌙",
    text: "Good morning! How are you feeling today? Remember, I'm always here if you want to talk or just relax.",
  },
  {
    sender: "user",
    name: "You",
    avatar: "Y",
    text: "Had a long day at work. Just needed a friendly voice and maybe a quick game of chess.",
  },
  {
    sender: "ai",
    name: "Luna",
    avatar: "🌙",
    text: "I hear you. Take a deep breath — you did great today. I've set up the chess board whenever you're ready! ♟",
  },
];

export default function ChatMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl text-left">
      {/* Decorative backdrop glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66, 133, 244, 0.12) 0%, rgba(234, 67, 53, 0.08) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main Window Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
        {/* Window Chrome */}
        <div className="flex items-center justify-between border-b border-[#f1f3f4] bg-[#f8f9fa] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-2 text-xs font-medium text-[#5f6368]">
              Luna · AI Companion
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-600">Online</span>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex flex-col gap-4 p-5 sm:p-6">
          {messages.map((msg, i) => {
            const isAI = msg.sender === "ai";
            const bubble = (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  isAI ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold shadow-sm ${
                    isAI
                      ? "bg-gradient-to-tr from-[#e8f0fe] to-[#fce8e6] text-black"
                      : "bg-[#111827] text-white"
                  }`}
                >
                  {msg.avatar}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[78%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed ${
                    isAI
                      ? "rounded-tl-xs border border-[#e8eaed] bg-[#f8f9fa] text-[#1f1f1f]"
                      : "rounded-tr-xs bg-[#111827] text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );

            if (shouldReduceMotion) return bubble;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + i * 0.25,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                {bubble}
              </motion.div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div className="border-t border-[#f1f3f4] bg-white p-3.5 sm:px-5">
          <div className="flex items-center gap-2 rounded-full border border-[#dadce0] bg-[#f8f9fa] px-4 py-2 text-xs">
            <span className="flex-1 text-[#80868b]">
              Say hello to Luna or propose a game…
            </span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
