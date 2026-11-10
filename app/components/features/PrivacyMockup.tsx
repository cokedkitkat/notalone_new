export default function PrivacyMockup() {
  const points = [
    { title: "End-to-End Encryption", desc: "Private companion chats are strictly between you and your AI" },
    { title: "No Data Selling", desc: "Zero advertising trackers, data brokers, or third-party telemetry" },
    { title: "One-Click Memory Wipe", desc: "Delete chat history, character memory, and your profile anytime" },
    { title: "Secure Google & Email Sign-In", desc: "Industry-standard OAuth authentication with biometric support" },
  ];

  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        {/* Shield Icon Badge */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        <div className="w-full space-y-2.5 text-left">
          {points.map((pt, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-[#f1f3f4] bg-[#f8f9fa] p-3 transition-colors hover:bg-white"
            >
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                ✓
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#1f1f1f]">
                  {pt.title}
                </h4>
                <p className="mt-0.5 text-[11px] leading-normal text-[#5f6368]">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
