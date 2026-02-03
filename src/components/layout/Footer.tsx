import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-dgs.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="DGS Africa" className="h-14 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Solutions industrielles, IT et énergétiques fiables pour l'Afrique.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "À propos", href: "/a-propos" },
                { name: "Solutions", href: "/solutions" },
                { name: "Produits", href: "/produits" },
                { name: "Projets", href: "/projets" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Nos Pôles</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70 text-sm">Industriel</li>
              <li className="text-primary-foreground/70 text-sm">Technologies IT</li>
              <li className="text-primary-foreground/70 text-sm">Énergie Solaire</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@dgsafrica.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  contact@dgsafrica.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/221775930196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  +221 77 593 01 96
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Sénégal & Afrique
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} DGS Africa. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/mentions-legales" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Confidentialité
            </Link>
            <Link to="/cookies" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
