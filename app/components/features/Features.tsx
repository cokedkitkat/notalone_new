import SectionWrapper from "../ui/SectionWrapper";
import FadeIn from "../ui/FadeIn";
import FeatureBlock from "./FeatureBlock";
import ChatFeatureMockup from "./ChatFeatureMockup";
import GamesFeatureMockup from "./GamesFeatureMockup";
import CommunityMockup from "./CommunityMockup";
import PrivacyMockup from "./PrivacyMockup";

const features = [
  {
    badge: "Always Present",
    title: "Chat anytime, about anything",
    description:
      "Your companion is ready whenever you are — morning reflections, late-night deep talks, or casual banters throughout the day. No judgment, no interruptions, and genuine attentive replies.",
    mockup: <ChatFeatureMockup />,
  },
  {
    badge: "Interactive Fun",
    title: "Play classic games together",
    description:
      "Take a relaxing break. Challenge your companion to friendly matches of Tic Tac Toe or strategic Chess. They react in real time, celebrate your victories, and provide fun commentary.",
    mockup: <GamesFeatureMockup />,
    reversed: true,
  },
  {
    id: "community",
    badge: "Shared Connection",
    title: "Join a warm community space",
    description:
      "Share moments, discover fellow companion creators, and participate in positive discussions. A safe, moderated environment built to make everyone feel welcomed and valued.",
    mockup: <CommunityMockup />,
  },
  {
    id: "security",
    badge: "Safety by Design",
    title: "Your privacy, completely protected",
    description:
      "Your chats and memories are sacred. We use end-to-end encryption, will never sell your data, and give you full power to clear your history with a single tap.",
    mockup: <PrivacyMockup />,
    reversed: true,
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="bg-white">
      <FadeIn>
        <div className="mb-20 text-center">
          <span className="rounded-full bg-[#f1f3f4] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6368]">
            Platform Capabilities
          </span>
          <h2 className="antigravity-headline mt-4 text-3xl font-medium tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            Everything you need to feel connected
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5f6368] sm:text-lg">
            Built from the ground up for empathy, companionship, and seamless
            interaction across web and mobile.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-24 sm:space-y-32">
        {features.map((feature, i) => (
          <FeatureBlock
            key={i}
            id={feature.id}
            badge={feature.badge}
            title={feature.title}
            description={feature.description}
            mockup={feature.mockup}
            reversed={feature.reversed}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
