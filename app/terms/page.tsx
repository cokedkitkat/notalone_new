import Link from "next/link";

export const metadata = { title: "Terms of Use | NOT ALONE" };

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-[#111827] sm:px-8">
      <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">← Back to NOT ALONE</Link>
      <h1 className="antigravity-headline mt-10 text-4xl">Terms of Use</h1>
      <p className="mt-6 text-lg leading-relaxed text-[#5f6368]">Effective date: November 10, 2026</p>
      <section className="mt-10 space-y-5 leading-relaxed text-[#3c4043]">
        <p>NOT ALONE is an informational product preview. It is provided as-is and may change or be removed at any time.</p>
        <p>The preview does not provide professional medical, mental-health, legal, financial, or emergency services. Do not rely on it for urgent support or safety decisions. In an emergency, contact local emergency services or a qualified professional.</p>
        <p>Features described on this site are concepts unless and until they are released with their own applicable terms and notices.</p>
      </section>
    </main>
  );
}
