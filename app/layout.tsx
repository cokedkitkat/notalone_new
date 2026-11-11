import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "./components/ui/MotionProvider";

const googleSans = localFont({
  src: "./fonts/GoogleSans-VariableFont_GRAD,opsz,wght.ttf",
  variable: "--font-google-sans",
  weight: "100 900",
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
    <html lang="en" className={googleSans.variable}>
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
