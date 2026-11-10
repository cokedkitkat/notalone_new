"use client";

import { motion } from "framer-motion";

// Dark (black-side) chess glyphs. Used to colour each piece by its own glyph
// rather than by which row it happens to sit on.
const DARK_PIECES = "♜♞♝♛♚♟";

const pieces: Record<string, string> = {
  "0-0": "♜",
  "0-1": "♞",
  "0-2": "♝",
  "0-3": "♛",
  "0-4": "♚",
  "0-5": "♝",
  "0-6": "♞",
  "0-7": "♜",
  "1-0": "♟",
  "1-1": "♟",
  "1-2": "♟",
  "1-3": "♟",
  "1-4": "♟",
  "1-5": "♟",
  "1-6": "♟",
  "1-7": "♟",
  "3-4": "♟",
  "4-4": "♙",
  "6-0": "♙",
  "6-1": "♙",
  "6-2": "♙",
  "6-3": "♙",
  "6-5": "♙",
  "6-6": "♙",
  "6-7": "♙",
  "7-0": "♖",
  "7-1": "♘",
  "7-2": "♗",
  "7-3": "♕",
  "7-4": "♔",
  "7-5": "♗",
  "7-6": "♘",
  "7-7": "♖",
};

export default function ChessBoard() {
  return (
    <div className="inline-grid grid-cols-8 overflow-hidden rounded-xl border border-[#dadce0] shadow-sm">
      {Array.from({ length: 64 }).map((_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const isLight = (row + col) % 2 === 0;
        const piece = pieces[`${row}-${col}`];

        const cell = (
          <div
            key={i}
            className={`flex h-8 w-8 items-center justify-center text-lg sm:h-10 sm:w-10 sm:text-xl ${
              isLight ? "bg-[#f8f9fa]" : "bg-[#e8eaed]"
            }`}
          >
            {piece && (
              <span
                className={
                  DARK_PIECES.includes(piece)
                    ? "text-[#111827] drop-shadow-xs"
                    : "text-blue-700 drop-shadow-xs"
                }
              >
                {piece}
              </span>
            )}
          </div>
        );

        if (!piece) {
          return cell;
        }

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              delay: 0.05 + (row * 8 + col) * 0.008,
            }}
          >
            {cell}
          </motion.div>
        );
      })}
    </div>
  );
}
