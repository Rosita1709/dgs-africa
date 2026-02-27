import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Search = () => {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");

  const allPages = useMemo(() => [
    { title: language === 'fr' ? 'Accueil' : 'Home', desc: language === 'fr' ? 'Page d\'accueil DGS Africa' : 'DGS Africa homepage', href: '/', tags: 'accueil home dgs africa' },
    { title: language === 'fr' ? 'À propos' : 'About', desc: language === 'fr' ? 'Découvrez notre histoire et nos valeurs' : 'Discover our history and values', href: '/a-propos', tags: 'about propos mission vision valeurs' },
    { title: language === 'fr' ? 'Nos Services' : 'Our Services', desc: language === 'fr' ? 'Vue d\'ensemble de nos 3 pôles' : 'Overview of our 3 divisions', href: '/solutions', tags: 'services solutions poles' },
    { title: language === 'fr' ? 'Équipements Industriels' : 'Industrial Equipment', desc: language === 'fr' ? 'LED, climatisation, courroies industrielles' : 'LED, HVAC, industrial belts', href: '/services/industriel', tags: 'industriel led eclairage climatisation froid courroies senben airchal universal rbm atex' },
    { title: language === 'fr' ? 'Solutions IT' : 'IT Solutions', desc: language === 'fr' ? 'Ordinateurs, serveurs, imprimantes Dell & Blackview' : 'Computers, servers, printers Dell & Blackview', href: '/services/it', tags: 'it informatique ordinateur serveur imprimante dell blackview laptop tablette' },
    { title: language === 'fr' ? 'Énergie Solaire' : 'Solar Energy', desc: language === 'fr' ? 'Panneaux solaires, audit énergétique' : 'Solar panels, energy audit', href: '/services/energie', tags: 'energie solaire solar panneaux audit batterie onduleur' },
    { title: language === 'fr' ? 'Produits' : 'Products', desc: language === 'fr' ? 'Catalogue de nos équipements' : 'Our equipment catalog', href: '/produits', tags: 'produits catalogue equipment' },
    { title: language === 'fr' ? 'Projets' : 'Projects', desc: language === 'fr' ? 'Nos réalisations' : 'Our achievements', href: '/projets', tags: 'projets realisations' },
    { title: language === 'fr' ? 'Contact' : 'Contact', desc: language === 'fr' ? 'Demander un devis, nous contacter' : 'Request a quote, contact us', href: '/contact', tags: 'contact devis whatsapp telephone email' },
  ], [language]);

  const results = useMemo(() => {
    if (!query.trim()) return allPages;
    const q = query.toLowerCase();
    return allPages.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.includes(q)
    );
  }, [query, allPages]);

  return (
    <Layout>
      <section className="relative pt-40 pb-20 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
              {language === 'fr' ? 'Rechercher' : 'Search'}
            </h1>
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={language === 'fr' ? 'Rechercher un service, produit...' : 'Search for a service, product...'}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent text-lg"
                autoFocus
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16">
        <div className="container max-w-2xl">
          <p className="text-muted-foreground text-sm mb-6">
            {results.length} {language === 'fr' ? 'résultat(s)' : 'result(s)'}
          </p>
          <div className="space-y-4">
            {results.map((page, i) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={page.href}
                  className="group block bg-card p-6 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-card transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold group-hover:text-accent transition-colors">{page.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{page.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Search;
