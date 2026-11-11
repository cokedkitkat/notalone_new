"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Companions", href: "#companions" },
  { label: "Games", href: "#games" },
  { label: "Community", href: "#community" },
  { label: "Privacy", href: "#security" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <header className="border-b border-[#f1f3f4] bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12" aria-label="Main navigation">
          <Link href="#"><Logo size={22} /></Link>
          <ul className="hidden items-center gap-7 md:flex" role="list">
            {navLinks.map((link) => <li key={link.label}><a href={link.href} className="font-heading flex items-center gap-1 text-[13.5px] font-medium text-[#444746] transition-colors duration-150 hover:text-black">{link.label}</a></li>)}
          </ul>
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-base" title="Product Preview">✦</span>
            <Button href="#features" className="px-5 py-2 text-xs font-semibold">Explore preview</Button>
            <Link href="/safety" className="rounded-full border border-[#dadce0] px-3 py-1.5 text-xs font-medium text-[#3c4043] hover:bg-[#f8f9fa]">Product status</Link>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e8eaed] text-black md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"}>{mobileOpen ? "✕" : "☰"}</button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-[#e8eaed] bg-white px-6 py-6 md:hidden">
            <ul className="flex flex-col gap-4">{navLinks.map((link) => <li key={link.label}><a href={link.href} onClick={() => setMobileOpen(false)} className="block text-base font-medium text-[#1f1f1f]">{link.label}</a></li>)}</ul>
            <div className="mt-6"><Button href="/safety" className="w-full py-3 text-sm">Read product status</Button></div>
          </div>
        )}
      </header>
    </div>
  );
}
