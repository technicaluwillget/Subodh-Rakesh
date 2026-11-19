import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShieldCheck, ExternalLink, ChevronRight, UserCog } from 'lucide-react';
import { personalInfo } from '../data/subhodhData';

const navLinks = [
  { id: 'home', label: 'HOME', labelHindi: 'मुख्य पृष्ठ' },
  { id: 'about', label: 'ABOUT US', labelHindi: 'परिचय' },
  { id: 'activities', label: 'PUBLIC ACTIVITIES', labelHindi: 'सार्वजनिक गतिविधियां' },
  { id: 'social-work', label: 'SOCIAL WORK', labelHindi: 'सामाजिक कार्य' },
  { id: 'media', label: 'MEDIA', labelHindi: 'फोटो व वीडियो' },
  { id: 'news', label: 'NEWS & UPDATES', labelHindi: 'समाचार' },
  { id: 'contact', label: 'CONTACT', labelHindi: 'संपर्क' },
];

export const Navbar = ({ onOpenAdmin, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-md py-3.5 border-b border-slate-100'
          : 'py-5 shadow-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Name on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF683D] to-[#FF855F] flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-[#172033] font-heading group-hover:text-[#FF683D] transition-colors">
                {personalInfo.nameEnglish}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 -mt-1 font-sans">
                {personalInfo.nameHindi} • हरिद्वार
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-xs font-bold tracking-wider uppercase transition-all duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#FF683D]'
                      : 'text-[#172033] hover:text-[#FF683D]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF683D] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Contact Button & Admin Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl text-slate-500 hover:text-[#172033] hover:bg-slate-100 transition"
              title="एडमिन डैशबोर्ड (Admin Portal)"
              aria-label="Admin Dashboard"
            >
              <UserCog size={18} />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF683D] hover:bg-[#E55328] shadow-md shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider"
            >
              <span>CONTACT NOW</span>
              <Phone size={14} />
            </button>
          </div>

          {/* Mobile Hamburger & Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-600 hover:text-[#FF683D]"
              title="Admin"
            >
              <UserCog size={18} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172033] hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-slate-100 px-6 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition ${
                      isActive
                        ? 'bg-[#FF683D]/10 text-[#FF683D]'
                        : 'text-[#172033] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label} ({link.labelHindi})</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#FF683D]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#FF683D] hover:bg-[#E55328] shadow-md shadow-orange-500/25"
              >
                <Phone size={16} />
                <span>CONTACT NOW (हमसे संपर्क करें)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
