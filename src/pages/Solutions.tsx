import Layout from "@/components/layout/Layout";
import { Zap, Monitor, Sun, Lightbulb, Thermometer, CircleDot, Server, Laptop, Printer, SunDim, ClipboardCheck, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-hero-premium overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('solutions.label')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t('solutions.title')}
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              {t('solutions.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Industriel */}
      <section id="industriel" className="py-24 scroll-mt-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">01</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{t('poles.industrial.title')}</h2>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('poles.industrial.desc')}
              </p>

              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  {t('nav.quote')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Lightbulb, title: "Éclairage LED", items: ["Waterproof", "ATEX", "Solaire"] },
                { icon: Thermometer, title: "Froid & Climatisation", items: ["CTA", "VRV/VRF", "Chambres froides"] },
                { icon: CircleDot, title: "Courroies", items: ["Automotive", "Industrie"] },
              ].map((item, index) => (
                <div key={index} className="group bg-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-card hover:border-blue-200 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.items.map((sub, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-blue-500" />
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IT */}
      <section id="it" className="py-24 bg-muted/30 scroll-mt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              {[
                { icon: Laptop, title: "Ordinateurs" },
                { icon: Server, title: "Serveurs" },
                { icon: Printer, title: "Imprimantes" },
                { icon: Monitor, title: "Tablettes" },
              ].map((item, index) => (
                <div key={index} className="group bg-card p-8 rounded-xl shadow-soft border border-border/50 text-center hover:shadow-card hover:border-accent/30 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <item.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">02</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{t('poles.it.title')}</h2>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('poles.it.desc')}
              </p>

              <Button variant="accent" size="lg" asChild className="shadow-accent">
                <Link to="/contact">
                  {t('nav.quote')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Énergie */}
      <section id="energie" className="py-24 scroll-mt-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">03</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">{t('poles.energy.title')}</h2>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t('poles.energy.desc')}
              </p>

              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  {t('nav.quote')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="group bg-card p-8 rounded-xl shadow-soft border border-border/50 hover:shadow-card hover:border-green-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <SunDim className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Solaire</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Études, installation et maintenance de systèmes photovoltaïques 
                      adaptés à vos besoins énergétiques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-card p-8 rounded-xl shadow-soft border border-border/50 hover:shadow-card hover:border-green-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <ClipboardCheck className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">Audit Énergétique</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyse complète de votre consommation, recommandations personnalisées 
                      et calcul du retour sur investissement (ROI).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <Button variant="accent" size="xl" asChild className="shadow-accent">
              <Link to="/contact">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
