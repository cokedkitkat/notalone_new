"use client";

import { motion } from "framer-motion";

export default function IconRibbonManifesto() {
  const icons = [
    { id: 1, label: "Terminal", icon: "⌨" },
    { id: 2, label: "Code", icon: "</>" },
    { id: 3, label: "Branch", icon: "⑂" },
    { id: 4, label: "Arrow", icon: "→" },
    { id: 5, label: "Sparkle", icon: "✦" },
    { id: 6, label: "Grid", icon: "⊞" },
    { id: 7, label: "Tag", icon: "< >" },
    { id: 8, label: "Brackets", icon: "{ }" },
    { id: 9, label: "Documents", icon: "❐" },
    { id: 10, label: "Folder", icon: "📁" },
    { id: 11, label: "Sparkle Dots", icon: "⁘" },
    { id: 12, label: "Connector", icon: "⚬-⚬" },
    { id: 13, label: "Return", icon: "↵" },
    { id: 14, label: "Pen Wand", icon: "🪄" },
  ];

  // Creates the subtle arch curve from Screenshot 1
  const getCurveY = (index: number, total: number) => {
    return Math.sin(((index + 1) / total) * Math.PI) * 16;
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Curved icon ribbon row matching Screenshot 1 */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-8 pt-4 no-scrollbar sm:justify-center sm:gap-4 md:gap-5">
          {icons.map((item, idx) => {
            const curveOffset = getCurveY(idx, icons.length);
            // The arch offset lives on a plain wrapper so framer-motion's own
            // slide-in animation (which also sets "transform") can't wipe it out.
            return (
              <div
                key={item.id}
                className="shrink-0"
                style={{ transform: `translateY(${curveOffset}px)` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#e8eaed] bg-white text-xs font-semibold text-[#3c4043] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#dadce0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:h-14 sm:w-14 sm:text-sm"
                  title={item.label}
                >
                  <span className="font-mono text-[#5f6368] transition-colors group-hover:text-black">
                    {item.icon}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Manifesto Headline matching Screenshot 1 font style & weight */}
        <div className="mt-20 max-w-4xl text-left md:mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="antigravity-manifesto text-3xl text-[#1f1f1f] sm:text-4xl md:text-5xl lg:text-[54px]"
          >
            NOT ALONE is our companion platform, allowing anyone to chat, play,
            and connect in the AI era.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
