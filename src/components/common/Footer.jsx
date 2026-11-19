import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Sparkles,
  Shield
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1.5px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xs bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-cyan-300 font-mono">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-base tracking-wider text-white font-heading uppercase">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Select Projects</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Status */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Get in Touch
            </h4>
            <p className="text-xs text-slate-400">
              Bangalore, India • Available for global remote roles
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Crafted with clean architecture & modern web standards.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all duration-200"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
