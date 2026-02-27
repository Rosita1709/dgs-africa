import Layout from "@/components/layout/Layout";
import { Zap, Lightbulb, Thermometer, CircleDot, ArrowRight, CheckCircle, Users, Award, Factory, TrendingUp } from "lucide-react";
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

  const stats = [
    { icon: Factory, value: "300+", label: language === 'fr' ? "Sites industriels équipés" : "Industrial sites equipped" },
    { icon: Users, value: "150+", label: language === 'fr' ? "Clients industriels" : "Industrial clients" },
    { icon: TrendingUp, value: "60%", label: language === 'fr' ? "Réduction conso. énergétique" : "Energy consumption reduction" },
    { icon: Award, value: "10+", label: language === 'fr' ? "Années d'expérience" : "Years of experience" },
  ];

  return (
    <Layout>
      {/* Hero with real image */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80" 
            alt="Industrial equipment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Pôle Industriel' : 'Industrial Division'}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              <span className="text-gradient">{language === 'fr' ? 'Équipements Industriels' : 'Industrial Equipment'}</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed max-w-2xl">
              {language === 'fr'
                ? "Éclairage LED, froid & climatisation, courroies industrielles. Des solutions conçues pour offrir sécurité, durabilité et performance."
                : "LED lighting, refrigeration & air conditioning, industrial belts. Solutions designed to provide safety, durability and performance."}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — alternating 2-column with images */}
      {services.map((service, index) => (
        <section key={index} className={`py-24 ${index % 2 === 1 ? 'bg-muted/20' : ''}`}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'order-2' : ''}
              >
                <div className="rounded-2xl overflow-hidden shadow-premium group">
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={index % 2 === 1 ? 'order-1' : ''}
              >
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">{service.partner}</span>
                </motion.div>
                <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">{service.title}</motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.desc}</motion.p>
                <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 mb-8">
                  {service.specs.map((spec, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-sm bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-accent" />
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
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? "Besoin d'équipements industriels ?" : 'Need industrial equipment?'}
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
