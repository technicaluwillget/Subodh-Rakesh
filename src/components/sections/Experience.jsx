import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building, 
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { timelineData } from '../../data/portfolioData';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Career Milestones"
          title="Experience &"
          highlight="Education Timeline"
          subtitle="A track record of driving impact across production codebases, leading teams, and continuous learning."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-md shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap size={16} />
              <span>Education & Milestones</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent -translate-x-1/2 hidden sm:block opacity-30" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent block sm:hidden opacity-30" />

          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-12"
              >
                {timelineData.experience.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div 
                      key={item.id} 
                      className={`relative flex flex-col sm:flex-row items-start ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Central Node */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 shadow-glow-primary flex items-center justify-center text-indigo-400 z-10">
                        <Briefcase size={13} />
                      </div>

                      {/* Content Card */}
                      <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                        <div className="glass-card rounded-2xl p-6 sm:p-7 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl group">
                          
                          {/* Header info */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {item.period}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                              <MapPin size={12} className="text-cyan-400" />
                              {item.location}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                            {item.role}
                          </h4>

                          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3">
                            <Building size={13} className="text-indigo-400" />
                            <span>{item.company}</span>
                            <span className="text-slate-400">• {item.type}</span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
                            {item.description}
                          </p>

                          {/* Key achievements list */}
                          <div className="space-y-2 mb-5">
                            {item.achievements.map((ach, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-gray-300">
                                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech stack tags */}
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                            {item.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                        </div>
                      </div>

                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-12"
              >
                {timelineData.education.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div 
                      key={item.id} 
                      className={`relative flex flex-col sm:flex-row items-start ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Central Node */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-glow-cyan flex items-center justify-center text-cyan-400 z-10">
                        <GraduationCap size={14} />
                      </div>

                      {/* Content Card */}
                      <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                        <div className="glass-card rounded-2xl p-6 sm:p-7 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl group">
                          
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                              {item.period}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                              <MapPin size={12} className="text-indigo-400" />
                              {item.location}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                            {item.degree}
                          </h4>

                          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
                            <Building size={13} className="text-cyan-400" />
                            <span>{item.institution}</span>
                          </div>

                          <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                            {item.score}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
                            {item.details}
                          </p>

                          {item.highlights && (
                            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                              {item.highlights.map((hl, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-indigo-300 border border-slate-700/60"
                                >
                                  • {hl}
                                </span>
                              ))}
                            </div>
                          )}

                        </div>
                      </div>

                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
