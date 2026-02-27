import Layout from "@/components/layout/Layout";
import { Zap, Lightbulb, Thermometer, CircleDot, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const ServiceIndustriel = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: language === 'fr' ? "Éclairage LED Industriel" : "Industrial LED Lighting",
      partner: "Senben Lighting",
      desc: language === 'fr'
        ? "Solutions d'éclairage LED haute performance pour environnements industriels exigeants. Certifiées ATEX pour zones dangereuses."
        : "High-performance LED lighting solutions for demanding industrial environments. ATEX certified for hazardous areas.",
      specs: ["Explosion Proof (ATEX)", "Weatherproof IP65+", language === 'fr' ? "Haute Baie" : "High Bay", language === 'fr' ? "Projecteurs" : "Floodlights"],
      image: "/products/led-explosion-proof.webp",
    },
    {
      icon: Thermometer,
      title: language === 'fr' ? "Froid & Climatisation" : "Cooling & HVAC",
      partner: "Airchal",
      desc: language === 'fr'
        ? "Systèmes de climatisation et réfrigération industrielle. Centrales de traitement d'air, chambres froides et solutions VRV/VRF."
        : "Industrial air conditioning and refrigeration systems. Air handling units, cold rooms and VRV/VRF solutions.",
      specs: [language === 'fr' ? "Centrales de traitement d'air" : "Air Handling Units", "Fan Coils", language === 'fr' ? "Chambres froides" : "Cold rooms", "Chillers"],
      image: "/products/airchal-ahu.jpg",
    },
    {
      icon: CircleDot,
      title: language === 'fr' ? "Courroies Industrielles" : "Industrial Belts",
      partner: "Universal RBM",
      desc: language === 'fr'
        ? "Gamme complète de courroies industrielles et automobiles. Poly-V, courroies crantées et trapézoïdales pour tous secteurs."
        : "Complete range of industrial and automotive belts. Poly-V, timing belts and V-belts for all sectors.",
      specs: ["Poly-V Belts", "Timing Belts", language === 'fr' ? "Courroies trapézoïdales" : "V-Belts", "Automotive"],
      image: "/products/belts-poly-v.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Pôle Industriel' : 'Industrial Division'}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Équipements Industriels' : 'Industrial Equipment'}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {language === 'fr'
                ? "Éclairage LED, froid & climatisation, courroies industrielles. Des solutions conçues pour offrir sécurité, durabilité et performance."
                : "LED lighting, refrigeration & air conditioning, industrial belts. Solutions designed to provide safety, durability and performance."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'order-2' : ''}
              >
                <div className="rounded-2xl overflow-hidden shadow-premium">
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={index % 2 === 1 ? 'order-1' : ''}
              >
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{service.partner}</span>
                </motion.div>
                <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl font-bold mb-4">{service.title}</motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.desc}</motion.p>
                <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 mb-8">
                  {service.specs.map((spec, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-sm bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                      {spec}
                    </span>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
                  <Button variant="accent" size="lg" asChild className="shadow-accent">
                    <Link to="/contact">
                      {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/produits">
                      {language === 'fr' ? 'Voir nos produits' : 'View our products'}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Besoin d\'équipements industriels ?' : 'Need industrial equipment?'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === 'fr' ? 'Contactez-nous pour un devis personnalisé adapté à vos besoins.' : 'Contact us for a personalized quote tailored to your needs.'}
            </p>
            <Button variant="accent" size="xl" asChild className="shadow-accent">
              <Link to="/contact">
                {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceIndustriel;
