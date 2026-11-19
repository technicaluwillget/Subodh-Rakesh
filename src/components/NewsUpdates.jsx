import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Newspaper, ArrowRight, X, BookmarkCheck } from 'lucide-react';

export const NewsUpdates = ({ newsItems }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section id="news" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper size={14} className="text-blue-600" />
            <span>प्रेस विज्ञप्ति एवं मीडिया कवरेज</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            News और <span className="text-[#FF683D]">Updates</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            ज्वालापुर, हरिद्वार एवं उत्तराखंड के विकास से जुड़ी नवीनतम घोषणाएं और समाचार।
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden bg-[#F5F6FA] border border-slate-200/80 shadow-clean hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Tag */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FF683D] text-white shadow-xs">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/90 text-slate-800 shadow-xs flex items-center gap-1 font-sans">
                  <Calendar size={13} className="text-[#FF683D]" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase font-sans mb-1.5">
                    {item.source}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#172033] group-hover:text-[#FF683D] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedNews(item)}
                  className="pt-4 border-t border-slate-200 w-full inline-flex items-center justify-between text-xs font-bold text-[#172033] hover:text-[#FF683D] transition"
                >
                  <span>पूरा समाचार पढ़ें (Read More)</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Read More Modal */}
        <AnimatePresence>
          {selectedNews && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedNews(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
              >
                <div className="relative h-64 w-full bg-slate-100">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="px-2.5 py-1 rounded-md bg-orange-100 text-[#FF683D] font-bold">
                      {selectedNews.tag}
                    </span>
                    <span>{selectedNews.source} • {selectedNews.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#172033] leading-snug">
                    {selectedNews.title}
                  </h3>

                  <div className="text-sm text-slate-700 space-y-3 leading-relaxed border-t border-slate-100 pt-4">
                    <p className="font-semibold text-slate-800">{selectedNews.excerpt}</p>
                    <p>{selectedNews.fullContent}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#172033] text-white text-xs font-bold hover:bg-[#24324D] transition"
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
