import SectionWrapper from "../ui/SectionWrapper";
import FadeIn from "../ui/FadeIn";
import FeatureBlock from "./FeatureBlock";
import ChatFeatureMockup from "./ChatFeatureMockup";
import GamesFeatureMockup from "./GamesFeatureMockup";
import CommunityMockup from "./CommunityMockup";
import PrivacyMockup from "./PrivacyMockup";

const features = [
  { badge: "Conversation Concept", title: "Imagine a companion for everyday moments", description: "Explore how a conversational companion could support reflections, casual chats, and moments of curiosity. This site is a product preview, not a live chat service.", mockup: <ChatFeatureMockup /> },
  { badge: "Interactive Fun", title: "Preview games for shared downtime", description: "See examples of friendly Tic Tac Toe and chess experiences designed for a future companion platform. The boards shown here are illustrative demos.", mockup: <GamesFeatureMockup />, reversed: true },
  { id: "community", badge: "Shared Connection", title: "A community space, designed thoughtfully", description: "Explore the idea of a welcoming community for companion creators and curious people. Community features and moderation policies will be described before launch.", mockup: <CommunityMockup /> },
  { id: "security", badge: "Privacy by Design", title: "Privacy practices, clearly explained", description: "NOT ALONE is a concept site. Before any account or chat feature launches, we will publish clear privacy, security, and data-retention practices.", mockup: <PrivacyMockup />, reversed: true },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="bg-white">
      <FadeIn>
        <div className="mb-20 text-center">
          <span className="rounded-full bg-[#f1f3f4] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#5f6368]">Product Preview</span>
          <h2 className="antigravity-headline mt-4 text-3xl font-medium tracking-tight text-[#111827] sm:text-4xl md:text-5xl">A vision for more connected moments</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5f6368] sm:text-lg">Explore early concepts for companionship, games, and community—built with clarity and care in mind.</p>
        </div>
      </FadeIn>
      <div className="space-y-24 sm:space-y-32">
        {features.map((feature, index) => <FeatureBlock key={index} {...feature} />)}
      </div>
    </SectionWrapper>
  );
}
