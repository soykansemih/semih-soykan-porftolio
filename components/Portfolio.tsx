import React from 'react';
import { useLanguage } from '../App';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Operasyon Takip Sistemi",
      category: "Web-App",
      image: "/assets/operation_mockup.jpg",
      description: "Gelir takibini dijitalleştiren kapsamlı çözüm.",
      link: "https://defterim.otoyikamabb.com"
    },
    {
      id: 2,
      title: "Kurumsal Web Sitesi",
      category: "Corporate",
      image: "/assets/corporate_mockup.jpg",
      description: "SEO odaklı profesyonel marka sunumu.",
      link: "https://otoyikamabb.com"
    },
    {
      id: 3,
      title: "Akıllı Tarım Cihazı",
      category: "Smart System",
      image: "/assets/smart_mockup.jpg",
      description: "Sensör verilerini web ve mobilde sunan akıllı tarım çözümü.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7338653025886007296/?originTrackingId=oGb99M9k9%2Bs8GHduIhrl1w%3D%3D"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.portfolioSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-50 border border-slate-100">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{project.title}</h3>
                <p className="text-slate-500 text-sm mt-2">{project.description}</p>
                
                {/* Yönlendirme Alanı */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-bold text-sm hover:underline flex items-center"
                  >
                    Projeyi Gör
                  </a>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 italic">Daha fazla proje yakında eklenecektir...</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;