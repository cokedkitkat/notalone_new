import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/ui/MotionProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOT ALONE — Explore the Companion Experience",
  description: "Explore a concept for AI-powered companionship, games, and community connection.",
  keywords: ["AI companion", "companion concept", "community", "games"],
  openGraph: {
    title: "NOT ALONE — Explore the Companion Experience",
    description: "Explore a concept for AI-powered companionship, games, and community connection.",
    type: "website",
    url: "https://notalone-community.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[plusJakartaSans.variable, outfit.variable, "antialiased"].join(" ")}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
