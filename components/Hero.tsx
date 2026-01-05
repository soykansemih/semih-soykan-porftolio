
import React from 'react';
import { useLanguage } from '../App';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          {t.heroTitle}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#packages"
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all shadow-lg shadow-indigo-200"
          >
            {t.heroCta}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all"
          >
            {t.navContact}
          </a>
        </div>

        {/* Mockup Preview Graphic */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="/assets/mockup.jpg" 
              alt="Dashboard Preview" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
