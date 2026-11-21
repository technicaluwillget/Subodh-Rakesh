import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Eye, Play, X, ExternalLink, Calendar, Tag } from 'lucide-react';
import { personalInfo } from '../data/subhodhData';
import { useLanguage } from '../context/LanguageContext';

const categories = [
  { id: 'all', label: 'सभी तस्वीरें (All Photos)', labelHi: 'सभी तस्वीरें', labelEn: 'All Photos' },
  { id: 'Public Events', label: 'सार्वजनिक कार्यक्रम', labelHi: 'सार्वजनिक कार्यक्रम', labelEn: 'Public Events' },
  { id: 'Social Activities', label: 'सामाजिक गतिविधियां', labelHi: 'सामाजिक गतिविधियां', labelEn: 'Social Activities' },
  { id: 'Community Programs', label: 'सामुदायिक जनसंवाद', labelHi: 'सामुदायिक जनसंवाद', labelEn: 'Community Programs' },
];

export const MediaGallery = ({ galleryItems = [] }) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const safeGalleryItems = Array.isArray(galleryItems) ? galleryItems : [];

  const filteredItems = activeFilter === 'all'
    ? safeGalleryItems
    : safeGalleryItems.filter(item => item && item.category === activeFilter);

  return (
    <section id="media" className="py-24 bg-[#F5F6FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Instagram size={14} className="text-pink-600" />
              <span>{t('इंस्टाग्राम एवं दृश्य मीडिया गैलरी', 'Instagram & Visual Media Gallery')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
              {t('फोटो और वीडियो', 'Photo & Video')} <span className="text-[#FF683D]">{t('गैलरी', 'Gallery')}</span>
            </h2>

            <p className="mt-3 text-base text-slate-600 font-medium">
              {t('सार्वजनिक कार्यक्रमों, जनसंपर्क अभियानों और सामाजिक गतिविधियों की चुनिंदा झलकियां।', 'Selected glimpses of public programs, mass outreach, and social welfare activities.')}
            </p>
          </div>

          {/* Instagram Follow Button */}
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/20 hover:scale-105 transition-transform shrink-0"
          >
            <Instagram size={18} />
            <span>{t('इंस्टाग्राम पर फॉलो करें', 'FOLLOW ON INSTAGRAM')}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#172033] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Instagram Styled Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 cursor-pointer shadow-clean hover:shadow-elevated transition-all"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Video Play Icon if video */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-xs">
                    <Play size={16} className="fill-white translate-x-0.5" />
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/90 via-[#172033]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-mono text-[#FF683D] font-bold uppercase">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold leading-snug mt-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-300 mt-2 pt-2 border-t border-white/20">
                    <span>{item.date}</span>
                    <span className="inline-flex items-center gap-1 text-white font-semibold">
                      <Eye size={14} /> View Full
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instagram Profile Teaser Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-clean flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] shadow-sm shrink-0">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Instagram size={28} className="text-pink-600" />
              </div>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[#172033]">
                {personalInfo.instagramHandle || '@subodh_rakesh_official'}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                सुबोध राकेश के सभी दैनिक वीडियो, रील और लाइव अपडेट इंस्टाग्राम पर देखें।
              </div>
            </div>
          </div>

          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#FF683D] text-white text-xs sm:text-sm font-bold transition-colors shrink-0"
          >
            ओपन इंस्टाग्राम प्रोफाइल
          </a>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxItem(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-3xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl z-10 text-white"
              >
                <div className="relative aspect-[16/10] bg-black flex items-center justify-center">
                  <img
                    src={lightboxItem.url}
                    alt={lightboxItem.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 bg-slate-900 border-t border-slate-800">
                  <span className="text-xs font-mono text-[#FF683D] font-bold uppercase">
                    {lightboxItem.category} • {lightboxItem.date}
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-slate-100">
                    {lightboxItem.title}
                  </h3>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
