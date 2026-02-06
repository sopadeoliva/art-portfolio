import React, { createContext, useState } from 'react';
import { translations } from './translations';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // Default EN

  const toggleLang= () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LangContext.Provider value={{ t: translations[lang], toggleLang, lang }}>
      {children}
    </LangContext.Provider>
  );
};