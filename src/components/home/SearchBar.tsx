import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const SearchBar = () => {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/recherche?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex items-center w-full max-w-xl mx-auto mt-8"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={language === 'fr' ? 'Rechercher un service, produit...' : 'Search for a service, product...'}
        className="flex-1 px-5 py-3.5 rounded-l-xl bg-primary-foreground/10 border border-primary-foreground/20 border-r-0 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 text-base"
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-r-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex items-center gap-2 transition-colors shrink-0"
      >
        <Search className="w-5 h-5" />
        <span className="hidden sm:inline">{language === 'fr' ? 'Rechercher' : 'Search'}</span>
      </button>
    </motion.form>
  );
};

export default SearchBar;
