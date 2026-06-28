
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Language, Translation } from './types';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import MobileApps from './components/MobileApps';
import Footer from './components/Footer';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('tr');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Packages />
          <Portfolio />
          <MobileApps />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
