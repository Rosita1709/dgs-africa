import { Link } from "react-router-dom";
import { Zap, Monitor, Sun, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import industrialPole from "@/assets/industrial-pole.jpg";
import itPole from "@/assets/it-pole.jpg";
import energyPole from "@/assets/energy-pole.jpg";

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
      image: industrialPole,
    },
    {
      icon: Monitor,
      title: t('poles.it.title'),
      description: t('poles.it.desc'),
      features: [t('poles.it.f1'), t('poles.it.f2'), t('poles.it.f3')],
      href: "/solutions#it",
      gradient: "from-accent to-orange-600",
      image: itPole,
    },
    {
      icon: Sun,
      title: t('poles.energy.title'),
      description: t('poles.energy.desc'),
      features: [t('poles.energy.f1'), t('poles.energy.f2'), t('poles.energy.f3')],
      href: "/solutions#energie",
      gradient: "from-green-500 to-green-700",
      image: energyPole,
    },
  ];

  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
          >
            {t('poles.label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t('poles.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {t('poles.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {poles.map((pole, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 border border-border/50"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={pole.image}
                  alt={pole.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent`} />
                
                {/* Icon overlay */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${pole.gradient} flex items-center justify-center shadow-lg`}
                >
                  <pole.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {pole.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {pole.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pole.features.map((feature, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-foreground/70 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                    >
                      {feature}
                    </motion.span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolesSection;
