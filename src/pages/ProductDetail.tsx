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
      "/products/senben-high-bay.webp",
      "/products/senben-floodlight.webp",
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
      { name: "Éclairages Haute Baie (High Bay)", description: "Luminaires haute puissance pour grands espaces avec hauteur sous plafond importante. Disponibles en versions ATEX et standard, de 50W à 600W, pour usines, entrepôts et halls industriels.", image: "/products/senben-high-bay.webp" },
      { name: "Projecteurs LED (Floodlights)", description: "Projecteurs industriels à large faisceau pour éclairage extérieur de chantiers, parkings, périmètres de sécurité et zones portuaires. Versions antidéflagrantes disponibles.", image: "/products/senben-floodlight.webp" },
    ],
    productsEn: [
      { name: "Explosion Proof Luminaires (ATEX)", description: "Complete range of ATEX/IECEx certified luminaires for explosive atmosphere zones (Zone 1, Zone 2, Zone 21, Zone 22). High Bay, Low Bay, Street Light, Panel Light, and torch lights. Designed for refineries, oil platforms, and chemical plants.", image: "/products/senben-explosion-proof.webp" },
      { name: "Weatherproof Luminaires", description: "IP65+ weather-resistant luminaires for non-hazardous industrial environments. Durable solutions for warehouses, hangars, tunnels, and outdoor installations exposed to severe weather conditions.", image: "/products/senben-weatherproof.webp" },
      { name: "High Bay Lights", description: "High-power luminaires for large spaces with high ceilings. Available in ATEX and standard versions, from 50W to 600W, for factories, warehouses, and industrial halls.", image: "/products/senben-high-bay.webp" },
      { name: "LED Floodlights", description: "Industrial floodlights with wide beam for outdoor lighting of construction sites, parking lots, security perimeters, and port areas. Explosion-proof versions available.", image: "/products/senben-floodlight.webp" },
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
    slug: "equipements-it",
    titleFr: "Matériel Informatique — La technologie qui propulse votre business",
    titleEn: "IT Equipment — Technology that powers your business",
    image: "/products/laptop-generic.jpg",
    galleryImages: [
      "/products/dell-optiplex.jpg",
      "/products/dell-latitude.jpg",
      "/products/blackview-mega2.jpg",
      "/products/dell-poweredge-t150.jpg",
    ],
    color: "accent",
    servicePath: "/services/it",
    partnerName: "Dell / HP / Lenovo / Blackview / Ubiquiti",
    descriptionFr: "DGS AFRICA accompagne les entreprises, ONG, institutions et administrations dans la mise en place d'infrastructures informatiques fiables et performantes, adaptées aux réalités de l'Afrique de l'Ouest. Fourniture matériel, installation & configuration, sécurité & sauvegarde, infrastructure réseau.",
    descriptionEn: "DGS AFRICA supports businesses, NGOs, institutions, and administrations in setting up reliable and high-performance IT infrastructure, adapted to the realities of West Africa. Hardware supply, installation & configuration, security & backup, network infrastructure.",
    whyDgsFr: "Matériel certifié HP, Dell, Lenovo, Blackview et Ubiquiti. Déploiement rapide par nos techniciens certifiés. Support local et maintenance réactive en Afrique de l'Ouest. Solutions évolutives qui grandissent avec votre organisation.",
    whyDgsEn: "Certified HP, Dell, Lenovo, Blackview, and Ubiquiti hardware. Fast deployment by our certified technicians. Local support and responsive maintenance in West Africa. Scalable solutions that grow with your organization.",
    detailsFr: [
      "Partenaire officiel Dell Technologies, HP, Lenovo, Blackview & Ubiquiti",
      "Ordinateurs de bureau : HP ProDesk, Lenovo ThinkCentre, Dell OptiPlex",
      "All-in-One : HP EliteOne 870, Lenovo Neo 50a, Dell OptiPlex 7410 AIO",
      "Portables : HP ProBook, Lenovo ThinkPad, Dell Latitude",
      "Smartphones & tablettes durcis Blackview (IP68/IP69K, MIL-STD-810H)",
      "Serveurs Dell PowerEdge & HPE ProLiant, NAS Synology",
      "Imprimantes HP LaserJet, Epson EcoTank, Canon imagePRESS",
      "Réseau Ubiquiti UniFi — switches, WiFi et firewall",
      "Accessoires : écrans Dell UltraSharp, kits Logitech, SSD portables",
      "Packs IT clés en main (PME, Entreprise, Sur Mesure)",
      "Contrats de maintenance : Basic, Business, Premium",
    ],
    detailsEn: [
      "Official Dell Technologies, HP, Lenovo, Blackview & Ubiquiti partner",
      "Desktop PCs: HP ProDesk, Lenovo ThinkCentre, Dell OptiPlex",
      "All-in-One: HP EliteOne 870, Lenovo Neo 50a, Dell OptiPlex 7410 AIO",
      "Laptops: HP ProBook, Lenovo ThinkPad, Dell Latitude",
      "Blackview rugged smartphones & tablets (IP68/IP69K, MIL-STD-810H)",
      "Dell PowerEdge & HPE ProLiant servers, Synology NAS",
      "HP LaserJet, Epson EcoTank, Canon imagePRESS printers",
      "Ubiquiti UniFi networking — switches, WiFi, and firewall",
      "Accessories: Dell UltraSharp monitors, Logitech kits, portable SSDs",
      "Turnkey IT packs (SMB, Enterprise, Custom)",
      "Maintenance contracts: Basic, Business, Premium",
    ],
    productsFr: [
      { name: "HP ProDesk 400 G9/G10", description: "Ordinateur de bureau Intel Core i5 13e gén., 16 GB DDR4, SSD NVMe 512 GB. Faible consommation énergétique. Idéal PME, ONG, comptabilité.", image: "/products/hp-probook.jpg" },
      { name: "Lenovo ThinkCentre Neo 50", description: "Intel Core i5 13e gén., 16 GB RAM, SSD 512 GB. Robustesse Lenovo éprouvée, excellent rapport qualité/prix.", image: "/products/lenovo-thinkcentre.jpg" },
      { name: "Dell OptiPlex 7010/7020", description: "Intel Core i5 13e gén., 16 GB RAM, SSD 512 GB. Sécurité et gestion IT centralisée, standard entreprises internationales.", image: "/products/dell-optiplex.jpg" },
      { name: "HP EliteOne 870 G9 (All-in-One)", description: "Écran 27\" Full HD, Intel Core i7 13e gén., 16 GB RAM, SSD 512 GB. Design premium, très silencieux.", image: "/products/hp-eliteone.jpg" },
      { name: "Lenovo ThinkCentre Neo 50a (AIO)", description: "Écran 23.8\", Intel Core i5 13e gén., 16 GB RAM, SSD 512 GB. Installation rapide, faible consommation.", image: "/products/lenovo-neo50a.jpg" },
      { name: "Dell OptiPlex 7410 AIO", description: "Écran 24\", Intel Core i5/i7 13e gén., SSD NVMe haute performance. Sécurité et gestion IT Dell.", image: "/products/dell-optiplex-aio.jpg" },
      { name: "HP ProBook 450 G10", description: "Portable 15.6\", Intel Core i5, 16 GB, SSD 512 GB, autonomie 10h. Idéal entreprises, consultants et ONG.", image: "/products/hp-probook-laptop.jpg" },
      { name: "Lenovo ThinkPad E14", description: "Portable 14\", Intel Core i5, 16 GB, SSD 512 GB. Robustesse légendaire, clavier professionnel et sécurité avancée.", image: "/products/lenovo-thinkpad.jpg" },
      { name: "Dell Latitude 5440", description: "Intel Core i5 13e gén., 16 GB, SSD NVMe. Sécurité entreprise renforcée, autonomie élevée et grande durabilité.", image: "/products/dell-latitude.jpg" },
      { name: "Blackview BL9000 (Smartphone 5G)", description: "Écran 6.78\" 2.4K 120Hz, Dimensity 8020 5G, 24 GB RAM, 512 GB, batterie 8800 mAh, charge 120W. IP68/IP69K, MIL-STD-810H.", image: "/products/blackview-bl9000.jpg" },
      { name: "Blackview BV9300", description: "Écran 6.7\" 2.3K 120Hz, Helio G99, 21 GB RAM, 256 GB, batterie 15 080 mAh. IP68/IP69K, autonomie multi-jours.", image: "/products/blackview-bv9300.jpg" },
      { name: "Blackview Active 8 Pro (Tablette)", description: "Tablette industrielle 10.36\" 2.4K, Helio G99, 8 GB RAM, 256 GB, batterie 22 000 mAh. IP68/IP69K, MIL-STD-810H.", image: "/products/blackview-active8pro.jpg" },
      { name: "Blackview Mega 2 (Tablette)", description: "Tablette 12\" IPS FHD+, Unisoc T615, 12 GB RAM, 256 GB, batterie 9 000 mAh. Android 15, Mode PC, stylet inclus. Idéale déploiement massif.", image: "/products/blackview-mega2.jpg" },
      { name: "Dell PowerEdge T150 (Serveur)", description: "Serveur tour Intel Xeon, jusqu'à 64 GB RAM. Fichiers, sauvegardes, gestion utilisateurs. Idéal PME.", image: "/products/dell-poweredge-t150.jpg" },
      { name: "HPE ProLiant ML30 Gen11", description: "Serveur Intel Xeon E, jusqu'à 128 GB RAM. Fiabilité HPE Enterprise, évolutif selon la croissance." },
      { name: "Synology DS923+ / DS1821+ (NAS)", description: "Stockage réseau 4 à 8 baies (72–144 TB). Sauvegarde automatique, cloud privé, partage de fichiers.", image: "/products/synology-nas.jpg" },
      { name: "HP LaserJet Pro MFP M428fdw", description: "Impression, scan, copie, réseau. 40 pages/min. Référence pour cabinets, PME et institutions.", image: "/products/hp-laserjet.jpg" },
      { name: "Ubiquiti UniFi (Réseau)", description: "UniFi Dream Machine : firewall, WiFi entreprise, gestion centralisée. Switches 8/24/48 ports et points d'accès WiFi pro.", image: "/products/ubiquiti-unifi.jpg" },
      { name: "Dell UltraSharp U2723QE (Écran)", description: "27\" QHD (2560×1440), hub USB-C intégré, ergonomie avancée (pivot, inclinaison, hauteur). Idéal multitâche.", image: "/products/dell-ultrasharp.jpg" },
      { name: "Kit Conférence Logitech", description: "Webcam Brio 500 Full HD + Casque Zone Wireless. Audio HD, micro anti-bruit. Essentiel télétravail et visioconférence.", image: "/products/logitech-conference.jpg" },
      { name: "SSD Portable & Hub USB-C", description: "Stockage SSD compact et sécurisé pour sauvegardes terrain. Hub USB-C multifonction : HDMI, USB 3.0, Ethernet, lecteur cartes.", image: "/products/ssd-portable.jpg" },
    ],
    productsEn: [
      { name: "HP ProDesk 400 G9/G10", description: "Desktop Intel Core i5 13th gen, 16 GB DDR4, SSD NVMe 512 GB. Low power consumption. Ideal for SMBs, NGOs, accounting.", image: "/products/hp-probook.jpg" },
      { name: "Lenovo ThinkCentre Neo 50", description: "Intel Core i5 13th gen, 16 GB RAM, SSD 512 GB. Proven Lenovo robustness, excellent value.", image: "/products/lenovo-thinkcentre.jpg" },
      { name: "Dell OptiPlex 7010/7020", description: "Intel Core i5 13th gen, 16 GB RAM, SSD 512 GB. Centralized IT security and management, international enterprise standard.", image: "/products/dell-optiplex.jpg" },
      { name: "HP EliteOne 870 G9 (All-in-One)", description: "27\" Full HD screen, Intel Core i7 13th gen, 16 GB RAM, SSD 512 GB. Premium design, ultra-quiet.", image: "/products/hp-eliteone.jpg" },
      { name: "Lenovo ThinkCentre Neo 50a (AIO)", description: "23.8\" screen, Intel Core i5 13th gen, 16 GB RAM, SSD 512 GB. Quick setup, low power consumption.", image: "/products/lenovo-neo50a.jpg" },
      { name: "Dell OptiPlex 7410 AIO", description: "24\" screen, Intel Core i5/i7 13th gen, high-performance SSD NVMe. Dell IT security and management.", image: "/products/dell-optiplex-aio.jpg" },
      { name: "HP ProBook 450 G10", description: "15.6\" laptop, Intel Core i5, 16 GB, SSD 512 GB, 10h battery. Ideal for businesses, consultants, and NGOs.", image: "/products/hp-probook-laptop.jpg" },
      { name: "Lenovo ThinkPad E14", description: "14\" laptop, Intel Core i5, 16 GB, SSD 512 GB. Legendary robustness, professional keyboard, advanced security.", image: "/products/lenovo-thinkpad.jpg" },
      { name: "Dell Latitude 5440", description: "Intel Core i5 13th gen, 16 GB, SSD NVMe. Enhanced enterprise security, high battery life, great durability.", image: "/products/dell-latitude.jpg" },
      { name: "Blackview BL9000 (5G Smartphone)", description: "6.78\" 2.4K 120Hz screen, Dimensity 8020 5G, 24 GB RAM, 512 GB, 8800 mAh battery, 120W charging. IP68/IP69K, MIL-STD-810H.", image: "/products/blackview-bl9000.jpg" },
      { name: "Blackview BV9300", description: "6.7\" 2.3K 120Hz screen, Helio G99, 21 GB RAM, 256 GB, 15,080 mAh battery. IP68/IP69K, multi-day autonomy.", image: "/products/blackview-bv9300.jpg" },
      { name: "Blackview Active 8 Pro (Tablet)", description: "10.36\" 2.4K industrial tablet, Helio G99, 8 GB RAM, 256 GB, 22,000 mAh battery. IP68/IP69K, MIL-STD-810H.", image: "/products/blackview-active8pro.jpg" },
      { name: "Blackview Mega 2 (Tablet)", description: "12\" IPS FHD+ tablet, Unisoc T615, 12 GB RAM, 256 GB, 9,000 mAh battery. Android 15, PC Mode, stylus included. Ideal for mass deployment.", image: "/products/blackview-mega2.jpg" },
      { name: "Dell PowerEdge T150 (Server)", description: "Tower server Intel Xeon, up to 64 GB RAM. Files, backups, user management. Ideal for SMBs.", image: "/products/dell-poweredge-t150.jpg" },
      { name: "HPE ProLiant ML30 Gen11", description: "Intel Xeon E server, up to 128 GB RAM. HPE Enterprise reliability, scalable with growth." },
      { name: "Synology DS923+ / DS1821+ (NAS)", description: "4 to 8-bay network storage (72–144 TB). Automatic backup, private cloud, file sharing.", image: "/products/synology-nas.jpg" },
      { name: "HP LaserJet Pro MFP M428fdw", description: "Print, scan, copy, network. 40 pages/min. Reference for firms, SMBs, and institutions.", image: "/products/hp-laserjet.jpg" },
      { name: "Ubiquiti UniFi (Networking)", description: "UniFi Dream Machine: firewall, enterprise WiFi, centralized management. 8/24/48-port switches and pro WiFi access points.", image: "/products/ubiquiti-unifi.jpg" },
      { name: "Dell UltraSharp U2723QE (Monitor)", description: "27\" QHD (2560×1440), built-in USB-C hub, advanced ergonomics (pivot, tilt, height). Ideal for multitasking.", image: "/products/dell-ultrasharp.jpg" },
      { name: "Logitech Conference Kit", description: "Brio 500 Full HD webcam + Zone Wireless headset. HD audio, noise-canceling mic. Essential for remote work and video calls.", image: "/products/logitech-conference.jpg" },
      { name: "Portable SSD & USB-C Hub", description: "Compact and secure SSD storage for field backups. USB-C multifunction hub: HDMI, USB 3.0, Ethernet, card reader.", image: "/products/ssd-portable.jpg" },
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
                  <div className="h-40 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className={`font-heading text-lg font-bold mb-2 ${colors.text}`}>{item.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.description}</p>
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
