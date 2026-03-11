import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, CheckCircle, Monitor, Laptop, Server, Printer, Smartphone, Tablet, Headphones, HardDrive, Cpu, Wifi, Shield, Wrench, Package, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroIT from "@/assets/hero-it.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const CatalogueIT = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  const sections = [
    {
      id: "desktops",
      icon: Monitor,
      title: fr ? "Ordinateurs de Bureau Professionnels" : "Professional Desktop Computers",
      desc: fr
        ? "Des solutions robustes et performantes pour PME, ONG et administrations — avec processeurs Intel Core i5 13e génération, 16 GB RAM et SSD NVMe 512 GB sous Windows 11 Pro."
        : "Robust, high-performance solutions for SMBs, NGOs, and administrations — with Intel Core i5 13th gen processors, 16 GB RAM and NVMe SSD 512 GB under Windows 11 Pro.",
      image: "/catalogue/desktops.jpg",
      packs: [
        { badge: "Pack Basic", name: "HP ProDesk 400 G9/G10", specs: fr ? ["Intel Core i5 13e gén.", "16 GB DDR4 / SSD NVMe 512 GB", "Faible consommation énergétique", "Idéal : PME, ONG, comptabilité"] : ["Intel Core i5 13th gen", "16 GB DDR4 / NVMe SSD 512 GB", "Low power consumption", "Ideal: SMB, NGO, accounting"] },
        { badge: "Pack Business", name: "Lenovo ThinkCentre Neo 50", specs: fr ? ["Intel Core i5 13e gén.", "16 GB RAM / SSD 512 GB", "Robustesse Lenovo éprouvée", "Excellent rapport qualité/prix"] : ["Intel Core i5 13th gen", "16 GB RAM / SSD 512 GB", "Proven Lenovo reliability", "Excellent value"] },
        { badge: "Pack Premium", name: "Dell OptiPlex 7010/7020", specs: fr ? ["Intel Core i5 13e gén.", "16 GB RAM / SSD 512 GB", "Sécurité et gestion IT centralisée", "Standard entreprises internationales"] : ["Intel Core i5 13th gen", "16 GB RAM / SSD 512 GB", "Centralized IT security & management", "International enterprise standard"] },
      ],
    },
    {
      id: "allinone",
      icon: Monitor,
      title: fr ? "Ordinateurs All-in-One" : "All-in-One Computers",
      desc: fr
        ? "Très plébiscités dans les banques, réceptions, directions et écoles — design épuré, gain d'espace et performance dans un seul appareil."
        : "Highly popular in banks, receptions, management offices and schools — clean design, space-saving and performance in a single device.",
      image: "/catalogue/allinone.jpg",
      packs: [
        { badge: "Pack Basic", name: "HP EliteOne 870 G9", specs: fr ? ["Écran 27\" Full HD", "Intel Core i7 13e gén.", "16 GB RAM / SSD 512 GB", "Design premium, très silencieux"] : ["27\" Full HD display", "Intel Core i7 13th gen", "16 GB RAM / SSD 512 GB", "Premium design, ultra-quiet"] },
        { badge: "Pack Business", name: "Lenovo ThinkCentre Neo 50a", specs: fr ? ["Écran 23.8\"", "Intel Core i5 13e gén.", "16 GB RAM / SSD 512 GB", "Installation rapide, faible conso."] : ["23.8\" display", "Intel Core i5 13th gen", "16 GB RAM / SSD 512 GB", "Quick setup, low power"] },
        { badge: "Pack Premium", name: "Dell OptiPlex 7410 AIO", specs: fr ? ["Écran 24\"", "Intel Core i5/i7 13e gén.", "SSD NVMe haute performance", "Sécurité et gestion IT Dell"] : ["24\" display", "Intel Core i5/i7 13th gen", "High-performance NVMe SSD", "Dell IT security & management"] },
      ],
    },
    {
      id: "laptops",
      icon: Laptop,
      title: fr ? "Ordinateurs Portables Professionnels" : "Professional Laptops",
      desc: fr
        ? "Conçus pour les professionnels en mobilité : consultants, équipes terrain, ONG. Autonomie élevée, robustesse et sécurité intégrée."
        : "Designed for mobile professionals: consultants, field teams, NGOs. Extended battery life, durability and built-in security.",
      image: "/catalogue/laptops.jpg",
      packs: [
        { badge: "HP", name: "HP ProBook 450 G10", specs: fr ? ["Écran 15.6\" · Intel Core i5", "16 GB · SSD 512 GB · Autonomie 10h", "Idéal consultants et ONG"] : ["15.6\" · Intel Core i5", "16 GB · SSD 512 GB · 10h battery", "Ideal for consultants and NGOs"] },
        { badge: "Lenovo", name: "Lenovo ThinkPad E14", specs: fr ? ["Écran 14\" · Intel Core i5", "16 GB · SSD 512 GB", "Clavier professionnel, sécurité avancée"] : ["14\" · Intel Core i5", "16 GB · SSD 512 GB", "Pro keyboard, advanced security"] },
        { badge: "Dell", name: "Dell Latitude 5440", specs: fr ? ["Intel Core i5 13e · 16 GB · SSD NVMe", "Sécurité entreprise renforcée", "Grande autonomie et durabilité"] : ["Intel Core i5 13th · 16 GB · NVMe SSD", "Enhanced enterprise security", "Extended battery and durability"] },
      ],
    },
    {
      id: "blackview-phones",
      icon: Smartphone,
      title: fr ? "Smartphones Industriels Blackview" : "Blackview Industrial Smartphones",
      desc: fr
        ? "Des smartphones robustes nouvelle génération conçus pour les environnements exigeants : chantiers, terrain, industrie. Certifiés militaires, étanches et ultra-endurants."
        : "Next-generation rugged smartphones built for demanding environments: construction sites, fieldwork, industry. Military-certified, waterproof and ultra-durable.",
      image: "/catalogue/blackview-phones.jpg",
      packs: [
        { badge: "Flagship", name: "Blackview BL9000", specs: fr ? ["6.78\" 2.4K · Dimensity 8020 5G", "24 GB RAM · 512 GB · 8800 mAh", "120W charge rapide · Caméra 50 MP", "IP68/IP69K · MIL-STD-810H"] : ["6.78\" 2.4K · Dimensity 8020 5G", "24 GB RAM · 512 GB · 8800 mAh", "120W fast charge · 50 MP camera", "IP68/IP69K · MIL-STD-810H"] },
        { badge: "Endurance", name: "Blackview BV9300", specs: fr ? ["6.7\" 2.3K · Helio G99", "21 GB RAM · 256 GB (1 TB ext.)", "Batterie 15 080 mAh · Multi-jours", "IP68/IP69K · NFC · GPS"] : ["6.7\" 2.3K · Helio G99", "21 GB RAM · 256 GB (1 TB ext.)", "15,080 mAh · Multi-day battery", "IP68/IP69K · NFC · GPS"] },
        { badge: fr ? "Tablette" : "Tablet", name: "Blackview Active 8 Pro", specs: fr ? ["Tablette 10.36\" 2.4K IPS", "Helio G99 · 8 GB · 256 GB", "22 000 mAh · 1440h veille", "IP68/IP69K · Dual SIM 4G"] : ["10.36\" 2.4K IPS Tablet", "Helio G99 · 8 GB · 256 GB", "22,000 mAh · 1440h standby", "IP68/IP69K · Dual SIM 4G"] },
      ],
    },
    {
      id: "blackview-mega2",
      icon: Tablet,
      title: fr ? "Tablette Blackview Mega 2" : "Blackview Mega 2 Tablet",
      desc: fr
        ? "Tablette moderne conçue pour la productivité, l'éducation et les projets de transformation digitale en Afrique. Excellent équilibre entre performance, autonomie et prix compétitif — idéale pour les déploiements à grande échelle."
        : "Modern tablet designed for productivity, education and digital transformation projects in Africa. Excellent balance of performance, battery life and competitive price — ideal for large-scale deployments.",
      image: "/catalogue/blackview-mega2.jpg",
      packs: [
        { badge: fr ? "Éducation" : "Education", name: "Blackview Mega 2", specs: fr ? ["Écran 12\" IPS FHD+ · 2000×1200 px", "Unisoc T615 · 12 GB RAM · 256 GB", "9 000 mAh · Caméra 50 MP Samsung", "Android 15 · Mode PC · Stylet inclus"] : ["12\" IPS FHD+ · 2000×1200 px", "Unisoc T615 · 12 GB RAM · 256 GB", "9,000 mAh · 50 MP Samsung camera", "Android 15 · PC Mode · Stylus included"] },
      ],
      useCases: fr
        ? ["Éducation & Formation — classes numériques et eLearning", "Productivité Terrain — mode PC, split-screen, clavier Bluetooth", "Transformation Digitale — déploiement massif ONG et institutions"]
        : ["Education & Training — digital classrooms and eLearning", "Field Productivity — PC mode, split-screen, Bluetooth keyboard", "Digital Transformation — mass deployment for NGOs and institutions"],
    },
    {
      id: "servers",
      icon: Server,
      title: fr ? "Serveurs & Stockage" : "Servers & Storage",
      desc: fr
        ? "Infrastructure serveur et stockage NAS pour hébergement, sauvegardes et gestion de fichiers. Solutions évolutives de la PME au data center."
        : "Server and NAS storage infrastructure for hosting, backups and file management. Scalable solutions from SMB to data center.",
      image: "/catalogue/servers.jpg",
      packs: [
        { badge: fr ? "Serveur" : "Server", name: "Dell PowerEdge T150", specs: fr ? ["Intel Xeon · 16–64 GB RAM", "Fichiers, sauvegardes, gestion utilisateurs", "Idéal PME"] : ["Intel Xeon · 16–64 GB RAM", "Files, backups, user management", "Ideal for SMBs"] },
        { badge: fr ? "Serveur" : "Server", name: "HPE ProLiant ML30 Gen11", specs: fr ? ["Intel Xeon E · jusqu'à 128 GB RAM", "Fiabilité HPE Enterprise", "Évolutif selon la croissance"] : ["Intel Xeon E · up to 128 GB RAM", "HPE Enterprise reliability", "Scalable with growth"] },
        { badge: "NAS", name: "Synology DS923+ / DS1821+", specs: fr ? ["4 à 8 baies · jusqu'à 144 TB", "Sauvegarde auto, cloud privé", "Partage de fichiers entreprise"] : ["4 to 8 bays · up to 144 TB", "Auto backup, private cloud", "Enterprise file sharing"] },
      ],
    },
    {
      id: "printing",
      icon: Printer,
      title: fr ? "Impression & Connectivité" : "Printing & Connectivity",
      desc: fr
        ? "Imprimantes professionnelles et infrastructure réseau Ubiquiti UniFi pour une connectivité d'entreprise fiable et sécurisée."
        : "Professional printers and Ubiquiti UniFi network infrastructure for reliable and secure enterprise connectivity.",
      image: "/catalogue/printing.jpg",
      packs: [
        { badge: "HP", name: "HP LaserJet Pro MFP M428fdw", specs: fr ? ["Impression · Scan · Copie · Réseau", "40 pages/min", "Référence PME et institutions"] : ["Print · Scan · Copy · Network", "40 pages/min", "SMB & institution standard"] },
        { badge: "Epson", name: "Epson EcoTank L6490", specs: fr ? ["Jet d'encre économique", "Coût par page ultra-faible", "Grande autonomie d'encre"] : ["Economical inkjet", "Ultra-low cost per page", "High ink autonomy"] },
        { badge: fr ? "Réseau" : "Network", name: "Ubiquiti UniFi", specs: fr ? ["Dream Machine · Firewall · WiFi entreprise", "Switches 8/24/48 ports", "Points d'accès WiFi professionnels"] : ["Dream Machine · Firewall · Enterprise WiFi", "8/24/48-port switches", "Professional WiFi access points"] },
      ],
    },
  ];

  const itPacks = [
    {
      name: fr ? "Pack PME" : "SMB Pack",
      items: fr ? ["5 ordinateurs professionnels", "1 imprimante réseau", "1 NAS sauvegarde", "Installation complète incluse"] : ["5 professional computers", "1 network printer", "1 backup NAS", "Full installation included"],
    },
    {
      name: fr ? "Pack Entreprise" : "Enterprise Pack",
      items: fr ? ["10 ordinateurs professionnels", "1 serveur dédié", "1 NAS haute capacité", "1 imprimante réseau"] : ["10 professional computers", "1 dedicated server", "1 high-capacity NAS", "1 network printer"],
      popular: true,
    },
    {
      name: fr ? "Pack Sur Mesure" : "Custom Pack",
      items: fr ? ["Configuration adaptée à vos besoins", "Réseau complet Ubiquiti UniFi", "Serveur + stockage + sécurité", "Support et maintenance inclus"] : ["Configuration tailored to your needs", "Complete Ubiquiti UniFi network", "Server + storage + security", "Support and maintenance included"],
    },
  ];

  const maintenancePacks = [
    { name: "Pack Basic", features: fr ? ["1 visite / mois", "Mises à jour systèmes", "Diagnostic et antivirus"] : ["1 visit / month", "System updates", "Diagnostics and antivirus"] },
    { name: "Pack Business", features: fr ? ["2 visites / mois", "Support utilisateurs", "Dépannage réseau inclus"] : ["2 visits / month", "User support", "Network troubleshooting included"], popular: true },
    { name: "Pack Premium", features: fr ? ["Support complet prioritaire", "Monitoring continu", "Sauvegarde et sécurité avancées"] : ["Priority full support", "Continuous monitoring", "Advanced backup & security"] },
  ];

  const accessories = [
    { icon: Monitor, name: fr ? "Écran Dell UltraSharp U2723QE" : "Dell UltraSharp U2723QE", desc: fr ? "27\" QHD · Hub USB-C · Ergonomie avancée" : "27\" QHD · USB-C Hub · Advanced ergonomics" },
    { icon: Headphones, name: fr ? "Kit Conférence Logitech" : "Logitech Conference Kit", desc: fr ? "Webcam Brio 500 + Casque Zone Wireless" : "Brio 500 Webcam + Zone Wireless Headset" },
    { icon: HardDrive, name: fr ? "Station d'Accueil HP USB-C G5" : "HP USB-C G5 Docking Station", desc: fr ? "HDMI, DisplayPort, Ethernet · Charge 100W" : "HDMI, DisplayPort, Ethernet · 100W charging" },
    { icon: Cpu, name: fr ? "Stockage SSD Portable" : "Portable SSD Storage", desc: fr ? "Rapide, compact et sécurisé pour données critiques" : "Fast, compact and secure for critical data" },
    { icon: Wifi, name: fr ? "Hub USB-C Multifonction" : "Multifunction USB-C Hub", desc: fr ? "HDMI, USB 3.0, Ethernet, lecteur cartes" : "HDMI, USB 3.0, Ethernet, card reader" },
    { icon: Shield, name: fr ? "Sécurité Kensington" : "Kensington Security", desc: fr ? "Verrous anti-vol pour postes et écrans" : "Anti-theft locks for workstations and monitors" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={heroIT} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-pattern" />

        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="max-w-3xl">
            <Link to="/produits" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {fr ? 'Retour aux produits' : 'Back to products'}
            </Link>
            <span className="block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {fr ? 'Catalogue IT' : 'IT Catalogue'}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {fr ? 'La technologie qui propulse votre business' : 'Technology that drives your business'}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {fr ? 'Ordinateurs · Serveurs · Réseaux · Impression · Maintenance' : 'Computers · Servers · Networks · Printing · Maintenance'}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Nav */}
      <section className="py-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-md z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.title.length > 25 ? s.title.slice(0, 22) + '…' : s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {sections.map((section, sIndex) => (
        <section key={section.id} id={section.id} className={`py-20 ${sIndex % 2 === 1 ? 'bg-muted/20' : ''}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{section.desc}</p>
            </motion.div>

            {/* Catalogue page screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 rounded-2xl overflow-hidden shadow-premium border border-border/30"
            >
              <img src={section.image} alt={section.title} className="w-full h-auto" />
            </motion.div>

            {/* Packs Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {section.packs.map((pack, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-premium transition-all duration-300"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent mb-3">
                    {pack.badge}
                  </span>
                  <h3 className="font-heading text-lg font-bold mb-4">{pack.name}</h3>
                  <ul className="space-y-2">
                    {pack.specs.map((spec, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Use cases for Mega 2 */}
            {section.useCases && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-accent/5 rounded-xl p-6 border border-accent/20"
              >
                <h4 className="font-heading font-bold mb-4">{fr ? 'Utilisations' : 'Use Cases'}</h4>
                <ul className="space-y-2">
                  {section.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* IT Packs */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Package className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold mb-3">{fr ? 'Packs IT Entreprise' : 'Enterprise IT Packs'}</h2>
            <p className="text-muted-foreground text-lg">
              {fr ? 'Des solutions clés en main incluant matériel, installation et configuration.' : 'Turnkey solutions including hardware, installation and configuration.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {itPacks.map((pack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl p-8 border ${pack.popular ? 'border-accent shadow-accent/20 shadow-lg ring-2 ring-accent/20' : 'border-border/50'} text-center`}
              >
                <h3 className="font-heading text-xl font-bold mb-6">{pack.name}</h3>
                <ul className="space-y-3 text-left">
                  {pack.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant={pack.popular ? "accent" : "outline"} className="w-full mt-6" asChild>
                  <Link to="/contact">
                    {fr ? 'Demander un devis' : 'Get a quote'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Contracts */}
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Wrench className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold mb-3">{fr ? 'Contrats de Maintenance IT' : 'IT Maintenance Contracts'}</h2>
            <p className="text-muted-foreground text-lg">
              {fr ? "Assurez la continuité de votre infrastructure avec des contrats adaptés." : "Ensure infrastructure continuity with tailored contracts."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePacks.map((pack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl p-8 border ${pack.popular ? 'border-accent shadow-accent/20 shadow-lg ring-2 ring-accent/20' : 'border-border/50'} text-center`}
              >
                <h3 className="font-heading text-xl font-bold mb-6">{pack.name}</h3>
                <ul className="space-y-3 text-left">
                  {pack.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">{fr ? 'Accessoires Informatiques' : 'IT Accessories'}</h2>
            <p className="text-muted-foreground text-lg">
              {fr ? 'Optimisez votre poste de travail avec des accessoires fiables.' : 'Optimize your workspace with reliable accessories.'}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((acc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-5 border border-border/50 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <acc.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm mb-1">{acc.name}</h4>
                  <p className="text-xs text-muted-foreground">{acc.desc}</p>
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
              {fr ? 'Besoin d\'un devis personnalisé ?' : 'Need a custom quote?'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {fr ? 'Contactez-nous pour une offre adaptée à votre organisation.' : 'Contact us for an offer tailored to your organization.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {fr ? 'Demander un devis' : 'Request a quote'}
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

export default CatalogueIT;
