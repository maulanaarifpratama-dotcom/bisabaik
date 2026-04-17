import Layout from "@/components/site/Layout";
import HeroSection from "@/components/site/home/HeroSection";
import PositioningSection from "@/components/site/home/PositioningSection";
import PillarsSection from "@/components/site/home/PillarsSection";
import JourneySection from "@/components/site/home/JourneySection";
import FlagshipSection from "@/components/site/home/FlagshipSection";
import PrinciplesSection from "@/components/site/home/PrinciplesSection";
import PartnersStrip from "@/components/site/home/PartnersStrip";
import CtaSection from "@/components/site/home/CtaSection";

const Index = () => {
  return (
    <Layout
      title="BisaBaik Foundation — End-to-End Impact Delivery & Responsible Exit"
      description="Indonesia-based impact delivery partner. Disciplined execution, responsible exit, and post-program sustainability through MSME market continuity."
    >
      <HeroSection />
      <PositioningSection />
      <PillarsSection />
      <JourneySection />
      <FlagshipSection />
      <PrinciplesSection />
      <PartnersStrip />
      <CtaSection />
    </Layout>
  );
};

export default Index;
