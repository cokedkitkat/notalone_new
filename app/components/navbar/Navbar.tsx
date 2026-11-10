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
  { label: "Security", href: "#security" },
];

export default function Navbar() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      {/* Top Announcement Banner (Screenshot 2) */}
      {bannerVisible && (
        <div className="relative flex items-center justify-center border-b border-[#e8eaed] bg-white px-4 py-2 text-xs text-[#1f1f1f]">
          <div className="flex flex-wrap items-center justify-center gap-2 pr-6">
            <span className="flex items-center gap-1 rounded-full bg-black px-2.5 py-0.5 text-[11px] font-semibold text-white">
              <span className="text-[10px]">✦</span> NEW
            </span>
            <span className="font-normal text-[#3c4043]">
              Introducing interactive companion games & voice in NOT ALONE
            </span>
            <span className="hidden text-[#dadce0] sm:inline">|</span>
            <a
              href="https://notalone-community.vercel.app"
              className="inline-flex items-center gap-1 font-medium text-[#111827] hover:underline"
            >
              Try now <span aria-hidden="true">→</span>
            </a>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 text-[#5f6368] hover:text-black"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <header className="border-b border-[#f1f3f4] bg-white/95 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          {/* User's Logo & Brand Wordmark */}
          <Link href="#">
            <Logo size={36} />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-7 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-heading flex items-center gap-1 text-[13.5px] font-medium text-[#444746] transition-colors duration-150 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Rocket badge */}
            <span className="text-base" title="Active Community">
              🚀
            </span>

            {/* Pill CTA Button */}
            <Button
              href="https://notalone-community.vercel.app"
              className="px-5 py-2 text-xs font-semibold"
            >
              Get started
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="translate-y-[0.5px]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>

            {/* Language Pill */}
            <div className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#dadce0] px-3 py-1.5 text-xs font-medium text-[#3c4043] hover:bg-[#f8f9fa]">
              <span className="text-xs">🌐</span>
              <span>EN-US</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e8eaed] text-black md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="border-t border-[#e8eaed] bg-white px-6 py-6 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-[#1f1f1f]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                href="https://notalone-community.vercel.app"
                className="w-full py-3 text-sm"
              >
                Get started
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
