import React from 'react';
import { useLanguage } from '../App';

const Packages: React.FC = () => {
  const { t } = useLanguage();

  const contactEmail = "mailto:semihsoykaniletisim@gmail.com";

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section id="packages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.packagesTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.packagesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Launchpad */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{t.launchTitle}</h3>
            <p className="text-slate-500 text-sm mb-6">{t.launchDesc}</p>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.launchItem1}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.launchItem2}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.launchItem3}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.launchItem4}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.launchItem5}</li>
            </ul>

            <a href={contactEmail} className="w-full py-3 bg-slate-100 rounded-xl text-center font-bold">
              {t.contactQuickBtn}
            </a>
          </div>

          {/* Growth */}
          <div className="bg-white rounded-3xl p-8 border-2 border-indigo-600 shadow-xl flex flex-col scale-105">
            <h3 className="text-2xl font-bold mb-2">{t.growthTitle}</h3>
            <p className="text-slate-500 text-sm mb-6">{t.growthDesc}</p>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.growthItem1}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.growthItem2}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.growthItem3}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.growthItem4}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.growthItem5}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.growthItem6}</li>
            </ul>

            <a href={contactEmail} className="w-full py-3 bg-indigo-600 text-white rounded-xl text-center font-bold">
              {t.contactQuickBtn}
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{t.enterpriseTitle}</h3>
            <p className="text-slate-500 text-sm mb-6">{t.enterpriseDesc}</p>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.enterpriseItem1}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.enterpriseItem2}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.enterpriseItem3}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.enterpriseItem4}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.enterpriseItem5}</li>
              <li className="flex gap-3 text-sm"><CheckIcon /> {t.enterpriseItem6}</li>
            </ul>

            <a href={contactEmail} className="w-full py-3 bg-slate-900 text-white rounded-xl text-center font-bold">
              {t.contactQuickBtn}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Packages;
