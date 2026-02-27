import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Thermometer, CircleDot, Server, Laptop, Printer, Monitor, SunDim, Battery, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

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
      image: "/products/led-explosion-proof.webp",
      color: "blue",
      badge: language === 'fr' ? "Équipements Industriels" : "Industrial Equipment",
      partner: "Senben Lighting / Universal RBM / Airchal",
      items: [
        { icon: Lightbulb, name: language === 'fr' ? "Éclairage LED Industriel" : "Industrial LED Lighting", specs: ["Explosion Proof (ATEX)", "Weatherproof IP65+", language === 'fr' ? "Haute Baie" : "High Bay", language === 'fr' ? "Projecteurs" : "Floodlights"], partner: "Senben Lighting" },
        { icon: Thermometer, name: language === 'fr' ? "Froid & Climatisation" : "Cooling & HVAC", specs: [language === 'fr' ? "Centrales de traitement d'air" : "Air Handling Units", "Fan Coils", language === 'fr' ? "Chambres froides" : "Cold rooms", "Chillers"], partner: "Airchal" },
        { icon: CircleDot, name: language === 'fr' ? "Courroies Industrielles" : "Industrial Belts", specs: ["Poly-V Belts", "Timing Belts", language === 'fr' ? "Courroies trapézoïdales" : "V-Belts", "Automotive"], partner: "Universal RBM" },
      ],
    },
    {
      image: "/products/airchal-ahu.jpg",
      color: "accent",
      badge: language === 'fr' ? "Matériel Informatique" : "IT Equipment",
      partner: "Dell / Blackview",
      items: [
        { icon: Laptop, name: language === 'fr' ? "Ordinateurs" : "Computers", specs: ["Dell Latitude", "Dell Inspiron", language === 'fr' ? "Portables & Fixes" : "Laptops & Desktops", "Blackview Rugged"], partner: "Dell / Blackview" },
        { icon: Server, name: language === 'fr' ? "Serveurs & Réseau" : "Servers & Network", specs: ["Dell PowerEdge", "Rack", "NAS", "Switches"], partner: "Dell" },
        { icon: Printer, name: language === 'fr' ? "Imprimantes" : "Printers", specs: ["Laser", language === 'fr' ? "Jet d'encre" : "Inkjet", "A3/A4", language === 'fr' ? "Multifonctions" : "All-in-one"], partner: "Dell" },
      ],
    },
    {
      image: "/products/led-weatherproof.webp",
      color: "green",
      badge: language === 'fr' ? "Solutions Énergétiques" : "Energy Solutions",
      partner: "",
      items: [
        { icon: SunDim, name: language === 'fr' ? "Panneaux Solaires" : "Solar Panels", specs: [language === 'fr' ? "Monocristallin" : "Monocrystalline", language === 'fr' ? "Polycristallin" : "Polycrystalline", "300W–550W"], partner: "" },
        { icon: Battery, name: language === 'fr' ? "Onduleurs & Batteries" : "Inverters & Batteries", specs: [language === 'fr' ? "Hybride" : "Hybrid", "On-grid", "Off-grid", "Lithium"], partner: "" },
        { icon: Monitor, name: language === 'fr' ? "Monitoring" : "Monitoring", specs: [language === 'fr' ? "Compteurs" : "Meters", language === 'fr' ? "Capteurs" : "Sensors", "IoT"], partner: "" },
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; icon: string; badge: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-600", border: "hover:border-blue-200", icon: "text-blue-500", badge: "bg-blue-600" },
    accent: { bg: "bg-accent/10", text: "text-accent", border: "hover:border-accent/30", icon: "text-accent", badge: "bg-accent" },
    green: { bg: "bg-green-500/10", text: "text-green-600", border: "hover:border-green-200", icon: "text-green-500", badge: "bg-green-600" },
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
        const isReversed = catIndex % 2 === 1;

        return (
          <section key={catIndex} className={`py-20 ${catIndex % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${isReversed ? 'order-2' : 'order-2 lg:order-1'}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-premium">
                    <img src={cat.image} alt={cat.badge} className="w-full h-[380px] object-cover" />
                  </div>
                  <div className={`absolute top-4 left-4 ${colors.badge} text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-lg`}>
                    {cat.badge}
                  </div>
                  {cat.partner && (
                    <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-lg shadow border border-border/50">
                      {cat.partner}
                    </div>
                  )}
                </motion.div>

                {/* Products list */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`space-y-5 ${isReversed ? 'order-1' : 'order-1 lg:order-2'}`}
                >
                  {cat.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      custom={index}
                      className={`group bg-card p-6 rounded-xl shadow-soft border border-border/50 ${colors.border} transition-all`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                            {item.partner && (
                              <span className="text-[10px] font-medium bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                                {item.partner}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.specs.map((spec, i) => (
                              <span key={i} className="inline-flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                                <CheckCircle className={`w-3 h-3 ${colors.icon}`} />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
                    <Button variant="accent" size="lg" asChild className="shadow-accent">
                      <Link to="/contact">
                        {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

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
            <Button variant="accent" size="xl" asChild className="shadow-accent">
              <Link to="/contact">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
