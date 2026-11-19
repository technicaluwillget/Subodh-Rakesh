import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, MapPin, Award, CheckCircle2, Camera } from 'lucide-react';
import { personalInfo } from '../data/subhodhData';

export const Hero = ({ onProfileClick, onActivitiesClick, customPhoto, onPhotoChange }) => {
  const photoSrc = customPhoto || '/subodh-rakesh-portrait.svg';

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 hero-gradient overflow-hidden flex items-center"
    >
      {/* Decorative background ambient shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions, Headings & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Intro Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF683D] animate-ping" />
              <span className="text-xs sm:text-sm font-bold text-[#172033]">
                {personalInfo.introTitle}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#172033] leading-[1.15]">
              {personalInfo.heroHeading}
            </h1>

            {/* Orange Highlight Sub-heading */}
            <div className="mt-3 sm:mt-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF683D] drop-shadow-xs">
                {personalInfo.taglineHindi}
              </span>
            </div>

            {/* Intro Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Key Location Badge */}
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-200/60">
              <MapPin size={16} className="text-[#FF683D]" />
              <span>ज्वालापुर / हरिद्वार, उत्तराखंड</span>
            </div>

            {/* Two Primary Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              
              {/* Button 1: मेरी प्रोफाइल देखें */}
              <button
                onClick={onProfileClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#FF683D] hover:bg-[#E55328] shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>मेरी प्रोफाइल देखें</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Button 2: सार्वजनिक गतिविधियां देखें */}
              <button
                onClick={onActivitiesClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-[#172033] bg-white hover:bg-slate-50 border border-slate-200 shadow-md shadow-slate-200/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users size={18} className="text-[#FF683D]" />
                <span>सार्वजनिक गतिविधियां देखें</span>
              </button>

            </div>

            {/* Stats Overview Pill Bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-300/40">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: High-Impact Profile Photo of Subhodh Rakesh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              
              {/* Decorative Geometric Rings */}
              <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-tr from-[#FF683D]/25 via-indigo-300/30 to-blue-300/25 blur-xl -z-10" />
              
              {/* Subtle Floating Badge 1: Uttarakhand Pride */}
              <div className="absolute -top-4 -left-4 z-20 px-4 py-2 rounded-2xl bg-white shadow-elevated border border-slate-100 flex items-center gap-2 text-xs font-bold text-[#172033]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>उत्तराखंड जनसेवक</span>
              </div>

              {/* Subtle Floating Badge 2: Jwalapur Trust */}
              <div className="absolute -bottom-4 -right-4 z-20 px-4 py-2 rounded-2xl bg-white shadow-elevated border border-slate-100 flex items-center gap-2 text-xs font-bold text-[#FF683D]">
                <CheckCircle2 size={16} />
                <span>ज्वालापुर का विश्वास</span>
              </div>

              {/* Curved / Rounded Framing as requested */}
              <div className="relative rounded-[32px] overflow-hidden bg-white p-2.5 shadow-elevated border border-white/80">
                <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50 aspect-[4/4.8] flex items-center justify-center">
                  
                  <img
                    src={photoSrc}
                    alt="सुबोध राकेश (Subhod Rakesh)"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/subodh-rakesh-portrait.svg';
                    }}
                  />

                  {/* Gradient shadow at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#172033]/80 via-[#172033]/20 to-transparent flex items-end justify-between p-5 text-white">
                    <div>
                      <div className="text-xl font-bold font-heading">सुबोध राकेश</div>
                      <div className="text-xs text-orange-200">जनता की सेवा, विकास का संकल्प</div>
                    </div>
                    
                    {/* Quick photo update button */}
                    <label 
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md cursor-pointer transition"
                      title="अपनी असली फोटो अपलोड करें (Upload Actual Photo)"
                    >
                      <Camera size={16} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={onPhotoChange} 
                      />
                    </label>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
