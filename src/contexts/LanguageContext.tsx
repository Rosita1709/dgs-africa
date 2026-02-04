import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.solutions': 'Solutions',
    'nav.products': 'Produits',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.quote': 'Demander un devis',
    
    // Hero
    'hero.badge': 'Facility Management Expert',
    'hero.title': 'Des solutions industrielles, IT et énergétiques',
    'hero.titleAccent': 'fiables pour l\'Afrique',
    'hero.subtitle': 'DGS Africa accompagne les entreprises, industries et institutions dans la gestion, l\'exploitation et la maintenance de leurs infrastructures techniques avec des solutions personnalisées et innovantes.',
    'hero.cta': 'Demander un devis',
    'hero.response': 'Réponse sous 24-48h',
    'hero.delivery': 'Livraison Afrique',
    'hero.support': 'Support local',
    
    // Stats
    'stats.years': 'Années d\'expérience',
    'stats.clients': 'Clients satisfaits',
    'stats.projects': 'Projets réalisés',
    'stats.countries': 'Pays couverts',
    
    // Poles
    'poles.label': 'Nos Solutions',
    'poles.title': 'Trois pôles complémentaires',
    'poles.subtitle': 'Une approche globale qui permet à nos clients de bénéficier d\'un interlocuteur unique, d\'une meilleure maîtrise des coûts et d\'une performance durable.',
    'poles.learnMore': 'En savoir plus',
    
    'poles.industrial.title': 'Pôle Industriel',
    'poles.industrial.desc': 'Éclairage LED, froid & climatisation, courroies industrielles. Des solutions conçues pour offrir sécurité, durabilité et performance.',
    'poles.industrial.f1': 'Éclairage LED',
    'poles.industrial.f2': 'Chambres froides',
    'poles.industrial.f3': 'Courroies',
    
    'poles.it.title': 'Pôle IT',
    'poles.it.desc': 'Ordinateurs, serveurs, imprimantes, tablettes et accessoires. Nos équipements garantissent productivité et sécurité des données.',
    'poles.it.f1': 'Serveurs',
    'poles.it.f2': 'Ordinateurs',
    'poles.it.f3': 'Réseau',
    
    'poles.energy.title': 'Pôle Énergie',
    'poles.energy.desc': 'Solutions solaires et audit énergétique pour réduire vos coûts. Études, installation, maintenance et recommandations ROI.',
    'poles.energy.f1': 'Solaire',
    'poles.energy.f2': 'Audit',
    'poles.energy.f3': 'Maintenance',
    
    // About Preview
    'aboutPreview.label': 'À propos',
    'aboutPreview.title': 'Votre partenaire de référence en Afrique',
    'aboutPreview.p1': 'DGS Africa est une entreprise B2B spécialisée dans la fourniture et l\'intégration de solutions industrielles, informatiques et énergétiques en Afrique.',
    'aboutPreview.p2': 'Notre mission est d\'apporter des solutions fiables, conformes et adaptées aux réalités africaines, pour créer et maintenir des environnements de travail optimisés, sûrs et performants.',
    'aboutPreview.cta': 'Découvrir DGS Africa',
    
    // About Section (Homepage)
    'about.label': 'Qui sommes-nous',
    'about.title': 'Votre partenaire de référence en Afrique',
    'about.description': 'DGS Africa est une entreprise B2B spécialisée dans la fourniture et l\'intégration de solutions industrielles, informatiques et énergétiques en Afrique. Nous créons des environnements de travail optimisés, sûrs et performants.',
    'about.cta': 'En savoir plus',
    'about.values.reliability': 'Fiabilité',
    'about.values.conformity': 'Conformité',
    'about.values.transparency': 'Transparence',
    'about.values.engagement': 'Engagement',
    
    'values.reliability': 'Fiabilité',
    'values.reliability.desc': 'Solutions éprouvées et durables',
    'values.compliance': 'Conformité',
    'values.compliance.desc': 'Respect des normes internationales',
    'values.transparency': 'Transparence',
    'values.transparency.desc': 'Communication claire et honnête',
    'values.commitment': 'Engagement',
    'values.commitment.desc': 'Accompagnement de A à Z',
    
    // Partners
    'partners.title': 'Ils nous font confiance',
    
    // CTA Section
    'cta.label': 'Contactez-nous',
    'cta.title': 'Prêt à optimiser vos infrastructures ?',
    'cta.subtitle': 'Contactez-nous pour discuter de votre projet et découvrir comment DGS Africa peut vous accompagner dans la gestion de vos équipements industriels, IT et énergétiques.',
    'cta.button': 'Demander un devis',
    'cta.whatsapp': 'Discuter sur WhatsApp',
    
    // Footer
    'footer.description': 'Solutions industrielles, IT et énergétiques fiables pour l\'Afrique.',
    'footer.navigation': 'Navigation',
    'footer.poles': 'Nos Pôles',
    'footer.contact': 'Contact',
    'footer.industrial': 'Industriel',
    'footer.it': 'Technologies IT',
    'footer.energy': 'Énergie Solaire',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'footer.cookies': 'Cookies',
    
    // About Page
    'about.subtitle': 'Votre partenaire de confiance pour le Facility Management en Afrique',
    'about.intro': 'Dynamic Global Services (DGS) est une société spécialisée dans l\'accompagnement des entreprises et organisations pour le développement de leurs activités économiques.',
    'about.experience': '+15 années d\'expérience cumulée',
    'about.mission.label': 'Notre Mission',
    'about.mission.title': 'Créer des environnements performants',
    'about.mission.text': 'Apporter des solutions fiables, conformes et adaptées aux réalités africaines pour créer et maintenir des environnements de travail optimisés, sûrs et performants.',
    'about.vision.label': 'Notre Vision',
    'about.vision.title': 'Devenir la référence africaine',
    'about.vision.text': 'Devenir le partenaire de référence en Facility Management en Afrique, reconnu pour notre expertise, notre fiabilité et notre engagement envers l\'excellence.',
    'about.values.label': 'Nos Valeurs',
    'about.values.title': 'Ce qui nous définit',
    
    // Solutions Page
    'solutions.label': 'Nos Solutions',
    'solutions.title': 'Une expertise complète',
    'solutions.subtitle': 'DGS Africa structure son offre autour de trois pôles complémentaires pour répondre à tous vos besoins.',
    
    // Products Page
    'products.label': 'Produits',
    'products.title': 'Notre Catalogue',
    'products.subtitle': 'Catalogue vitrine présentant nos équipements industriels, IT et solaires. Demande de prix sur devis.',
    'products.coming': 'Catalogue en cours de mise à jour',
    'products.comingText': 'Notre catalogue de produits sera bientôt disponible en ligne. En attendant, n\'hésitez pas à nous contacter pour obtenir un devis personnalisé.',
    'products.cta': 'Demander un devis',
    
    // Projects Page
    'projects.label': 'Projets',
    'projects.title': 'Nos Réalisations',
    'projects.subtitle': 'Découvrez nos projets réalisés : Contexte, Solution et Résultats.',
    'projects.coming': 'Projets à venir',
    'projects.comingText': 'Les détails de nos réalisations seront bientôt disponibles. Contactez-nous pour discuter de votre projet.',
    'projects.cta': 'Discuter de votre projet',
    
    // Contact Page
    'contact.label': 'Nous contacter',
    'contact.title': 'Parlons de votre projet',
    'contact.subtitle': 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.',
    'contact.form.name': 'Nom complet',
    'contact.form.company': 'Entreprise',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.budget': 'Budget estimé',
    'contact.form.deadline': 'Délai souhaité',
    'contact.form.project': 'Décrivez votre projet',
    'contact.form.submit': 'Envoyer la demande',
    'contact.info.title': 'Informations de contact',
    'contact.info.response': 'Réponse sous 24-48h',
    
    // Common
    'common.senegal': 'Sénégal & Afrique',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.products': 'Products',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.quote': 'Request a quote',
    
    // Hero
    'hero.badge': 'Facility Management Expert',
    'hero.title': 'Industrial, IT and energy solutions',
    'hero.titleAccent': 'reliable for Africa',
    'hero.subtitle': 'DGS Africa supports companies, industries and institutions in managing, operating and maintaining their technical infrastructure with customized and innovative solutions.',
    'hero.cta': 'Request a quote',
    'hero.response': 'Response within 24-48h',
    'hero.delivery': 'Africa-wide delivery',
    'hero.support': 'Local support',
    
    // Stats
    'stats.years': 'Years of experience',
    'stats.clients': 'Satisfied clients',
    'stats.projects': 'Completed projects',
    'stats.countries': 'Countries covered',
    
    // Poles
    'poles.label': 'Our Solutions',
    'poles.title': 'Three complementary divisions',
    'poles.subtitle': 'A comprehensive approach that provides our clients with a single point of contact, better cost control, and sustainable performance.',
    'poles.learnMore': 'Learn more',
    
    'poles.industrial.title': 'Industrial Division',
    'poles.industrial.desc': 'LED lighting, refrigeration & air conditioning, industrial belts. Solutions designed to provide safety, durability and performance.',
    'poles.industrial.f1': 'LED Lighting',
    'poles.industrial.f2': 'Cold Rooms',
    'poles.industrial.f3': 'Belts',
    
    'poles.it.title': 'IT Division',
    'poles.it.desc': 'Computers, servers, printers, tablets and accessories. Our equipment ensures productivity and data security.',
    'poles.it.f1': 'Servers',
    'poles.it.f2': 'Computers',
    'poles.it.f3': 'Network',
    
    'poles.energy.title': 'Energy Division',
    'poles.energy.desc': 'Solar solutions and energy audits to reduce your costs. Studies, installation, maintenance and ROI recommendations.',
    'poles.energy.f1': 'Solar',
    'poles.energy.f2': 'Audit',
    'poles.energy.f3': 'Maintenance',
    
    // About Preview
    'aboutPreview.label': 'About us',
    'aboutPreview.title': 'Your reference partner in Africa',
    'aboutPreview.p1': 'DGS Africa is a B2B company specializing in the supply and integration of industrial, IT and energy solutions in Africa.',
    'aboutPreview.p2': 'Our mission is to provide reliable, compliant solutions adapted to African realities, to create and maintain optimized, safe and efficient work environments.',
    'aboutPreview.cta': 'Discover DGS Africa',
    
    'values.reliability': 'Reliability',
    'values.reliability.desc': 'Proven and sustainable solutions',
    'values.compliance': 'Compliance',
    'values.compliance.desc': 'Respect for international standards',
    'values.transparency': 'Transparency',
    'values.transparency.desc': 'Clear and honest communication',
    'values.commitment': 'Commitment',
    'values.commitment.desc': 'End-to-end support',
    
    // CTA Section
    'cta.title': 'Ready to optimize your infrastructure?',
    'cta.subtitle': 'Contact us to discuss your project and discover how DGS Africa can support you in managing your industrial, IT and energy equipment.',
    'cta.button': 'Request a quote',
    'cta.whatsapp': 'Chat on WhatsApp',
    
    // Footer
    'footer.description': 'Reliable industrial, IT and energy solutions for Africa.',
    'footer.navigation': 'Navigation',
    'footer.poles': 'Our Divisions',
    'footer.contact': 'Contact',
    'footer.industrial': 'Industrial',
    'footer.it': 'IT Technologies',
    'footer.energy': 'Solar Energy',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',
    
    // About Page
    'about.label': 'About us',
    'about.title': 'DGS Africa',
    'about.subtitle': 'Your trusted partner for Facility Management in Africa',
    'about.intro': 'Dynamic Global Services (DGS) is a company specializing in supporting businesses and organizations in developing their economic activities.',
    'about.experience': '+15 years of combined experience',
    'about.mission.label': 'Our Mission',
    'about.mission.title': 'Creating high-performance environments',
    'about.mission.text': 'Providing reliable, compliant solutions adapted to African realities to create and maintain optimized, safe and efficient work environments.',
    'about.vision.label': 'Our Vision',
    'about.vision.title': 'Becoming the African reference',
    'about.vision.text': 'To become the reference partner in Facility Management in Africa, recognized for our expertise, reliability and commitment to excellence.',
    'about.values.label': 'Our Values',
    'about.values.title': 'What defines us',
    
    // Solutions Page
    'solutions.label': 'Our Solutions',
    'solutions.title': 'Complete expertise',
    'solutions.subtitle': 'DGS Africa structures its offer around three complementary divisions to meet all your needs.',
    
    // Products Page
    'products.label': 'Products',
    'products.title': 'Our Catalog',
    'products.subtitle': 'Showcase catalog presenting our industrial, IT and solar equipment. Price on request.',
    'products.coming': 'Catalog being updated',
    'products.comingText': 'Our product catalog will be available online soon. In the meantime, please contact us for a personalized quote.',
    'products.cta': 'Request a quote',
    
    // Projects Page
    'projects.label': 'Projects',
    'projects.title': 'Our Achievements',
    'projects.subtitle': 'Discover our completed projects: Context, Solution and Results.',
    'projects.coming': 'Coming soon',
    'projects.comingText': 'Details of our achievements will be available soon. Contact us to discuss your project.',
    'projects.cta': 'Discuss your project',
    
    // Contact Page
    'contact.label': 'Contact us',
    'contact.title': 'Let\'s talk about your project',
    'contact.subtitle': 'Fill out the form below and we will get back to you as soon as possible.',
    'contact.form.name': 'Full name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.budget': 'Estimated budget',
    'contact.form.deadline': 'Desired timeline',
    'contact.form.project': 'Describe your project',
    'contact.form.submit': 'Send request',
    'contact.info.title': 'Contact information',
    'contact.info.response': 'Response within 24-48h',
    
    // Common
    'common.senegal': 'Senegal & Africa',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dgs-language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('dgs-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
