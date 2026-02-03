import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const values = [
  { icon: CheckCircle, title: "Fiabilité", desc: "Solutions éprouvées et durables pour vos installations" },
  { icon: CheckCircle, title: "Conformité", desc: "Respect strict des normes internationales" },
  { icon: CheckCircle, title: "Transparence", desc: "Communication claire et honnête à chaque étape" },
  { icon: CheckCircle, title: "Engagement", desc: "Accompagnement complet de la conception à la maintenance" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">À propos</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Qui sommes-nous ?
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              DGS Africa est une entreprise B2B spécialisée dans la fourniture et 
              l'intégration de solutions industrielles, informatiques et énergétiques en Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-2xl shadow-card border border-border/50">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Apporter des solutions fiables, conformes et adaptées aux réalités africaines 
                pour créer et maintenir des environnements de travail optimisés, sûrs et performants.
              </p>
            </div>

            <div className="bg-card p-10 rounded-2xl shadow-card border border-border/50">
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Notre Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Devenir un partenaire de référence en Afrique pour le Facility Management 
                et l'intégration de solutions techniques innovantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground text-lg">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Notre Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Forte d'une solide expérience dans le secteur, DGS Africa accompagne les entreprises, 
                industries et institutions dans la gestion, l'exploitation et la maintenance de leurs 
                infrastructures techniques.
              </p>
              <p className="leading-relaxed mb-6">
                Nous proposons des solutions personnalisées et innovantes, adaptées aux réalités 
                africaines, afin de répondre efficacement aux besoins spécifiques de chaque client 
                et d'assurer la continuité de leurs activités.
              </p>
              <p className="leading-relaxed">
                Dans le cadre de notre approche intégrée du Facility Management, nous intervenons sur 
                les équipements industriels, les systèmes IT, les installations énergétiques, ainsi que 
                les bâtiments et infrastructures. Cette approche globale permet à nos clients de bénéficier 
                d'un interlocuteur unique, d'une meilleure maîtrise des coûts et d'une performance durable 
                de leurs installations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
