import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Shield, Award, Users, Handshake, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, title: t('values.reliability'), desc: t('values.reliability.desc') },
    { icon: Award, title: t('values.compliance'), desc: t('values.compliance.desc') },
    { icon: Users, title: t('values.transparency'), desc: t('values.transparency.desc') },
    { icon: Handshake, title: t('values.commitment'), desc: t('values.commitment.desc') },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
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
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-card p-10 rounded-2xl shadow-card border border-border/50 hover:shadow-premium hover:border-accent/20 transition-all duration-300">
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
            </div>

            <div className="group bg-card p-10 rounded-2xl shadow-card border border-border/50 hover:shadow-premium hover:border-accent/20 transition-all duration-300">
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
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('about.values.label')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-card hover:border-accent/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Button variant="accent" size="xl" asChild className="group shadow-accent">
              <Link to="/contact">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
