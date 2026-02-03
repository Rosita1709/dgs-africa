import Layout from "@/components/layout/Layout";

const Legal = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8">Mentions Légales</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Éditeur du site</h2>
              <p>
                DGS Africa – Dynamique Global Services<br />
                Email : contact@dgsafrica.com<br />
                Téléphone : +221 77 593 01 96<br />
                Zone d'intervention : Sénégal & Afrique
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par Lovable.<br />
                Site web : www.lovable.dev
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, etc.) est la propriété 
                exclusive de DGS Africa ou de ses partenaires. Toute reproduction, même partielle, 
                est interdite sans autorisation préalable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
