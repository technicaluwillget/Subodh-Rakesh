import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('sr_lang') || 'hi';
    } catch {
      return 'hi';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sr_lang', language);
    } catch (e) {
      console.warn('localStorage not accessible', e);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const t = (hi, en) => {
    return language === 'en' ? (en !== undefined ? en : hi) : hi;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
