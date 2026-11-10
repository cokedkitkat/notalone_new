export default function ChatFeatureMockup() {
  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
      aria-hidden="true"
    >
      {/* Mini chrome */}
      <div className="flex items-center gap-1.5 border-b border-[#f1f3f4] bg-[#f8f9fa] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] font-medium text-[#5f6368]">
          Real-time AI Chat
        </span>
      </div>

      <div className="space-y-3.5 p-5">
        {/* AI message */}
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
            L
          </div>
          <div className="rounded-2xl rounded-tl-xs border border-[#e8eaed] bg-[#f8f9fa] px-3.5 py-2.5 text-xs text-[#1f1f1f]">
            What&apos;s on your mind today? I&apos;m all ears.
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-xs bg-black px-3.5 py-2.5 text-xs text-white">
            Just wanted to say hi and unwind a bit 😊
          </div>
        </div>

        {/* AI message */}
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
            L
          </div>
          <div className="rounded-2xl rounded-tl-xs border border-[#e8eaed] bg-[#f8f9fa] px-3.5 py-2.5 text-xs text-[#1f1f1f]">
            Hi! That just made my day. Want to talk, or should we play a quick game of Tic Tac Toe?
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-center gap-1.5 pl-9 pt-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9aa0a6]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9aa0a6] [animation-delay:0.15s]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9aa0a6] [animation-delay:0.3s]" />
          <span className="ml-1 text-[11px] text-[#80868b]">Luna is typing…</span>
        </div>
      </div>
    </div>
  );
}
