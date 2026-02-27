import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo-dgs.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-primary shadow-lg' 
        : 'bg-transparent'
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
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
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
                      className={`flex items-center gap-1 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
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
                    <span className={`absolute bottom-0 left-5 right-5 h-0.5 bg-accent transition-transform origin-left ${
                      location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/recherche"
              className="p-2 rounded-lg text-primary-foreground/70 hover:text-accent transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link to="/recherche" className="p-2 text-primary-foreground">
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-primary-foreground"
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-3/5 md:w-2/5 max-w-sm bg-primary z-50 lg:hidden shadow-2xl overflow-y-auto"
              >
                <div className="flex justify-end p-4">
                  <button onClick={() => setIsOpen(false)} className="text-primary-foreground">
                    <X className="w-7 h-7" />
                  </button>
                </div>
                <div className="py-6 px-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.href}
                        className={`block text-lg font-semibold py-3 px-4 rounded-lg transition-all ${
                          location.pathname === link.href
                            ? "text-accent"
                            : "text-primary-foreground hover:text-accent"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="ml-4 border-l-2 border-accent/30 pl-4 mt-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`block text-base font-medium py-2 ${
                                location.pathname === child.href
                                  ? 'text-accent'
                                  : 'text-primary-foreground/70 hover:text-accent'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-4 pt-4 mt-4 border-t border-primary-foreground/10">
                    <LanguageSwitcher />
                    <a 
                      href="tel:+221775930196"
                      className="flex items-center gap-2 text-accent font-semibold"
                    >
                      <Phone className="w-5 h-5" />
                      +221 77 593 01 96
                    </a>
                  </div>
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
