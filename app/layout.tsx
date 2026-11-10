import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOT ALONE — Your AI Companion, Always There",
  description:
    "Chat with AI-powered companions, play games together, and join a welcoming community. You are never truly alone.",
  keywords: ["AI companion", "chat app", "AI characters", "community", "games"],
  openGraph: {
    title: "NOT ALONE — Your AI Companion, Always There",
    description:
      "Chat with AI-powered companions, play games together, and join a welcoming community.",
    type: "website",
    url: "https://notalone-community.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
