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
      icon: Server,
      title: language === 'fr' ? "Serveurs Dell PowerEdge" : "Dell PowerEdge Servers",
      partner: "Dell Technologies",
      desc: language === 'fr'
        ? "Infrastructure serveur Dell PowerEdge pour hébergement, stockage et virtualisation. Solutions rack complètes pour data centers et entreprises."
        : "Dell PowerEdge server infrastructure for hosting, storage and virtualization. Complete rack solutions for data centers and businesses.",
      specs: ["PowerEdge R760", "PowerEdge T550", "Rack / Tower", language === 'fr' ? "Stockage SAN" : "SAN Storage"],
      image: "/products/dell-server.png",
    },
    {
      icon: Laptop,
      title: language === 'fr' ? "Ordinateurs Dell" : "Dell Computers",
      partner: "Dell Technologies",
      desc: language === 'fr'
        ? "Postes de travail professionnels Dell Latitude et OptiPlex. Fiables, sécurisés et performants pour les entreprises africaines."
        : "Dell Latitude and OptiPlex professional workstations. Reliable, secure and high-performing for African businesses.",
      specs: ["Dell Latitude", "Dell OptiPlex", "Dell Inspiron", language === 'fr' ? "Moniteurs" : "Monitors"],
      image: "/products/dell-laptop.png",
    },
    {
      icon: Tablet,
      title: language === 'fr' ? "Tablettes & Mobiles Blackview" : "Blackview Tablets & Mobile",
      partner: "Blackview",
      desc: language === 'fr'
        ? "Tablettes et smartphones durcis Blackview pour usage terrain en Afrique. Résistants aux chocs, eau, poussière et chaleur extrême."
        : "Blackview rugged tablets and smartphones for field use in Africa. Shock, water, dust and extreme heat resistant.",
      specs: ["Blackview Tab 18", "Blackview BV8800", "IP68/IP69K", language === 'fr' ? "Anti-choc MIL-STD" : "MIL-STD Shockproof"],
      image: "/products/blackview-rugged.jpg",
    },
    {
      icon: Printer,
      title: language === 'fr' ? "Imprimantes & Réseau" : "Printers & Networking",
      partner: "Dell",
      desc: language === 'fr'
        ? "Imprimantes professionnelles, switches réseau et solutions d'impression pour bureaux et institutions."
        : "Professional printers, network switches and printing solutions for offices and institutions.",
      specs: ["Laser", language === 'fr' ? "Multifonctions" : "All-in-one", "Switches", language === 'fr' ? "Onduleurs" : "UPS"],
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
                ? "Serveurs Dell PowerEdge, ordinateurs professionnels, tablettes Blackview durcies. L'infrastructure IT de confiance pour l'Afrique."
                : "Dell PowerEdge servers, professional computers, rugged Blackview tablets. Trusted IT infrastructure for Africa."}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services with images */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
          <div className="container">
            <div className={`grid ${service.image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
              {service.image && (
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? 'order-2' : ''}
                >
                  <div className="rounded-2xl overflow-hidden shadow-premium bg-muted/50 p-8 flex items-center justify-center">
                    <img src={service.image} alt={service.title} className="w-full max-h-[400px] object-contain" />
                  </div>
                </motion.div>
              )}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={service.image && index % 2 === 1 ? 'order-1' : ''}
              >
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">{service.partner}</span>
                </motion.div>
                <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl font-bold mb-4">{service.title}</motion.h2>
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
              {language === 'fr' ? 'Besoin de matériel informatique ?' : 'Need IT equipment?'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === 'fr' ? 'Dell, Blackview et plus encore. Contactez-nous pour un devis adapté à vos besoins.' : 'Dell, Blackview and more. Contact us for a quote tailored to your needs.'}
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
