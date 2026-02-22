import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, CheckCircle, Zap, Monitor, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

import projectHvac from "@/assets/project-hvac.jpg";
import projectItDeploy from "@/assets/project-it-deploy.jpg";
import projectSolar from "@/assets/project-solar.jpg";

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
      image: projectHvac,
      icon: Zap,
      color: "blue",
      pole: language === 'fr' ? "Industriel" : "Industrial",
      title: language === 'fr' ? "Climatisation centralisée — Complexe hôtelier" : "Centralized HVAC — Hotel Complex",
      location: language === 'fr' ? "Dakar, Sénégal" : "Dakar, Senegal",
      year: "2024",
      context: language === 'fr'
        ? "Installation complète d'un système VRV/VRF pour un complexe hôtelier de 120 chambres nécessitant une climatisation performante et économe en énergie."
        : "Complete VRV/VRF system installation for a 120-room hotel complex requiring energy-efficient air conditioning.",
      results: language === 'fr'
        ? ["Réduction de 35% de la consommation", "Confort optimal dans 120 chambres", "Maintenance préventive incluse"]
        : ["35% energy consumption reduction", "Optimal comfort in 120 rooms", "Preventive maintenance included"],
    },
    {
      image: projectItDeploy,
      icon: Monitor,
      color: "accent",
      pole: language === 'fr' ? "IT" : "IT",
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
      image: projectSolar,
      icon: Sun,
      color: "green",
      pole: language === 'fr' ? "Énergie" : "Energy",
      title: language === 'fr' ? "Centrale solaire — Site industriel" : "Solar Plant — Industrial Site",
      location: language === 'fr' ? "Thiès, Sénégal" : "Thiès, Senegal",
      year: "2024",
      context: language === 'fr'
        ? "Conception et installation d'une centrale solaire de 150 kWc pour alimenter un site de production industrielle, réduisant la dépendance au réseau électrique."
        : "Design and installation of a 150 kWp solar plant to power an industrial production site, reducing grid dependency.",
      results: language === 'fr'
        ? ["150 kWc installés", "ROI estimé à 4 ans", "Réduction de 60% des coûts énergétiques"]
        : ["150 kWp installed", "Estimated 4-year ROI", "60% energy cost reduction"],
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
      <section className="relative pt-40 pb-32 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>
        
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
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container space-y-20">
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

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
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