import Layout from "@/components/layout/Layout";
import { Monitor, Laptop, Server, Printer, Tablet, ArrowRight, CheckCircle, Users, Award, Database, TrendingUp, Smartphone, Headphones, Cpu, Wifi, Shield, Package, Wrench, HardDrive } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroIT from "@/assets/hero-it.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const ServiceIT = () => {
  const { language } = useLanguage();
  const fr = language === 'fr';

  /* ─── Service offerings (catalogue-accurate) ─── */
  const services = [
    {
      icon: Monitor,
      title: fr ? "Ordinateurs de Bureau" : "Desktop Computers",
      desc: fr
        ? "Des solutions robustes et performantes pour PME, ONG et administrations — avec processeurs Intel Core i5 13e génération, 16 GB RAM et SSD NVMe 512 GB sous Windows 11 Pro."
        : "Robust, high-performance solutions for SMBs, NGOs, and administrations — with Intel Core i5 13th gen processors, 16 GB RAM and NVMe SSD 512 GB under Windows 11 Pro.",
      packs: [
        { name: "HP ProDesk 400 G9/G10", specs: fr ? ["Intel Core i5 13e gén.", "16 GB DDR4 / SSD NVMe 512 GB", "Faible consommation", "Idéal : PME, ONG, comptabilité"] : ["Intel Core i5 13th gen", "16 GB DDR4 / NVMe SSD 512 GB", "Low power consumption", "Ideal: SMB, NGO, accounting"], badge: "Pack Basic" },
        { name: "Lenovo ThinkCentre Neo 50", specs: fr ? ["Intel Core i5 13e gén.", "16 GB RAM / SSD 512 GB", "Robustesse Lenovo éprouvée", "Excellent rapport qualité/prix"] : ["Intel Core i5 13th gen", "16 GB RAM / SSD 512 GB", "Proven Lenovo reliability", "Excellent value"], badge: "Pack Business" },
        { name: "Dell OptiPlex 7010/7020", specs: fr ? ["Intel Core i5 13e gén.", "16 GB RAM / SSD 512 GB", "Sécurité et gestion IT centralisée", "Standard entreprises internationales"] : ["Intel Core i5 13th gen", "16 GB RAM / SSD 512 GB", "Centralized IT security & management", "International enterprise standard"], badge: "Pack Premium" },
      ],
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    },
    {
      icon: Monitor,
      title: fr ? "Ordinateurs All-in-One" : "All-in-One Computers",
      desc: fr
        ? "Très plébiscités dans les banques, réceptions, directions et écoles — design épuré, gain d'espace et performance dans un seul appareil."
        : "Highly popular in banks, receptions, management offices and schools — clean design, space-saving and performance in a single device.",
      packs: [
        { name: "HP EliteOne 870 G9", specs: fr ? ["Écran 27\" Full HD", "Intel Core i7 13e gén.", "16 GB RAM / SSD 512 GB", "Design premium, très silencieux"] : ["27\" Full HD display", "Intel Core i7 13th gen", "16 GB RAM / SSD 512 GB", "Premium design, ultra-quiet"], badge: "Pack Basic" },
        { name: "Lenovo ThinkCentre Neo 50a", specs: fr ? ["Écran 23.8\"", "Intel Core i5 13e gén.", "16 GB RAM / SSD 512 GB", "Installation rapide, faible conso."] : ["23.8\" display", "Intel Core i5 13th gen", "16 GB RAM / SSD 512 GB", "Quick setup, low power"], badge: "Pack Business" },
        { name: "Dell OptiPlex 7410 AIO", specs: fr ? ["Écran 24\"", "Intel Core i5/i7 13e gén.", "SSD NVMe haute performance", "Sécurité et gestion IT Dell"] : ["24\" display", "Intel Core i5/i7 13th gen", "High-performance NVMe SSD", "Dell IT security & management"], badge: "Pack Premium" },
      ],
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    },
    {
      icon: Laptop,
      title: fr ? "Ordinateurs Portables" : "Professional Laptops",
      desc: fr
        ? "Conçus pour les professionnels en mobilité : consultants, équipes terrain, ONG. Autonomie élevée, robustesse et sécurité intégrée."
        : "Designed for mobile professionals: consultants, field teams, NGOs. Extended battery life, durability and built-in security.",
      packs: [
        { name: "HP ProBook 450 G10", specs: fr ? ["Écran 15.6\" · Intel Core i5", "16 GB · SSD 512 GB · Autonomie 10h", "Idéal consultants et ONG"] : ["15.6\" · Intel Core i5", "16 GB · SSD 512 GB · 10h battery", "Ideal for consultants and NGOs"], badge: "HP" },
        { name: "Lenovo ThinkPad E14", specs: fr ? ["Écran 14\" · Intel Core i5", "16 GB · SSD 512 GB", "Clavier professionnel, sécurité avancée"] : ["14\" · Intel Core i5", "16 GB · SSD 512 GB", "Pro keyboard, advanced security"], badge: "Lenovo" },
        { name: "Dell Latitude 5440", specs: fr ? ["Intel Core i5 13e · 16 GB · SSD NVMe", "Sécurité entreprise renforcée", "Grande autonomie et durabilité"] : ["Intel Core i5 13th · 16 GB · NVMe SSD", "Enhanced enterprise security", "Extended battery and durability"], badge: "Dell" },
      ],
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    },
    {
      icon: Smartphone,
      title: fr ? "Smartphones & Tablettes Blackview" : "Blackview Smartphones & Tablets",
      desc: fr
        ? "Des appareils robustes nouvelle génération conçus pour les environnements exigeants : chantiers, terrain, industrie. Certifiés militaires, étanches et ultra-endurants."
        : "Next-generation rugged devices built for demanding environments: construction sites, fieldwork, industry. Military-certified, waterproof and ultra-durable.",
      packs: [
        { name: "Blackview BL9000", specs: fr ? ["6.78\" 2.4K · Dimensity 8020 5G", "24 GB RAM · 512 GB · 8800 mAh", "120W charge rapide · Caméra 50 MP", "IP68/IP69K · MIL-STD-810H"] : ["6.78\" 2.4K · Dimensity 8020 5G", "24 GB RAM · 512 GB · 8800 mAh", "120W fast charge · 50 MP camera", "IP68/IP69K · MIL-STD-810H"], badge: "Flagship" },
        { name: "Blackview BV9300", specs: fr ? ["6.7\" 2.3K · Helio G99", "21 GB RAM · 256 GB (1 TB ext.)", "Batterie 15 080 mAh · Autonomie multi-jours", "IP68/IP69K · NFC · GPS"] : ["6.7\" 2.3K · Helio G99", "21 GB RAM · 256 GB (1 TB ext.)", "15,080 mAh battery · Multi-day autonomy", "IP68/IP69K · NFC · GPS"], badge: "Endurance" },
        { name: "Blackview Active 8 Pro", specs: fr ? ["Tablette 10.36\" 2.4K IPS", "Helio G99 · 8 GB · 256 GB", "22 000 mAh · 1440h veille", "IP68/IP69K · Dual SIM 4G"] : ["10.36\" 2.4K IPS Tablet", "Helio G99 · 8 GB · 256 GB", "22,000 mAh · 1440h standby", "IP68/IP69K · Dual SIM 4G"], badge: fr ? "Tablette" : "Tablet" },
      ],
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    },
    {
      icon: Tablet,
      title: fr ? "Tablette Blackview Mega 2" : "Blackview Mega 2 Tablet",
      desc: fr
        ? "Tablette moderne conçue pour la productivité, l'éducation et les projets de transformation digitale en Afrique. Excellent équilibre entre performance, autonomie et prix compétitif — idéale pour les déploiements à grande échelle."
        : "Modern tablet designed for productivity, education and digital transformation projects in Africa. Excellent balance of performance, battery life and competitive price — ideal for large-scale deployments.",
      packs: [
        { name: "Blackview Mega 2", specs: fr ? ["Écran 12\" IPS FHD+ · 2000×1200 px", "Unisoc T615 · 12 GB RAM · 256 GB", "9 000 mAh · Caméra 50 MP Samsung", "Android 15 · Mode PC · Stylet inclus"] : ["12\" IPS FHD+ · 2000×1200 px", "Unisoc T615 · 12 GB RAM · 256 GB", "9,000 mAh · 50 MP Samsung camera", "Android 15 · PC Mode · Stylus included"], badge: fr ? "Éducation" : "Education" },
      ],
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80",
    },
    {
      icon: Server,
      title: fr ? "Serveurs & Stockage" : "Servers & Storage",
      desc: fr
        ? "Infrastructure serveur et stockage NAS pour hébergement, sauvegardes et gestion de fichiers. Solutions évolutives de la PME au data center."
        : "Server and NAS storage infrastructure for hosting, backups and file management. Scalable solutions from SMB to data center.",
      packs: [
        { name: "Dell PowerEdge T150", specs: fr ? ["Intel Xeon · 16–64 GB RAM", "Fichiers, sauvegardes, gestion utilisateurs", "Idéal PME"] : ["Intel Xeon · 16–64 GB RAM", "Files, backups, user management", "Ideal for SMBs"], badge: fr ? "Serveur" : "Server" },
        { name: "HPE ProLiant ML30 Gen11", specs: fr ? ["Intel Xeon E · jusqu'à 128 GB RAM", "Fiabilité HPE Enterprise", "Évolutif selon la croissance"] : ["Intel Xeon E · up to 128 GB RAM", "HPE Enterprise reliability", "Scalable with growth"], badge: fr ? "Serveur" : "Server" },
        { name: "Synology DS923+ / DS1821+", specs: fr ? ["4 à 8 baies · jusqu'à 144 TB", "Sauvegarde auto, cloud privé", "Partage de fichiers entreprise"] : ["4 to 8 bays · up to 144 TB", "Auto backup, private cloud", "Enterprise file sharing"], badge: "NAS" },
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      icon: Printer,
      title: fr ? "Impression & Connectivité" : "Printing & Connectivity",
      desc: fr
        ? "Imprimantes professionnelles et infrastructure réseau Ubiquiti UniFi pour une connectivité d'entreprise fiable et sécurisée."
        : "Professional printers and Ubiquiti UniFi network infrastructure for reliable and secure enterprise connectivity.",
      packs: [
        { name: "HP LaserJet Pro MFP M428fdw", specs: fr ? ["Impression · Scan · Copie · Réseau", "40 pages/min", "Référence PME et institutions"] : ["Print · Scan · Copy · Network", "40 pages/min", "SMB & institution standard"], badge: "HP" },
        { name: "Epson EcoTank L6490", specs: fr ? ["Jet d'encre économique", "Coût par page ultra-faible", "Grande autonomie d'encre"] : ["Economical inkjet", "Ultra-low cost per page", "High ink autonomy"], badge: "Epson" },
        { name: "Ubiquiti UniFi", specs: fr ? ["Dream Machine · Firewall · WiFi entreprise", "Switches 8/24/48 ports", "Points d'accès WiFi professionnels"] : ["Dream Machine · Firewall · Enterprise WiFi", "8/24/48-port switches", "Professional WiFi access points"], badge: fr ? "Réseau" : "Network" },
      ],
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
    },
  ];

  const stats = [
    { icon: Database, value: "1000+", label: fr ? "Postes déployés" : "Workstations deployed" },
    { icon: Users, value: "200+", label: fr ? "Clients entreprises" : "Business clients" },
    { icon: TrendingUp, value: "99.9%", label: fr ? "Disponibilité serveurs" : "Server uptime" },
    { icon: Award, value: "10+", label: fr ? "Années d'expérience" : "Years of experience" },
  ];

  const maintenancePacks = [
    {
      name: "Pack Basic",
      features: fr ? ["1 visite / mois", "Mises à jour systèmes", "Diagnostic et antivirus"] : ["1 visit / month", "System updates", "Diagnostics and antivirus"],
    },
    {
      name: "Pack Business",
      features: fr ? ["2 visites / mois", "Support utilisateurs", "Dépannage réseau inclus"] : ["2 visits / month", "User support", "Network troubleshooting included"],
      popular: true,
    },
    {
      name: "Pack Premium",
      features: fr ? ["Support complet prioritaire", "Monitoring continu", "Sauvegarde et sécurité avancées"] : ["Priority full support", "Continuous monitoring", "Advanced backup & security"],
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

  const accessories = [
    { icon: Monitor, name: fr ? "Écran Dell UltraSharp U2723QE" : "Dell UltraSharp U2723QE Monitor", desc: fr ? "27\" QHD · Hub USB-C · Ergonomie avancée" : "27\" QHD · USB-C Hub · Advanced ergonomics" },
    { icon: Headphones, name: fr ? "Kit Conférence Logitech" : "Logitech Conference Kit", desc: fr ? "Webcam Brio 500 + Casque Zone Wireless" : "Brio 500 Webcam + Zone Wireless Headset" },
    { icon: HardDrive, name: fr ? "Station d'Accueil HP USB-C G5" : "HP USB-C G5 Docking Station", desc: fr ? "HDMI, DisplayPort, Ethernet · Charge 100W" : "HDMI, DisplayPort, Ethernet · 100W charging" },
    { icon: Cpu, name: fr ? "Stockage SSD Portable" : "Portable SSD Storage", desc: fr ? "Rapide, compact et sécurisé pour données critiques" : "Fast, compact and secure for critical data" },
    { icon: Wifi, name: fr ? "Hub USB-C Multifonction" : "Multifunction USB-C Hub", desc: fr ? "HDMI, USB 3.0, Ethernet, lecteur cartes" : "HDMI, USB 3.0, Ethernet, card reader" },
    { icon: Shield, name: fr ? "Sécurité Kensington" : "Kensington Security", desc: fr ? "Verrous anti-vol pour postes et écrans" : "Anti-theft locks for workstations and monitors" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, x: '-5%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={heroIT} alt="Solutions IT DGS" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {fr ? 'Pôle IT' : 'IT Division'}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              <span className="text-gradient">{fr ? 'La technologie qui propulse votre business' : 'Technology that drives your business'}</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed max-w-2xl">
              {fr
                ? "Ordinateurs · Serveurs · Réseaux · Impression · Maintenance — DGS accompagne les entreprises, ONG et institutions dans la modernisation de leurs infrastructures IT en Afrique de l'Ouest."
                : "Computers · Servers · Networks · Printing · Maintenance — DGS supports businesses, NGOs and institutions in modernizing their IT infrastructure in West Africa."}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="xl" asChild className="shadow-accent">
                <Link to="/contact">
                  {fr ? 'Demander un devis' : 'Request a quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/produits">
                  {fr ? 'Voir le catalogue' : 'View catalogue'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — alternating layout with product packs */}
      {services.map((service, index) => (
        <section key={index} className={`py-24 ${index % 2 === 1 ? 'bg-muted/20' : ''}`}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="rounded-2xl overflow-hidden shadow-premium group sticky top-32">
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                </motion.div>
                <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold mb-4">{service.title}</motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.desc}</motion.p>

                {/* Product Packs */}
                <div className="space-y-4">
                  {service.packs.map((pack, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={3 + i}
                      className="bg-card rounded-xl border border-border/50 p-5 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-heading font-bold text-foreground">{pack.name}</h3>
                        <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">{pack.badge}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {pack.specs.map((spec, j) => (
                          <span key={j} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeUp} custom={7} className="mt-6">
                  <Button variant="accent" size="lg" asChild className="shadow-accent">
                    <Link to="/contact">
                      {fr ? 'Demander un devis' : 'Request a quote'}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Packs IT Entreprise */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-gradient-to-r from-accent to-orange-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-4 shadow-lg">
              {fr ? 'Solutions clés en main' : 'Turnkey solutions'}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {fr ? 'Packs IT Entreprise' : 'Enterprise IT Packs'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {fr
                ? "Des solutions incluant matériel, installation et configuration pour démarrer ou moderniser votre infrastructure sans complexité."
                : "Solutions including hardware, installation and configuration to start or modernize your infrastructure without complexity."}
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {itPacks.map((pack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`bg-card rounded-2xl border p-8 hover:shadow-premium transition-all duration-500 ${pack.popular ? 'border-accent shadow-accent/20 ring-2 ring-accent/20' : 'border-border/50'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-8 h-8 text-accent" />
                  <h3 className="font-heading text-xl font-bold">{pack.name}</h3>
                </div>
                {pack.popular && (
                  <span className="inline-block text-xs font-bold bg-accent text-white px-3 py-1 rounded-full mb-4">
                    {fr ? 'Le plus demandé' : 'Most popular'}
                  </span>
                )}
                <ul className="space-y-3">
                  {pack.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant={pack.popular ? "accent" : "outline"} size="lg" asChild className={`w-full mt-6 ${pack.popular ? 'shadow-accent' : ''}`}>
                  <Link to="/contact">
                    {fr ? 'Demander un devis' : 'Request a quote'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contrats de Maintenance */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-gradient-to-r from-accent to-orange-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-4 shadow-lg">
              {fr ? 'Maintenance & Support' : 'Maintenance & Support'}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {fr ? 'Contrats de Maintenance IT' : 'IT Maintenance Contracts'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {fr
                ? "DGS AFRICA assure la continuité de votre infrastructure avec des contrats adaptés à votre taille et vos exigences — de la PME à la grande institution."
                : "DGS AFRICA ensures the continuity of your infrastructure with contracts tailored to your size and requirements — from SMBs to large institutions."}
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePacks.map((pack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`bg-card rounded-2xl border p-8 hover:shadow-premium transition-all duration-500 relative ${pack.popular ? 'border-accent shadow-accent/20 ring-2 ring-accent/20' : 'border-border/50'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-8 h-8 text-accent" />
                  <h3 className="font-heading text-xl font-bold">{pack.name}</h3>
                </div>
                {pack.popular && (
                  <span className="inline-block text-xs font-bold bg-accent text-white px-3 py-1 rounded-full mb-4">
                    {fr ? 'Recommandé' : 'Recommended'}
                  </span>
                )}
                <ul className="space-y-3">
                  {pack.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={pack.popular ? "accent" : "outline"} size="lg" asChild className={`w-full mt-6 ${pack.popular ? 'shadow-accent' : ''}`}>
                  <Link to="/contact">
                    {fr ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessoires */}
      <section className="py-24 bg-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {fr ? 'Accessoires Professionnels' : 'Professional Accessories'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {fr ? "Optimisez votre poste de travail avec des accessoires fiables et performants" : "Optimize your workstation with reliable, high-performance accessories"}
            </p>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((acc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-soft transition-all duration-300"
              >
                <acc.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-bold mb-1">{acc.name}</h3>
                <p className="text-sm text-muted-foreground">{acc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi DGS */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              {fr ? 'Pourquoi Choisir DGS ?' : 'Why Choose DGS?'}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: fr ? "Matériel Certifié" : "Certified Hardware", desc: fr ? "HP, Dell, Lenovo, Epson, Ubiquiti et Blackview — marques référentes du marché professionnel" : "HP, Dell, Lenovo, Epson, Ubiquiti and Blackview — professional market-leading brands" },
              { icon: TrendingUp, title: fr ? "Déploiement Rapide" : "Fast Deployment", desc: fr ? "Installation complète et configuration sur site par nos techniciens certifiés" : "Complete installation and on-site configuration by our certified technicians" },
              { icon: Users, title: fr ? "Support Local" : "Local Support", desc: fr ? "Maintenance réactive et proximité terrain en Afrique de l'Ouest" : "Reactive maintenance and field proximity in West Africa" },
              { icon: Database, title: fr ? "Solutions Évolutives" : "Scalable Solutions", desc: fr ? "Des infrastructures qui grandissent avec votre organisation" : "Infrastructure that grows with your organization" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {fr ? 'Besoin de matériel informatique ?' : 'Need IT equipment?'}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {fr ? 'HP, Dell, Lenovo, Blackview, Ubiquiti et plus encore. Contactez-nous pour un devis adapté à votre projet.' : 'HP, Dell, Lenovo, Blackview, Ubiquiti and more. Contact us for a quote tailored to your project.'}
            </p>
            <Button variant="accent" size="xl" asChild className="shadow-accent">
              <Link to="/contact">
                {fr ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceIT;
