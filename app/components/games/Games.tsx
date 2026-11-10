"use client";

import SectionWrapper from "../ui/SectionWrapper";
import FadeIn from "../ui/FadeIn";
import TicTacToeBoard from "./TicTacToeBoard";
import ChessBoard from "./ChessBoard";

const cardClassName =
  "flex min-h-[34rem] w-full max-w-[30rem] flex-col items-center rounded-2xl border border-[#dadce0] bg-white p-7 shadow-[0_12px_36px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

export default function Games() {
  return (
    <SectionWrapper id="games" className="bg-[#fafafa]">
      <FadeIn>
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#f1f3f4] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6368]">
            Built-In Mini Games
          </span>
          <h2 className="antigravity-headline mt-4 text-3xl font-medium tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            A little fun goes a long way
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5f6368] sm:text-lg">
            Bond with your companion over timeless games. Challenge them to quick
            Tic Tac Toe duels or deep strategic chess matches.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-stretch sm:gap-10">
        <FadeIn delay={0.1} className="flex w-full justify-center sm:w-auto">
          <div className={cardClassName}>
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Casual & Quick
            </span>
            <h3 className="mb-6 text-base font-semibold text-[#111827]">
              Tic Tac Toe
            </h3>
            <div className="flex flex-1 items-center justify-center">
              <TicTacToeBoard />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="flex w-full justify-center sm:w-auto">
          <div className={cardClassName}>
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
              Strategy & Focus
            </span>
            <h3 className="mb-6 text-base font-semibold text-[#111827]">
              Classic Chess
            </h3>
            <div className="flex flex-1 items-center justify-center">
              <ChessBoard />
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
