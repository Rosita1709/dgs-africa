import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-dgs.png";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/a-propos" },
    { name: t('nav.solutions'), href: "/solutions" },
    { name: t('nav.products'), href: "/produits" },
    { name: t('nav.projects'), href: "/projets" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <img src={logo} alt="DGS Africa" className="h-14" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.poles')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services/industriel"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                  {t('footer.industrial')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/it"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                  {t('footer.it')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/energie"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                  {t('footer.energy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@dgsafrica.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </span>
                  contact@dgsafrica.com
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=221775930196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </span>
                  +221 77 593 01 96
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                {t('common.senegal')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} DGS Africa. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/mentions-legales" className="text-primary-foreground/50 hover:text-accent transition-colors">
              {t('footer.legal')}
            </Link>
            <Link to="/politique-confidentialite" className="text-primary-foreground/50 hover:text-accent transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/cookies" className="text-primary-foreground/50 hover:text-accent transition-colors">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
