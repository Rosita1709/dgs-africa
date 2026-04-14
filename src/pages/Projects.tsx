import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, CheckCircle, Monitor, Laptop, Tablet, Package, Wrench, Shield, Settings, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

import projectMinistryIt from "@/assets/project-ministry-it.jpg";
import projectMinistryFinance from "@/assets/project-ministry-finance.jpg";
import projectEducationTablets from "@/assets/project-education-tablets.jpg";
import projectHvac from "@/assets/project-hvac.jpg";
import projectItDeploy from "@/assets/project-it-deploy.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      image: projectMinistryIt,
      icon: Laptop,
      color: "accent",
      pole: "IT",
      title: language === 'fr' ? "Ministère des Affaires Étrangères" : "Ministry of Foreign Affairs",
      location: language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal",
      year: "2024",
      context: language === 'fr'
        ? "Fourniture d'équipements informatiques comprenant des Microsoft Surface Pro 8 et HP All-in-One Core i5, livrés avec installation des logiciels professionnels (Microsoft Office, antivirus) et un accompagnement technique assuré par une équipe qualifiée et agréée."
        : "Supply of IT equipment including Microsoft Surface Pro 8 and HP All-in-One Core i5, delivered with professional software installation (Microsoft Office, antivirus) and technical support provided by a qualified and certified team.",
      results: language === 'fr'
        ? ["Microsoft Surface Pro 8 & HP All-in-One déployés", "Installation Microsoft Office & antivirus", "Accompagnement technique par équipe agréée"]
        : ["Microsoft Surface Pro 8 & HP All-in-One deployed", "Microsoft Office & antivirus installation", "Technical support by certified team"],
    },
    {
      image: projectMinistryFinance,
      icon: Monitor,
      color: "accent",
      pole: "IT",
      title: language === 'fr' ? "Ministère des Finances et du Budget" : "Ministry of Finance and Budget",
      location: language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal",
      year: "2024",
      context: language === 'fr'
        ? "Déploiement de plus de 350 HP All-in-One équipés de processeurs Intel Core Ultra 5 et Ultra 7, avec installation des logiciels essentiels (Office, antivirus), préparation et configuration des postes, et support technique et maintenance."
        : "Deployment of over 350 HP All-in-One equipped with Intel Core Ultra 5 and Ultra 7 processors, with essential software installation (Office, antivirus), workstation preparation and configuration, and technical support and maintenance.",
      results: language === 'fr'
        ? ["350+ HP All-in-One Intel Core Ultra 5 & Ultra 7", "Configuration logicielle complète (Office, antivirus)", "Support technique et maintenance continus"]
        : ["350+ HP All-in-One Intel Core Ultra 5 & Ultra 7", "Complete software configuration (Office, antivirus)", "Ongoing technical support and maintenance"],
    },
    {
      image: projectEducationTablets,
      icon: Tablet,
      color: "accent",
      pole: "IT",
      title: language === 'fr' ? "Ministère de l'Éducation Nationale" : "Ministry of National Education",
      location: language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal",
      year: "2024",
      context: language === 'fr'
        ? "Livraison de 1 000 tablettes Blackview Mega 12 en kits complets, destinées à soutenir l'intégration du numérique dans le système éducatif sénégalais. Un projet d'envergure nationale pour la transformation digitale de l'éducation."
        : "Delivery of 1,000 Blackview Mega 12 tablets in complete kits, aimed at supporting digital integration in the Senegalese education system. A nationwide project for the digital transformation of education.",
      results: language === 'fr'
        ? ["1 000 tablettes Blackview Mega 12 livrées", "Kits complets prêts à l'emploi", "Transformation numérique de l'éducation"]
        : ["1,000 Blackview Mega 12 tablets delivered", "Complete ready-to-use kits", "Digital transformation of education"],
    },
    {
      image: projectItDeploy,
      icon: Monitor,
      color: "accent",
      pole: "IT",
      title: language === 'fr' ? "Déploiement informatique — Siège entreprise" : "IT Deployment — Corporate HQ",
      location: language === 'fr' ? "Abidjan, Côte d'Ivoire" : "Abidjan, Côte d'Ivoire",
      year: "2023",
      context: language === 'fr'
        ? "Fourniture et installation de 200 postes de travail, serveurs, infrastructure réseau et système de sauvegarde pour le nouveau siège d'une multinationale."
        : "Supply and installation of 200 workstations, servers, network infrastructure and backup system for a multinational's new headquarters.",
      results: language === 'fr'
        ? ["200 postes déployés en 3 semaines", "Infrastructure réseau sécurisée", "Support technique sur site"]
        : ["200 workstations deployed in 3 weeks", "Secured network infrastructure", "On-site technical support"],
    },
    {
      image: projectHvac,
      icon: Settings,
      color: "blue",
      pole: language === 'fr' ? "Industriel" : "Industrial",
      title: language === 'fr' ? "Climatisation centralisée VRV/VRF" : "Centralized VRV/VRF HVAC",
      location: language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal",
      year: "2024",
      context: language === 'fr'
        ? "Conception et installation de systèmes VRV/VRF (Volume de Réfrigérant Variable) pour des bâtiments tertiaires et industriels. Ces solutions permettent un contrôle précis de la température zone par zone, une réduction significative de la consommation énergétique et une flexibilité d'installation inégalée."
        : "Design and installation of VRV/VRF (Variable Refrigerant Volume/Flow) systems for commercial and industrial buildings. These solutions enable precise zone-by-zone temperature control, significant energy consumption reduction, and unmatched installation flexibility.",
      results: language === 'fr'
        ? ["Système VRV/VRF haute performance", "Contrôle précis zone par zone", "Réduction significative de la consommation énergétique", "Maintenance préventive incluse"]
        : ["High-performance VRV/VRF system", "Precise zone-by-zone control", "Significant energy consumption reduction", "Preventive maintenance included"],
    },
  ];

  const engagements = [
    {
      icon: Package,
      titleFr: "Fourniture d'équipements",
      titleEn: "Equipment Supply",
      descFr: "Équipements informatiques professionnels certifiés des plus grandes marques internationales.",
      descEn: "Certified professional IT equipment from the world's leading brands.",
    },
    {
      icon: Settings,
      titleFr: "Configuration logicielle",
      titleEn: "Software Configuration",
      descFr: "Installation et configuration complète : Microsoft Office, solutions de sécurité et logiciels métiers.",
      descEn: "Complete installation and configuration: Microsoft Office, security solutions and business software.",
    },
    {
      icon: Wrench,
      titleFr: "Installation & Déploiement",
      titleEn: "Installation & Deployment",
      descFr: "Mise en place sur site par nos techniciens certifiés, du déballage à la mise en production.",
      descEn: "On-site setup by our certified technicians, from unboxing to production readiness.",
    },
    {
      icon: Headphones,
      titleFr: "Support & Maintenance",
      titleEn: "Support & Maintenance",
      descFr: "Équipe certifiée disponible pour le support technique et la maintenance préventive et corrective.",
      descEn: "Certified team available for technical support and preventive/corrective maintenance.",
    },
  ];

  const colorMap: Record<string, { badge: string; icon: string; check: string }> = {
    blue: { badge: "bg-blue-600", icon: "text-blue-600", check: "text-blue-500" },
    accent: { badge: "bg-accent", icon: "text-accent", check: "text-accent" },
    green: { badge: "bg-green-600", icon: "text-green-600", check: "text-green-500" },
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={projectMinistryFinance} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-pattern" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('projects.label')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t('projects.title')}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {language === 'fr'
                ? "Des projets d'envergure réalisés pour des ministères et institutions au Sénégal. Découvrez nos références."
                : "Large-scale projects delivered for ministries and institutions in Senegal. Discover our references."}
            </p>
          </motion.div>
        </div>
        
        
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-muted/30 border-b border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "1 350+", labelFr: "Postes déployés", labelEn: "Workstations deployed" },
              { value: "3", labelFr: "Ministères équipés", labelEn: "Ministries equipped" },
              { value: "1 000", labelFr: "Tablettes livrées", labelEn: "Tablets delivered" },
              { value: "100%", labelFr: "Taux de satisfaction", labelEn: "Satisfaction rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{language === 'fr' ? stat.labelFr : stat.labelEn}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container space-y-14">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className={`relative ${isReversed ? 'lg:order-2' : ''}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-premium">
                    <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
                  </div>
                  <div className={`absolute top-4 left-4 ${colors.badge} text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-lg flex items-center gap-2`}>
                    <project.icon className="w-4 h-4" />
                    {project.pole}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <motion.h3 variants={fadeUp} custom={1} className="font-heading text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </motion.h3>

                  <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={3}>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      {language === 'fr' ? "Contexte" : "Context"}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.context}
                    </p>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={4}>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      {language === 'fr' ? "Résultats" : "Results"}
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground">
                          <CheckCircle className={`w-4 h-4 ${colors.check} shrink-0`} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={5}>
                    <Button variant="accent" size="lg" asChild className="shadow-accent">
                      <Link to="/contact">
                        {t('projects.cta')}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="py-14 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-4 shadow-lg">
              {language === 'fr' ? "Notre Engagement" : "Our Commitment"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {language === 'fr' ? "Un accompagnement complet sur chaque projet" : "Complete support on every project"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === 'fr'
                ? "DGS Africa assure pour l'ensemble de ses projets un service intégral, de la fourniture à la maintenance."
                : "DGS Africa provides comprehensive service for all its projects, from supply to maintenance."}
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-premium hover:border-accent/30 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {language === 'fr' ? item.titleFr : item.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === 'fr' ? item.descFr : item.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-premium relative overflow-hidden">
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

export default Projects;
