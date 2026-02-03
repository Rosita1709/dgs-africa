import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, Truck, Headphones } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary-foreground/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-accent/30 rotate-12 hidden lg:block" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Facility Management Expert
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
            Des solutions industrielles, IT et énergétiques{" "}
            <span className="text-accent">fiables pour l'Afrique</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            DGS Africa accompagne les entreprises, industries et institutions dans la gestion, 
            l'exploitation et la maintenance de leurs infrastructures techniques avec des solutions 
            personnalisées et innovantes, adaptées aux réalités africaines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
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
          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Clock, text: "Réponse sous 24-48h" },
              { icon: Truck, text: "Livraison Afrique" },
              { icon: Headphones, text: "Support local" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <item.icon className="w-5 h-5 text-accent" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
