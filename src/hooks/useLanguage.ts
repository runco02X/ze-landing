import { useState, useEffect } from 'react';
import { Language, translations } from '../translations';

export const useLanguage = () => {
  // Détecte la langue du navigateur et utilise le français par défaut si non supporté
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'fr';
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getBrowserLanguage());
  const [t, setT] = useState(translations[currentLanguage]);

  useEffect(() => {
    setT(translations[currentLanguage]);
  }, [currentLanguage]);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Optionnellement, stockez la préférence de langue dans localStorage
    localStorage.setItem('preferred-language', lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};
