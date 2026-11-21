import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Newspaper, 
  ArrowRight, 
  X, 
  MapPin, 
  Tag, 
  Clock, 
  Share2, 
  Check,
  ChevronRight,
  Flame,
  Archive
} from 'lucide-react';
import { newsCategories } from '../data/subhodhData';
import { useLanguage } from '../context/LanguageContext';

export const NewsUpdates = ({ newsItems = [] }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('सभी समाचार');
  const [viewType, setViewType] = useState('all'); // 'all', 'latest', 'previous'
  const [selectedNews, setSelectedNews] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const safeNewsItems = Array.isArray(newsItems) ? newsItems : [];

  // Filter by category
  const categoryFiltered = activeCategory === 'सभी समाचार'
    ? safeNewsItems
    : safeNewsItems.filter(item => 
        item && (item.category === activeCategory || item.tag === activeCategory)
      );

  // Filter by Latest / Previous
  const displayedNews = viewType === 'latest'
    ? categoryFiltered.filter(item => item.isLatest !== false)
    : viewType === 'previous'
    ? categoryFiltered.filter(item => item.isLatest === false)
    : categoryFiltered;

  const handleShare = (news) => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${news.title}\n\n${window.location.href}`);
      setCopiedId(news.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="news" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF683D] text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper size={14} className="text-[#FF683D]" />
            <span>{t('आधिकारिक समाचार एवं प्रेस कवरेज', 'Official News & Press Coverage')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            {t('समाचार एवं', 'News &')} <span className="text-[#FF683D]">{t('अपडेट्स', 'Updates')}</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {t('ज्वालापुर, हरिद्वार एवं उत्तराखण्ड के सामाजिक, धार्मिक और सार्वजनिक जीवन से संबंधित प्रामाणिक समाचार।', 'Authentic news related to social, cultural, and public life in Jwalapur, Haridwar & Uttarakhand.')}
          </p>
        </div>

        {/* View Switcher: All, Latest News, Previous News */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F5F6FA] border border-slate-200 shadow-xs">
            <button
              onClick={() => setViewType('all')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewType === 'all'
                  ? 'bg-white text-[#172033] shadow-xs'
                  : 'text-slate-600 hover:text-[#172033]'
              }`}
            >
              <span>{t('सभी समाचार', 'All News')} ({categoryFiltered.length})</span>
            </button>

            <button
              onClick={() => setViewType('latest')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewType === 'latest'
                  ? 'bg-[#FF683D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#FF683D]'
              }`}
            >
              <Flame size={14} />
              <span>{t('नवीनतम समाचार', 'Latest News')}</span>
            </button>

            <button
              onClick={() => setViewType('previous')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewType === 'previous'
                  ? 'bg-[#172033] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#172033]'
              }`}
            >
              <Archive size={14} />
              <span>{t('पूर्व समाचार', 'Archived News')}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {newsCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#172033] text-white shadow-sm scale-102'
                    : 'bg-[#F5F6FA] text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* News Cards Grid */}
        {displayedNews.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#F5F6FA] border border-slate-200 text-slate-500 text-sm">
            इस श्रेणी में वर्तमान में कोई समाचार उपलब्ध नहीं है।
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {displayedNews.map((item, index) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-clean hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Photo Container */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Tag on Top Left */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF683D] text-white shadow-sm inline-flex items-center gap-1.5">
                        <Tag size={12} />
                        <span>{item.tag || item.category}</span>
                      </span>
                    </div>

                    {/* Location & Date on Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      {item.location && (
                        <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                          <MapPin size={13} className="text-orange-300" />
                          <span>{item.location}</span>
                        </span>
                      )}

                      {item.date && (
                        <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg font-mono">
                          <Calendar size={13} className="text-orange-300" />
                          <span>{item.date}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* News Card Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {item.source && (
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                          {item.source}
                        </div>
                      )}

                      <h3 className="text-lg sm:text-xl font-bold text-[#172033] group-hover:text-[#FF683D] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Actions: Read More & Share */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedNews(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#172033] hover:bg-[#FF683D] transition-all shadow-xs"
                      >
                        <span>पूरा समाचार पढ़ें (Read More)</span>
                        <ArrowRight size={14} />
                      </button>

                      <button
                        onClick={() => handleShare(item)}
                        className="p-2 rounded-xl text-slate-500 hover:text-[#FF683D] hover:bg-orange-50 transition"
                        title="शेयर करें (Share News)"
                        aria-label="Share"
                      >
                        {copiedId === item.id ? (
                          <Check size={16} className="text-emerald-500" />
                        ) : (
                          <Share2 size={16} />
                        )}
                      </button>
                    </div>

                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Detailed Modal for Full News View */}
        <AnimatePresence>
          {selectedNews && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedNews(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              >
                {/* Header Image */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-100 shrink-0">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <button
                    onClick={() => setSelectedNews(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition shadow-sm"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF683D] text-white">
                      {selectedNews.tag || selectedNews.category}
                    </span>
                  </div>
                </div>

                {/* News Content Scrollable */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-slate-500 gap-2 border-b border-slate-100 pb-3">
                    {selectedNews.location && (
                      <span className="flex items-center gap-1 text-[#FF683D]">
                        <MapPin size={13} />
                        <strong>स्थान:</strong> {selectedNews.location}
                      </span>
                    )}

                    {selectedNews.date && (
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar size={13} />
                        {selectedNews.date}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#172033] leading-snug">
                    {selectedNews.title}
                  </h3>

                  {/* Clean Formatted Hindi Body */}
                  <div className="text-sm sm:text-base text-slate-700 space-y-3 leading-relaxed whitespace-pre-line pt-2">
                    {selectedNews.fullContent || selectedNews.excerpt}
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleShare(selectedNews)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF683D] hover:underline"
                    >
                      <Share2 size={14} />
                      <span>समाचार शेयर करें</span>
                    </button>

                    <button
                      onClick={() => setSelectedNews(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#172033] text-white text-xs font-bold hover:bg-[#24324D] transition shadow-xs"
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
