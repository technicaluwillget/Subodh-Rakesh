import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, ArrowRight, X, ExternalLink } from 'lucide-react';
import { publicActivitiesCategories } from '../data/subhodhData';
import { useLanguage } from '../context/LanguageContext';

export const PublicActivities = ({ activities }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities = activeCategory === 'all'
    ? activities
    : activities.filter(a => a.category === activeCategory);

  return (
    <section id="activities" className="py-24 bg-[#F5F6FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#172033] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{t('क्षेत्रीय जनसेवा व जनसंवाद', 'Regional Public Welfare & Outreach')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            {t('सार्वजनिक गतिविधियां', 'Public Activities')} <span className="text-[#FF683D]">({t('जनसेवा कार्य', 'Community Work')})</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {t('ज्वालापुर एवं हरिद्वार क्षेत्र में जनसंपर्क, सामुदायिक बैठकें, जनसमस्या निवारण एवं स्थानीय विकास कार्य।', 'Public outreach, community meetings, grievance redressal, and local development work in Jwalapur & Haridwar.')}
          </p>
        </div>

        {/* Category Filters (visible when activities exist) */}
        {activities && activities.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {publicActivitiesCategories.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF683D] text-white shadow-md shadow-orange-500/25 scale-105'
                      : 'bg-white text-slate-700 hover:text-[#172033] border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Activities Grid or Empty State */}
        {filteredActivities.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 sm:p-14 border border-slate-200/80 shadow-clean text-center max-w-2xl mx-auto my-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4 text-[#FF683D] shadow-xs">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#172033] mb-2 font-heading">
              {t('वर्तमान में कोई नई गतिविधि सूचीबद्ध नहीं है', 'No New Activities Listed Currently')}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
              {t('ज्वालापुर एवं हरिद्वार क्षेत्र में आगामी सार्वजनिक कार्यक्रमों, जनसंवाद व विकास कार्यों का विवरण शीघ्र ही यहाँ साझा किया जाएगा।', 'Upcoming public programs, mass interactions, and regional developmental initiatives in Jwalapur & Haridwar will be updated here shortly.')}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('क्षेत्रीय जनसेवा व जनसंपर्क कार्य निरंतर जारी है', 'Public welfare & regional outreach initiatives are ongoing')}</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredActivities.map((act) => (
                <motion.div
                  layout
                  key={act.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-clean hover:shadow-elevated transition-all duration-300 flex flex-col hover:-translate-y-1 group"
                >
                  {/* Photo with Overlay */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {act.status && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#172033]/90 text-white backdrop-blur-md">
                        {act.status}
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/95 text-[#172033] shadow-sm flex items-center gap-1 font-sans">
                      <Calendar size={13} className="text-[#FF683D]" />
                      <span>{act.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#FF683D] font-bold mb-2">
                        <MapPin size={13} />
                        <span>{act.location}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#172033] group-hover:text-[#FF683D] transition-colors leading-snug mb-3">
                        {act.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {act.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedActivity(act)}
                      className="pt-4 border-t border-slate-100 w-full inline-flex items-center justify-between text-xs font-bold text-[#172033] hover:text-[#FF683D] transition"
                    >
                      <span>विस्तार से देखें</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Modal for viewing full activity details */}
        <AnimatePresence>
          {selectedActivity && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedActivity(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
              >
                <div className="relative h-60 w-full bg-slate-100">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span className="flex items-center gap-1 text-[#FF683D]">
                      <MapPin size={14} />
                      {selectedActivity.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedActivity.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172033]">
                    {selectedActivity.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedActivity.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => setSelectedActivity(null)}
                      className="px-5 py-2.5 rounded-xl bg-[#172033] text-white text-xs font-bold hover:bg-[#24324D] transition"
                    >
                      बंद करें
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
