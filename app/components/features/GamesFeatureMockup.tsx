export default function GamesFeatureMockup() {
  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-[#f1f3f4] bg-[#f8f9fa] px-4 py-2.5">
        <span className="text-[11px] font-medium text-[#5f6368]">
          Tic Tac Toe · Playing with Nova
        </span>
        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
          Your move
        </span>
      </div>

      <div className="p-6">
        <div className="mx-auto grid w-fit grid-cols-3 gap-2">
          {["X", "O", "", "O", "X", "", "", "", "X"].map((cell, i) => (
            <div
              key={i}
              className={`flex h-14 w-14 items-center justify-center rounded-xl text-base font-bold transition-all sm:h-16 sm:w-16 ${
                cell === "X"
                  ? "bg-blue-50 text-blue-600 border border-blue-200/60"
                  : cell === "O"
                  ? "bg-purple-50 text-purple-600 border border-purple-200/60"
                  : "bg-[#f8f9fa] border border-[#e8eaed]"
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-xs font-medium text-[#5f6368]">
          3 in a row! You won this round 🎉
        </div>
      </div>
    </div>
  );
}
