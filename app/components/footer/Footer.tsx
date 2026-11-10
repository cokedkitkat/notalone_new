"use client";

import Link from "next/link";
import Logo from "../ui/Logo";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Interactive Games", href: "#games" },
      { label: "Privacy & Encryption", href: "#features" },
      { label: "Voice Mode", href: "#" },
    ],
  },
  {
    heading: "Companions",
    links: [
      { label: "Luna (Thoughtful)", href: "#companions" },
      { label: "Blaze (Energetic)", href: "#companions" },
      { label: "Sage (Mindful)", href: "#companions" },
      { label: "Nova (Playful)", href: "#companions" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Community Lounge", href: "https://notalone-community.vercel.app" },
      { label: "Guidelines", href: "#" },
      { label: "Stories & Feedback", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    heading: "Trust & Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security Whitepaper", href: "#" },
      { label: "Responsible AI", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e8eaed] bg-white text-[#5f6368]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-heading mb-4 text-xs font-semibold uppercase tracking-wider text-[#111827]">
                {group.heading}
              </h4>
              <ul className="space-y-3" role="list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#5f6368] transition-colors hover:text-[#111827]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#f1f3f4] pt-8 sm:flex-row">
          <Link href="#">
            <Logo size={28} />
          </Link>

          <p className="text-xs text-[#80868b]">
            © {new Date().getFullYear()} NOT ALONE. All rights reserved. Built
            for connection and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
