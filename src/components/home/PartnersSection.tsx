const partners = [
  { name: 'Partner 1', logo: 'P1' },
  { name: 'Partner 2', logo: 'P2' },
  { name: 'Partner 3', logo: 'P3' },
  { name: 'Partner 4', logo: 'P4' },
  { name: 'Partner 5', logo: 'P5' },
  { name: 'Partner 6', logo: 'P6' },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center w-24 h-12 md:w-32 md:h-16 bg-card rounded-lg shadow-soft border border-border/30 hover:border-accent/30 transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/50">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
