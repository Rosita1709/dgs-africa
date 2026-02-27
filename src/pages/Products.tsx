import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Thermometer, CircleDot, Server, Laptop, Printer, Monitor, SunDim, Battery, CheckCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import productsIT from "@/assets/products-it.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Products = () => {
  const { t, language } = useLanguage();

  const categories = [
    {
      title: language === 'fr' ? "Équipements Industriels" : "Industrial Equipment",
      subtitle: language === 'fr' ? "LED, Climatisation & Courroies" : "LED, HVAC & Belts",
      color: "blue",
      items: [
        {
          icon: Lightbulb,
          name: language === 'fr' ? "Éclairage LED Industriel" : "Industrial LED Lighting",
          image: "/products/led-weatherproof.webp",
          partner: "Senben Lighting",
          partnerLogo: "/logos/senben.webp",
          specs: ["Explosion Proof (ATEX)", "Weatherproof IP65+", language === 'fr' ? "Haute Baie" : "High Bay", language === 'fr' ? "Projecteurs" : "Floodlights"],
        },
        {
          icon: Thermometer,
          name: language === 'fr' ? "Froid & Climatisation" : "Cooling & HVAC",
          image: "/products/airchal-ahu.jpg",
          partner: "Airchal",
          partnerLogo: null,
          specs: [language === 'fr' ? "Centrales de traitement d'air" : "Air Handling Units", "Fan Coils", language === 'fr' ? "Chambres froides" : "Cold rooms", "Chillers"],
        },
        {
          icon: CircleDot,
          name: language === 'fr' ? "Courroies Industrielles" : "Industrial Belts",
          image: "/products/belts-poly-v.jpg",
          partner: "Universal RBM",
          partnerLogo: "/logos/universal-rbm.png",
          specs: ["Poly-V Belts", "Timing Belts", language === 'fr' ? "Courroies trapézoïdales" : "V-Belts", "Automotive"],
        },
      ],
    },
    {
      title: language === 'fr' ? "Matériel Informatique" : "IT Equipment",
      subtitle: language === 'fr' ? "Ordinateurs, Serveurs & Réseaux" : "Computers, Servers & Networks",
      color: "accent",
      items: [
        {
          icon: Laptop,
          name: language === 'fr' ? "Ordinateurs" : "Computers",
          image: "/products/dell-laptop.jpg",
          partner: "Dell / Blackview",
          partnerLogo: "/logos/dell.png",
          specs: ["Dell Latitude", "Dell Inspiron", language === 'fr' ? "Portables & Fixes" : "Laptops & Desktops", "Blackview Rugged"],
        },
        {
          icon: Server,
          name: language === 'fr' ? "Serveurs & Réseau" : "Servers & Network",
          image: "/products/dell-server.jpg",
          partner: "Dell",
          partnerLogo: "/logos/dell.png",
          specs: ["Dell PowerEdge", "Rack", "NAS", "Switches"],
        },
        {
          icon: Printer,
          name: language === 'fr' ? "Imprimantes" : "Printers",
          image: "/products/printer.jpg",
          partner: "Dell",
          partnerLogo: "/logos/dell.png",
          specs: ["Laser", language === 'fr' ? "Jet d'encre" : "Inkjet", "A3/A4", language === 'fr' ? "Multifonctions" : "All-in-one"],
        },
      ],
    },
    {
      title: language === 'fr' ? "Solutions Énergétiques" : "Energy Solutions",
      subtitle: language === 'fr' ? "Solaire, Onduleurs & Monitoring" : "Solar, Inverters & Monitoring",
      color: "green",
      items: [
        {
          icon: SunDim,
          name: language === 'fr' ? "Panneaux Solaires" : "Solar Panels",
          image: "/products/solar-panels.jpg",
          partner: "",
          partnerLogo: null,
          specs: [language === 'fr' ? "Monocristallin" : "Monocrystalline", language === 'fr' ? "Polycristallin" : "Polycrystalline", "300W–550W"],
        },
        {
          icon: Battery,
          name: language === 'fr' ? "Onduleurs & Batteries" : "Inverters & Batteries",
          image: "/products/solar-inverter.jpg",
          partner: "",
          partnerLogo: null,
          specs: [language === 'fr' ? "Hybride" : "Hybrid", "On-grid", "Off-grid", "Lithium"],
        },
        {
          icon: Monitor,
          name: language === 'fr' ? "Monitoring" : "Monitoring",
          image: "/products/iot-monitoring.jpg",
          partner: "",
          partnerLogo: null,
          specs: [language === 'fr' ? "Compteurs" : "Meters", language === 'fr' ? "Capteurs" : "Sensors", "IoT"],
        },
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; icon: string; badge: string; gradient: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-blue-200/50", icon: "text-blue-500", badge: "bg-blue-600", gradient: "from-blue-600 to-blue-500" },
    accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", icon: "text-accent", badge: "bg-accent", gradient: "from-accent to-accent/80" },
    green: { bg: "bg-green-500/10", text: "text-green-600", border: "border-green-200/50", icon: "text-green-500", badge: "bg-green-600", gradient: "from-green-600 to-green-500" },
  };

  return (
    <Layout>
      {/* Hero with sweeping image */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background image with sweep/pan animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={productsIT} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-pattern" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('products.label')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t('products.title')}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Product Categories */}
      {categories.map((cat, catIndex) => {
        const colors = colorMap[cat.color];

        return (
          <section key={catIndex} className={`py-20 ${catIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="container">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <span className={`inline-block bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-4 shadow-lg`}>
                  {cat.title}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">{cat.title}</h2>
                <p className="text-muted-foreground text-lg">{cat.subtitle}</p>
              </motion.div>

              {/* Product Cards Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {cat.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={index}
                    className={`group bg-card rounded-2xl overflow-hidden shadow-soft border ${colors.border} hover:shadow-premium transition-all duration-500`}
                  >
                    {/* Product Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Partner Logo Badge */}
                      {item.partnerLogo && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                          <img src={item.partnerLogo} alt={item.partner} className="h-6 w-auto object-contain" />
                        </div>
                      )}
                      {item.partner && !item.partnerLogo && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                          <span className="text-xs font-bold text-foreground">{item.partner}</span>
                        </div>
                      )}
                      
                      {/* Product Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                          <item.icon className="w-5 h-5" />
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Product Specs */}
                    <div className="p-5">
                      {item.partner && (
                        <p className={`text-xs font-semibold ${colors.text} mb-3 uppercase tracking-wider`}>
                          {item.partner}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-xs bg-muted px-2.5 py-1.5 rounded-full text-muted-foreground">
                            <CheckCircle className={`w-3 h-3 ${colors.icon}`} />
                            {spec}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <Link
                          to="/contact"
                          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} hover:underline transition-colors`}
                        >
                          {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Partners & Clients — Marquee */}
      <section className="py-20 bg-muted/20 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              {language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'fr' ? 'Des marques de confiance pour des produits de qualité' : 'Trusted brands for quality products'}
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>
        </div>

        {/* Infinite marquee — same as homepage */}
        <div className="relative overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/20 via-muted/20 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/20 via-muted/20 to-transparent z-10" />
          
          <div className="flex animate-marquee gap-16 items-center">
            {[...Array(3)].flatMap(() => [
              { src: "/logos/senben.webp", alt: "Senben Lighting" },
              { src: "/logos/universal-rbm.png", alt: "Universal RBM" },
              { src: "/logos/dell.png", alt: "Dell" },
              { src: "/logos/blackview.webp", alt: "Blackview" },
              { src: "/logos/laspad.png", alt: "LASPAD" },
              { src: "/logos/mfb.png", alt: "Ministère des Finances" },
              { src: "/logos/ambassade-senegal.png", alt: "Ambassade du Sénégal" },
            ]).map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 px-6 shrink-0 hover:scale-110 transition-transform duration-300 group"
                title={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://wa.me/221775930196" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
