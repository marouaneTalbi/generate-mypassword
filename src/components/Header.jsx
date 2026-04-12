import { ShieldCheck } from 'lucide-react';

/**
 * En-tête du site avec logo et sélecteur de langue
 */
export default function Header({ t, lang, toggleLang }) {
  return (
    <header className="flex justify-between items-center py-5">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-emerald-400" />
          <span className="text-xl font-bold text-white">Generate</span>
          <span className="text-xl font-bold text-emerald-400">Password</span>
        </div>
        <p className="text-xs text-gray-500 font-medium mt-0.5 ml-9">
          {t('header.subtitle')}
        </p>
      </div>

      {/* Sélecteur de langue */}
      <button
        onClick={toggleLang}
        className="bg-[#0a0f1c] border border-[#1f2937] text-xs text-gray-300 px-3 py-1.5 rounded-lg cursor-pointer hover:border-emerald-500/50 transition-colors"
        aria-label="Changer la langue"
      >
        {lang === 'fr' ? 'FR | EN' : 'EN | FR'}
      </button>
    </header>
  );
}
