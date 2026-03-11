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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="IT Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <span className="text-accent font-semibold text-lg">
                {language === 'fr' ? 'Pôle IT' : 'IT Division'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              {language === 'fr' ? 'Solutions IT' : 'IT Solutions'}
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              {language === 'fr'
                ? "Serveurs Dell PowerEdge, ordinateurs professionnels, tablettes Blackview durcies. L'infrastructure IT de confiance pour l'Afrique."
                : "Dell PowerEdge servers, professional computers, rugged Blackview tablets. Trusted IT infrastructure for Africa."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="group">
                  {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — alternating 2-col with real images */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent">{service.partner}</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <Button variant="outline" className="group">
                      {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Besoin de matériel informatique ?' : 'Need IT equipment?'}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {language === 'fr' ? 'Dell, Blackview et plus encore. Contactez-nous pour un devis adapté.' : 'Dell, Blackview and more. Contact us for a tailored quote.'}
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="group">
                {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceIT;
