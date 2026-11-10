import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-black text-white hover:bg-neutral-800 active:scale-[0.98] shadow-sm",
    secondary:
      "bg-white border border-[#dadce0] text-[#1f1f1f] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-[0.98]",
    ghost:
      "text-[#5f6368] hover:text-[#111827] hover:bg-neutral-100",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
