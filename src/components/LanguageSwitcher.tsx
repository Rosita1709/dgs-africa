import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const label = language === 'fr' ? 'FR / FR' : 'EN / EN';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium focus:outline-none">
          <Globe className="w-4 h-4" />
          <span>{label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem 
          onClick={() => setLanguage('fr')}
          className={`gap-3 cursor-pointer ${language === 'fr' ? 'bg-accent/10 text-accent font-semibold' : ''}`}
        >
          <span className="text-lg">🇫🇷</span>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`gap-3 cursor-pointer ${language === 'en' ? 'bg-accent/10 text-accent font-semibold' : ''}`}
        >
          <span className="text-lg">🇬🇧</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
