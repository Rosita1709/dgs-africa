import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const flags: Record<string, string> = { fr: '🇫🇷', en: '🇬🇧' };
  const labels: Record<string, string> = { fr: 'FR', en: 'EN' };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-primary-foreground text-sm font-semibold"
      >
        <span className="text-base leading-none">{flags[language]}</span>
        {labels[language]}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-premium border border-border overflow-hidden min-w-[120px] z-50">
          {(['fr', 'en'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors ${
                language === lang
                  ? 'bg-accent/10 text-accent'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <span className="text-base leading-none">{flags[lang]}</span>
              {lang === 'fr' ? 'Français' : 'English'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
