import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";


import heroFacility from "@/assets/hero-facility.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroIT from "@/assets/hero-it.jpg";
import heroEnergy from "@/assets/hero-energy.jpg";

interface Slide {
  id: number;
  image: string;
  badge: string;
  badgeEn: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroFacility,
    badge: "FACILITY MANAGEMENT",
    badgeEn: "FACILITY MANAGEMENT",
    title: "Votre partenaire africain de confiance",
    titleEn: "Your trusted African partner",
    subtitle: "Gestion, exploitation et maintenance de vos infrastructures techniques au Sénégal et en Afrique de l'Ouest",
    subtitleEn: "Management, operation and maintenance of your technical infrastructure in Senegal and West Africa",
  },
  {
    id: 2,
    image: heroIndustrial,
    badge: "ÉQUIPEMENTS INDUSTRIELS",
    badgeEn: "INDUSTRIAL EQUIPMENT",
    title: "Des solutions industrielles de classe mondiale",
    titleEn: "World-class industrial solutions",
    subtitle: "Éclairage LED ATEX, climatisation industrielle, courroies — certifiés et adaptés à l'Afrique",
    subtitleEn: "ATEX LED lighting, industrial HVAC, belts — certified and adapted for Africa",
  },
  {
    id: 3,
    image: heroIT,
    badge: "TECHNOLOGIES DE L'INFORMATION",
    badgeEn: "INFORMATION TECHNOLOGY",
    title: "L'infrastructure IT qui propulse l'Afrique",
    titleEn: "IT infrastructure powering Africa",
    subtitle: "Serveurs Dell, équipements Blackview durcis, solutions réseau pour entreprises et institutions",
    subtitleEn: "Dell servers, rugged Blackview equipment, network solutions for businesses and institutions",
  },
  {
    id: 4,
    image: heroEnergy,
    badge: "ÉNERGIE SOLAIRE",
    badgeEn: "SOLAR ENERGY",
    title: "L'énergie solaire au service du continent",
    titleEn: "Solar energy serving the continent",
    subtitle: "Solutions photovoltaïques, audit énergétique et optimisation des coûts pour l'Afrique",
    subtitleEn: "Photovoltaic solutions, energy audit and cost optimization for Africa",
  },
];

const HeroSlider = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle geometric accent */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-accent/20 clip-corner z-10" />

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main content */}
      <div className="container relative z-20 h-full flex items-center pt-20">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="inline-block bg-accent/20 backdrop-blur-sm border-l-4 border-accent px-4 py-2 mb-6"
              >
                <span className="text-accent font-semibold text-sm tracking-wider">
                  {language === 'fr' ? slide.badge : slide.badgeEn}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6"
              >
                {language === 'fr' ? slide.title : slide.titleEn}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-2xl leading-relaxed"
              >
                {language === 'fr' ? slide.subtitle : slide.subtitleEn}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="accent" size="lg" asChild className="group shadow-accent">
                  <Link to="/solutions">
                    {t('hero.learnMore')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="group">
                  <Link to="/contact">
                    {language === 'fr' ? 'Demander un devis' : 'Request a quote'}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-accent' : 'w-6 bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-accent rounded-full origin-left"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex">
          <Link 
            to="/contact"
            className="flex-1 bg-primary/80 backdrop-blur-sm hover:bg-primary transition-colors py-5 px-6 flex items-center justify-center gap-3 group border-t border-primary-foreground/10"
          >
            <span className="text-primary-foreground font-semibold">
              {language === 'fr' ? "Demander un devis" : "Request a quote"}
            </span>
            <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="tel:+221775930196"
            className="flex-1 bg-accent hover:bg-accent/90 transition-colors py-5 px-6 flex items-center justify-center gap-3 group"
          >
            <span className="text-accent-foreground font-semibold">
              +221 77 593 01 96
            </span>
            <ArrowRight className="w-5 h-5 text-accent-foreground group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=221775930196"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </section>
  );
};

export default HeroSlider;
