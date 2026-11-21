import React from 'react';
import { motion } from 'framer-motion';
import { 
  Vote, 
  Calendar, 
  Users, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  Clock, 
  FileText,
  Shield,
  Layers
} from 'lucide-react';
import { politicalJourneyData } from '../data/subhodhData';
import { useLanguage } from '../context/LanguageContext';

export const PoliticalJourney = () => {
  const { language, t } = useLanguage();
  const { familyLegacy, timeline, electoralRecord } = politicalJourneyData;

  return (
    <section id="journey" className="py-24 bg-[#F5F6FA] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF683D] text-xs font-bold uppercase tracking-wider mb-3">
            <Shield size={14} className="text-[#FF683D]" />
            <span>{t('राजनीतिक पृष्ठभूमि एवं इतिहास', 'Political Background & History')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            {t(politicalJourneyData.title, politicalJourneyData.titleEn)}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {t(politicalJourneyData.subtitle, politicalJourneyData.subtitleEn)}
          </p>
        </div>

        {/* 1. पारिवारिक पृष्ठभूमि एवं राजनीतिक विरासत */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-clean relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF683D] flex items-center justify-center shrink-0 border border-orange-100 shadow-xs">
                <Building2 size={24} />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF683D]">
                  {t('विरासत एवं परंपरा', 'Heritage & Tradition')}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172033]">
                  {t(familyLegacy.title, familyLegacy.titleEn)}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F6FA] border border-slate-200/70 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#172033]">
                  <CheckCircle2 size={18} className="text-[#FF683D] shrink-0" />
                  <span>{t('स्वर्गीय सुरेंद्र राकेश जी की जनसेवा परंपरा', 'Legacy of Late Surendra Rakesh')}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {language === 'en' ? familyLegacy.paragraphsEn[0] : familyLegacy.paragraphs[0]}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F6FA] border border-slate-200/70 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#172033]">
                  <CheckCircle2 size={18} className="text-[#FF683D] shrink-0" />
                  <span>{t('पारिवारिक पृष्ठभूमि एवं समकालीन राजनीति', 'Family Context & Contemporary Politics')}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {language === 'en' ? familyLegacy.paragraphsEn[1] : familyLegacy.paragraphs[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 & 3: Two-Column Section (Political Timeline on Left & Electoral Record on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 2. राजनीतिक सफर एवं पार्टी से जुड़ाव (Timeline Design) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-clean">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                    {t('कालक्रम', 'Timeline')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#172033]">
                    {t('राजनीतिक सफर एवं पार्टी से जुड़ाव', 'Political Journey & Affiliation')}
                  </h3>
                </div>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[#FF683D] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-[#FF683D]" />
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200/80 hover:border-slate-300 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-xs font-extrabold text-[#172033] shadow-2xs font-sans">
                          {language === 'en' && item.yearEn ? item.yearEn : item.year}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                          item.party === 'BJP' 
                            ? 'bg-orange-50 text-[#FF683D] border border-orange-200' 
                            : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}>
                          {item.party}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#172033]">
                        {language === 'en' ? item.descEn : item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3. चुनावी रिकॉर्ड – भगवानपुर विधानसभा क्षेत्र (Table & Highlights) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-clean">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF683D] flex items-center justify-center shrink-0 border border-orange-100 shadow-xs">
                    <Vote size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF683D]">
                      {t('चुनावी आंकड़े', 'Election Statistics')}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#172033]">
                      {t('चुनावी रिकॉर्ड – भगवानपुर विधानसभा क्षेत्र', 'Electoral Record – Bhagwanpur Assembly Constituency')}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[#172033] font-bold">
                      <th className="py-3.5 px-4 font-bold">{t('चुनाव वर्ष', 'Election Year')}</th>
                      <th className="py-3.5 px-4 font-bold">{t('पार्टी', 'Party')}</th>
                      <th className="py-3.5 px-4 font-bold">{t('प्राप्त वोट', 'Votes Secured')}</th>
                      <th className="py-3.5 px-4 font-bold">{t('वोट प्रतिशत', 'Vote Share')}</th>
                      <th className="py-3.5 px-4 font-bold">{t('परिणाम', 'Result')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {electoralRecord.records.map((rec, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-extrabold text-[#172033] font-sans">
                          {rec.year}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                            rec.party === 'BJP'
                              ? 'bg-orange-50 text-[#FF683D] border border-orange-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {rec.party}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#172033] font-sans">
                          {rec.votes}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900 font-sans">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                            {rec.voteShare}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            <span>{language === 'en' ? rec.resultEn : rec.result}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* चुनावी मुकाबले का विवरण (Contest Details) */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-[#FF683D]" />
                  <span>{t('चुनावी मुकाबले का विवरण', 'Electoral Contest Details')}</span>
                </div>

                {electoralRecord.records.map((rec, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F6FA] border border-slate-200/80 text-xs sm:text-sm">
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-extrabold text-[#172033] shrink-0 font-sans">
                      {rec.year}
                    </span>
                    <p className="text-slate-700 font-medium leading-relaxed">
                      {language === 'en' ? rec.marginDetailEn : rec.marginDetail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Official Source Attribution Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                <FileText size={13} className="shrink-0" />
                <span>
                  * {t(electoralRecord.sourceNote, electoralRecord.sourceNoteEn)}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
