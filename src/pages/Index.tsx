import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import StatsSection from "@/components/home/StatsSection";
import PolesSection from "@/components/home/PolesSection";
import AboutPreview from "@/components/home/AboutPreview";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DGS Africa',
  url: 'https://dgsafrica.com',
  logo: 'https://dgsafrica.com/logo-dgs.png',
  telephone: '+221776862024',
  email: 'contact@dgsafrica.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Point E',
    addressLocality: 'Dakar',
    addressCountry: 'SN'
  },
  areaServed: ['SN','CI','ML','BF','GN','CM','TG','BJ','NE','MR'],
  sameAs: ['https://www.linkedin.com/company/dgs-africa'],
  description: 'DGS Africa, expert en solutions IT, énergie solaire et équipements industriels présent dans 10+ pays africains.'
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="DGS Africa - Solutions IT, Énergie Solaire & Industrie"
        description="DGS Africa, votre partenaire de confiance en solutions IT, énergie solaire et équipements industriels à travers toute l'Afrique."
        keywords="DGS Africa, solutions IT Afrique, énergie solaire Afrique, équipements industriels, Sénégal, Afrique de l'Ouest"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <StatsSection />
        <PolesSection />
        <AboutPreview />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;