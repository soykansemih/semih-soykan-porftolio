
import React from 'react';
import { useLanguage } from '../App';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-indigo-100 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
              <img 
                src="assets/semih.jpg" 
                alt="Semih Soykan" 
                className="relative rounded-2xl w-full h-auto object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {t.aboutTitle}
            </h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "Dijital dünyadaki varlığınız, sadece bir sayfa değil, markanızın hikayesidir."
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t.aboutBody}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
