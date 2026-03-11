import Layout from "@/components/layout/Layout";
import { Monitor, Laptop, Server, Printer, ArrowRight, CheckCircle, Users, Award, Database, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroIT from "@/assets/hero-it.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const ServiceIT = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: language === 'fr' ? "Ordinateurs & Postes de travail" : "Computers & Workstations",
      desc: language === 'fr'
        ? "Fourniture d'ordinateurs de bureau, All-in-One et portables professionnels HP, Dell et Lenovo. Configuration et déploiement sur mesure."
        : "Supply of professional desktop, All-in-One and laptop computers from HP, Dell and Lenovo. Custom configuration and deployment.",
      specs: ["HP ProDesk", "Dell OptiPlex", "Lenovo ThinkCentre", language === 'fr' ? "Portables" : "Laptops"],
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    },
    {
      icon: Laptop,
      title: language === 'fr' ? "Smartphones & Tablettes Blackview" : "Blackview Smartphones & Tablets",
      desc: language === 'fr'
        ? "Appareils robustes certifiés militaires pour environnements terrain : chantiers, industrie, éducation. Étanches IP68/IP69K et ultra-endurants."
        : "Military-certified rugged devices for field environments: construction, industry, education. IP68/IP69K waterproof and ultra-durable.",
      specs: ["Blackview BL9000", "BV9300", "Active 8 Pro", "Mega 2"],
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    },
    {
      icon: Server,
      title: language === 'fr' ? "Serveurs & Réseau" : "Servers & Network",
      desc: language === 'fr'
        ? "Infrastructure serveur Dell PowerEdge et HPE ProLiant, stockage NAS Synology et réseau Ubiquiti UniFi pour une connectivité fiable."
        : "Dell PowerEdge and HPE ProLiant server infrastructure, Synology NAS storage and Ubiquiti UniFi networking for reliable connectivity.",
      specs: ["Dell PowerEdge", "HPE ProLiant", "Synology NAS", "Ubiquiti UniFi"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      icon: Printer,
      title: language === 'fr' ? "Impression & Maintenance" : "Printing & Maintenance",
      desc: language === 'fr'
        ? "Imprimantes professionnelles HP et Epson, accessoires informatiques et contrats de maintenance adaptés à vos besoins."
        : "Professional HP and Epson printers, IT accessories, and maintenance contracts tailored to your needs.",
      specs: ["HP LaserJet", "Epson EcoTank", language === 'fr' ? "Maintenance" : "Maintenance", language === 'fr' ? "Accessoires" : "Accessories"],
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
    },
  ];

  const stats = [
    { icon: Database, value: "1000+", label: language === 'fr' ? "Postes déployés" : "Workstations deployed" },
    { icon: Users, value: "200+", label: language === 'fr' ? "Clients entreprises" : "Business clients" },
    { icon: TrendingUp, value: "99.9%", label: language === 'fr' ? "Disponibilité serveurs" : "Server uptime" },
    { icon: Award, value: "10+", label: language === 'fr' ? "Années d'expérience" : "Years of experience" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={heroIT} alt="Solutions IT DGS" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Pôle IT' : 'IT Division'}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              <span className="text-gradient">{language === 'fr' ? 'Solutions Informatiques' : 'IT Solutions'}</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed max-w-2xl">
              {language === 'fr'
                ? "Ordinateurs · Serveurs · Réseaux · Impression · Maintenance — DGS accompagne les entreprises, ONG et institutions dans la modernisation de leurs infrastructures IT."
                : "Computers · Servers · Networks · Printing · Maintenance — DGS supports businesses, NGOs and institutions in modernizing their IT infrastructure."}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/catalogue-it">
                  {language === 'fr' ? 'Voir le catalogue' : 'View catalogue'}
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

      {/* Services */}
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
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
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
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? "Modernisez votre infrastructure IT" : 'Modernize your IT infrastructure'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === 'fr' ? "Équipements certifiés, déploiement rapide et support local en Afrique de l'Ouest." : 'Certified equipment, fast deployment and local support in West Africa.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/catalogue-it">
                  {language === 'fr' ? 'Voir le catalogue complet' : 'View full catalogue'}
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

export default ServiceIT;
