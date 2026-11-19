import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Trophy, 
  HeartPulse, 
  Trees, 
  HandHeart, 
  Megaphone,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { socialWorkCategories } from '../data/subhodhData';

const iconMap = {
  GraduationCap,
  Trophy,
  HeartPulse,
  Trees,
  HandHeart,
  Megaphone
};

export const SocialWork = () => {
  return (
    <section id="social-work" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>मानवता व समाजोत्थान का संकल्प</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            सामाजिक कार्य <span className="text-[#FF683D]">(Social Work)</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            शिक्षा, युवा विकास, स्वास्थ्य, पर्यावरण और जनसहयोग के क्षेत्र में सुबोध राकेश जी के प्रमुख सामाजिक अभियान।
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialWorkCategories.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#F5F6FA] rounded-3xl p-7 border border-slate-200/80 hover:border-[#FF683D]/40 hover:bg-white hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#FF683D] mb-5 group-hover:scale-110 group-hover:bg-[#FF683D] group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#172033] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[#FF683D] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 text-[11px] font-semibold text-slate-400 font-sans">
                  सत्यापित सामाजिक पहल • ज्वालापुर (हरिद्वार)
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
