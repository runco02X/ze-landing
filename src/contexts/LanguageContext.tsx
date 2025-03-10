import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../translations';

type LanguageContextType = {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

// Create context with default values
export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  changeLanguage: () => {},
  t: translations.en
});

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Detect browser language and use French by default if not supported
  const getBrowserLanguage = (): Language => {
    const storedLang = localStorage.getItem('preferred-language');
    if (storedLang === 'en' || storedLang === 'fr') {
      return storedLang;
    }
    
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
    // Store language preference in localStorage
    localStorage.setItem('preferred-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
