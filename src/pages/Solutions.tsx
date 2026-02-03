import Layout from "@/components/layout/Layout";
import { Zap, Monitor, Sun, Lightbulb, Thermometer, CircleDot, Server, Laptop, Printer, SunDim, ClipboardCheck } from "lucide-react";

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Solutions</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Nos Pôles d'Expertise
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              DGS Africa structure son offre autour de trois pôles complémentaires : 
              Industriel, Technologies de l'Information et Énergie.
            </p>
          </div>
        </div>
      </section>

      {/* Industriel */}
      <section id="industriel" className="py-24 scroll-mt-32">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Pôle Industriel</h2>
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
            Nos solutions industrielles sont conçues pour offrir sécurité, durabilité et performance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50">
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Éclairage LED</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Waterproof</li>
                <li>• ATEX</li>
                <li>• Solaire</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50">
              <Thermometer className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Froid & Climatisation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• CTA</li>
                <li>• VRV/VRF</li>
                <li>• Chambres froides</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50">
              <CircleDot className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Courroies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Automotive</li>
                <li>• Industrie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IT */}
      <section id="it" className="py-24 bg-muted/30 scroll-mt-32">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <Monitor className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Pôle IT</h2>
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
            Nos équipements garantissent productivité et sécurité des données.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Laptop, title: "Ordinateurs" },
              { icon: Server, title: "Serveurs" },
              { icon: Printer, title: "Imprimantes" },
              { icon: Monitor, title: "Tablettes & Accessoires" },
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-soft border border-border/50 text-center">
                <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Énergie */}
      <section id="energie" className="py-24 scroll-mt-32">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
              <Sun className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Pôle Énergie</h2>
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
            Objectif : Réduire vos coûts énergétiques grâce à des solutions durables.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50">
              <SunDim className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Solaire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Études, installation et maintenance de systèmes photovoltaïques 
                adaptés à vos besoins énergétiques.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50">
              <ClipboardCheck className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Audit Énergétique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Analyse complète de votre consommation, recommandations personnalisées 
                et calcul du retour sur investissement (ROI).
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
