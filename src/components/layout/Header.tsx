import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo-dgs.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/a-propos" },
    { name: t('nav.solutions'), href: "/solutions" },
    { name: t('nav.products'), href: "/produits" },
    { name: t('nav.projects'), href: "/projets" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-lg shadow-soft' 
        : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className={`bg-primary text-primary-foreground py-2.5 transition-all duration-300 ${
        isScrolled ? 'hidden' : 'hidden md:block'
      }`}>
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>{t('hero.badge')}</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@dgsafrica.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@dgsafrica.com
            </a>
            <a 
              href="https://wa.me/221775930196" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              +221 77 593 01 96
            </a>
            <div className="border-l border-primary-foreground/20 pl-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`container transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="DGS Africa" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  location.pathname === link.href
                    ? "text-accent"
                    : isScrolled 
                      ? "text-foreground hover:text-accent hover:bg-accent/5" 
                      : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {isScrolled && <LanguageSwitcher />}
            <Button 
              variant={isScrolled ? "outline" : "hero-outline"} 
              size="sm" 
              asChild
              className={!isScrolled ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}
            >
              <Link to="/contact">{t('nav.quote')}</Link>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <a 
                href="https://wa.me/221775930196" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-premium animate-fade-in">
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-all ${
                    location.pathname === link.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    {t('nav.quote')}
                  </Link>
                </Button>
                <Button variant="accent" size="lg" asChild>
                  <a 
                    href="https://wa.me/221775930196" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
