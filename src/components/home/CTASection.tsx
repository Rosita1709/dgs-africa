import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-premium" />
      <div className="absolute inset-0 bg-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            {t('cta.label')}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            {t('cta.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('cta.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="accent" size="xl" asChild className="group shadow-accent">
              <Link to="/contact">
                {t('cta.button')}
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
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70"
          >
            <a 
              href="mailto:contact@dgsafrica.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </span>
              contact@dgsafrica.com
            </a>
            <a 
              href="tel:+221775930196" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              +221 77 593 01 96
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
