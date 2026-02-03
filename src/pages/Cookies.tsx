import Layout from "@/components/layout/Layout";

const Cookies = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8">Politique des Cookies</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite 
                sur notre site. Il permet d'améliorer votre expérience de navigation.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Types de cookies utilisés</h2>
              <p>
                Notre site utilise des cookies essentiels au fonctionnement du site et des cookies 
                analytiques pour comprendre comment vous utilisez notre site.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Gestion des cookies</h2>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, 
                certaines fonctionnalités du site pourraient ne plus fonctionner correctement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
