import Layout from "@/components/layout/Layout";
import { Monitor, Laptop, Server, Printer, Tablet, ArrowRight, CheckCircle } from "lucide-react";
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
      icon: Laptop,
      title: language === 'fr' ? "Ordinateurs & Portables" : "Computers & Laptops",
      partner: "Dell / Blackview",
      desc: language === 'fr'
        ? "Postes de travail performants pour entreprises. Dell Latitude pour usage professionnel, Blackview pour conditions difficiles."
        : "High-performance workstations for businesses. Dell Latitude for professional use, Blackview for tough conditions.",
      specs: ["Dell Latitude", "Dell Inspiron", "Blackview Rugged", language === 'fr' ? "Postes fixes" : "Desktops"],
    },
    {
      icon: Server,
      title: language === 'fr' ? "Serveurs & Infrastructure" : "Servers & Infrastructure",
      partner: "Dell",
      desc: language === 'fr'
        ? "Infrastructure serveur Dell PowerEdge pour hébergement, stockage et virtualisation. Solutions rack complètes."
        : "Dell PowerEdge server infrastructure for hosting, storage and virtualization. Complete rack solutions.",
      specs: ["Dell PowerEdge", "Rack", "NAS", "Switches", language === 'fr' ? "Onduleurs" : "UPS"],
    },
    {
      icon: Printer,
      title: language === 'fr' ? "Imprimantes & Périphériques" : "Printers & Peripherals",
      partner: "Dell",
      desc: language === 'fr'
        ? "Imprimantes professionnelles laser et jet d'encre. Solutions d'impression A3/A4 multifonctions."
        : "Professional laser and inkjet printers. A3/A4 all-in-one printing solutions.",
      specs: ["Laser", language === 'fr' ? "Jet d'encre" : "Inkjet", "A3/A4", language === 'fr' ? "Multifonctions" : "All-in-one"],
    },
    {
      icon: Tablet,
      title: language === 'fr' ? "Tablettes & Mobiles" : "Tablets & Mobile",
      partner: "Blackview",
      desc: language === 'fr'
        ? "Tablettes et smartphones durcis Blackview pour usage terrain. Résistants aux chocs, eau et poussière."
        : "Blackview rugged tablets and smartphones for field use. Shock, water and dust resistant.",
      specs: ["Blackview Tab", "Blackview BV", language === 'fr' ? "Étanche IP68" : "Waterproof IP68", language === 'fr' ? "Anti-choc" : "Shockproof"],
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Pôle IT' : 'IT Division'}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Solutions IT' : 'IT Solutions'}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {language === 'fr'
                ? "Ordinateurs, serveurs, imprimantes, tablettes et accessoires. Nos équipements garantissent productivité et sécurité des données."
                : "Computers, servers, printers, tablets and accessories. Our equipment ensures productivity and data security."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-premium hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">{service.partner}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.specs.map((spec, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-accent" />
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Besoin de matériel informatique ?' : 'Need IT equipment?'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === 'fr' ? 'Dell, Blackview et plus encore. Contactez-nous pour un devis.' : 'Dell, Blackview and more. Contact us for a quote.'}
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
