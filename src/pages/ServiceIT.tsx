import Layout from "@/components/layout/Layout";
import { Monitor, Laptop, Server, Printer, Tablet, ArrowRight, CheckCircle, Users, Award, Database, TrendingUp } from "lucide-react";
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

const ServiceIT = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Server,
      title: language === 'fr' ? "Serveurs Dell PowerEdge" : "Dell PowerEdge Servers",
      partner: "Dell Technologies",
      desc: language === 'fr'
        ? "Infrastructure serveur Dell PowerEdge pour hébergement, stockage et virtualisation. Solutions rack complètes pour data centers et entreprises."
        : "Dell PowerEdge server infrastructure for hosting, storage and virtualization. Complete rack solutions for data centers and businesses.",
      specs: ["PowerEdge R760", "PowerEdge T550", "Rack / Tower", language === 'fr' ? "Stockage SAN" : "SAN Storage"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      icon: Laptop,
      title: language === 'fr' ? "Ordinateurs Dell" : "Dell Computers",
      partner: "Dell Technologies",
      desc: language === 'fr'
        ? "Postes de travail professionnels Dell Latitude et OptiPlex. Fiables, sécurisés et performants pour les entreprises africaines."
        : "Dell Latitude and OptiPlex professional workstations. Reliable, secure and high-performing for African businesses.",
      specs: ["Dell Latitude", "Dell OptiPlex", "Dell Inspiron", language === 'fr' ? "Moniteurs" : "Monitors"],
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    },
    {
      icon: Tablet,
      title: language === 'fr' ? "Tablettes & Mobiles Blackview" : "Blackview Tablets & Mobile",
      partner: "Blackview",
      desc: language === 'fr'
        ? "Tablettes et smartphones durcis Blackview pour usage terrain en Afrique. Résistants aux chocs, eau, poussière et chaleur extrême."
        : "Blackview rugged tablets and smartphones for field use in Africa. Shock, water, dust and extreme heat resistant.",
      specs: ["Blackview Tab 18", "Blackview BV8800", "IP68/IP69K", language === 'fr' ? "Anti-choc MIL-STD" : "MIL-STD Shockproof"],
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    },
    {
      icon: Printer,
      title: language === 'fr' ? "Imprimantes & Réseau" : "Printers & Networking",
      partner: "Dell",
      desc: language === 'fr'
        ? "Imprimantes professionnelles, switches réseau et solutions d'impression pour bureaux et institutions."
        : "Professional printers, network switches and printing solutions for offices and institutions.",
      specs: ["Laser", language === 'fr' ? "Multifonctions" : "All-in-one", "Switches", language === 'fr' ? "Onduleurs" : "UPS"],
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
      {/* Hero with real image */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" 
            alt="Data center" 
            className="w-full h-full object-cover"
          />
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
              <span className="text-gradient">{language === 'fr' ? 'Solutions IT' : 'IT Solutions'}</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed max-w-2xl">
              {language === 'fr'
                ? "Serveurs Dell PowerEdge, ordinateurs professionnels, tablettes Blackview durcies. L'infrastructure IT de confiance pour l'Afrique."
                : "Dell PowerEdge servers, professional computers, rugged Blackview tablets. Trusted IT infrastructure for Africa."}
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

      {/* Services — alternating 2-col with real images */}
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
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Besoin de matériel informatique ?' : 'Need IT equipment?'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === 'fr' ? 'Dell, Blackview et plus encore. Contactez-nous pour un devis adapté.' : 'Dell, Blackview and more. Contact us for a tailored quote.'}
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

export default ServiceIT;
