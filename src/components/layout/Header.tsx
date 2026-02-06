import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        { name: language === 'fr' ? 'Équipements Industriels' : 'Industrial Equipment', href: "/solutions#industriel" },
        { name: language === 'fr' ? 'Solutions IT' : 'IT Solutions', href: "/solutions#it" },
        { name: language === 'fr' ? 'Énergie Solaire' : 'Solar Energy', href: "/solutions#energie" },
      ]
    },
    { name: language === 'fr' ? 'Contacts' : 'Contact', href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'top-0 bg-primary/98 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'
            }`}>
              <img 
                src={logo} 
                alt="DGS Africa - Facility Management & Equipment" 
                className="h-full w-auto object-contain"
                style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`flex items-center gap-1 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-primary-foreground hover:text-accent"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    
                    {/* Underline */}
                    <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </button>
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
                    {/* Underline */}
                    <span className={`absolute bottom-0 left-5 right-5 h-0.5 bg-accent transition-transform origin-left ${
                      location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-0 w-64 bg-card rounded-lg shadow-premium overflow-hidden border border-border"
                      >
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-5 py-4 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/50 last:border-0"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              {/* Slide-in menu from right */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-primary z-50 lg:hidden shadow-2xl overflow-y-auto"
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
                      onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium py-2 text-primary-foreground/70 hover:text-accent"
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
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
