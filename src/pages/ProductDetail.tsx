import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";

interface ProductData {
  slug: string;
  titleFr: string;
  titleEn: string;
  image: string;
  galleryImages?: string[];
  color: string;
  servicePath: string;
  partnerName?: string;
  partnerUrl?: string;
  descriptionFr: string;
  descriptionEn: string;
  detailsFr: string[];
  detailsEn: string[];
  productsFr: { name: string; description: string; image?: string }[];
  productsEn: { name: string; description: string; image?: string }[];
}

const productsData: ProductData[] = [
  {
    slug: "eclairage-led",
    titleFr: "Éclairage LED Industriel",
    titleEn: "Industrial LED Lighting",
    image: "/products/led-weatherproof.webp",
    color: "blue",
    servicePath: "/services/industriel",
    descriptionFr: "DGS est votre partenaire de confiance pour l'éclairage LED industriel en Afrique de l'Ouest. Nous fournissons des solutions d'éclairage haute performance, certifiées pour les environnements les plus exigeants : zones ATEX, sites industriels, entrepôts, raffineries et installations portuaires.",
    descriptionEn: "DGS is your trusted partner for industrial LED lighting in West Africa. We provide high-performance lighting solutions, certified for the most demanding environments: ATEX zones, industrial sites, warehouses, refineries, and port facilities.",
    detailsFr: [
      "Certification ATEX pour zones explosives",
      "Protection IP65+ contre poussière et eau",
      "Durée de vie supérieure à 50 000 heures",
      "Réduction de consommation jusqu'à 70%",
      "Installation et maintenance assurées",
      "Partenaire officiel Senben Lighting",
    ],
    detailsEn: [
      "ATEX certification for explosive zones",
      "IP65+ protection against dust and water",
      "Lifespan exceeding 50,000 hours",
      "Energy savings up to 70%",
      "Installation and maintenance included",
      "Official Senben Lighting partner",
    ],
    productsFr: [
      { name: "Luminaires Explosion Proof (ATEX)", description: "Conçus pour les zones à risque d'explosion, certifiés selon les normes internationales ATEX/IECEx." },
      { name: "Luminaires Weatherproof IP65+", description: "Résistants aux intempéries, idéaux pour les environnements extérieurs et humides." },
      { name: "Haute Baie (High Bay)", description: "Éclairage puissant pour entrepôts, usines et grands espaces industriels avec hauteur sous plafond importante." },
      { name: "Projecteurs LED (Floodlights)", description: "Éclairage extérieur longue portée pour chantiers, parkings et périmètres de sécurité." },
    ],
    productsEn: [
      { name: "Explosion Proof Luminaires (ATEX)", description: "Designed for hazardous zones, certified to international ATEX/IECEx standards." },
      { name: "Weatherproof Luminaires IP65+", description: "Weather-resistant, ideal for outdoor and humid environments." },
      { name: "High Bay Lights", description: "Powerful lighting for warehouses, factories, and large industrial spaces with high ceilings." },
      { name: "LED Floodlights", description: "Long-range outdoor lighting for construction sites, parking lots, and security perimeters." },
    ],
  },
  {
    slug: "climatisation",
    titleFr: "Froid & Climatisation — Airchal",
    titleEn: "Cooling & HVAC — Airchal",
    image: "/products/airchal-ahu-detail.jpg",
    galleryImages: [
      "/products/airchal-ahu-detail.jpg",
      "/products/airchal-fancoil-detail.jpg",
      "/products/airchal-fans.jpg",
      "/products/airchal-energy.jpg",
    ],
    color: "blue",
    servicePath: "/services/industriel",
    partnerName: "Airchal",
    partnerUrl: "https://airchal.com",
    descriptionFr: "DGS est le partenaire officiel d'Airchal en Afrique de l'Ouest. Airchal est l'un des leaders mondiaux du traitement d'air, présent en France, Allemagne, Benelux, Hong-Kong, Maroc, Qatar et Émirats Arabes Unis. Leur gamme CC Clean Concept, conçue avec la simplicité à l'esprit, offre des solutions sur mesure pour les environnements les plus exigeants : industrie pétrolière, agroalimentaire, pharmaceutique, data centers et bâtiments tertiaires.",
    descriptionEn: "DGS is the official Airchal partner in West Africa. Airchal is one of the world's leading air handling companies, present in France, Germany, Benelux, Hong Kong, Morocco, Qatar, and the UAE. Their CC Clean Concept range, designed with simplicity in mind, offers custom solutions for the most demanding environments: oil & gas, food processing, pharmaceutical, data centers, and commercial buildings.",
    detailsFr: [
      "Partenaire officiel Airchal pour l'Afrique de l'Ouest",
      "Centrales de traitement d'air jusqu'à 450 000 m³/h",
      "Gamme CC Clean Concept — conception simplifiée et haute performance",
      "Série POLCC en polyester pour environnements jusqu'à -35°C",
      "Fan Coils standard et sur mesure",
      "Ventilateurs industriels haute performance",
      "Solutions spéciales pour plateformes pétrolières et environnements offshore",
      "Systèmes de contrôle et d'automatisation intégrés",
      "Installation, mise en service et maintenance complète",
    ],
    detailsEn: [
      "Official Airchal partner for West Africa",
      "Air handling units up to 450,000 m³/h capacity",
      "CC Clean Concept range — simplified design, high performance",
      "POLCC polyester series for environments down to -35°C",
      "Standard and purpose-built fan coils",
      "High-performance industrial fans",
      "Special solutions for oil platforms and offshore environments",
      "Integrated control and automation systems",
      "Complete installation, commissioning, and maintenance",
    ],
    productsFr: [
      { name: "Centrales de Traitement d'Air CC Clean Concept", description: "La gamme phare d'Airchal : des CTA modulaires jusqu'à 450 000 m³/h, conçues pour la simplicité d'installation et de maintenance. Filtration, chauffage, refroidissement et récupération d'énergie intégrés.", image: "/products/airchal-ahu-detail.jpg" },
      { name: "CTA POLCC — Série Polyester", description: "Centrales en polyester spécialement conçues pour les environnements extrêmes et les températures négatives jusqu'à -35°C. Idéales pour l'agroalimentaire et les chambres froides.", image: "/products/airchal-fancoil-detail.jpg" },
      { name: "Fan Coils (Ventilo-convecteurs)", description: "Unités terminales standard et sur mesure pour le chauffage et le refroidissement localisé. Solutions silencieuses et performantes pour bureaux, hôtels et bâtiments commerciaux.", image: "/products/airchal-fans.jpg" },
      { name: "Ventilateurs Industriels", description: "Ventilateurs haute performance pour applications industrielles exigeantes : extraction, ventilation, surpression et environnements ATEX.", image: "/products/airchal-fans.jpg" },
      { name: "Solutions Oil & Gas", description: "Systèmes de traitement d'air spécialisés pour plateformes pétrolières, raffineries et installations offshore, conformes aux normes les plus strictes.", image: "/products/airchal-energy.jpg" },
      { name: "Contrôle & Automatisation", description: "Armoires de contrôle et systèmes d'automatisation intégrés pour piloter et optimiser vos installations de traitement d'air.", image: "/products/airchal-ahu-detail.jpg" },
    ],
    productsEn: [
      { name: "CC Clean Concept Air Handling Units", description: "Airchal's flagship range: modular AHUs up to 450,000 m³/h, designed for easy installation and maintenance. Integrated filtration, heating, cooling, and energy recovery.", image: "/products/airchal-ahu-detail.jpg" },
      { name: "POLCC Polyester Series", description: "Polyester air handling units specially designed for extreme environments and temperatures down to -35°C. Ideal for food processing and cold rooms.", image: "/products/airchal-fancoil-detail.jpg" },
      { name: "Fan Coils", description: "Standard and purpose-built terminal units for localized heating and cooling. Quiet and efficient solutions for offices, hotels, and commercial buildings.", image: "/products/airchal-fans.jpg" },
      { name: "Industrial Fans", description: "High-performance fans for demanding industrial applications: extraction, ventilation, pressurization, and ATEX environments.", image: "/products/airchal-fans.jpg" },
      { name: "Oil & Gas Solutions", description: "Specialized air handling systems for oil platforms, refineries, and offshore installations, compliant with the strictest standards.", image: "/products/airchal-energy.jpg" },
      { name: "Control & Automation", description: "Control cabinets and integrated automation systems to manage and optimize your air handling installations.", image: "/products/airchal-ahu-detail.jpg" },
    ],
  },
  {
    slug: "courroies",
    titleFr: "Courroies Industrielles",
    titleEn: "Industrial Belts",
    image: "/products/belts-poly-v.jpg",
    color: "blue",
    servicePath: "/services/industriel",
    descriptionFr: "En tant que distributeur officiel Universal RBM, DGS fournit une gamme complète de courroies industrielles pour tous types d'applications : industries, agriculture, automobile et équipements lourds. Nos produits garantissent fiabilité et performance.",
    descriptionEn: "As an official Universal RBM distributor, DGS supplies a complete range of industrial belts for all applications: industries, agriculture, automotive, and heavy equipment. Our products guarantee reliability and performance.",
    detailsFr: [
      "Distributeur officiel Universal RBM",
      "Stock permanent des références courantes",
      "Conseil technique personnalisé",
      "Livraison rapide sur tout le Sénégal",
      "Solutions pour tous secteurs industriels",
      "Rapport qualité-prix optimal",
    ],
    detailsEn: [
      "Official Universal RBM distributor",
      "Permanent stock of common references",
      "Personalized technical advice",
      "Fast delivery across Senegal",
      "Solutions for all industrial sectors",
      "Optimal value for money",
    ],
    productsFr: [
      { name: "Courroies Poly-V", description: "Courroies à nervures multiples pour une transmission de puissance efficace et silencieuse." },
      { name: "Courroies de Distribution (Timing)", description: "Courroies crantées pour synchronisation précise des moteurs et machines." },
      { name: "Courroies Trapézoïdales (V-Belts)", description: "Courroies classiques en V pour applications industrielles standard." },
      { name: "Courroies Automobile", description: "Courroies de distribution et d'accessoires pour véhicules légers et poids lourds." },
    ],
    productsEn: [
      { name: "Poly-V Belts", description: "Multi-ribbed belts for efficient and quiet power transmission." },
      { name: "Timing Belts", description: "Toothed belts for precise motor and machine synchronization." },
      { name: "V-Belts", description: "Classic V-shaped belts for standard industrial applications." },
      { name: "Automotive Belts", description: "Timing and accessory belts for light and heavy vehicles." },
    ],
  },
  {
    slug: "ordinateurs",
    titleFr: "Ordinateurs",
    titleEn: "Computers",
    image: "/products/laptop-generic.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS équipe les entreprises et institutions en solutions informatiques de premier plan. Nous distribuons les marques Dell, Lenovo et Blackview, offrant des ordinateurs portables et de bureau adaptés à tous les usages professionnels, du bureau classique au terrain le plus exigeant.",
    descriptionEn: "DGS equips businesses and institutions with top-tier computing solutions. We distribute Dell, Lenovo, and Blackview brands, offering laptops and desktops suited for all professional needs, from office work to the most demanding field conditions.",
    detailsFr: [
      "Partenaire Dell, Lenovo et Blackview",
      "Gammes professionnelles certifiées",
      "Configuration sur mesure possible",
      "Garantie constructeur étendue",
      "Support technique et SAV",
      "Solutions pour entreprises et institutions",
    ],
    detailsEn: [
      "Dell, Lenovo, and Blackview partner",
      "Certified professional ranges",
      "Custom configuration available",
      "Extended manufacturer warranty",
      "Technical support and after-sales service",
      "Solutions for businesses and institutions",
    ],
    productsFr: [
      { name: "Dell Latitude", description: "Ordinateurs portables professionnels robustes, sécurisés et performants pour les entreprises." },
      { name: "Lenovo ThinkPad", description: "La référence en portables professionnels, reconnus pour leur fiabilité et leur clavier exceptionnel." },
      { name: "Portables & Fixes", description: "Large choix de configurations desktop et laptop pour tous les budgets et usages." },
      { name: "Blackview Rugged", description: "Ordinateurs et tablettes ultra-résistants pour les environnements terrain et industriels." },
    ],
    productsEn: [
      { name: "Dell Latitude", description: "Robust, secure, and high-performance professional laptops for businesses." },
      { name: "Lenovo ThinkPad", description: "The benchmark in professional laptops, known for reliability and exceptional keyboards." },
      { name: "Laptops & Desktops", description: "Wide range of desktop and laptop configurations for all budgets and uses." },
      { name: "Blackview Rugged", description: "Ultra-resistant computers and tablets for field and industrial environments." },
    ],
  },
  {
    slug: "tablettes",
    titleFr: "Tablettes Blackview",
    titleEn: "Blackview Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS est distributeur officiel des tablettes Blackview, conçues pour résister aux conditions les plus difficiles. Certifiées IP68/IP69K, ces tablettes sont idéales pour le terrain, les chantiers et les environnements industriels.",
    descriptionEn: "DGS is an official distributor of Blackview tablets, designed to withstand the toughest conditions. IP68/IP69K certified, these tablets are ideal for fieldwork, construction sites, and industrial environments.",
    detailsFr: [
      "Certification IP68/IP69K",
      "Écrans renforcés anti-chocs",
      "Batteries longue durée",
      "Connectivité 4G/5G",
      "Distributeur officiel Blackview",
      "Idéal pour usage terrain",
    ],
    detailsEn: [
      "IP68/IP69K certification",
      "Shockproof reinforced screens",
      "Long-lasting batteries",
      "4G/5G connectivity",
      "Official Blackview distributor",
      "Ideal for field use",
    ],
    productsFr: [
      { name: "Blackview Tab 18", description: "Tablette grand écran haute performance pour productivité terrain et bureautique mobile." },
      { name: "Blackview Tab 16 Pro", description: "Tablette polyvalente avec écran haute résolution et autonomie exceptionnelle." },
      { name: "Tablettes IP68/IP69K", description: "Gamme de tablettes résistantes à l'eau, la poussière et les chocs pour environnements extrêmes." },
      { name: "Accessoires Blackview", description: "Coques renforcées, stations d'accueil et accessoires pour tablettes Blackview." },
    ],
    productsEn: [
      { name: "Blackview Tab 18", description: "Large-screen high-performance tablet for field productivity and mobile office." },
      { name: "Blackview Tab 16 Pro", description: "Versatile tablet with high-resolution screen and exceptional battery life." },
      { name: "IP68/IP69K Tablets", description: "Range of water, dust, and shock-resistant tablets for extreme environments." },
      { name: "Blackview Accessories", description: "Reinforced cases, docking stations, and accessories for Blackview tablets." },
    ],
  },
  {
    slug: "serveurs",
    titleFr: "Serveurs & Réseau",
    titleEn: "Servers & Network",
    image: "/products/dell-server.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS déploie des infrastructures serveur et réseau robustes pour les entreprises et institutions. En tant que partenaire Dell, nous proposons des serveurs PowerEdge, des solutions de stockage NAS et des équipements réseau professionnels.",
    descriptionEn: "DGS deploys robust server and network infrastructures for businesses and institutions. As a Dell partner, we offer PowerEdge servers, NAS storage solutions, and professional network equipment.",
    detailsFr: [
      "Partenaire officiel Dell Technologies",
      "Dimensionnement et conseil d'architecture",
      "Installation et configuration complète",
      "Contrats de maintenance et support",
      "Solutions de virtualisation",
      "Sécurité réseau intégrée",
    ],
    detailsEn: [
      "Official Dell Technologies partner",
      "Sizing and architecture consulting",
      "Complete installation and configuration",
      "Maintenance and support contracts",
      "Virtualization solutions",
      "Integrated network security",
    ],
    productsFr: [
      { name: "Dell PowerEdge", description: "Serveurs rack et tour haute performance pour data centers et salles serveurs d'entreprise." },
      { name: "Solutions Rack", description: "Baies de brassage, PDU et accessoires pour infrastructure serveur professionnelle." },
      { name: "Stockage NAS", description: "Solutions de stockage réseau pour la sauvegarde, le partage et l'archivage de données." },
      { name: "Switches & Réseau", description: "Commutateurs réseau, points d'accès WiFi et équipements de connectivité." },
    ],
    productsEn: [
      { name: "Dell PowerEdge", description: "High-performance rack and tower servers for data centers and enterprise server rooms." },
      { name: "Rack Solutions", description: "Patch panels, PDUs, and accessories for professional server infrastructure." },
      { name: "NAS Storage", description: "Network storage solutions for data backup, sharing, and archiving." },
      { name: "Switches & Networking", description: "Network switches, WiFi access points, and connectivity equipment." },
    ],
  },
  {
    slug: "imprimantes",
    titleFr: "Imprimantes",
    titleEn: "Printers",
    image: "/products/printer.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS distribue les imprimantes HP pour les professionnels. Des imprimantes laser aux jets d'encre, en passant par les multifonctions et les grands formats, nous proposons des solutions d'impression adaptées à chaque besoin.",
    descriptionEn: "DGS distributes HP printers for professionals. From laser to inkjet, multifunction to large format, we offer printing solutions tailored to every need.",
    detailsFr: [
      "Fournisseur officiel HP",
      "Gamme complète laser et jet d'encre",
      "Formats A3 et A4",
      "Solutions d'impression managées",
      "Fourniture de consommables",
      "Service après-vente et maintenance",
    ],
    detailsEn: [
      "Official HP supplier",
      "Complete laser and inkjet range",
      "A3 and A4 formats",
      "Managed print solutions",
      "Consumables supply",
      "After-sales service and maintenance",
    ],
    productsFr: [
      { name: "Imprimantes Laser HP", description: "Impression rapide et précise pour volumes importants, idéale pour les bureaux." },
      { name: "Imprimantes Jet d'Encre HP", description: "Impression couleur haute qualité pour documents et photos professionnelles." },
      { name: "Multifonctions HP", description: "Impression, scan, copie et fax en un seul appareil compact et performant." },
      { name: "Grand Format A3", description: "Imprimantes A3 pour plans, affiches et documents grand format." },
    ],
    productsEn: [
      { name: "HP Laser Printers", description: "Fast and precise printing for high volumes, ideal for offices." },
      { name: "HP Inkjet Printers", description: "High-quality color printing for documents and professional photos." },
      { name: "HP Multifunction Printers", description: "Print, scan, copy, and fax in one compact and powerful device." },
      { name: "A3 Large Format", description: "A3 printers for plans, posters, and large format documents." },
    ],
  },
  {
    slug: "cles-usb",
    titleFr: "Clés USB & Stockage",
    titleEn: "USB Drives & Storage",
    image: "/products/laptop-generic.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS propose une gamme complète de solutions de stockage portable : clés USB, disques durs externes et cartes mémoire. Des accessoires indispensables pour les professionnels et les entreprises.",
    descriptionEn: "DGS offers a complete range of portable storage solutions: USB drives, external hard drives, and memory cards. Essential accessories for professionals and businesses.",
    detailsFr: [
      "Clés USB haute vitesse USB 3.0 et USB-C",
      "Capacités de 16 Go à 256 Go",
      "Disques durs externes portables",
      "Cartes mémoire SD et microSD",
      "Solutions de stockage sécurisé",
      "Prix compétitifs pour volumes",
    ],
    detailsEn: [
      "High-speed USB 3.0 and USB-C drives",
      "Capacities from 16 GB to 256 GB",
      "Portable external hard drives",
      "SD and microSD memory cards",
      "Secure storage solutions",
      "Competitive pricing for volumes",
    ],
    productsFr: [
      { name: "Clés USB 3.0", description: "Transfert de données ultra-rapide avec interface USB 3.0, disponibles en plusieurs capacités." },
      { name: "Clés USB-C", description: "Compatibles avec les derniers appareils USB Type-C, idéales pour les nouveaux laptops." },
      { name: "Disques Durs Externes", description: "Stockage portable haute capacité pour sauvegarde et transport de données volumineuses." },
      { name: "Cartes Mémoire", description: "Cartes SD et microSD pour appareils photo, caméras et appareils mobiles." },
    ],
    productsEn: [
      { name: "USB 3.0 Drives", description: "Ultra-fast data transfer with USB 3.0 interface, available in multiple capacities." },
      { name: "USB-C Drives", description: "Compatible with the latest USB Type-C devices, ideal for new laptops." },
      { name: "External Hard Drives", description: "High-capacity portable storage for backup and transport of large data." },
      { name: "Memory Cards", description: "SD and microSD cards for cameras, camcorders, and mobile devices." },
    ],
  },
  {
    slug: "ecouteurs",
    titleFr: "Écouteurs & Audio",
    titleEn: "Headphones & Audio",
    image: "/products/laptop-generic.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS fournit des accessoires audio professionnels : écouteurs filaires, casques Bluetooth, kits mains libres et solutions audio pour les entreprises. Des produits fiables pour la communication et la productivité.",
    descriptionEn: "DGS provides professional audio accessories: wired earphones, Bluetooth headsets, hands-free kits, and audio solutions for businesses. Reliable products for communication and productivity.",
    detailsFr: [
      "Écouteurs filaires haute qualité",
      "Casques Bluetooth sans fil",
      "Kits mains libres professionnels",
      "Compatible avec tous les appareils",
      "Solutions pour centres d'appels",
      "Garantie et SAV assurés",
    ],
    detailsEn: [
      "High-quality wired earphones",
      "Wireless Bluetooth headsets",
      "Professional hands-free kits",
      "Compatible with all devices",
      "Call center solutions",
      "Warranty and after-sales service",
    ],
    productsFr: [
      { name: "Écouteurs Filaires", description: "Écouteurs intra-auriculaires avec microphone intégré pour appels et musique." },
      { name: "Casques Bluetooth", description: "Casques sans fil avec réduction de bruit pour une expérience audio immersive." },
      { name: "Casques Audio Pro", description: "Casques professionnels pour centres d'appels, visioconférences et usage intensif." },
      { name: "Kits Mains Libres", description: "Solutions mains libres pour véhicules et bureaux, conformes à la réglementation." },
    ],
    productsEn: [
      { name: "Wired Earphones", description: "In-ear earphones with built-in microphone for calls and music." },
      { name: "Bluetooth Headsets", description: "Wireless headsets with noise cancellation for immersive audio experience." },
      { name: "Pro Audio Headsets", description: "Professional headsets for call centers, video conferencing, and intensive use." },
      { name: "Hands-Free Kits", description: "Hands-free solutions for vehicles and offices, compliant with regulations." },
    ],
  },
  {
    slug: "panneaux-solaires",
    titleFr: "Panneaux Solaires",
    titleEn: "Solar Panels",
    image: "/products/solar-panels.jpg",
    color: "green",
    servicePath: "/services/energie",
    descriptionFr: "DGS fournit et installe des panneaux solaires photovoltaïques de haute qualité pour les entreprises, institutions et particuliers. Nos solutions solaires permettent de réduire significativement les coûts énergétiques tout en contribuant au développement durable.",
    descriptionEn: "DGS supplies and installs high-quality photovoltaic solar panels for businesses, institutions, and individuals. Our solar solutions significantly reduce energy costs while contributing to sustainable development.",
    detailsFr: [
      "Panneaux monocristallins haute efficacité",
      "Puissances de 300W à 550W",
      "Étude et dimensionnement personnalisé",
      "Installation professionnelle certifiée",
      "Garantie performance 25 ans",
      "Solutions on-grid et off-grid",
    ],
    detailsEn: [
      "High-efficiency monocrystalline panels",
      "Power ratings from 300W to 550W",
      "Custom study and sizing",
      "Certified professional installation",
      "25-year performance warranty",
      "On-grid and off-grid solutions",
    ],
    productsFr: [
      { name: "Panneaux Monocristallins", description: "Rendement optimal grâce à la technologie monocristalline, idéal pour les espaces limités." },
      { name: "Panneaux Polycristallins", description: "Solution économique avec un bon rapport qualité-prix pour les grandes surfaces." },
      { name: "Panneaux 300W–550W", description: "Large gamme de puissances pour s'adapter à tous les projets, du résidentiel à l'industriel." },
      { name: "Structures de Montage", description: "Supports et systèmes de fixation pour toiture, sol et carport solaire." },
    ],
    productsEn: [
      { name: "Monocrystalline Panels", description: "Optimal efficiency with monocrystalline technology, ideal for limited spaces." },
      { name: "Polycrystalline Panels", description: "Cost-effective solution with good value for large surface areas." },
      { name: "300W–550W Panels", description: "Wide range of power ratings to fit all projects, from residential to industrial." },
      { name: "Mounting Structures", description: "Supports and mounting systems for rooftop, ground, and solar carport installations." },
    ],
  },
  {
    slug: "onduleurs",
    titleFr: "Onduleurs & Batteries",
    titleEn: "Inverters & Batteries",
    image: "/products/solar-inverter.png",
    color: "green",
    servicePath: "/services/energie",
    descriptionFr: "DGS propose des onduleurs solaires et des batteries de stockage pour des installations photovoltaïques complètes. Nos solutions hybrides, on-grid et off-grid garantissent une alimentation fiable et continue.",
    descriptionEn: "DGS offers solar inverters and storage batteries for complete photovoltaic installations. Our hybrid, on-grid, and off-grid solutions guarantee reliable and continuous power supply.",
    detailsFr: [
      "Onduleurs hybrides intelligents",
      "Solutions on-grid et off-grid",
      "Batteries lithium longue durée",
      "Monitoring intégré",
      "Dimensionnement personnalisé",
      "Installation et maintenance",
    ],
    detailsEn: [
      "Smart hybrid inverters",
      "On-grid and off-grid solutions",
      "Long-lasting lithium batteries",
      "Integrated monitoring",
      "Custom sizing",
      "Installation and maintenance",
    ],
    productsFr: [
      { name: "Onduleurs Hybrides", description: "Onduleurs intelligents combinant solaire, réseau et batteries pour une flexibilité maximale." },
      { name: "Onduleurs On-Grid", description: "Connexion directe au réseau électrique avec injection du surplus de production." },
      { name: "Onduleurs Off-Grid", description: "Solutions autonomes pour sites isolés sans raccordement au réseau." },
      { name: "Batteries Lithium", description: "Stockage d'énergie haute capacité pour une autonomie prolongée jour et nuit." },
    ],
    productsEn: [
      { name: "Hybrid Inverters", description: "Smart inverters combining solar, grid, and batteries for maximum flexibility." },
      { name: "On-Grid Inverters", description: "Direct grid connection with surplus production injection." },
      { name: "Off-Grid Inverters", description: "Autonomous solutions for isolated sites without grid connection." },
      { name: "Lithium Batteries", description: "High-capacity energy storage for extended day and night autonomy." },
    ],
  },
  {
    slug: "monitoring",
    titleFr: "Monitoring & IoT",
    titleEn: "Monitoring & IoT",
    image: "/products/iot-monitoring.jpg",
    color: "green",
    servicePath: "/services/energie",
    descriptionFr: "DGS déploie des solutions de monitoring énergétique et IoT pour suivre en temps réel la performance de vos installations. Compteurs intelligents, capteurs et plateformes de supervision pour optimiser votre consommation.",
    descriptionEn: "DGS deploys energy monitoring and IoT solutions to track your installations' performance in real time. Smart meters, sensors, and supervision platforms to optimize your consumption.",
    detailsFr: [
      "Suivi en temps réel de la production",
      "Compteurs intelligents connectés",
      "Capteurs de performance IoT",
      "Alertes et notifications automatiques",
      "Tableaux de bord personnalisés",
      "Analyse de données et reporting",
    ],
    detailsEn: [
      "Real-time production monitoring",
      "Connected smart meters",
      "IoT performance sensors",
      "Automatic alerts and notifications",
      "Custom dashboards",
      "Data analysis and reporting",
    ],
    productsFr: [
      { name: "Compteurs Intelligents", description: "Mesure précise de la consommation et de la production avec transmission de données en temps réel." },
      { name: "Capteurs IoT", description: "Capteurs connectés pour température, humidité, irradiance solaire et qualité de l'air." },
      { name: "Plateformes de Supervision", description: "Interfaces web et mobile pour visualiser et analyser les performances de vos installations." },
      { name: "Solutions d'Alerte", description: "Systèmes de notification automatique en cas d'anomalie ou de sous-performance." },
    ],
    productsEn: [
      { name: "Smart Meters", description: "Precise consumption and production measurement with real-time data transmission." },
      { name: "IoT Sensors", description: "Connected sensors for temperature, humidity, solar irradiance, and air quality." },
      { name: "Supervision Platforms", description: "Web and mobile interfaces to visualize and analyze your installations' performance." },
      { name: "Alert Solutions", description: "Automatic notification systems for anomalies or underperformance." },
    ],
  },
];

const colorMap: Record<string, { gradient: string; text: string; icon: string; bgLight: string }> = {
  blue: { gradient: "from-blue-600 to-blue-500", text: "text-blue-600", icon: "text-blue-500", bgLight: "bg-blue-50 dark:bg-blue-950/30" },
  accent: { gradient: "from-accent to-accent/80", text: "text-accent", icon: "text-accent", bgLight: "bg-accent/5" },
  green: { gradient: "from-green-600 to-green-500", text: "text-green-600", icon: "text-green-500", bgLight: "bg-green-50 dark:bg-green-950/30" },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/produits" replace />;
  }

  const colors = colorMap[product.color];
  const title = language === "fr" ? product.titleFr : product.titleEn;
  const description = language === "fr" ? product.descriptionFr : product.descriptionEn;
  const details = language === "fr" ? product.detailsFr : product.detailsEn;
  const products = language === "fr" ? product.productsFr : product.productsEn;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={product.image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-pattern" />

        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-3xl">
            <Link to="/produits" className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              {language === "fr" ? "Retour aux produits" : "Back to products"}
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">{title}</h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">{description}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className={`inline-block bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-6 shadow-lg`}>
                {language === "fr" ? "Pourquoi DGS" : "Why DGS"}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                {language === "fr" ? "Notre expertise à votre service" : "Our expertise at your service"}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">{description}</p>
              <div className="space-y-4">
                {details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className={`w-5 h-5 mt-0.5 ${colors.icon} shrink-0`} />
                    <span className="text-foreground">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={product.image} alt={title} className="w-full h-[450px] object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Produits */}
      <section className={`py-20 ${colors.bgLight}`}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {language === "fr" ? "Ce que nous proposons" : "What we offer"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "fr" ? "Découvrez notre gamme complète" : "Discover our complete range"}
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-premium transition-all duration-500"
              >
                <h3 className={`font-heading text-xl font-bold mb-3 ${colors.text}`}>{item.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {language === "fr" ? "Intéressé par nos produits ?" : "Interested in our products?"}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {language === "fr"
                ? "Contactez-nous pour un devis personnalisé ou des informations complémentaires."
                : "Contact us for a personalized quote or additional information."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {language === "fr" ? "Demander un devis" : "Request a quote"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://api.whatsapp.com/send?phone=221776862024" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
