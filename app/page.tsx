import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import IconRibbonManifesto from "./components/hero/IconRibbonManifesto";
import Companions from "./components/companions/Companions";
import Features from "./components/features/Features";
import Games from "./components/games/Games";
import HowItWorks from "./components/how-it-works/HowItWorks";
import FinalCTA from "./components/cta/FinalCTA";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <main>
        <Hero />
        <IconRibbonManifesto />
        <Companions />
        <Features />
        <Games />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
