import Link from "next/link";
import Logo from "../ui/Logo";

const footerLinks = [
  { heading: "Product", links: [{ label: "Features", href: "#features" }, { label: "Game previews", href: "#games" }, { label: "Privacy approach", href: "#security" }] },
  { heading: "Companions", links: [{ label: "Meet the companions", href: "#companions" }, { label: "Community preview", href: "#community" }] },
  { heading: "Learn more", links: [{ label: "Community Lounge", href: "https://notalone-community.vercel.app" }, { label: "Safety & product status", href: "/safety" }] },
  { heading: "Trust & Legal", links: [{ label: "Privacy notice", href: "/privacy" }, { label: "Terms of use", href: "/terms" }, { label: "Safety & product status", href: "/safety" }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e8eaed] bg-white text-[#5f6368]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-heading mb-4 text-xs font-semibold uppercase tracking-wider text-[#111827]">{group.heading}</h4>
              <ul className="space-y-3" role="list">
                {group.links.map((link) => <li key={link.label}><a href={link.href} className="text-xs text-[#5f6368] transition-colors hover:text-[#111827]">{link.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Giant brand wordmark. Decorative only (the brand name is already in the
          logo above), so screen readers skip it. Sized in vw so it always spans
          the full width of the page. */}
      <div aria-hidden="true" className="select-none overflow-hidden px-[4.5vw] pt-4 pb-10 sm:pb-14">
        <p className="footer-wordmark">NOT ALONE</p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#f1f3f4] pt-8 sm:flex-row">
          <Link href="#"><Logo size={28} /></Link>
          <p className="text-xs text-[#80868b]">© {new Date().getFullYear()} NOT ALONE. A product concept for connection and care.</p>
        </div>
      </div>
    </footer>
  );
}
