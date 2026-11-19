import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Star, 
  Check, 
  X, 
  Eye, 
  Terminal,
  Activity
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/portfolioData';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'ai-systems', label: 'AI & Systems' },
  { id: 'backend', label: 'Cloud & API' },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Portfolio"
          title="Hand-Crafted"
          highlight="Digital Solutions"
          subtitle="A selection of high-impact web applications, developer tooling, and distributed systems I have engineered."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col border border-slate-700/60 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 group"
              >
                {/* Project Image & Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-slate-950/40 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-600/90 text-white backdrop-blur-md shadow-md flex items-center gap-1.5 border border-indigo-400/30">
                      <Star size={12} className="fill-amber-300 text-amber-300" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Project Stats Pill */}
                  {project.stats && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-950/80 text-cyan-300 border border-slate-700/60 backdrop-blur-md flex items-center gap-1">
                      <Activity size={11} className="text-cyan-400 animate-pulse" />
                      <span>{project.stats}</span>
                    </div>
                  )}

                  {/* Quick Inspect Button on Hover */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
                  >
                    <span className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={15} />
                      <span>Quick Overview</span>
                    </span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-indigo-500 dark:text-cyan-400 font-medium mb-3 line-clamp-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/70"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions: Live Demo & GitHub */}
                  <div className="pt-4 border-t border-slate-700/50 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Detailed Project Showcase */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl z-10 text-slate-200"
              >
                {/* Modal Header */}
                <div className="relative h-48 sm:h-60 w-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-indigo-400 mb-2">Project Overview</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.highlights && (
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-2">Key Technical Achievements</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {selectedProject.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-400 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-indigo-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
                    >
                      <Github size={15} />
                      <span>View Source Code</span>
                    </a>

                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink size={14} />
                    </a>
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
