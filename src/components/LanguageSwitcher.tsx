import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';
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

  return (
    <div ref={ref} className="relative z-[60]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/15 hover:bg-white/25 transition-colors text-white text-sm font-bold"
      >
        <Globe className="w-4 h-4" />
        {language.toUpperCase()}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-border overflow-hidden min-w-[130px] z-[70]">
          {(['fr', 'en'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-colors ${
                language === lang
                  ? 'bg-accent/15 text-accent'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <Globe className="w-4 h-4" />
              {lang === 'fr' ? 'Français' : 'English'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
