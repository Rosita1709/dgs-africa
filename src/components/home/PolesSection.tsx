import { Link } from "react-router-dom";
import { Zap, Monitor, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const poles = [
  {
    icon: Zap,
    title: "Pôle Industriel",
    description: "Éclairage LED, froid & climatisation, courroies industrielles. Des solutions conçues pour offrir sécurité, durabilité et performance.",
    features: ["Éclairage LED", "Chambres froides", "Courroies"],
    href: "/solutions#industriel",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Monitor,
    title: "Pôle IT",
    description: "Ordinateurs, serveurs, imprimantes, tablettes et accessoires. Nos équipements garantissent productivité et sécurité des données.",
    features: ["Serveurs", "Ordinateurs", "Réseau"],
    href: "/solutions#it",
    gradient: "from-accent to-orange-600",
  },
  {
    icon: Sun,
    title: "Pôle Énergie",
    description: "Solutions solaires et audit énergétique pour réduire vos coûts. Études, installation, maintenance et recommandations ROI.",
    features: ["Solaire", "Audit", "Maintenance"],
    href: "/solutions#energie",
    gradient: "from-green-500 to-green-700",
  },
];

const PolesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Solutions</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Trois pôles complémentaires pour répondre à vos besoins
          </h2>
          <p className="text-muted-foreground text-lg">
            Une approche globale qui permet à nos clients de bénéficier d'un interlocuteur unique,
            d'une meilleure maîtrise des coûts et d'une performance durable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {poles.map((pole, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-500 border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pole.gradient}`} />

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pole.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pole.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-heading text-2xl font-bold mb-4">{pole.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{pole.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {pole.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground/70"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="ghost" className="group/btn" asChild>
                <Link to={pole.href}>
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolesSection;
