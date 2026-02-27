import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: 'Universal RBM', logo: '/logos/universal-rbm.png', url: 'https://universal-rbm.com' },
  { name: 'Senben Lighting', logo: '/logos/senben.webp', url: 'https://www.senbenlighting.com' },
  { name: 'Airchal', logo: null, text: 'AIRCHAL', url: 'https://airchal.com' },
  { name: 'Blackview', logo: '/logos/blackview.webp', url: 'https://www.blackview.hk' },
  { name: 'Dell Technologies', logo: '/logos/dell.png', url: 'https://www.dell.com' },
];

const clients = [
  { name: 'LASPAD', text: 'LASPAD', url: 'https://laspad.org' },
  { name: 'Ministère des Finances et du Budget', text: 'MFB', subtitle: 'Min. Finances', url: 'https://www.finances.gouv.sn' },
  { name: 'Ministère de l\'Intégration Africaine et des Affaires Étrangères', text: 'MIAAE', subtitle: 'Min. Affaires Étrangères', url: 'https://www.diplomatie.gouv.sn' },
  { name: 'Ambassade du Sénégal aux EAU', text: '🇸🇳', subtitle: 'Amb. Sénégal EAU', url: 'https://ae-senegalembassy.com' },
];

const PartnersSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-muted/20 overflow-hidden">
      <div className="container space-y-16">
        {/* Partners */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
            </span>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6 md:gap-10 flex-wrap"
          >
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-12 md:h-14 px-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                title={partner.name}
              >
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-8 md:max-h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="text-lg md:text-xl font-black text-foreground/50 hover:text-accent transition-colors tracking-tight">
                    {partner.text}
                  </span>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Clients */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-muted-foreground font-semibold text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Ils nous font confiance' : 'They trust us'}
            </span>
            <div className="w-12 h-0.5 bg-border mx-auto mt-3" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-8 md:gap-12 flex-wrap"
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center gap-1 group"
                title={client.name}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card border-2 border-border/50 group-hover:border-accent/50 flex items-center justify-center shadow-soft transition-all duration-300">
                  <span className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {client.text}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground font-medium text-center max-w-[100px] leading-tight mt-1">
                  {client.subtitle || client.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
