import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PolesSection from "@/components/home/PolesSection";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PolesSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
