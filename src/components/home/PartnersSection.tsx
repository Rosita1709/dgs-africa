import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  { name: 'Universal RBM', logo: '/logos/universal-rbm.png', url: 'https://universal-rbm.com' },
  { name: 'Senben Lighting', logo: '/logos/senben.webp', url: 'https://www.senbenlighting.com' },
  { name: 'Airchal', logo: null, text: 'Airchal', textClass: 'text-pink-600 font-black italic', url: 'https://airchal.com' },
  { name: 'Blackview', logo: '/logos/blackview.webp', url: 'https://www.blackview.hk' },
  { name: 'Dell Technologies', logo: '/logos/dell.png', url: 'https://www.dell.com' },
];

const clients = [
  { name: 'LASPAD', logo: null, text: 'LASPAD', url: 'https://laspad.org' },
  { name: 'Ministère des Finances du Sénégal', logo: null, text: 'Min. Finances', url: 'https://www.finances.gouv.sn' },
  { name: 'Ministère de la Diplomatie', logo: null, text: 'Min. Diplomatie', url: 'https://www.diplomatie.gouv.sn' },
  { name: 'Ambassade du Sénégal aux EAU', logo: null, text: 'Amb. Sénégal EAU', url: 'https://ae-senegalembassy.com' },
];

const PartnersSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container space-y-14">
        {/* Partners */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider"
          >
            {language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap"
          >
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center w-32 h-16 md:w-40 md:h-20 bg-card rounded-lg shadow-soft border border-border/30 hover:border-accent/30 hover:shadow-card transition-all duration-300 cursor-pointer px-4"
                title={partner.name}
              >
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-10 md:max-h-12 w-auto object-contain"
                  />
                ) : (
                  <span className={`text-lg md:text-xl font-bold transition-colors ${(partner as any).textClass || 'text-foreground/60 hover:text-accent'}`}>
                    {(partner as any).text}
                  </span>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Clients */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider"
          >
            {language === 'fr' ? 'Ils nous font confiance' : 'They trust us'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6 md:gap-10 lg:gap-14 flex-wrap"
          >
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center w-36 h-16 md:w-44 md:h-20 bg-card rounded-lg shadow-soft border border-border/30 hover:border-accent/30 hover:shadow-card transition-all duration-300 cursor-pointer px-4"
                title={client.name}
              >
                <span className="text-xs md:text-sm font-semibold text-foreground/50 hover:text-accent transition-colors text-center leading-tight">
                  {client.text}
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
