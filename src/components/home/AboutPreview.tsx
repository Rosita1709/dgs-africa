import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const values = [
  { title: "Fiabilité", desc: "Solutions éprouvées et durables" },
  { title: "Conformité", desc: "Respect des normes internationales" },
  { title: "Transparence", desc: "Communication claire et honnête" },
  { title: "Engagement", desc: "Accompagnement de A à Z" },
];

const AboutPreview = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">À propos</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Votre partenaire de référence en Afrique
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              DGS Africa est une entreprise B2B spécialisée dans la fourniture et 
              l'intégration de solutions industrielles, informatiques et énergétiques en Afrique.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Notre mission est d'apporter des solutions fiables, conformes et adaptées aux 
              réalités africaines, pour créer et maintenir des environnements de travail 
              optimisés, sûrs et performants.
            </p>

            <Button variant="default" size="lg" asChild>
              <Link to="/a-propos">
                Découvrir DGS Africa
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-heading font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
