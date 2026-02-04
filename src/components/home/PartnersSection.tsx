import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: 'Schneider Electric', initials: 'SE' },
  { name: 'Siemens', initials: 'SI' },
  { name: 'ABB', initials: 'ABB' },
  { name: 'Legrand', initials: 'LG' },
  { name: 'HP', initials: 'HP' },
  { name: 'Dell', initials: 'DL' },
];

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider"
        >
          {t('partners.title')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center w-28 h-14 md:w-36 md:h-16 bg-card rounded-lg shadow-soft border border-border/30 hover:border-accent/30 hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <span className="text-xl md:text-2xl font-bold text-foreground/40 hover:text-accent transition-colors">
                {partner.initials}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
