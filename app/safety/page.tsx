import Link from "next/link";

export const metadata = { title: "Safety & Product Status | NOT ALONE" };

export default function SafetyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-20 text-[#111827] sm:px-8">
      <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">← Back to NOT ALONE</Link>
      <h1 className="antigravity-headline mt-10 text-4xl">Safety & Product Status</h1>
      <section className="mt-8 space-y-5 leading-relaxed text-[#3c4043]">
        <p>NOT ALONE is currently a visual product preview. The companion profiles, chat screens, and games are illustrative and are not live services.</p>
        <p>The preview does not currently offer authentication, AI conversations, voice features, community moderation, end-to-end encryption, or controls for storing and deleting chat history.</p>
        <p>Before releasing a product that handles personal or conversation data, we will publish the relevant safety practices, moderation approach, privacy notice, and support channels.</p>
        <p>If you are in immediate danger or need urgent mental-health support, contact local emergency services or a qualified professional.</p>
      </section>
    </main>
  );
}
