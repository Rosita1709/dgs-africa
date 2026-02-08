import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Shield, Award, Users, Handshake, CheckCircle, ArrowRight, Building2, Globe, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { icon: Shield, title: t('values.reliability'), desc: t('values.reliability.desc') },
    { icon: Award, title: t('values.compliance'), desc: t('values.compliance.desc') },
    { icon: Users, title: t('values.transparency'), desc: t('values.transparency.desc') },
    { icon: Handshake, title: t('values.commitment'), desc: t('values.commitment.desc') },
  ];

  const strengths = [
    { icon: Building2, title: language === 'fr' ? 'Expertise sectorielle' : 'Sector expertise', desc: language === 'fr' ? 'Industriel, IT et Énergie sous un même toit' : 'Industrial, IT and Energy under one roof' },
    { icon: Globe, title: language === 'fr' ? 'Présence africaine' : 'African presence', desc: language === 'fr' ? 'Opérations dans plus de 10 pays' : 'Operations in 10+ countries' },
    { icon: Wrench, title: language === 'fr' ? 'Service complet' : 'Full service', desc: language === 'fr' ? 'De l\'étude à la maintenance' : 'From study to maintenance' },
  ];

  return (
    <Layout>
      {/* Hero avec image */}
      <section className="relative py-32 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                {t('about.label')}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                {t('about.title')}
              </h1>
              <p className="text-primary-foreground/80 text-xl leading-relaxed mb-8">
                {t('about.subtitle')}
              </p>
              <div className="inline-flex items-center gap-3 bg-accent/20 text-primary-foreground px-5 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-semibold">{t('about.experience')}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={aboutTeam} alt="Équipe DGS Africa" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent clip-corner z-10" />
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Intro + Image */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={aboutMission} alt="Ingénieur DGS Africa" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent clip-corner-bottom z-10" />
              
              {/* Stats floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-premium"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-xs text-primary-foreground/70">{language === 'fr' ? 'Années' : 'Years'}</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">500+</div>
                    <div className="text-xs text-primary-foreground/70">{language === 'fr' ? 'Projets' : 'Projects'}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                DGS Africa
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-6">
                {language === 'fr' ? 'Un acteur majeur du Facility Management en Afrique' : 'A major player in Facility Management in Africa'}
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('about.intro')}
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </motion.p>

              <motion.div variants={fadeUp} custom={4} className="space-y-4">
                {strengths.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-card p-10 rounded-2xl shadow-card border border-border/50 hover:shadow-premium hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {t('about.mission.label')}
              </span>
              <h2 className="font-heading text-2xl font-bold mt-2 mb-4">
                {t('about.mission.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.mission.text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group bg-card p-10 rounded-2xl shadow-card border border-border/50 hover:shadow-premium hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {t('about.vision.label')}
              </span>
              <h2 className="font-heading text-2xl font-bold mt-2 mb-4">
                {t('about.vision.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.vision.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('about.values.label')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('about.values.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-card p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-card hover:border-accent/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              {t('cta.title')}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Button variant="accent" size="xl" asChild className="group shadow-accent">
              <Link to="/contact">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
