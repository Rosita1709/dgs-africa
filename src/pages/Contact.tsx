import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Contact = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: language === 'fr' ? "Message envoyé !" : "Message sent!",
        description: language === 'fr' ? "Nous vous répondrons sous 24-48h." : "We'll respond within 24-48h.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@dgsafrica.com",
      href: "mailto:contact@dgsafrica.com",
      color: "bg-blue-500/10 text-blue-500",
      hoverColor: "hover:border-blue-300",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+221 77 593 01 96",
      href: "https://api.whatsapp.com/send?phone=221775930196",
      color: "bg-green-500/10 text-green-500",
      hoverColor: "hover:border-green-300",
    },
    {
      icon: MapPin,
      title: language === 'fr' ? "Zone d'intervention" : "Coverage Area",
      value: t('common.senegal'),
      href: null,
      color: "bg-accent/10 text-accent",
      hoverColor: "hover:border-accent/30",
    },
    {
      icon: Clock,
      title: language === 'fr' ? "Temps de réponse" : "Response Time",
      value: t('contact.info.response'),
      href: null,
      color: "bg-purple-500/10 text-purple-500",
      hoverColor: "hover:border-purple-300",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15, x: '3%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-full h-full bg-hero-premium" />
        </motion.div>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 bg-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-4 h-4" />
              {t('contact.label')}
            </motion.span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {contactCards.map((card, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block bg-card p-5 rounded-2xl border border-border/50 ${card.hoverColor} hover:shadow-premium transition-all duration-500 group`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <p className="font-heading font-bold text-sm">{card.title}</p>
                    <p className="text-muted-foreground text-xs mt-1">{card.value}</p>
                  </a>
                ) : (
                  <div className={`bg-card p-5 rounded-2xl border border-border/50 ${card.hoverColor} transition-all`}>
                    <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-3`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <p className="font-heading font-bold text-sm">{card.title}</p>
                    <p className="text-muted-foreground text-xs mt-1">{card.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left side — CTA & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  {language === 'fr' ? "Parlons de votre projet" : "Let's discuss your project"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {language === 'fr'
                    ? "Que vous ayez besoin d'équipements industriels, de solutions IT ou d'énergie solaire, notre équipe est prête à vous accompagner."
                    : "Whether you need industrial equipment, IT solutions, or solar energy, our team is ready to support you."}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold">
                      {language === 'fr' ? 'Réponse rapide' : 'Quick Response'}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {language === 'fr' ? 'Via WhatsApp' : 'Via WhatsApp'}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {language === 'fr'
                    ? "Besoin d'une réponse immédiate ? Contactez-nous directement sur WhatsApp."
                    : "Need an immediate response? Contact us directly on WhatsApp."}
                </p>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a href="https://api.whatsapp.com/send?phone=221775930196" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    {t('cta.whatsapp')}
                  </a>
                </Button>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl" />
                <div className="p-6 rounded-2xl border border-border/30">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm mb-1">
                        {language === 'fr' ? 'Devis gratuit en 24h' : 'Free quote within 24h'}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {language === 'fr'
                          ? "Remplissez le formulaire ci-contre et recevez un devis personnalisé dans les plus brefs délais."
                          : "Fill out the form and receive a personalized quote as soon as possible."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-premium border border-border/50 relative overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-accent" />
                
                <h2 className="font-heading text-2xl font-bold mb-2">{t('nav.quote')}</h2>
                <p className="text-muted-foreground mb-8">{t('contact.subtitle')}</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">{t('contact.form.name')} *</Label>
                      <Input id="name" name="name" required className="h-12 rounded-xl border-border/50 focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-semibold">{t('contact.form.company')}</Label>
                      <Input id="company" name="company" className="h-12 rounded-xl border-border/50 focus:border-accent" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">{t('contact.form.email')} *</Label>
                      <Input id="email" name="email" type="email" required className="h-12 rounded-xl border-border/50 focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">{t('contact.form.phone')}</Label>
                      <Input id="phone" name="phone" type="tel" className="h-12 rounded-xl border-border/50 focus:border-accent" placeholder="+221 XX XXX XX XX" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-semibold">{t('contact.form.budget')}</Label>
                      <Input id="budget" name="budget" className="h-12 rounded-xl border-border/50 focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline" className="text-sm font-semibold">{t('contact.form.deadline')}</Label>
                      <Input id="deadline" name="deadline" className="h-12 rounded-xl border-border/50 focus:border-accent" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-sm font-semibold">{t('contact.form.project')} *</Label>
                    <Textarea 
                      id="project" 
                      name="project" 
                      required 
                      rows={5}
                      className="resize-none rounded-xl border-border/50 focus:border-accent"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full md:w-auto shadow-accent group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        {language === 'fr' ? 'Envoi...' : 'Sending...'}
                      </span>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
