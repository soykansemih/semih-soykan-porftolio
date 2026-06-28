import React, { useState } from 'react';
import { useLanguage } from '../App';

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" />
    <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
  </svg>
);

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

  const webProjects = [
    {
      id: 1,
      title: t.proj1Title,
      category: 'Web-App',
      image: '/assets/11.mp4',
      description: t.proj1Desc,
      link: 'https://defterim.otoyikamabb.com',
      fallbackLink: 'https://bbotoyikama-notebook.vercel.app/',
    },
    {
      id: 2,
      title: t.proj2Title,
      category: 'Corporate',
      image: '/assets/5.mp4',
      description: t.proj2Desc,
      link: 'https://otoyikamabb.com',
      fallbackLink: 'https://bbotoyikama-web.vercel.app/',
    },
    {
      id: 3,
      title: t.proj3Title,
      category: 'Smart System',
      image: '/assets/smart_mockup.jpg',
      description: t.proj3Desc,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7338653025886007296/?originTrackingId=oGb99M9k9%2Bs8GHduIhrl1w%3D%3D',
    },
    {
      id: 4,
      title: t.proj4Title,
      category: 'Corporate',
      image: '/assets/8.mp4',
      description: t.proj4Desc,
      link: 'https://mersinoyuncak.com',
    },
  ];

  const mobileProjects = [
    {
      id: 'm1',
      name: 'BB Oto Yıkama',
      category: t.bbAppCategory,
      description: t.bbAppDesc,
      iconSrc: '/assets/bb-icon.jpg',
      link: 'https://apps.apple.com/tr/app/bb-oto-y%C4%B1kama/id6760658074?l=tr',
      gradient: 'from-cyan-600 to-blue-700',
    },
    {
      id: 'm2',
      name: 'Forx: Döviz Altın Kripto',
      category: t.forxAppCategory,
      description: t.forxAppDesc,
      iconSrc: '/assets/forx-icon.png',
      link: 'https://apps.apple.com/tr/app/forx-d%C3%B6viz-alt%C4%B1n-kripto/id6767925625?l=tr',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  const isVideo = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            {t.portfolioSubtitle}
          </p>

          {/* Tabs */}
          <div className="inline-flex bg-slate-200 rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-7 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'web'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.portfolioTabWeb}
              <span className="ml-2 text-xs font-bold opacity-60">{webProjects.length}</span>
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-7 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'mobile'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.portfolioTabMobile}
              <span className="ml-2 text-xs font-bold opacity-60">{mobileProjects.length}</span>
            </button>
          </div>
        </div>

        {/* Web Projects */}
        {activeTab === 'web' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-slate-200 hover:border-indigo-200"
              >
                <div className="aspect-video overflow-hidden bg-slate-900">
                  {isVideo(project.image) ? (
                    <video
                      src={project.image}
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{project.title}</h3>
                  <p className="text-slate-500 text-sm mt-2">{project.description}</p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-bold text-sm hover:underline"
                      >
                        {t.portfolioViewProject}
                      </a>
                      {project.fallbackLink && (
                        <a
                          href={project.fallbackLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 text-xs hover:text-indigo-500 transition-colors"
                        >
                          ↗ {t.portfolioFallbackLink}
                        </a>
                      )}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Projects */}
        {activeTab === 'mobile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {mobileProjects.map((app) => (
              <div
                key={app.id}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-slate-200 hover:border-indigo-200 flex flex-col"
              >
                <div className={`bg-gradient-to-br ${app.gradient} p-8 flex items-center justify-center relative overflow-hidden shrink-0`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
                  <img
                    src={app.iconSrc}
                    alt={app.name}
                    className="w-20 h-20 rounded-2xl shadow-xl object-cover ring-4 ring-white/20"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {app.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{app.name}</h3>
                  <p className="text-slate-500 text-sm mt-2 flex-1">{app.description}</p>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-700 transition-colors"
                  >
                    <AppleIcon />
                    {t.mobileAppsDownloadBtn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-slate-400 italic">{t.portfolioMore}</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
