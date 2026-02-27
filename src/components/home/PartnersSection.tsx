import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";
import { Building2, Landmark, Globe2, Shield } from "lucide-react";

const partners = [
  { name: 'Universal RBM', logo: '/logos/universal-rbm.png', url: 'https://universal-rbm.com' },
  { name: 'Senben Lighting', logo: '/logos/senben.webp', url: 'https://www.senbenlighting.com' },
  { name: 'Airchal', logo: null, text: 'AIRCHAL', url: 'https://airchal.com' },
  { name: 'Blackview', logo: '/logos/blackview.webp', url: 'https://www.blackview.hk' },
  { name: 'Dell Technologies', logo: '/logos/dell.png', url: 'https://www.dell.com' },
];

const clients = [
  { 
    name: 'LASPAD', 
    abbrev: 'LASPAD',
    logo: '/logos/laspad.png',
    icon: Building2,
    colors: { bg: 'from-emerald-600 to-emerald-800', text: 'text-white' },
    url: 'https://laspad.org' 
  },
  { 
    name: 'Ministère des Finances et du Budget', 
    abbrev: 'MFB',
    subtitle: 'Min. Finances & Budget',
    logo: '/logos/mfb.png',
    icon: Landmark,
    colors: { bg: 'from-blue-700 to-blue-900', text: 'text-white' },
    url: 'https://www.finances.gouv.sn' 
  },
  { 
    name: "Ministère de l'Intégration Africaine",
    abbrev: 'MIAAE',
    subtitle: "Min. Affaires Étrangères",
    icon: Globe2,
    colors: { bg: 'from-red-700 to-red-900', text: 'text-white' },
    url: 'https://www.diplomatie.gouv.sn' 
  },
  { 
    name: 'Ambassade du Sénégal aux EAU',
    abbrev: '🇸🇳',
    subtitle: 'Ambassade Sénégal EAU',
    logo: '/logos/ambassade-senegal.png',
    icon: Shield,
    colors: { bg: 'from-green-600 via-yellow-500 to-red-600', text: 'text-white' },
    url: 'https://ae-senegalembassy.com' 
  },
];

const PartnersSection = () => {
  const { language } = useLanguage();
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container space-y-20">
        {/* Partners */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gradient">{language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}</span>
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>
          
          {/* Infinite marquee */}
          <div className="relative overflow-hidden py-6">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-marquee gap-16 items-center" ref={marqueeRef}>
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-16 px-6 shrink-0 hover:scale-110 transition-transform duration-300 group"
                  title={partner.name}
                >
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-10 w-auto object-contain group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  ) : (
                    <span className="text-2xl font-black text-foreground group-hover:text-accent transition-colors tracking-tight whitespace-nowrap">
                      {partner.text}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Clients / Trust Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {language === 'fr' ? 'Ils nous font confiance' : 'They trust us'}
            </h2>
            <div className="w-16 h-1 bg-border mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex flex-col items-center gap-4"
                title={client.name}
              >
                {/* Professional emblem card */}
                <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl ${client.logo ? 'bg-white' : `bg-gradient-to-br ${client.colors.bg}`} flex flex-col items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="w-20 md:w-24 h-auto object-contain" />
                  ) : (
                    <>
                      {/* Decorative ring */}
                      <div className="absolute inset-2 rounded-xl border-2 border-white/20" />
                      <client.icon className="w-6 h-6 text-white/80 mb-1" />
                      <span className={`text-base md:text-lg font-black ${client.colors.text} relative z-10 leading-tight`}>
                        {client.abbrev}
                      </span>
                    </>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-xs md:text-sm text-muted-foreground font-semibold leading-tight block max-w-[120px]">
                    {client.subtitle || client.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
