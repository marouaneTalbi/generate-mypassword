import { useState } from 'react';
import fr from '../i18n/fr';
import en from '../i18n/en';

/**
 * Hook de gestion de la langue (FR/EN)
 * Détecte la langue du navigateur au montage
 */
export const useLang = () => {
  // Détection de la langue navigateur, fallback FR
  const browserLang = navigator.language?.startsWith('fr') ? 'fr' : 'en';
  const [lang, setLang] = useState(browserLang);

  const translations = lang === 'fr' ? fr : en;

  // Accès à une clé de traduction par chemin "section.key"
  const t = (path) => {
    const keys = path.split('.');
    let val = translations;
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? path;
  };

  const toggleLang = () => setLang(prev => prev === 'fr' ? 'en' : 'fr');

  return { lang, t, toggleLang };
};
