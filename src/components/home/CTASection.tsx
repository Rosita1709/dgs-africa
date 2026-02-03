import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 bg-hero-premium relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-pattern" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent/20 rounded-full hidden lg:block" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="xl" asChild className="group shadow-accent">
              <Link to="/contact">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a 
                href="https://wa.me/221775930196" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                {t('cta.whatsapp')}
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:contact@dgsafrica.com"
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              contact@dgsafrica.com
            </a>
            <span className="hidden sm:block w-px h-8 bg-primary-foreground/20" />
            <a 
              href="tel:+221775930196"
              className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              +221 77 593 01 96
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
