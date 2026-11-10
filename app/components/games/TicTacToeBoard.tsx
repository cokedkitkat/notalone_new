"use client";

import { motion } from "framer-motion";

const board = [
  ["X", "O", "X"],
  ["", "X", "O"],
  ["O", "", "X"],
];

export default function TicTacToeBoard() {
  return (
    <div className="mx-auto grid w-fit grid-cols-3 gap-2.5">
      {board.flat().map((cell, i) => {
        const content = (
          <div
            key={i}
            className={`flex h-16 w-16 items-center justify-center rounded-xl text-xl font-bold transition-all sm:h-20 sm:w-20 ${
              cell === "X"
                ? "border border-blue-200 bg-blue-50/80 text-blue-600 shadow-xs"
                : cell === "O"
                ? "border border-purple-200 bg-purple-50/80 text-purple-600 shadow-xs"
                : "border border-[#e8eaed] bg-[#f8f9fa] hover:bg-white hover:border-[#dadce0]"
            }`}
          >
            {cell}
          </div>
        );

        if (!cell) {
          return <div key={i}>{content}</div>;
        }

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: 0.15 + i * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {content}
          </motion.div>
        );
      })}
    </div>
  );
}
