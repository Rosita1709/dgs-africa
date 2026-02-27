import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="w-4 h-4 text-primary-foreground/70" />
      <button
        onClick={() => setLanguage('fr')}
        className={`text-sm font-semibold transition-colors ${
          language === 'fr' ? 'text-accent' : 'text-primary-foreground/60 hover:text-primary-foreground'
        }`}
      >
        FR
      </button>
      <span className="text-primary-foreground/40 text-sm">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`text-sm font-semibold transition-colors ${
          language === 'en' ? 'text-accent' : 'text-primary-foreground/60 hover:text-primary-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
