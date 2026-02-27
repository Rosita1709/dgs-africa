import Layout from "@/components/layout/Layout";
import { Sun, SunDim, ClipboardCheck, Battery, ArrowRight, CheckCircle, Users, Award, Zap, TrendingUp } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      icon: Battery,
      title: language === 'fr' ? "Onduleurs & Batteries" : "Inverters & Batteries",
      desc: language === 'fr'
        ? "Solutions de stockage et conversion d'énergie. Onduleurs hybrides, batteries lithium et systèmes de backup."
        : "Energy storage and conversion solutions. Hybrid inverters, lithium batteries and backup systems.",
      specs: [language === 'fr' ? "Hybride" : "Hybrid", "Lithium", language === 'fr' ? "Stockage" : "Storage", "Backup"],
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80",
    },
    {
      icon: ClipboardCheck,
      title: language === 'fr' ? "Audit Énergétique" : "Energy Audit",
      desc: language === 'fr'
        ? "Analyse complète de votre consommation énergétique, recommandations personnalisées et calcul du retour sur investissement (ROI)."
        : "Complete analysis of your energy consumption, personalized recommendations and ROI calculation.",
      specs: [language === 'fr' ? "Analyse consommation" : "Consumption analysis", "ROI", language === 'fr' ? "Recommandations" : "Recommendations", language === 'fr' ? "Optimisation" : "Optimization"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
  ];

  const stats = [
    { icon: Sun, value: "500+", label: language === 'fr' ? "Installations solaires" : "Solar installations" },
    { icon: Users, value: "200+", label: language === 'fr' ? "Clients satisfaits" : "Satisfied clients" },
    { icon: TrendingUp, value: "40%", label: language === 'fr' ? "Économie moyenne" : "Average savings" },
    { icon: Award, value: "10+", label: language === 'fr' ? "Années d'expérience" : "Years of experience" },
  ];

  return (
    <Layout>
      {/* Hero with real image */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80" 
            alt="Solar panels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
          <div className="absolute inset-0 bg-pattern" />
        </div>
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
              <span className="text-gradient">{language === 'fr' ? 'Énergie Solaire' : 'Solar Energy'}</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed max-w-2xl">
              {language === 'fr'
                ? "Solutions solaires et audit énergétique pour réduire vos coûts. Études, installation, maintenance et recommandations ROI."
                : "Solar solutions and energy audits to reduce your costs. Studies, installation, maintenance and ROI recommendations."}
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

      {/* Services — alternating 2-column layout with real images */}
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
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={index % 2 === 1 ? 'order-1' : ''}
              >
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                </motion.div>
                <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">{service.title}</motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.desc}</motion.p>
                <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 mb-8">
                  {service.specs.map((spec, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-sm bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      {spec}
                    </span>
                  ))}
                </motion.div>
                <motion.div variants={fadeUp} custom={4}>
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
      ))}

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? "Passez à l'énergie solaire" : 'Switch to solar energy'}
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
