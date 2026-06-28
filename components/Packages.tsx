import React from 'react';
import { useLanguage } from '../App';

const Packages: React.FC = () => {
  const { t, language } = useLanguage();

  const capabilities = language === 'en'
    ? [
        { label: 'Web Design & Development', icon: '🌐' },
        { label: 'iOS & Android Mobile App', icon: '📱' },
        { label: 'E-Commerce Solutions', icon: '🛒' },
        { label: 'Admin Panel & Dashboard', icon: '📊' },
        { label: 'API & Service Integration', icon: '🔗' },
        { label: 'SEO & Performance', icon: '🚀' },
      ]
    : [
        { label: 'Web Tasarım & Geliştirme', icon: '🌐' },
        { label: 'iOS & Android Mobil Uygulama', icon: '📱' },
        { label: 'E-Ticaret Çözümleri', icon: '🛒' },
        { label: 'Admin Panel & Dashboard', icon: '📊' },
        { label: 'API & Servis Entegrasyonu', icon: '🔗' },
        { label: 'SEO & Performans', icon: '🚀' },
      ];

  return (
    <section id="packages" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            {t.packagesTitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.packagesSubtitle}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300"
              >
                <span className="text-xl">{cap.icon}</span>
                <span className="text-slate-300 text-sm font-medium leading-tight">{cap.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:semihsoykaniletisim@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-500 text-white rounded-xl font-bold text-base hover:bg-indigo-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-indigo-900/40 text-center"
            >
              {t.contactQuickBtn}
            </a>
            <a
              href="https://www.instagram.com/soykandev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-base hover:bg-pink-500/20 hover:border-pink-500/40 transition-all backdrop-blur-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @soykandev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
