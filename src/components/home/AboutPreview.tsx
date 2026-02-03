import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Award, Shield, Users, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPreview = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, title: t('values.reliability'), desc: t('values.reliability.desc') },
    { icon: Award, title: t('values.compliance'), desc: t('values.compliance.desc') },
    { icon: Users, title: t('values.transparency'), desc: t('values.transparency.desc') },
    { icon: Handshake, title: t('values.commitment'), desc: t('values.commitment.desc') },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent -z-10" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('aboutPreview.label')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('aboutPreview.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t('aboutPreview.p1')}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('aboutPreview.p2')}
            </p>

            <Button variant="default" size="lg" asChild className="group">
              <Link to="/a-propos">
                {t('aboutPreview.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-5 animate-slide-in-right">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-2xl shadow-soft border border-border/50 hover:shadow-card hover:border-accent/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
