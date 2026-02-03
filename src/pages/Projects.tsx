import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Projets</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Nos Réalisations
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Découvrez nos projets réalisés : Contexte, Solution et Résultats.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card p-12 rounded-2xl shadow-card border border-border/50">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Projets à venir
              </h2>
              <p className="text-muted-foreground mb-8">
                Les détails de nos réalisations seront bientôt disponibles. 
                Contactez-nous pour discuter de votre projet.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
