import React from 'react';
import { useLanguage } from '../App';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          {t.heroTitle}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#packages"
            className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-bold text-lg hover:bg-indigo-400 transform hover:-translate-y-1 transition-all shadow-lg shadow-indigo-900/50"
          >
            {t.heroCta}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            {t.navContact}
          </a>
        </div>

        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-2xl" />
          <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
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
