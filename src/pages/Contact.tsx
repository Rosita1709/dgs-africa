import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons sous 24-48h.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Contactez-nous
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Une question ? Un projet ? Nous sommes là pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Informations</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:contact@dgsafrica.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@dgsafrica.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/221775930196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-muted-foreground">+221 77 593 01 96</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Zone</p>
                      <p className="text-muted-foreground">Sénégal & Afrique</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a 
                  href="https://wa.me/221775930196" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
              </Button>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card border border-border/50">
                <h2 className="font-heading text-2xl font-bold mb-6">Demander un devis</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" name="name" required placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Société</Label>
                      <Input id="company" name="company" placeholder="Nom de votre société" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="votre@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+221 XX XXX XX XX" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget estimé</Label>
                      <Input id="budget" name="budget" placeholder="Votre budget" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Délai souhaité</Label>
                      <Input id="deadline" name="deadline" placeholder="Ex: 3 mois" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Description du projet *</Label>
                    <Textarea 
                      id="project" 
                      name="project" 
                      required 
                      rows={5}
                      placeholder="Décrivez votre projet, vos besoins..."
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
