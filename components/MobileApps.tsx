import React from 'react';
import { useLanguage } from '../App';

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" />
    <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MobileApps: React.FC = () => {
  const { t } = useLanguage();

  const apps = [
    {
      id: 'bb',
      name: 'BB Oto Yıkama',
      category: t.bbAppCategory,
      description: t.bbAppDesc,
      note: t.bbAppNote,
      link: 'https://apps.apple.com/tr/app/bb-oto-y%C4%B1kama/id6760658074?l=tr',
      iconSrc: '/assets/bb-icon.jpg',
      gradient: 'from-cyan-600 to-blue-700',
    },
    {
      id: 'forx',
      name: 'Forx: Döviz Altın Kripto',
      category: t.forxAppCategory,
      description: t.forxAppDesc,
      note: null,
      link: 'https://apps.apple.com/tr/app/forx-d%C3%B6viz-alt%C4%B1n-kripto/id6767925625?l=tr',
      iconSrc: '/assets/forx-icon.png',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="mobile-apps" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.mobileAppsTitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.mobileAppsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-br ${app.gradient} p-8 flex items-center justify-center relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
                <img
                  src={app.iconSrc}
                  alt={app.name}
                  className="w-24 h-24 rounded-2xl shadow-2xl object-cover ring-4 ring-white/20"
                />
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{app.name}</h3>
                    <span className="mt-1 inline-block text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      {app.category}
                    </span>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold border border-white/20">
                    <AppleIcon />
                    App Store
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">{app.description}</p>

                {app.note && (
                  <div className="flex gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs leading-relaxed mt-3">
                    <InfoIcon />
                    <span>{app.note}</span>
                  </div>
                )}

                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors group-hover:shadow-lg"
                >
                  <AppleIcon />
                  {t.mobileAppsDownloadBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileApps;
