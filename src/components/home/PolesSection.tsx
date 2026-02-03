import { Link } from "react-router-dom";
import { Zap, Monitor, Sun, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const PolesSection = () => {
  const { t } = useLanguage();

  const poles = [
    {
      icon: Zap,
      title: t('poles.industrial.title'),
      description: t('poles.industrial.desc'),
      features: [t('poles.industrial.f1'), t('poles.industrial.f2'), t('poles.industrial.f3')],
      href: "/solutions#industriel",
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-500/10 to-blue-700/5",
    },
    {
      icon: Monitor,
      title: t('poles.it.title'),
      description: t('poles.it.desc'),
      features: [t('poles.it.f1'), t('poles.it.f2'), t('poles.it.f3')],
      href: "/solutions#it",
      gradient: "from-accent to-orange-600",
      bgGradient: "from-accent/10 to-orange-600/5",
    },
    {
      icon: Sun,
      title: t('poles.energy.title'),
      description: t('poles.energy.desc'),
      features: [t('poles.energy.f1'), t('poles.energy.f2'), t('poles.energy.f3')],
      href: "/solutions#energie",
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-500/10 to-green-700/5",
    },
  ];

  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
            {t('poles.label')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up">
            {t('poles.title')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t('poles.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {poles.map((pole, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pole.gradient}`} />
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pole.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pole.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <pole.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {pole.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pole.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {pole.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground/70 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={pole.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors"
                >
                  {t('poles.learnMore')}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolesSection;
