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
  whyDgsFr?: string;
  whyDgsEn?: string;
  detailsFr: string[];
  detailsEn: string[];
  productsFr: { name: string; description: string; image?: string }[];
  productsEn: { name: string; description: string; image?: string }[];
}

const productsData: ProductData[] = [
  {
    slug: "eclairage-led",
    titleFr: "Éclairage LED Industriel — Senben Lighting",
    titleEn: "Industrial LED Lighting — Senben Lighting",
    image: "/products/led-weatherproof.webp",
    galleryImages: [
      "/products/senben-explosion-proof.webp",
      "/products/senben-weatherproof.webp",
      "/products/senben-hazardous.webp",
      "/products/senben-non-hazardous.webp",
    ],
    color: "blue",
    servicePath: "/services/industriel",
    partnerName: "Senben Lighting",
    partnerUrl: "https://www.senbenlighting.com",
    descriptionFr: "DGS est le partenaire officiel de Senben Lighting en Afrique de l'Ouest. Senben est un fabricant professionnel de solutions d'éclairage industriel, spécialisé dans les luminaires antidéflagrants (ATEX/IECEx) et les éclairages étanches haute performance. Certifiés CE, CB, EAC et ATEX, leurs produits équipent les installations les plus exigeantes : raffineries, plateformes pétrolières, usines chimiques, mines et infrastructures portuaires.",
    descriptionEn: "DGS is the official Senben Lighting partner in West Africa. Senben is a professional manufacturer of industrial lighting solutions, specializing in explosion-proof luminaires (ATEX/IECEx) and high-performance weatherproof lighting. Certified CE, CB, EAC, and ATEX, their products equip the most demanding installations: refineries, oil platforms, chemical plants, mines, and port infrastructure.",
    whyDgsFr: "En tant que distributeur exclusif Senben en Afrique de l'Ouest, DGS vous garantit des produits authentiques, un stock local et un accompagnement technique de proximité.",
    whyDgsEn: "As the exclusive Senben distributor in West Africa, DGS guarantees authentic products, local stock, and hands-on technical support.",
    detailsFr: [
      "Partenaire officiel Senben Lighting pour l'Afrique de l'Ouest",
      "Certifications ATEX, IECEx, CE, CB, EAC",
      "Gamme complète : Explosion Proof & Weatherproof",
      "Protection IP65+ contre poussière et eau",
      "Durée de vie supérieure à 50 000 heures",
      "Réduction de consommation jusqu'à 70%",
      "Installation et maintenance assurées par DGS",
      "Stock permanent à Dakar",
    ],
    detailsEn: [
      "Official Senben Lighting partner for West Africa",
      "ATEX, IECEx, CE, CB, EAC certifications",
      "Complete range: Explosion Proof & Weatherproof",
      "IP65+ protection against dust and water",
      "Lifespan exceeding 50,000 hours",
      "Energy savings up to 70%",
      "Installation and maintenance by DGS",
      "Permanent stock in Dakar",
    ],
    productsFr: [
      { name: "Luminaires Antidéflagrants (ATEX)", description: "Gamme complète de luminaires certifiés ATEX/IECEx pour zones à risque d'explosion (Zone 1, Zone 2, Zone 21, Zone 22). High Bay, Low Bay, Street Light, Panel Light et lampes torches. Conçus pour raffineries, plateformes pétrolières et usines chimiques.", image: "/products/senben-explosion-proof.webp" },
      { name: "Éclairages Étanches (Weatherproof)", description: "Luminaires IP65+ résistants aux intempéries pour environnements industriels non dangereux. Solutions durables pour entrepôts, hangars, tunnels et installations extérieures soumises à des conditions climatiques sévères.", image: "/products/senben-weatherproof.webp" },
      { name: "Éclairages Haute Baie (High Bay)", description: "Luminaires haute puissance pour grands espaces avec hauteur sous plafond importante. Disponibles en versions ATEX et standard, de 50W à 600W, pour usines, entrepôts et halls industriels.", image: "/products/senben-hazardous.webp" },
      { name: "Projecteurs LED (Floodlights)", description: "Projecteurs industriels à large faisceau pour éclairage extérieur de chantiers, parkings, périmètres de sécurité et zones portuaires. Versions antidéflagrantes disponibles.", image: "/products/senben-non-hazardous.webp" },
    ],
    productsEn: [
      { name: "Explosion Proof Luminaires (ATEX)", description: "Complete range of ATEX/IECEx certified luminaires for explosive atmosphere zones (Zone 1, Zone 2, Zone 21, Zone 22). High Bay, Low Bay, Street Light, Panel Light, and torch lights. Designed for refineries, oil platforms, and chemical plants.", image: "/products/senben-explosion-proof.webp" },
      { name: "Weatherproof Luminaires", description: "IP65+ weather-resistant luminaires for non-hazardous industrial environments. Durable solutions for warehouses, hangars, tunnels, and outdoor installations exposed to severe weather conditions.", image: "/products/senben-weatherproof.webp" },
      { name: "High Bay Lights", description: "High-power luminaires for large spaces with high ceilings. Available in ATEX and standard versions, from 50W to 600W, for factories, warehouses, and industrial halls.", image: "/products/senben-hazardous.webp" },
      { name: "LED Floodlights", description: "Industrial floodlights with wide beam for outdoor lighting of construction sites, parking lots, security perimeters, and port areas. Explosion-proof versions available.", image: "/products/senben-non-hazardous.webp" },
    ],
  },
  {
    slug: "climatisation",
    titleFr: "Froid & Climatisation — Airchal",
    titleEn: "Cooling & HVAC — Airchal",
    image: "/products/airchal-cc-ahu.png",
    galleryImages: [
      "/products/airchal-cc-ahu.png",
      "/products/airchal-cc-standard.png",
      "/products/airchal-polcc.png",
      "/products/airchal-industrial-fan.jpg",
    ],
    color: "blue",
    servicePath: "/services/industriel",
    partnerName: "Airchal",
    partnerUrl: "https://airchal.com",
    descriptionFr: "DGS est le partenaire officiel d'Airchal en Afrique de l'Ouest. Airchal est l'un des leaders mondiaux du traitement d'air, présent en France, Allemagne, Benelux, Hong-Kong, Maroc, Qatar et Émirats Arabes Unis. Leur gamme CC Clean Concept, conçue avec la simplicité à l'esprit, offre des solutions sur mesure pour les environnements les plus exigeants.",
    descriptionEn: "DGS is the official Airchal partner in West Africa. Airchal is one of the world's leading air handling companies, present in France, Germany, Benelux, Hong Kong, Morocco, Qatar, and the UAE. Their CC Clean Concept range, designed with simplicity in mind, offers custom solutions for the most demanding environments.",
    whyDgsFr: "Notre équipe technique certifiée assure le dimensionnement, l'installation et la maintenance de vos systèmes Airchal sur tout le territoire ouest-africain.",
    whyDgsEn: "Our certified technical team handles sizing, installation, and maintenance of your Airchal systems across West Africa.",
    detailsFr: [
      "Partenaire officiel Airchal pour l'Afrique de l'Ouest",
      "Centrales de traitement d'air jusqu'à 450 000 m³/h",
      "Gamme CC Clean Concept — conception simplifiée et haute performance",
      "Série POLCC en polyester pour environnements jusqu'à -35°C",
      "Fan Coils standard et sur mesure",
      "Ventilateurs industriels haute performance",
      "Solutions spéciales pour plateformes pétrolières et offshore",
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
      { name: "Centrales de Traitement d'Air CC Clean Concept", description: "La gamme phare d'Airchal : des CTA modulaires jusqu'à 450 000 m³/h, conçues pour la simplicité d'installation et de maintenance. Filtration, chauffage, refroidissement et récupération d'énergie intégrés.", image: "/products/airchal-cc-ahu.png" },
      { name: "CTA POLCC — Série Polyester", description: "Centrales en polyester spécialement conçues pour les environnements extrêmes et les températures négatives jusqu'à -35°C. Idéales pour l'agroalimentaire et les chambres froides.", image: "/products/airchal-polcc.png" },
      { name: "Fan Coils (Ventilo-convecteurs)", description: "Unités terminales standard et sur mesure pour le chauffage et le refroidissement localisé. Solutions silencieuses et performantes pour bureaux, hôtels et bâtiments commerciaux.", image: "/products/airchal-building-fan.jpg" },
      { name: "Ventilateurs Industriels", description: "Ventilateurs haute performance pour applications industrielles exigeantes : extraction, ventilation, surpression et environnements ATEX. Jusqu'à 200 000 m³/h et 400°C.", image: "/products/airchal-industrial-fan.jpg" },
      { name: "Solutions Oil & Gas", description: "Systèmes de traitement d'air spécialisés pour plateformes pétrolières, raffineries et installations offshore, conformes aux normes les plus strictes.", image: "/products/airchal-cc-standard.png" },
      { name: "Contrôle & Automatisation", description: "Armoires de contrôle et systèmes d'automatisation intégrés pour piloter et optimiser vos installations de traitement d'air.", image: "/products/airchal-controls.png" },
    ],
    productsEn: [
      { name: "CC Clean Concept Air Handling Units", description: "Airchal's flagship range: modular AHUs up to 450,000 m³/h, designed for easy installation and maintenance. Integrated filtration, heating, cooling, and energy recovery.", image: "/products/airchal-cc-ahu.png" },
      { name: "POLCC Polyester Series", description: "Polyester air handling units specially designed for extreme environments and temperatures down to -35°C. Ideal for food processing and cold rooms.", image: "/products/airchal-polcc.png" },
      { name: "Fan Coils", description: "Standard and purpose-built terminal units for localized heating and cooling. Quiet and efficient solutions for offices, hotels, and commercial buildings.", image: "/products/airchal-building-fan.jpg" },
      { name: "Industrial Fans", description: "High-performance fans for demanding industrial applications: extraction, ventilation, pressurization, and ATEX environments. Up to 200,000 m³/h and 400°C.", image: "/products/airchal-industrial-fan.jpg" },
      { name: "Oil & Gas Solutions", description: "Specialized air handling systems for oil platforms, refineries, and offshore installations, compliant with the strictest standards.", image: "/products/airchal-cc-standard.png" },
      { name: "Control & Automation", description: "Control cabinets and integrated automation systems to manage and optimize your air handling installations.", image: "/products/airchal-controls.png" },
    ],
  },
  {
    slug: "courroies",
    titleFr: "Courroies Industrielles — Universal RBM",
    titleEn: "Industrial Belts — Universal RBM",
    image: "/products/belts-poly-v.jpg",
    galleryImages: [
      "/products/urbm-poly-v.jpg",
      "/products/belts-poly-v.jpg",
      "/products/urbm-factory.png",
      "/products/urbm-poly-v.jpg",
    ],
    color: "blue",
    servicePath: "/services/industriel",
    partnerName: "Universal RBM",
    partnerUrl: "https://universal-rbm.com",
    descriptionFr: "DGS est distributeur officiel d'Universal Rubber Belt Manufacturing (Universal RBM) en Afrique de l'Ouest. Basé à Dubai Industrial City, Universal RBM est un fabricant de nouvelle génération de courroies de performance — ingénierie de précision pour les courroies trapézoïdales, les courroies synchrones et les solutions de transmission de puissance sur mesure, pour les industries les plus exigeantes au monde.",
    descriptionEn: "DGS is the official distributor of Universal Rubber Belt Manufacturing (Universal RBM) in West Africa. Based in Dubai Industrial City, Universal RBM is a next-generation performance belt manufacturer — precision-engineering V-belts, synchronous belts, and custom power transmission solutions for the world's most demanding industries.",
    whyDgsFr: "Notre stock permanent à Dakar et notre expertise technique vous garantissent des délais courts et un accompagnement adapté à vos contraintes industrielles.",
    whyDgsEn: "Our permanent stock in Dakar and technical expertise guarantee short lead times and support tailored to your industrial requirements.",
    detailsFr: [
      "Distributeur officiel Universal RBM pour l'Afrique de l'Ouest",
      "Fabrication de précision depuis Dubai Industrial City",
      "Gamme complète : V-Belts, Poly-V, Timing, courroies spéciales",
      "Applications : automobile, industrie, mines, agriculture, énergie",
      "Stock permanent des références courantes à Dakar",
      "Conseil technique et dimensionnement personnalisé",
      "Livraison rapide sur tout le Sénégal et la sous-région",
      "Catalogue complet disponible sur demande",
    ],
    detailsEn: [
      "Official Universal RBM distributor for West Africa",
      "Precision manufacturing from Dubai Industrial City",
      "Complete range: V-Belts, Poly-V, Timing, special belts",
      "Applications: automotive, industrial, mining, agriculture, energy",
      "Permanent stock of common references in Dakar",
      "Technical advice and custom sizing",
      "Fast delivery across Senegal and the sub-region",
      "Full catalogue available on request",
    ],
    productsFr: [
      { name: "Courroies Poly-V (Automotive & Industrial)", description: "Courroies à nervures multiples pour une transmission de puissance efficace et silencieuse. Conçues pour les véhicules modernes et les applications industrielles nécessitant un entraînement compact et multi-accessoires.", image: "/products/urbm-poly-v.jpg" },
      { name: "Courroies Trapézoïdales (Raw Edge Cogged)", description: "Courroies à bord brut denté offrant une adhérence et une flexibilité supérieures pour les applications industrielles compactes et à haute vitesse. Versions standard et banded disponibles.", image: "/products/urbm-poly-v.jpg" },
      { name: "Courroies de Distribution (Timing / Synchronous)", description: "Courroies crantées pour synchronisation précise : Automotive Timing Belts, Classical Timing Belts (CTB), High Torque Drive (HTD) et Super Torque Drive (STD). Fiabilité critique pour moteurs et machines.", image: "/products/belts-poly-v.jpg" },
      { name: "Courroies Spéciales", description: "Solutions sur mesure pour applications spécifiques : charges lourdes, vibrations, environnements HVAC haute performance et contraintes mécaniques extrêmes. Ingénierie avancée depuis Dubai.", image: "/products/urbm-factory.png" },
    ],
    productsEn: [
      { name: "Poly-V Belts (Automotive & Industrial)", description: "Multi-ribbed belts for efficient and quiet power transmission. Designed for modern vehicles and industrial applications requiring compact, multi-accessory drives.", image: "/products/urbm-poly-v.jpg" },
      { name: "Raw Edge Cogged V-Belts", description: "Raw edge cogged belts offering superior grip and flexibility for compact, high-speed industrial applications. Standard and banded versions available.", image: "/products/urbm-poly-v.jpg" },
      { name: "Timing / Synchronous Belts", description: "Toothed belts for precise synchronization: Automotive Timing Belts, Classical Timing Belts (CTB), High Torque Drive (HTD), and Super Torque Drive (STD). Mission-critical reliability for engines and machines.", image: "/products/belts-poly-v.jpg" },
      { name: "Special Belts", description: "Custom solutions for specific applications: heavy loads, vibration, high-performance HVAC environments, and extreme mechanical constraints. Advanced engineering from Dubai.", image: "/products/urbm-factory.png" },
    ],
  },
  {
    slug: "ordinateurs",
    titleFr: "Ordinateurs — Dell & Blackview",
    titleEn: "Computers — Dell & Blackview",
    image: "/products/laptop-generic.jpg",
    color: "accent",
    servicePath: "/services/it",
    partnerName: "Dell Technologies",
    partnerUrl: "https://www.dell.com/fr-fr",
    descriptionFr: "DGS est partenaire Dell Technologies et distributeur Blackview en Afrique de l'Ouest. Nous équipons les entreprises, institutions et administrations en solutions informatiques professionnelles : ordinateurs portables Dell Latitude, Lenovo ThinkPad, et les gammes Blackview Rugged pour les environnements terrain les plus exigeants.",
    descriptionEn: "DGS is a Dell Technologies partner and Blackview distributor in West Africa. We equip businesses, institutions, and administrations with professional computing solutions: Dell Latitude laptops, Lenovo ThinkPad, and Blackview Rugged ranges for the most demanding field environments.",
    whyDgsFr: "Garantie constructeur, configuration sur mesure et support technique de proximité pour tout votre parc informatique.",
    whyDgsEn: "Manufacturer warranty, custom configuration, and local technical support for your entire IT fleet.",
    detailsFr: [
      "Partenaire officiel Dell Technologies",
      "Distributeur Blackview en Afrique de l'Ouest",
      "Gammes professionnelles certifiées Dell Latitude & Lenovo ThinkPad",
      "Ordinateurs durcis Blackview pour usage terrain",
      "Configuration et personnalisation sur mesure",
      "Garantie constructeur étendue",
      "Support technique et SAV local",
      "Solutions pour entreprises, ministères et institutions",
    ],
    detailsEn: [
      "Official Dell Technologies partner",
      "Blackview distributor in West Africa",
      "Certified professional ranges: Dell Latitude & Lenovo ThinkPad",
      "Blackview rugged computers for field use",
      "Custom configuration and personalization",
      "Extended manufacturer warranty",
      "Local technical support and after-sales service",
      "Solutions for businesses, ministries, and institutions",
    ],
    productsFr: [
      { name: "Dell Latitude", description: "La gamme professionnelle de référence. Ordinateurs portables sécurisés, performants et managés, conçus pour les entreprises et l'usage intensif au quotidien. Copilot+ compatible." },
      { name: "Lenovo ThinkPad", description: "Reconnus mondialement pour leur fiabilité et leur clavier exceptionnel. Idéals pour les professionnels exigeants et les environnements d'entreprise." },
      { name: "Dell OptiPlex (Bureau)", description: "Ordinateurs de bureau compacts et puissants pour les postes de travail fixes. Sécurité renforcée et gestion centralisée pour les flottes d'entreprise." },
      { name: "Blackview Rugged", description: "Ordinateurs portables ultra-résistants IP68/IP69K pour les conditions terrain les plus rudes : chantiers, mines, installations industrielles. Antichocs, étanches et autonomes." },
    ],
    productsEn: [
      { name: "Dell Latitude", description: "The benchmark professional range. Secure, powerful, and managed laptops designed for businesses and intensive daily use. Copilot+ compatible." },
      { name: "Lenovo ThinkPad", description: "Globally recognized for reliability and exceptional keyboards. Ideal for demanding professionals and enterprise environments." },
      { name: "Dell OptiPlex (Desktop)", description: "Compact and powerful desktop computers for fixed workstations. Enhanced security and centralized management for enterprise fleets." },
      { name: "Blackview Rugged", description: "Ultra-resistant IP68/IP69K laptops for the toughest field conditions: construction sites, mines, industrial installations. Shockproof, waterproof, and long-lasting." },
    ],
  },
  {
    slug: "tablettes",
    titleFr: "Tablettes — Blackview",
    titleEn: "Tablets — Blackview",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    color: "accent",
    servicePath: "/services/it",
    partnerName: "Blackview",
    partnerUrl: "https://www.blackview.hk",
    descriptionFr: "DGS est distributeur officiel des tablettes Blackview en Afrique de l'Ouest. Blackview propose une gamme complète de tablettes, des modèles durcis IP69K pour le terrain (MEGA 12, Active 7) aux tablettes grand public performantes (ZENO, Tab series). Avec la MEGA 12 — première tablette 5G IP69K entièrement étanche au monde — Blackview redéfinit l'usage mobile professionnel.",
    descriptionEn: "DGS is the official Blackview tablet distributor in West Africa. Blackview offers a complete tablet range, from IP69K rugged models for fieldwork (MEGA 12, Active 7) to high-performance consumer tablets (ZENO, Tab series). With the MEGA 12 — the world's first fully waterproof IP69K 5G AI tablet — Blackview redefines professional mobile use.",
    whyDgsFr: "Stock local, garantie constructeur et support technique DGS pour toute la gamme Blackview tablettes en Afrique de l'Ouest.",
    whyDgsEn: "Local stock, manufacturer warranty, and DGS technical support for the full Blackview tablet range in West Africa.",
    detailsFr: [
      "Distributeur officiel Blackview pour l'Afrique de l'Ouest",
      "MEGA 12 : première tablette 5G IP69K au monde",
      "Certification IP68/IP69K — étanchéité totale",
      "Écrans renforcés anti-chocs",
      "Batteries longue durée pour usage terrain",
      "Connectivité 4G/5G et WiFi 6",
      "Gamme complète : rugged, kids, et productivité",
      "Accessoires officiels : coques, claviers, stylets",
    ],
    detailsEn: [
      "Official Blackview distributor for West Africa",
      "MEGA 12: world's first IP69K 5G tablet",
      "IP68/IP69K certification — full waterproofing",
      "Shockproof reinforced screens",
      "Long-lasting batteries for field use",
      "4G/5G and WiFi 6 connectivity",
      "Complete range: rugged, kids, and productivity",
      "Official accessories: cases, keyboards, styluses",
    ],
    productsFr: [
      { name: "Blackview MEGA 12", description: "La première tablette 5G IP69K entièrement étanche au monde. Écran 12 pouces, intelligence artificielle intégrée, idéale pour les professionnels de terrain exigeants." },
      { name: "Blackview ZENO Series", description: "Tablettes hautes performances pour la productivité : écrans haute résolution, processeurs puissants et autonomie exceptionnelle. Parfaites pour le bureau mobile." },
      { name: "Blackview Active 7", description: "Tablette durcie compacte pour les environnements industriels et de chantier. IP68, résistante aux chocs, poussière et températures extrêmes." },
      { name: "Blackview LINK Kids", description: "Tablettes sécurisées et robustes conçues pour les enfants, avec contrôle parental intégré et contenus éducatifs." },
    ],
    productsEn: [
      { name: "Blackview MEGA 12", description: "The world's first fully waterproof IP69K 5G tablet. 12-inch screen, built-in AI, ideal for demanding field professionals." },
      { name: "Blackview ZENO Series", description: "High-performance tablets for productivity: high-resolution screens, powerful processors, and exceptional battery life. Perfect for mobile office." },
      { name: "Blackview Active 7", description: "Compact rugged tablet for industrial and construction environments. IP68, resistant to shocks, dust, and extreme temperatures." },
      { name: "Blackview LINK Kids", description: "Secure and robust tablets designed for children, with built-in parental controls and educational content." },
    ],
  },
  {
    slug: "serveurs",
    titleFr: "Serveurs & Réseau — Dell Technologies",
    titleEn: "Servers & Network — Dell Technologies",
    image: "/products/dell-server.jpg",
    color: "accent",
    servicePath: "/services/it",
    partnerName: "Dell Technologies",
    partnerUrl: "https://www.dell.com/fr-fr",
    descriptionFr: "DGS déploie des infrastructures serveur et réseau Dell Technologies pour les entreprises et institutions en Afrique de l'Ouest. Serveurs Dell PowerEdge, solutions de stockage, équipements réseau et services de virtualisation — nous dimensionnons, installons et maintenons votre infrastructure IT.",
    descriptionEn: "DGS deploys Dell Technologies server and network infrastructure for businesses and institutions in West Africa. Dell PowerEdge servers, storage solutions, network equipment, and virtualization services — we size, install, and maintain your IT infrastructure.",
    whyDgsFr: "Architecture, dimensionnement et déploiement complet par nos ingénieurs certifiés. Contrats de maintenance et support local.",
    whyDgsEn: "Architecture, sizing, and complete deployment by our certified engineers. Maintenance contracts and local support.",
    detailsFr: [
      "Partenaire officiel Dell Technologies",
      "Serveurs Dell PowerEdge Rack & Tower",
      "Dimensionnement et conseil d'architecture",
      "Installation et configuration complète",
      "Contrats de maintenance et support 24/7",
      "Solutions de virtualisation (VMware, Hyper-V)",
      "Stockage NAS et SAN",
      "Sécurité réseau intégrée (firewalls, switches managés)",
    ],
    detailsEn: [
      "Official Dell Technologies partner",
      "Dell PowerEdge Rack & Tower servers",
      "Sizing and architecture consulting",
      "Complete installation and configuration",
      "24/7 maintenance and support contracts",
      "Virtualization solutions (VMware, Hyper-V)",
      "NAS and SAN storage",
      "Integrated network security (firewalls, managed switches)",
    ],
    productsFr: [
      { name: "Dell PowerEdge (Rack)", description: "Serveurs rack haute densité pour data centers et salles serveurs d'entreprise. Performances optimisées pour les charges de travail critiques et la virtualisation." },
      { name: "Dell PowerEdge (Tour)", description: "Serveurs tour pour les PME et bureaux distants. Solution compacte et silencieuse avec les mêmes technologies Dell PowerEdge." },
      { name: "Stockage NAS / SAN", description: "Solutions de stockage réseau pour la sauvegarde, le partage et l'archivage de données. Haute disponibilité et redondance." },
      { name: "Switches & Réseau", description: "Commutateurs réseau managés, points d'accès WiFi 6 et firewalls pour une connectivité sécurisée et performante." },
    ],
    productsEn: [
      { name: "Dell PowerEdge (Rack)", description: "High-density rack servers for data centers and enterprise server rooms. Optimized performance for critical workloads and virtualization." },
      { name: "Dell PowerEdge (Tower)", description: "Tower servers for SMBs and remote offices. Compact and quiet solution with the same Dell PowerEdge technologies." },
      { name: "NAS / SAN Storage", description: "Network storage solutions for data backup, sharing, and archiving. High availability and redundancy." },
      { name: "Switches & Networking", description: "Managed network switches, WiFi 6 access points, and firewalls for secure, high-performance connectivity." },
    ],
  },
  {
    slug: "imprimantes",
    titleFr: "Imprimantes HP",
    titleEn: "HP Printers",
    image: "/products/printer.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS distribue les imprimantes HP pour les professionnels en Afrique de l'Ouest. Des imprimantes laser aux jets d'encre, en passant par les multifonctions et les grands formats, nous proposons des solutions d'impression adaptées à chaque besoin avec un service de fourniture de consommables.",
    descriptionEn: "DGS distributes HP printers for professionals in West Africa. From laser to inkjet, multifunction to large format, we offer printing solutions tailored to every need with a consumables supply service.",
    whyDgsFr: "Fourniture, installation, maintenance et approvisionnement en consommables — un interlocuteur unique pour toute votre chaîne d'impression.",
    whyDgsEn: "Supply, installation, maintenance, and consumables sourcing — one single contact for your entire printing workflow.",
    detailsFr: [
      "Fournisseur officiel HP",
      "Gamme complète laser et jet d'encre",
      "Formats A3 et A4",
      "Solutions d'impression managées",
      "Fourniture régulière de consommables (toners, cartouches)",
      "Service après-vente et maintenance",
    ],
    detailsEn: [
      "Official HP supplier",
      "Complete laser and inkjet range",
      "A3 and A4 formats",
      "Managed print solutions",
      "Regular consumables supply (toners, cartridges)",
      "After-sales service and maintenance",
    ],
    productsFr: [
      { name: "Imprimantes Laser HP", description: "Impression rapide et précise pour volumes importants. Idéale pour les bureaux à forte productivité avec un coût par page optimisé." },
      { name: "Imprimantes Jet d'Encre HP", description: "Impression couleur haute qualité pour documents, graphiques et photos professionnelles. Idéale pour les usages polyvalents." },
      { name: "Multifonctions HP", description: "Impression, scan, copie et fax en un seul appareil compact et performant. La solution tout-en-un pour les entreprises." },
      { name: "Grand Format A3", description: "Imprimantes A3 pour plans, affiches, signalétique et documents grand format. Précision professionnelle." },
    ],
    productsEn: [
      { name: "HP Laser Printers", description: "Fast and precise printing for high volumes. Ideal for high-productivity offices with optimized cost per page." },
      { name: "HP Inkjet Printers", description: "High-quality color printing for documents, graphics, and professional photos. Ideal for versatile use." },
      { name: "HP Multifunction Printers", description: "Print, scan, copy, and fax in one compact and powerful device. The all-in-one solution for businesses." },
      { name: "A3 Large Format", description: "A3 printers for plans, posters, signage, and large format documents. Professional precision." },
    ],
  },
  {
    slug: "cles-usb",
    titleFr: "Clés USB & Stockage",
    titleEn: "USB Drives & Storage",
    image: "/products/laptop-generic.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS propose une gamme complète de solutions de stockage portable pour les entreprises : clés USB haute vitesse, disques durs externes et cartes mémoire. Des accessoires indispensables pour la productivité et la mobilité professionnelle.",
    descriptionEn: "DGS offers a complete range of portable storage solutions for businesses: high-speed USB drives, external hard drives, and memory cards. Essential accessories for professional productivity and mobility.",
    whyDgsFr: "Prix compétitifs pour volumes, livraison rapide et large choix de capacités pour équiper vos équipes.",
    whyDgsEn: "Competitive volume pricing, fast delivery, and wide capacity range to equip your teams.",
    detailsFr: [
      "Clés USB haute vitesse USB 3.0 et USB-C",
      "Capacités de 16 Go à 256 Go",
      "Disques durs externes portables",
      "Cartes mémoire SD et microSD",
      "Solutions de stockage sécurisé (chiffrement)",
      "Prix compétitifs pour commandes en volume",
    ],
    detailsEn: [
      "High-speed USB 3.0 and USB-C drives",
      "Capacities from 16 GB to 256 GB",
      "Portable external hard drives",
      "SD and microSD memory cards",
      "Secure (encrypted) storage solutions",
      "Competitive pricing for volume orders",
    ],
    productsFr: [
      { name: "Clés USB 3.0", description: "Transfert de données ultra-rapide avec interface USB 3.0, disponibles de 16 Go à 256 Go. Robustes et fiables pour l'usage professionnel." },
      { name: "Clés USB-C", description: "Compatibles avec les derniers appareils USB Type-C (laptops, tablettes, smartphones). La connectique du futur." },
      { name: "Disques Durs Externes", description: "Stockage portable haute capacité (1 To à 5 To) pour sauvegarde et transport de données volumineuses. Solutions compactes et résistantes." },
      { name: "Cartes Mémoire", description: "Cartes SD et microSD haute vitesse pour appareils photo, caméras de surveillance, drones et appareils mobiles." },
    ],
    productsEn: [
      { name: "USB 3.0 Drives", description: "Ultra-fast data transfer with USB 3.0 interface, available from 16 GB to 256 GB. Robust and reliable for professional use." },
      { name: "USB-C Drives", description: "Compatible with the latest USB Type-C devices (laptops, tablets, smartphones). Future-proof connectivity." },
      { name: "External Hard Drives", description: "High-capacity portable storage (1 TB to 5 TB) for backup and transport of large data. Compact and rugged solutions." },
      { name: "Memory Cards", description: "High-speed SD and microSD cards for cameras, surveillance cameras, drones, and mobile devices." },
    ],
  },
  {
    slug: "ecouteurs",
    titleFr: "Écouteurs & Audio",
    titleEn: "Headphones & Audio",
    image: "/products/laptop-generic.jpg",
    color: "accent",
    servicePath: "/services/it",
    descriptionFr: "DGS fournit des accessoires audio professionnels pour les entreprises : écouteurs filaires, casques Bluetooth, kits mains libres et solutions audio pour centres d'appels et visioconférence. Des produits fiables pour la communication et la productivité.",
    descriptionEn: "DGS provides professional audio accessories for businesses: wired earphones, Bluetooth headsets, hands-free kits, and audio solutions for call centers and video conferencing. Reliable products for communication and productivity.",
    whyDgsFr: "Des solutions audio professionnelles adaptées à chaque usage, avec garantie et support technique DGS.",
    whyDgsEn: "Professional audio solutions tailored to every use case, with DGS warranty and technical support.",
    detailsFr: [
      "Écouteurs filaires haute qualité",
      "Casques Bluetooth sans fil avec réduction de bruit",
      "Kits mains libres professionnels",
      "Compatible avec tous les appareils (USB, Jack, Bluetooth)",
      "Solutions pour centres d'appels et visioconférence",
      "Garantie et SAV assurés par DGS",
    ],
    detailsEn: [
      "High-quality wired earphones",
      "Wireless Bluetooth headsets with noise cancellation",
      "Professional hands-free kits",
      "Compatible with all devices (USB, Jack, Bluetooth)",
      "Call center and video conferencing solutions",
      "Warranty and after-sales service by DGS",
    ],
    productsFr: [
      { name: "Écouteurs Filaires", description: "Écouteurs intra-auriculaires avec microphone intégré pour appels et musique. Connectique Jack 3.5mm et USB-C disponible." },
      { name: "Casques Bluetooth", description: "Casques sans fil avec réduction de bruit active pour une expérience audio immersive. Autonomie prolongée et confort longue durée." },
      { name: "Casques Audio Pro (Centres d'appels)", description: "Casques professionnels avec micro anti-bruit pour centres d'appels, visioconférences et usage intensif. Connectique USB et compatible Teams/Zoom." },
      { name: "Kits Mains Libres", description: "Solutions mains libres Bluetooth pour véhicules et bureaux. Conformes à la réglementation et qualité audio HD." },
    ],
    productsEn: [
      { name: "Wired Earphones", description: "In-ear earphones with built-in microphone for calls and music. 3.5mm Jack and USB-C connectors available." },
      { name: "Bluetooth Headsets", description: "Wireless headsets with active noise cancellation for immersive audio. Extended battery life and long-wear comfort." },
      { name: "Pro Audio Headsets (Call Centers)", description: "Professional headsets with noise-canceling mic for call centers, video conferencing, and intensive use. USB connectivity, Teams/Zoom compatible." },
      { name: "Hands-Free Kits", description: "Bluetooth hands-free solutions for vehicles and offices. Regulation-compliant with HD audio quality." },
    ],
  },
  {
    slug: "panneaux-solaires",
    titleFr: "Panneaux Solaires",
    titleEn: "Solar Panels",
    image: "/products/solar-panels.jpg",
    color: "green",
    servicePath: "/services/energie",
    descriptionFr: "DGS fournit et installe des panneaux solaires photovoltaïques de haute qualité pour les entreprises, institutions et particuliers en Afrique de l'Ouest. Nos solutions solaires permettent de réduire significativement les coûts énergétiques tout en contribuant au développement durable du continent.",
    descriptionEn: "DGS supplies and installs high-quality photovoltaic solar panels for businesses, institutions, and individuals in West Africa. Our solar solutions significantly reduce energy costs while contributing to the continent's sustainable development.",
    whyDgsFr: "Étude, dimensionnement, installation et maintenance — DGS gère l'intégralité de votre projet solaire.",
    whyDgsEn: "Study, sizing, installation, and maintenance — DGS manages your entire solar project.",
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
      { name: "Panneaux Monocristallins", description: "Rendement optimal grâce à la technologie monocristalline, idéal pour les espaces limités et les projets à haute performance." },
      { name: "Panneaux Polycristallins", description: "Solution économique avec un excellent rapport qualité-prix pour les grandes surfaces et installations à grande échelle." },
      { name: "Panneaux 300W–550W", description: "Large gamme de puissances pour s'adapter à tous les projets, du résidentiel à l'industriel et aux fermes solaires." },
      { name: "Structures de Montage", description: "Supports et systèmes de fixation professionnels pour toiture, sol et carport solaire. Résistants aux conditions climatiques africaines." },
    ],
    productsEn: [
      { name: "Monocrystalline Panels", description: "Optimal efficiency with monocrystalline technology, ideal for limited spaces and high-performance projects." },
      { name: "Polycrystalline Panels", description: "Cost-effective solution with excellent value for large surface areas and large-scale installations." },
      { name: "300W–550W Panels", description: "Wide range of power ratings to fit all projects, from residential to industrial and solar farms." },
      { name: "Mounting Structures", description: "Professional supports and mounting systems for rooftop, ground, and solar carport installations. Resistant to African weather conditions." },
    ],
  },
  {
    slug: "onduleurs",
    titleFr: "Onduleurs & Batteries",
    titleEn: "Inverters & Batteries",
    image: "/products/solar-inverter.png",
    color: "green",
    servicePath: "/services/energie",
    descriptionFr: "DGS propose des onduleurs solaires et des batteries de stockage pour des installations photovoltaïques complètes. Nos solutions hybrides, on-grid et off-grid garantissent une alimentation fiable et continue, adaptées aux réalités énergétiques africaines.",
    descriptionEn: "DGS offers solar inverters and storage batteries for complete photovoltaic installations. Our hybrid, on-grid, and off-grid solutions guarantee reliable and continuous power supply, adapted to African energy realities.",
    whyDgsFr: "Dimensionnement personnalisé, installation professionnelle et monitoring intégré pour une performance optimale.",
    whyDgsEn: "Custom sizing, professional installation, and integrated monitoring for optimal performance.",
    detailsFr: [
      "Onduleurs hybrides intelligents",
      "Solutions on-grid et off-grid",
      "Batteries lithium longue durée",
      "Monitoring intégré et à distance",
      "Dimensionnement personnalisé",
      "Installation et maintenance assurées",
    ],
    detailsEn: [
      "Smart hybrid inverters",
      "On-grid and off-grid solutions",
      "Long-lasting lithium batteries",
      "Integrated and remote monitoring",
      "Custom sizing",
      "Installation and maintenance included",
    ],
    productsFr: [
      { name: "Onduleurs Hybrides", description: "Onduleurs intelligents combinant solaire, réseau et batteries pour une flexibilité maximale et une autonomie totale en cas de coupure." },
      { name: "Onduleurs On-Grid", description: "Connexion directe au réseau électrique avec injection du surplus de production. Réduction immédiate de la facture énergétique." },
      { name: "Onduleurs Off-Grid", description: "Solutions autonomes pour sites isolés sans raccordement au réseau. Idéal pour les zones rurales et les installations distantes." },
      { name: "Batteries Lithium", description: "Stockage d'énergie haute capacité pour une autonomie prolongée jour et nuit. Technologie LiFePO4 pour une durée de vie optimale." },
    ],
    productsEn: [
      { name: "Hybrid Inverters", description: "Smart inverters combining solar, grid, and batteries for maximum flexibility and total autonomy during outages." },
      { name: "On-Grid Inverters", description: "Direct grid connection with surplus production injection. Immediate energy bill reduction." },
      { name: "Off-Grid Inverters", description: "Autonomous solutions for isolated sites without grid connection. Ideal for rural areas and remote installations." },
      { name: "Lithium Batteries", description: "High-capacity energy storage for extended day and night autonomy. LiFePO4 technology for optimal lifespan." },
    ],
  },
  {
    slug: "monitoring",
    titleFr: "Monitoring & IoT",
    titleEn: "Monitoring & IoT",
    image: "/products/iot-monitoring.jpg",
    color: "green",
    servicePath: "/services/energie",
    descriptionFr: "DGS déploie des solutions de monitoring énergétique et IoT pour suivre en temps réel la performance de vos installations. Compteurs intelligents, capteurs et plateformes de supervision pour optimiser votre consommation et maximiser votre retour sur investissement.",
    descriptionEn: "DGS deploys energy monitoring and IoT solutions to track your installations' performance in real time. Smart meters, sensors, and supervision platforms to optimize your consumption and maximize your return on investment.",
    whyDgsFr: "Tableaux de bord personnalisés, alertes automatiques et reporting pour un pilotage efficace de vos installations.",
    whyDgsEn: "Custom dashboards, automatic alerts, and reporting for efficient management of your installations.",
    detailsFr: [
      "Suivi en temps réel de la production et consommation",
      "Compteurs intelligents connectés",
      "Capteurs de performance IoT",
      "Alertes et notifications automatiques",
      "Tableaux de bord personnalisés (web et mobile)",
      "Analyse de données et reporting mensuel",
    ],
    detailsEn: [
      "Real-time production and consumption monitoring",
      "Connected smart meters",
      "IoT performance sensors",
      "Automatic alerts and notifications",
      "Custom dashboards (web and mobile)",
      "Data analysis and monthly reporting",
    ],
    productsFr: [
      { name: "Compteurs Intelligents", description: "Mesure précise de la consommation et de la production avec transmission de données en temps réel. Compatible avec toutes les installations DGS." },
      { name: "Capteurs IoT", description: "Capteurs connectés pour température, humidité, irradiance solaire et qualité de l'air. Installation plug-and-play." },
      { name: "Plateformes de Supervision", description: "Interfaces web et mobile pour visualiser et analyser les performances de vos installations en temps réel, depuis n'importe où." },
      { name: "Solutions d'Alerte", description: "Systèmes de notification automatique (SMS, email, app) en cas d'anomalie, de sous-performance ou de maintenance nécessaire." },
    ],
    productsEn: [
      { name: "Smart Meters", description: "Precise consumption and production measurement with real-time data transmission. Compatible with all DGS installations." },
      { name: "IoT Sensors", description: "Connected sensors for temperature, humidity, solar irradiance, and air quality. Plug-and-play installation." },
      { name: "Supervision Platforms", description: "Web and mobile interfaces to visualize and analyze your installations' performance in real time, from anywhere." },
      { name: "Alert Solutions", description: "Automatic notification systems (SMS, email, app) for anomalies, underperformance, or maintenance needs." },
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
  const whyDgs = language === "fr" ? product.whyDgsFr : product.whyDgsEn;
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
            {product.partnerUrl && (
              <a href={product.partnerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-accent hover:underline font-semibold text-sm">
                {language === "fr" ? `Visitez le site ${product.partnerName}` : `Visit ${product.partnerName} website`} →
              </a>
            )}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Pourquoi DGS — without repeating the hero description */}
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
              {whyDgs && (
                <p className="text-muted-foreground text-lg mb-8">{whyDgs}</p>
              )}
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
              {product.galleryImages && product.galleryImages.length > 1 ? (
                <div className="grid grid-cols-2 gap-4">
                  {product.galleryImages.map((img, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden shadow-premium">
                      <img src={img} alt={`${title} ${i + 1}`} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-10`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-premium">
                  <img src={product.image} alt={title} className="w-full h-[450px] object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`} />
                </div>
              )}
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
                className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:shadow-premium transition-all duration-500"
              >
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`font-heading text-xl font-bold mb-3 ${colors.text}`}>{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
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
