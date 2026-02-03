import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import PolesSection from "@/components/home/PolesSection";
import AboutPreview from "@/components/home/AboutPreview";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <PolesSection />
      <AboutPreview />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
