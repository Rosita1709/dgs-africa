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
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration - desktop only */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -skew-x-12 origin-top-right hidden lg:block" />

      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 w-full max-w-full"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
              {t('about.label')}
            </span>

            <h2 className="font-heading text-[1.5rem] leading-[1.15] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words hyphens-auto">
              {t('about.title')}
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 break-words">
              {t('about.description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 min-w-0"
                >
                  <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-4 h-4 text-accent" />
                  </span>
                  <span className="font-medium text-foreground text-sm truncate">{value.label}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild className="group w-full sm:w-auto">
              <Link to="/a-propos">
                {t('about.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Feature cards */}
          <div className="relative w-full min-w-0">
            <MobileCarousel desktopClassName="md:flex md:flex-col md:gap-4 lg:gap-6">
              {/* Mission card */}
              <div className="bg-card p-5 md:p-6 rounded-2xl shadow-card border border-border/50 min-w-[85%] lg:min-w-0 snap-center">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-lg mb-1.5">{t('about.mission.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t('about.mission.text')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision card */}
              <div className="bg-card p-5 md:p-6 rounded-2xl shadow-card border border-border/50 min-w-[85%] lg:min-w-0 snap-center">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-lg mb-1.5">{t('about.vision.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t('about.vision.text')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats mini card */}
              <div className="bg-primary text-primary-foreground p-5 rounded-2xl shadow-premium min-w-[85%] lg:min-w-0 snap-center">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                    <div className="text-xs text-primary-foreground/70">Années</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">50+</div>
                    <div className="text-xs text-primary-foreground/70">Projets</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
                    <div className="text-xs text-primary-foreground/70">Pays</div>
                  </div>
                </div>
              </div>
            </MobileCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
