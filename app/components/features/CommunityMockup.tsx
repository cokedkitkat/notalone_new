export default function CommunityMockup() {
  const posts = [
    {
      user: "Alex",
      avatar: "A",
      bg: "bg-blue-50 text-blue-600",
      text: "Just had the best 2-hour conversation with Luna about architecture & philosophy. So soothing! ☕",
      likes: 24,
      replies: 5,
    },
    {
      user: "Sam",
      avatar: "S",
      bg: "bg-amber-50 text-amber-600",
      text: "Blaze and I are on an epic 4-game chess rematch streak. Finally won my first game! 🏆",
      likes: 19,
      replies: 3,
    },
    {
      user: "Jordan",
      avatar: "J",
      bg: "bg-emerald-50 text-emerald-600",
      text: "This whole space feels like a breath of fresh air compared to typical social apps. Grateful to be here ❤️",
      likes: 42,
      replies: 9,
    },
  ];

  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-[#f1f3f4] bg-[#f8f9fa] px-4 py-2.5">
        <span className="text-[11px] font-medium text-[#5f6368]">
          Community Lounge Feed
        </span>
        <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 1,280 online
        </span>
      </div>

      <div className="space-y-3 p-4">
        {posts.map((post, i) => (
          <div
            key={i}
            className="rounded-xl border border-[#f1f3f4] bg-[#f8f9fa] p-3.5 transition-all hover:bg-white hover:border-[#dadce0] hover:shadow-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${post.bg}`}
              >
                {post.avatar}
              </div>
              <span className="text-xs font-semibold text-[#1f1f1f]">
                {post.user}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#3c4043]">
              {post.text}
            </p>
            <div className="mt-2.5 flex items-center gap-4 text-[11px] text-[#5f6368]">
              <span className="flex items-center gap-1">
                ❤️ <span className="font-medium text-[#1f1f1f]">{post.likes}</span>
              </span>
              <span className="flex items-center gap-1">
                💬 <span className="font-medium text-[#1f1f1f]">{post.replies}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
