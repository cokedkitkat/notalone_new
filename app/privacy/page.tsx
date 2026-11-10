import Link from "next/link";

export const metadata = { title: "Privacy Notice | NOT ALONE" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-[#111827] sm:px-8">
      <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">← Back to NOT ALONE</Link>
      <h1 className="antigravity-headline mt-10 text-4xl">Privacy Notice</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#5f6368]">
        NOT ALONE is currently a product-preview site. This preview does not provide accounts, chat, voice, or community posting features.
      </p>
      <section className="mt-10 space-y-5 leading-relaxed text-[#3c4043]">
        <h2 className="text-xl font-semibold text-[#111827]">What this preview collects</h2>
        <p>The site itself is designed as a static preview. Hosting providers may process standard technical data such as IP address, browser information, and request logs to operate and secure the service.</p>
        <h2 className="text-xl font-semibold text-[#111827]">Before a product launch</h2>
        <p>We will publish a complete, product-specific privacy notice before collecting account, conversation, or profile data. That notice will explain data categories, purposes, retention, sharing, security measures, and available choices.</p>
        <h2 className="text-xl font-semibold text-[#111827]">Do not share sensitive information</h2>
        <p>Please do not submit sensitive personal information through any preview or external links until a production privacy notice and support channel are available.</p>
      </section>
    </main>
  );
}
