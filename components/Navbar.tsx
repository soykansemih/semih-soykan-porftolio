
import React, { useState } from 'react';
import { useLanguage } from '../App';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navPackages, href: "#packages" },
    { label: t.navPortfolio, href: "#portfolio" },
    { label: t.navAbout, href: "#about" },
    { label: t.navContact, href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Semih Soykan
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-slate-300 text-sm font-semibold hover:bg-slate-100 transition-colors uppercase"
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-slate-300 text-xs font-semibold uppercase"
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-indigo-600 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
