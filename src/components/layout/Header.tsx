import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-dgs.png";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Solutions", href: "/solutions" },
  { name: "Produits", href: "/produits" },
  { name: "Projets", href: "/projets" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container flex justify-end items-center gap-6 text-sm">
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
        </div>
      </div>

      {/* Main nav */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="DGS Africa" className="h-12 md:h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
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
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors hover:text-accent ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Demander un devis
                  </Link>
                </Button>
                <Button variant="whatsapp" asChild>
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
