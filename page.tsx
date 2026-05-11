import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CanvasSequence from "@/components/CanvasSequence";
import ServicesMarquee from "@/components/ServicesMarquee";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import PhilosophyStrip from "@/components/PhilosophyStrip";
import FooterCTA from "@/components/FooterCTA";
import CustomCursor from "@/components/CustomCursor";
import IntroOverlay from "@/components/IntroOverlay";

export default function Home() {
  return (
    <main className="relative bg-[#0D0B09]" id="main-content">
      {/* Elegant brand intro (fades out within 2s) */}
      <IntroOverlay />

      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Scrollytelling Canvas Sequence */}
      <CanvasSequence />

      {/* 3. Services Marquee */}
      <ServicesMarquee />

      {/* 4. Featured Projects */}
      <ProjectsCarousel />

      {/* 5. Philosophy */}
      <PhilosophyStrip />

      {/* 6. Footer CTA + Footer + WhatsApp FAB */}
      <FooterCTA />
    </main>
  );
}
