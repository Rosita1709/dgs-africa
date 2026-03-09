import Layout from "@/components/layout/Layout";
import { Zap, Monitor, Sun, Lightbulb, Thermometer, CircleDot, Server, Laptop, Printer, SunDim, ClipboardCheck, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import solutionsIndustrial from "@/assets/solutions-industrial.jpg";
import solutionsIT from "@/assets/solutions-it.jpg";
import solutionsEnergy from "@/assets/solutions-energy.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Solutions = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={solutionsIndustrial} alt="" className="w-full h-full object-cover" />
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
              {t('solutions.label')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t('solutions.title')}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {t('solutions.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Industriel */}
      <section id="industriel" className="py-24 scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">01</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{t('poles.industrial.title')}</h2>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('poles.industrial.desc')}
              </motion.p>

              <motion.div variants={fadeUp} custom={2} className="space-y-4 mb-8">
                {[
                  { icon: Lightbulb, title: language === 'fr' ? "Éclairage LED" : "LED Lighting", items: ["Waterproof", "ATEX", language === 'fr' ? "Solaire" : "Solar"] },
                  { icon: Thermometer, title: language === 'fr' ? "Froid & Climatisation" : "Cooling & HVAC", items: ["CTA", "VRV/VRF", language === 'fr' ? "Chambres froides" : "Cold rooms"] },
                  { icon: CircleDot, title: language === 'fr' ? "Courroies industrielles" : "Industrial Belts", items: ["Automotive", language === 'fr' ? "Industrie" : "Industry"] },
                ].map((item, index) => (
                  <div key={index} className="group bg-card p-5 rounded-xl shadow-soft border border-border/50 hover:shadow-card hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold mb-1">{item.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.items.map((sub, i) => (
                            <span key={i} className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-blue-500" />
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild className="shadow-accent">
                  <Link to="/contact">
                    {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/produits">
                    {language === 'fr' ? 'Découvrir nos produits' : 'Discover our products'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={solutionsIndustrial} alt="Pôle Industriel DGS Africa" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent clip-corner z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT */}
      <section id="it" className="py-24 bg-muted/30 scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={solutionsIT} alt="Pôle IT DGS Africa" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent clip-corner-bottom z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">02</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{t('poles.it.title')}</h2>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('poles.it.desc')}
              </motion.p>

              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Laptop, title: language === 'fr' ? "Ordinateurs" : "Computers" },
                  { icon: Server, title: language === 'fr' ? "Serveurs" : "Servers" },
                  { icon: Printer, title: language === 'fr' ? "Imprimantes" : "Printers" },
                  { icon: Monitor, title: language === 'fr' ? "Tablettes" : "Tablets" },
                ].map((item, index) => (
                  <div key={index} className="group bg-card p-6 rounded-xl shadow-soft border border-border/50 text-center hover:shadow-card hover:border-accent/30 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild className="shadow-accent">
                  <Link to="/contact">
                    {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/produits">
                    {language === 'fr' ? 'Découvrir nos produits' : 'Discover our products'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Énergie */}
      <section id="energie" className="py-24 scroll-mt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">03</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{t('poles.energy.title')}</h2>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('poles.energy.desc')}
              </motion.p>

              <motion.div variants={fadeUp} custom={2} className="space-y-4 mb-8">
                <div className="group bg-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-card hover:border-green-200 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors shrink-0">
                      <SunDim className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-1">{language === 'fr' ? "Solaire" : "Solar"}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {language === 'fr' 
                          ? "Études, installation et maintenance de systèmes photovoltaïques adaptés à vos besoins énergétiques."
                          : "Studies, installation and maintenance of photovoltaic systems tailored to your energy needs."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-card hover:border-green-200 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors shrink-0">
                      <ClipboardCheck className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-1">{language === 'fr' ? "Audit Énergétique" : "Energy Audit"}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {language === 'fr'
                          ? "Analyse complète de votre consommation, recommandations personnalisées et calcul du retour sur investissement (ROI)."
                          : "Complete analysis of your consumption, personalized recommendations and ROI calculation."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild className="shadow-accent">
                  <Link to="/contact">
                    {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/produits">
                    {language === 'fr' ? 'Découvrir nos produits' : 'Discover our products'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={solutionsEnergy} alt="Pôle Énergie DGS Africa" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent clip-corner-bottom z-10" />
            </motion.div>
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

export default Solutions;