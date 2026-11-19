import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  Paintbrush, 
  Sparkles, 
  Layers, 
  Server, 
  Database, 
  DatabaseZap, 
  Network, 
  Terminal, 
  Boxes, 
  CloudRain, 
  GitBranch, 
  Workflow, 
  Zap, 
  CheckCircle, 
  MessageSquare,
  Cpu
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillsData } from '../../data/portfolioData';

// Map icon names to Lucide icons
const iconMap = {
  Code2,
  FileCode,
  Paintbrush,
  Sparkles,
  Layers,
  Server,
  Database,
  DatabaseZap,
  Network,
  Terminal,
  Boxes,
  CloudRain,
  GitBranch,
  Workflow,
  Zap,
  CheckCircle,
  MessageSquare,
  Figma: Paintbrush,
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Tech Stack & Competencies"
          title="Skills, Frameworks &"
          highlight="Tools I Master"
          subtitle="A comprehensive overview of my technical capabilities, software architecture expertise, and modern development toolkit."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/25 scale-105'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Cpu;
              
              // Level badge colors
              const getLevelBadge = (level) => {
                switch(level) {
                  case 'Expert':
                    return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
                  case 'Advanced':
                    return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
                  default:
                    return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
                }
              };

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  key={skill.name}
                  className="glass-card rounded-2xl p-5 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group relative"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 uppercase font-mono">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getLevelBadge(skill.level)} font-mono`}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Level Indicator Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700"
                      style={{ width: `${skill.levelScore}%` }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Note on customization */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400">
            Note: All competencies are organized modularly in <code className="text-indigo-400 font-mono">src/data/portfolioData.js</code>. Easily add or adjust skills anytime.
          </p>
        </div>

      </div>
    </section>
  );
};
