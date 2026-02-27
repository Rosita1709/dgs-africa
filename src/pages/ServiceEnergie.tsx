import Layout from "@/components/layout/Layout";
import { Sun, SunDim, ClipboardCheck, Battery, ArrowRight, CheckCircle } from "lucide-react";
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

const ServiceEnergie = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: SunDim,
      title: language === 'fr' ? "Panneaux Solaires" : "Solar Panels",
      desc: language === 'fr'
        ? "Installation de systèmes photovoltaïques monocristallins et polycristallins. Études de dimensionnement adaptées à vos besoins énergétiques."
        : "Installation of monocrystalline and polycrystalline photovoltaic systems. Sizing studies tailored to your energy needs.",
      specs: [language === 'fr' ? "Monocristallin" : "Monocrystalline", language === 'fr' ? "Polycristallin" : "Polycrystalline", "300W–550W", "On-grid / Off-grid"],
    },
    {
      icon: Battery,
      title: language === 'fr' ? "Onduleurs & Batteries" : "Inverters & Batteries",
      desc: language === 'fr'
        ? "Solutions de stockage et conversion d'énergie. Onduleurs hybrides, batteries lithium et systèmes de backup."
        : "Energy storage and conversion solutions. Hybrid inverters, lithium batteries and backup systems.",
      specs: [language === 'fr' ? "Hybride" : "Hybrid", "Lithium", language === 'fr' ? "Stockage" : "Storage", "Backup"],
    },
    {
      icon: ClipboardCheck,
      title: language === 'fr' ? "Audit Énergétique" : "Energy Audit",
      desc: language === 'fr'
        ? "Analyse complète de votre consommation énergétique, recommandations personnalisées et calcul du retour sur investissement (ROI)."
        : "Complete analysis of your energy consumption, personalized recommendations and ROI calculation.",
      specs: [language === 'fr' ? "Analyse consommation" : "Consumption analysis", "ROI", language === 'fr' ? "Recommandations" : "Recommendations", language === 'fr' ? "Optimisation" : "Optimization"],
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Pôle Énergie' : 'Energy Division'}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Énergie Solaire' : 'Solar Energy'}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {language === 'fr'
                ? "Solutions solaires et audit énergétique pour réduire vos coûts. Études, installation, maintenance et recommandations ROI."
                : "Solar solutions and energy audits to reduce your costs. Studies, installation, maintenance and ROI recommendations."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl font-bold mb-4">{service.title}</motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.desc}</motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 mb-8">
                {service.specs.map((spec, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-sm bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    {spec}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Passez à l\'énergie solaire' : 'Switch to solar energy'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === 'fr' ? 'Réduisez vos coûts énergétiques avec nos solutions solaires sur mesure.' : 'Reduce your energy costs with our custom solar solutions.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/produits">
                  {language === 'fr' ? 'Voir nos produits' : 'View our products'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceEnergie;
