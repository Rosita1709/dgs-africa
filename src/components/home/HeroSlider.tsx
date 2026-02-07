import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

// Import hero images
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
    title: "Des services flexibles adaptés aux besoins de votre entreprise",
    titleEn: "Flexible services tailored to your business needs",
    subtitle: "Gestion, exploitation et maintenance de vos infrastructures techniques",
    subtitleEn: "Management, operation and maintenance of your technical infrastructure",
  },
  {
    id: 2,
    image: heroIndustrial,
    badge: "ÉQUIPEMENTS INDUSTRIELS",
    badgeEn: "INDUSTRIAL EQUIPMENT",
    title: "Des solutions complètes et innovantes",
    titleEn: "Complete and innovative solutions",
    subtitle: "Éclairage LED, froid & climatisation, courroies industrielles",
    subtitleEn: "LED lighting, cooling & air conditioning, industrial belts",
  },
  {
    id: 3,
    image: heroIT,
    badge: "TECHNOLOGIES DE L'INFORMATION",
    badgeEn: "INFORMATION TECHNOLOGY",
    title: "Équipements informatiques performants",
    titleEn: "High-performance IT equipment",
    subtitle: "Ordinateurs, serveurs, imprimantes et accessoires professionnels",
    subtitleEn: "Computers, servers, printers and professional accessories",
  },
  {
    id: 4,
    image: heroEnergy,
    badge: "ÉNERGIE SOLAIRE",
    badgeEn: "SOLAR ENERGY",
    title: "Un large réseau de partenaires et fournisseurs",
    titleEn: "A wide network of partners and suppliers",
    subtitle: "Solutions solaires, audit énergétique et optimisation des coûts",
    subtitleEn: "Solar solutions, energy audit and cost optimization",
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
      {/* Top contact bar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <a href="mailto:contact@dgsafrica.com" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              contact@dgsafrica.com
            </a>
          </div>
          <a 
            href="tel:+221775930196" 
            className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +221 77 593 01 96
          </a>
        </div>
      </div>

      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-accent clip-corner z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-accent clip-corner-bottom z-10" />

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        <span className="hidden md:inline text-sm font-medium">
          {String(currentSlide === 0 ? slides.length : currentSlide).padStart(2, '0')}
        </span>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
        aria-label="Next slide"
      >
        <span className="hidden md:inline text-sm font-medium">
          {String((currentSlide + 2) > slides.length ? 1 : currentSlide + 2).padStart(2, '0')}
        </span>
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Main content */}
      <div className="container relative z-20 h-full flex items-center pt-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
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
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
              >
                {language === 'fr' ? slide.title : slide.titleEn}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl"
              >
                {language === 'fr' ? slide.subtitle : slide.subtitleEn}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
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
                    {language === 'fr' ? 'Contacts' : 'Contact'}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="flex">
          <Link 
            to="/contact"
            className="flex-1 bg-[#1a4a7a] hover:bg-[#1a4a7a]/90 transition-colors py-6 px-8 flex items-center justify-center gap-4 group"
          >
            <span className="text-5xl md:text-7xl font-bold text-primary-foreground/10">01</span>
            <span className="text-primary-foreground font-semibold text-lg">
              {language === 'fr' ? "Demander un devis" : "Request a quote"}
            </span>
            <ArrowRight className="w-6 h-6 text-primary-foreground group-hover:translate-x-2 transition-transform" />
          </Link>
          <a 
            href="tel:+221775930196"
            className="flex-1 bg-accent hover:bg-accent/90 transition-colors py-6 px-8 flex items-center justify-center gap-4 group"
          >
            <span className="text-5xl md:text-7xl font-bold text-accent-foreground/20">02</span>
            <span className="text-accent-foreground font-semibold text-lg">
              {language === 'fr' ? "Ou appelez directement" : "Or call directly"}
            </span>
            <ArrowRight className="w-6 h-6 text-accent-foreground group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1 transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-accent' : 'w-6 bg-primary-foreground/30 hover:bg-primary-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 bg-accent origin-left"
              />
            )}
          </button>
        ))}
      </div>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/221775930196"
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
