import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Collecte des données</h2>
              <p>
                Nous collectons uniquement les informations nécessaires au traitement de vos demandes : 
                nom, email, téléphone, et les informations relatives à votre projet.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Utilisation des données</h2>
              <p>
                Vos données sont utilisées exclusivement pour répondre à vos demandes de devis 
                et assurer le suivi de nos services. Elles ne sont jamais vendues à des tiers.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Conservation</h2>
              <p>
                Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, 
                puis supprimées conformément à la réglementation en vigueur.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Vos droits</h2>
              <p>
                Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos 
                données en nous contactant à contact@dgsafrica.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
