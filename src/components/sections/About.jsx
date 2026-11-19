import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Cpu, 
  Cloud, 
  Users, 
  Target, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2,
  ArrowRight,
  Compass
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo, aboutData, timelineData } from '../../data/portfolioData';

// Map icon string to component
const pillarIcons = {
  Palette: Palette,
  Cpu: Cpu,
  Cloud: Cloud,
  Users: Users,
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Engineering Journey"
          title="Architecting Value Through"
          highlight="Code & Design"
          subtitle="A thoughtful look into my engineering philosophy, background, and what drives my pursuit of software craftsmanship."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Card & Philosophy & Key Facts */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Philosophy Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Compass size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Philosophy</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Simplicity, Scale, & Accessibility</p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic border-l-2 border-indigo-500 pl-4 py-1 leading-relaxed">
                "Great software is rarely about writing more code; it's about solving the right problems with elegant, resilient architecture and interfaces that feel effortless to users."
              </blockquote>

              {/* Quick Profile Indicators */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Current Base:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Degree:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">B.Tech in Computer Science</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Availability:</span>
                  <span className="font-semibold text-emerald-500">Open for Select Projects</span>
                </div>
              </div>
            </div>

            {/* Career Goals Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Target size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Professional Goals & Focus</h3>
              </div>

              <ul className="space-y-3">
                {aboutData.careerGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Biography, Strengths, Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Biography paragraphs */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                About Subhodh Rakesh
              </h3>
              
              {aboutData.biography.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars / Personal Strengths */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                <Sparkles size={15} />
                <span>Areas of Distinct Strength</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.pillars.map((pillar, index) => {
                  const Icon = pillarIcons[pillar.icon] || Sparkles;
                  return (
                    <div 
                      key={index}
                      className="glass-card rounded-2xl p-5 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                        <Icon size={20} />
                      </div>
                      <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
                        {pillar.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience & Education teaser card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900/30 via-slate-900/40 to-cyan-900/30 border border-indigo-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">VTU Computer Science Graduate</div>
                  <div className="text-xs text-slate-400">First Class with Distinction • 2017 – 2021</div>
                </div>
              </div>
              <a 
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>View Full Timeline</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
