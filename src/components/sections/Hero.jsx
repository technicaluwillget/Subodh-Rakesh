import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Code, 
  Sparkles, 
  Terminal, 
  CheckCircle,
  ExternalLink,
  Download
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  // Role switcher animation
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Role, Intro, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-800 text-xs font-medium mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono text-[11px]">
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] font-heading"
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-gradient drop-shadow-sm">
                Subhodh Rakesh.
              </span>
            </motion.h1>

            {/* Subtitle / Role Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-5"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200">
                {personalInfo.roleHeadline}
              </h2>
              
              {/* Dynamic typing role badge */}
              <div className="h-8 mt-2 flex items-center">
                <span className="text-sm sm:text-base font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  &gt; {displayText}
                  <span className="animate-pulse inline-block w-2 h-4 ml-1 bg-indigo-500 align-middle" />
                </span>
              </div>
            </motion.div>

            {/* Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed"
            >
              {personalInfo.bioIntro}
            </motion.p>

            {/* Two Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* CTA 1: Explore My Work */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* CTA 2: Contact Me */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/70 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={17} className="text-cyan-500" />
                <span>Contact Me</span>
              </button>

              {/* Optional Quick Resume View */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-400 transition ml-1"
              >
                <Download size={13} />
                <span>Quick CV</span>
              </button>
            </motion.div>

            {/* Social Media Links & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 text-slate-500 dark:text-slate-400"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:text-indigo-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-200 dark:border-slate-700/50"
              >
                <Github size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-200 dark:border-slate-700/50"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-200 dark:border-slate-700/50"
              >
                <Twitter size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-200 dark:border-slate-700/50"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Portrait / Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Glowing Halo Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-600 opacity-40 blur-xl animate-pulse-slow" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl p-6 sm:p-8 glass-card bg-slate-900/90 dark:bg-slate-900/90 shadow-2xl border border-slate-700/50 overflow-hidden">
                
                {/* Tech Badges Floating Effect */}
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6">
                  {/* Avatar Border & Background */}
                  <div className="w-full h-full rounded-2xl p-1 bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 shadow-xl">
                    <div className="w-full h-full rounded-[14px] bg-[#0B0F19] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                      
                      {/* Subtle Grid pattern in avatar */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:12px_12px]" />

                      {/* Monogram / Profile Graphic */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600/30 to-cyan-500/20 border border-indigo-500/40 flex items-center justify-center mb-2 z-10 shadow-inner">
                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 font-mono">
                          SR
                        </span>
                      </div>
                      
                      <span className="text-xs font-semibold text-slate-300 z-10">Subhodh Rakesh</span>
                      <span className="text-[10px] text-indigo-400 font-mono z-10">Software Engineer</span>
                    </div>
                  </div>

                  {/* Floating Micro-Badge 1: React / TS */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-lg bg-slate-950/90 border border-indigo-500/40 text-[11px] font-mono text-cyan-400 shadow-lg flex items-center gap-1.5 animate-float-slow">
                    <Code size={13} className="text-indigo-400" />
                    <span>React • TS</span>
                  </div>

                  {/* Floating Micro-Badge 2: Cloud / Node */}
                  <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-[11px] font-mono text-indigo-300 shadow-lg flex items-center gap-1.5 animate-float-delayed">
                    <Terminal size={13} className="text-cyan-400" />
                    <span>Node • Cloud</span>
                  </div>
                </div>

                {/* Profile Snapshot Details */}
                <div className="space-y-3 border-t border-slate-800/80 pt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Core Focus:</span>
                    <span className="font-semibold text-slate-200">Full-Stack & Systems</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Experience:</span>
                    <span className="font-semibold text-indigo-400 font-mono">{personalInfo.yearsExperience} Proven</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Base Location:</span>
                    <span className="font-semibold text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Quick stats mini-bar */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-800/80 text-center">
                  <div className="p-2 rounded-xl bg-slate-800/50">
                    <div className="text-base font-extrabold text-white font-heading">{personalInfo.projectsCompleted}</div>
                    <div className="text-[10px] text-slate-400">Projects</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/50">
                    <div className="text-base font-extrabold text-cyan-400 font-heading">{personalInfo.codeCommits}</div>
                    <div className="text-[10px] text-slate-400">Commits</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/50">
                    <div className="text-base font-extrabold text-indigo-400 font-heading">{personalInfo.clientSatisfaction}</div>
                    <div className="text-[10px] text-slate-400">Satisfaction</div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
