
import React from 'react';
import { useLanguage } from '../App';

interface DemoPreviewProps {
  type: 'starter' | 'standard';
  onClose: () => void;
}

const DemoPreview: React.FC<DemoPreviewProps> = ({ type, onClose }) => {
  const { t } = useLanguage();

  // Mock content generation for the scrollable preview
  const starterContent = (
    <div className="p-8 space-y-12">
      <header className="flex justify-between items-center border-b pb-4">
        <div className="h-8 w-32 bg-slate-200 rounded"></div>
        <div className="flex gap-4">
          <div className="h-4 w-12 bg-slate-100 rounded"></div>
          <div className="h-4 w-12 bg-slate-100 rounded"></div>
        </div>
      </header>
      <section className="text-center space-y-4">
        <div className="h-12 w-3/4 mx-auto bg-slate-200 rounded"></div>
        <div className="h-4 w-1/2 mx-auto bg-slate-100 rounded"></div>
        <div className="h-48 w-full bg-indigo-50 rounded-xl"></div>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <div className="h-32 bg-slate-50 rounded-lg"></div>
        <div className="h-32 bg-slate-50 rounded-lg"></div>
      </section>
      <section className="h-64 bg-slate-900 rounded-xl p-8 flex flex-col justify-end">
        <div className="h-6 w-1/3 bg-slate-700 rounded mb-2"></div>
        <div className="h-4 w-full bg-slate-800 rounded"></div>
      </section>
      <footer className="h-20 bg-slate-100 rounded-lg"></footer>
    </div>
  );

  const standardContent = (
    <div className="p-0 space-y-0">
      <nav className="sticky top-0 bg-white shadow-sm p-4 flex justify-between items-center z-10">
        <div className="font-bold text-xl tracking-tighter">CORP_LOGO</div>
        <div className="flex gap-6">
          <div className="h-2 w-12 bg-slate-200 rounded"></div>
          <div className="h-2 w-12 bg-slate-200 rounded"></div>
          <div className="h-2 w-12 bg-slate-200 rounded"></div>
        </div>
      </nav>
      <div className="p-12 bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-6">
        <div className="text-5xl font-serif">Future of Business.</div>
        <div className="text-slate-400 max-w-lg">Scalable corporate architectures for the modern age. Built with precision and speed.</div>
        <div className="flex gap-4">
          <div className="h-10 w-32 bg-white rounded"></div>
          <div className="h-10 w-32 bg-white/10 border border-white/20 rounded"></div>
        </div>
      </div>
      <div className="p-12 grid grid-cols-3 gap-8">
        {[1,2,3].map(i => (
          <div key={i} className="space-y-4">
            <div className="h-12 w-12 bg-indigo-100 rounded-full"></div>
            <div className="h-4 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
            <div className="h-2 w-5/6 bg-slate-50 rounded"></div>
          </div>
        ))}
      </div>
      <div className="p-12 bg-slate-50">
        <div className="h-96 w-full bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col gap-4">
          <div className="h-4 w-1/4 bg-slate-200 rounded"></div>
          <div className="flex-grow bg-slate-50 rounded-xl"></div>
        </div>
      </div>
      <footer className="bg-slate-900 p-12 flex flex-col items-center gap-8">
        <div className="h-8 w-40 bg-slate-800 rounded"></div>
        <div className="flex gap-4">
          <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
          <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
          <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-12">
      <div className="relative w-full max-w-4xl h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header/Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>preview.semihsoykan.com/{type}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-grow overflow-y-auto custom-scrollbar relative">
          <div className="absolute top-4 right-8 pointer-events-none bg-slate-900/80 text-white text-[10px] px-2 py-1 rounded-full animate-bounce z-20">
            {t.demoScrollHint} ↓
          </div>
          {type === 'starter' ? starterContent : standardContent}
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;
