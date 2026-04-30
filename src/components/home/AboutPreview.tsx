import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import MobileCarousel from "@/components/MobileCarousel";

const AboutPreview = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, label: t('about.values.reliability') },
    { icon: CheckCircle2, label: t('about.values.conformity') },
    { icon: Target, label: t('about.values.transparency') },
    { icon: Users, label: t('about.values.engagement') },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -skew-x-12 origin-top-right hidden lg:block" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0 w-full"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              {t('about.label')}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              {t('about.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              {t('about.description')}
            </motion.p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-5 h-5 text-accent" />
                  </span>
                  <span className="font-medium text-foreground">{value.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="default" size="lg" asChild className="group">
                <Link to="/a-propos">
                  {t('about.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <MobileCarousel desktopClassName="md:grid md:grid-cols-1 md:gap-6">
              {/* Mission card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-card border border-border/50 hover:border-accent/30 transition-all min-w-[80vw] md:min-w-0 snap-center"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">{t('about.mission.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t('about.mission.text')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-card border border-border/50 hover:border-accent/30 transition-all min-w-[80vw] md:min-w-0 snap-center"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">{t('about.vision.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t('about.vision.text')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats mini card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-premium min-w-[80vw] md:min-w-0 snap-center"
              >
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-primary-foreground/70">Années</div>
                  </div>
                  <div className="w-px h-12 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-sm text-primary-foreground/70">Projets</div>
                  </div>
                  <div className="w-px h-12 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">5+</div>
                    <div className="text-sm text-primary-foreground/70">Pays</div>
                  </div>
                </div>
              </motion.div>
            </MobileCarousel>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
