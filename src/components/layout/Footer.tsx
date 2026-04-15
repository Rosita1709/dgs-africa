import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Linkedin, Facebook, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
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
      
      <div className="container py-8 md:py-14 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <img src={logo} alt="DGS Africa" className="h-12" />
            <p className="text-primary-foreground/70 text-xs leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/dynamic-global-services/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61568176133970&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/dgs_africa25?igsh=MXNnbmsxMGxvdTBudQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.tiktok.com/@dgsafrica?_r=1&_t=ZS-94Pr9rVkfmj" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                title="TikTok">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.13z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">{t('footer.poles')}</h4>
            <ul className="space-y-2">
              <li><Link to="/services/industriel" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">{t('footer.industrial')}</Link></li>
              <li><Link to="/services/it" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">{t('footer.it')}</Link></li>
              <li><Link to="/services/energie" className="text-primary-foreground/70 hover:text-accent transition-colors text-xs">{t('footer.energy')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@dgsafrica.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  contact@dgsafrica.com
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=221776862024" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-xs">
                  <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  +221 77 686 20 24
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-xs">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {t('common.senegal')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} DGS Africa. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-xs">
            <Link to="/mentions-legales" className="text-primary-foreground/50 hover:text-accent transition-colors">{t('footer.legal')}</Link>
            <Link to="/politique-confidentialite" className="text-primary-foreground/50 hover:text-accent transition-colors">{t('footer.privacy')}</Link>
            <Link to="/cookies" className="text-primary-foreground/50 hover:text-accent transition-colors">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
