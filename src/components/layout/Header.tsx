import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo-dgs.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: language === 'fr' ? 'À propos' : 'About', href: "/a-propos" },
    { 
      name: language === 'fr' ? 'Nos Services' : 'Our Services', 
      href: "/solutions",
      hasDropdown: true,
      children: [
        { name: language === 'fr' ? 'Équipements Industriels' : 'Industrial Equipment', href: "/services/industriel" },
        { name: language === 'fr' ? 'Solutions IT' : 'IT Solutions', href: "/services/it" },
        { name: language === 'fr' ? 'Énergie Solaire' : 'Solar Energy', href: "/services/energie" },
      ]
    },
    { name: language === 'fr' ? 'Produits' : 'Products', href: "/produits" },
    { name: language === 'fr' ? 'Contacts' : 'Contact', href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/80 backdrop-blur-md'
    }`}>
      <nav className="container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative h-10 md:h-12 transition-all duration-300">
              <img 
                src={logo} 
                alt="DGS Africa" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 relative ${
                        location.pathname.startsWith('/services') || location.pathname === '/solutions'
                          ? "text-accent"
                          : "text-primary-foreground hover:text-accent"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-card rounded-lg shadow-premium overflow-hidden border border-border"
                        >
                          {link.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`block px-5 py-4 text-sm font-medium transition-colors border-b border-border/50 last:border-0 ${
                                location.pathname === child.href
                                  ? 'text-accent bg-accent/10'
                                  : 'text-foreground hover:bg-accent/10 hover:text-accent'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`relative px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-primary-foreground hover:text-accent"
                    }`}
                  >
                    {link.name}
                    {/* Gold underline slide-in on hover */}
                    <span className={`absolute bottom-0 left-5 right-5 h-0.5 bg-accent transition-transform origin-left duration-300 ${
                      location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side — search + language switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {searchOpen ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    navigate(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
                    setSearchOpen(false);
                    setSearchQuery("");
                  }
                }}
                className="flex items-center"
              >
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={(e) => {
                    // Don't close if clicking sibling buttons
                    if (e.relatedTarget && e.currentTarget.form?.contains(e.relatedTarget as Node)) return;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(""); }
                  }}
                  placeholder={language === 'fr' ? 'Rechercher...' : 'Search...'}
                  className="w-48 px-3 py-1.5 rounded-l-full bg-primary-foreground/10 border border-primary-foreground/20 border-r-0 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-1 focus:ring-accent/50"
                />
                <button 
                  type="submit"
                  className="px-3 py-1.5 rounded-r-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="ml-2 text-primary-foreground/60 hover:text-primary-foreground">
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-primary-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dark overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              {/* Slide-in drawer */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-primary z-50 lg:hidden shadow-2xl overflow-y-auto"
                style={{ scrollbarWidth: 'none' }}
              >
                {/* Close button - top right, 44px touch target */}
                <div className="flex justify-end p-4">
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="text-primary-foreground min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-primary-foreground/10 transition-colors"
                  >
                    <X className="w-7 h-7" />
                  </button>
                </div>

                <div className="py-4 px-6 flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="border-b border-primary-foreground/10"
                    >
                      <Link
                        to={link.href}
                        className={`block text-lg font-semibold py-4 px-3 rounded-lg transition-all min-h-[48px] flex items-center ${
                          location.pathname === link.href
                            ? "text-accent bg-accent/10"
                            : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-3 border-l-2 border-accent/50 pl-4 mb-3">
                          {link.children.map((child, childIndex) => (
                            <motion.div
                              key={child.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.05) + (childIndex * 0.04) + 0.1, duration: 0.25 }}
                            >
                              <Link
                                to={child.href}
                                className={`block text-base font-medium py-3 px-3 rounded-md transition-all min-h-[44px] flex items-center ${
                                  location.pathname === child.href
                                    ? 'text-accent bg-accent/10'
                                    : 'text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5'
                                }`}
                              >
                                {child.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Language switcher + Phone */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                    className="flex items-center gap-4 pt-6 mt-4 border-t border-primary-foreground/10"
                  >
                    <LanguageSwitcher />
                  </motion.div>
                  <motion.a 
                    href="tel:+221775930196"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.15, duration: 0.3 }}
                    className="flex items-center gap-2 text-accent font-semibold mt-4 whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    +221 77 593 01 96
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
