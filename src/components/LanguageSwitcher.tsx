import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-primary-foreground hover:text-accent hover:bg-transparent"
        >
          <span className="text-base">{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
          <span className="uppercase font-medium text-sm">{language === 'fr' ? 'FR' : 'EN'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem 
          onClick={() => setLanguage('fr')}
          className={`gap-3 ${language === 'fr' ? 'bg-accent/10 text-accent font-semibold' : ''}`}
        >
          <span className="text-lg">🇫🇷</span>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`gap-3 ${language === 'en' ? 'bg-accent/10 text-accent font-semibold' : ''}`}
        >
          <span className="text-lg">🇬🇧</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
