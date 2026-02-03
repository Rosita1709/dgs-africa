import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, Truck, Headphones, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-hero-premium overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern" />
      
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-[100px]" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-[15%] w-40 h-40 border border-primary-foreground/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/3 left-[10%] w-24 h-24 border border-accent/20 rotate-12 hidden lg:block" />
      <div className="absolute top-[60%] right-[8%] w-16 h-16 bg-accent/10 rotate-45 hidden lg:block" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in border border-primary-foreground/10">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {t('hero.badge')}
            <span className="w-px h-4 bg-primary-foreground/20" />
            <span className="text-accent">15+ ans</span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-up">
            {t('hero.title')}{" "}
            <span className="text-accent relative">
              {t('hero.titleAccent')}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 6" stroke="hsl(40 82% 53%)" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="accent" size="xl" asChild className="group shadow-accent">
              <Link to="/contact">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="group">
              <a 
                href="https://wa.me/221775930196" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Clock, text: t('hero.response') },
              { icon: Truck, text: t('hero.delivery') },
              { icon: Headphones, text: t('hero.support') },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-primary-foreground/60 group"
              >
                <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-5 h-5 text-accent" />
                </span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
