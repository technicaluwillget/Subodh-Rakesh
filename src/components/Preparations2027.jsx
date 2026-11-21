import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Target, 
  Flag, 
  TrendingUp, 
  Users, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { preparations2027Data } from '../data/subhodhData';
import { useLanguage } from '../context/LanguageContext';

export const Preparations2027 = () => {
  const { language, t } = useLanguage();
  const { recentActivities, election2027 } = preparations2027Data;

  return (
    <section id="preparations" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF683D] text-xs font-bold uppercase tracking-wider mb-3">
            <Flag size={14} className="text-[#FF683D]" />
            <span>{t(preparations2027Data.badge, preparations2027Data.badgeEn)}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight">
            {t(preparations2027Data.title, preparations2027Data.titleEn)}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {t(preparations2027Data.subtitle, preparations2027Data.subtitleEn)}
          </p>
        </div>

        {/* 2-Column Responsive Layout: Left = Recent Activities | Right = 2027 Preparations Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Recent Activities in Haridwar District (BJP Leader) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="bg-[#F5F6FA] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-clean flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Card Title & Party Tag */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#FF683D] flex items-center justify-center shrink-0 border border-orange-100 shadow-xs">
                      <Users size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF683D]">
                        {t('संगठनात्मक सक्रियता', 'Organizational Activity')}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#172033]">
                        {t(recentActivities.title, recentActivities.titleEn)}
                      </h3>
                    </div>
                  </div>

                  <span className="shrink-0 px-3 py-1 rounded-xl bg-orange-50 text-[#FF683D] border border-orange-200 text-xs font-bold">
                    BJP
                  </span>
                </div>

                {/* Core Paragraph (Exact user text) */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 mb-6 shadow-2xs">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {language === 'en' ? recentActivities.descriptionEn : recentActivities.description}
                  </p>
                </div>

                {/* Sub-Constituencies Highlights */}
                <div className="space-y-3.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#FF683D]" />
                    <span>{t('प्रमुख सक्रिय क्षेत्र', 'Key Operational Areas')}</span>
                  </div>

                  {recentActivities.constituencies.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/70 flex items-start gap-3.5 hover:border-slate-300 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#FF683D] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#172033]">
                          {language === 'en' ? c.nameEn : c.name}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {language === 'en' ? c.descEn : c.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('हरिद्वार जनपद में निरंतर जनसंपर्क जारी', 'Continuous public outreach in Haridwar district')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2027 Election Preparations & Aspiration Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#172033] to-[#202D45] text-white rounded-3xl p-6 sm:p-8 shadow-elevated flex flex-col justify-between h-full relative overflow-hidden border border-slate-800">
              {/* Decorative accent elements */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#FF683D]/20 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header & Year 2027 Badge */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#FF683D] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
                      <Target size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-orange-400">
                        {t('चुनावी रूपरेखा', 'Electoral Roadmap')}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {t(election2027.title, election2027.titleEn)}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-xl bg-orange-500/20 text-[#FF855F] border border-orange-500/30 text-xs sm:text-sm font-extrabold font-sans">
                    2027
                  </span>
                </div>

                {/* High-Impact Statement Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-6 relative">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF683D] text-white text-[11px] font-bold mb-3 shadow-xs">
                    <Sparkles size={12} />
                    <span>{t(election2027.tag, election2027.tagEn)}</span>
                  </div>

                  <p className="text-base sm:text-lg text-white font-semibold leading-relaxed">
                    "{language === 'en' ? election2027.statementEn : election2027.statement}"
                  </p>
                </div>

                {/* Key Details Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {election2027.highlights.map((h, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[11px] font-semibold text-slate-300 block">
                        {language === 'en' ? h.labelEn : h.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-1 block">
                        {language === 'en' ? h.valueEn : h.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Commitment Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-[#FF683D] shrink-0" />
                    <span>{t('ज्वालापुर क्षेत्र में जनता की बुनियादी समस्याओं का स्थायी समाधान', 'Sustainable redressal of civic and local issues in Jwalapur')}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-[#FF683D] shrink-0" />
                    <span>{t('भारतीय जनता पार्टी (BJP) की जनहितैषी नीतियों का प्रभावी क्रियान्वयन', 'Effective grassroots implementation of BJP welfare policies')}</span>
                  </div>
                </div>
              </div>

              {/* Call to action at bottom */}
              <div className="mt-8 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Calendar size={14} className="text-[#FF683D]" />
                  <span>{t('मिशन 2027: ज्वालापुर का विकास व जनविश्वास', 'Mission 2027: Development & Trust of Jwalapur')}</span>
                </div>

                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF855F] hover:text-white transition-colors"
                >
                  <span>{t('जुड़ें एवं संवाद करें', 'Connect & Reach Out')}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
