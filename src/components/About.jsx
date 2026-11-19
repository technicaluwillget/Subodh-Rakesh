import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  Compass, 
  Sparkles, 
  CheckCircle,
  MessageCircle,
  Zap,
  Sprout,
  Users
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/subhodhData';
import subodhPhoto from '../assets/subodh-rakesh.jpg';

const pillarIcons = {
  MessageCircle,
  Zap,
  Building2,
  Sprout
};

export const About = ({ customPhoto }) => {
  const photoSrc = customPhoto || subodhPhoto;

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF683D] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF683D]" />
            <span>व्यक्तिगत एवं सार्वजनिक जीवन</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            {aboutData.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {aboutData.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Left Photo & Profile Specs | Right Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo Card & Structured Background Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Portrait in 1:1 Aspect Ratio with zero cropping */}
            <div className="rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-md">
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-50">
                <img
                  src={photoSrc}
                  alt="सुबोध राकेश"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#172033] font-heading">
                  {personalInfo.nameHindi}
                </h3>
                <p className="text-xs font-semibold text-[#FF683D] mt-0.5">
                  {personalInfo.motto} • {personalInfo.taglineHindi}
                </p>
              </div>
            </div>

            {/* Structured Profile Table */}
            <div className="rounded-2xl bg-[#F5F6FA] p-6 border border-slate-200/80 space-y-3.5 text-xs sm:text-sm">
              <h4 className="font-bold text-[#172033] text-sm uppercase tracking-wider border-b border-slate-300 pb-2 flex items-center gap-2">
                <CheckCircle size={16} className="text-[#FF683D]" />
                <span>व्यक्तिगत एवं पारिवारिक प्रोफाइल</span>
              </h4>

              {aboutData.personalBackground.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-200/60 last:border-0">
                  <span className="font-semibold text-slate-500 min-w-[120px]">{item.label}:</span>
                  <span className="font-bold text-[#172033] sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Bio Narrative & Four Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Biography Paragraphs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#172033] border-l-4 border-[#FF683D] pl-3.5">
                जनसेवा की प्रतिबद्धता एवं पृष्ठभूमि
              </h3>
              
              {aboutData.bioParagraphs.map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Vision Pillars Grid */}
            <div>
              <h4 className="text-base font-bold text-[#172033] mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-[#FF683D]" />
                <span>भविष्य की सोच और विकास के चार मुख्य स्तंभ</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.visionPillars.map((pillar, i) => {
                  const Icon = pillarIcons[pillar.icon] || Sparkles;

                  return (
                    <div 
                      key={i}
                      className="p-5 rounded-2xl bg-[#F5F6FA] border border-slate-200/80 hover:border-[#FF683D]/40 transition-all hover:bg-white hover:shadow-md group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#FF683D] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h5 className="font-bold text-sm sm:text-base text-[#172033] mb-1.5">
                        {pillar.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Commitment Note */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 via-white to-blue-50 border border-orange-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF683D] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
                <HeartHandshake size={24} />
              </div>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-[#172033] block text-sm sm:text-base font-bold mb-0.5">
                  "हरिद्वार व ज्वालापुर का समग्र विकास ही मेरा अंतिम संकल्प है।"
                </strong>
                जनता की समस्याओं को संसद, शासन और प्रशासन तक पूरी मजबूती से पहुंचाना और उनका स्थायी हल सुनिश्चित करना ही मेरा ध्येय है।
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
