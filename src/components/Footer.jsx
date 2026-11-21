import React from 'react';
import { 
  ArrowUp, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Heart, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo } from '../data/subhodhData';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { language, t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { href: '#home', label: t('मुख्य पृष्ठ', 'Home') },
    { href: '#about', label: t('परिचय', 'About Us') },
    { href: '#journey', label: t('राजनीतिक सफर एवं विरासत', 'Political Journey & Legacy') },
    { href: '#preparations', label: t('हालिया गतिविधियां व 2027', 'Recent Activities & 2027') },
    { href: '#activities', label: t('सार्वजनिक गतिविधियां', 'Public Activities') },
    { href: '#social-work', label: t('सामाजिक कार्य', 'Social Work') },
    { href: '#media', label: t('फोटो व वीडियो', 'Media Gallery') },
    { href: '#news', label: t('समाचार', 'News & Updates') },
    { href: '#contact', label: t('संपर्क करें', 'Contact Us') },
  ];

  return (
    <footer className="bg-[#172033] text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF683D] to-[#FF855F] flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-500/20">
                SR
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white font-heading">
                  {personalInfo.nameEnglish}
                </span>
                <span className="text-xs text-orange-400 font-semibold">
                  {personalInfo.nameHindi} • {personalInfo.taglineHindi}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              उत्तराखंड के हरिद्वार स्थित ज्वालापुर क्षेत्र में जनसेवा, सामाजिक सरोकार, बुनियादी विकास एवं जन-जन की आवाज बनने का एक समर्पित प्रयास।
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>जनसेवा हेतु सदैव तत्पर</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF683D] font-bold">
              महत्वपूर्ण लिंक (Navigation)
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-[#FF683D] transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details & Social Channels */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF683D] font-bold">
              सीधा संपर्क
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#FF683D] shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white font-mono">
                  +91 {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail size={14} className="text-[#FF683D] shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white truncate">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#FF683D] shrink-0 mt-0.5" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="text-xs font-semibold text-slate-400 mb-2">{t('सोशल मीडिया:', 'Social Media:')}</div>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-pink-600 text-white transition shadow-xs"
                  aria-label="Instagram"
                  title="Instagram Profile"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href={personalInfo.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#1877F2] text-white transition shadow-xs"
                  aria-label="Facebook Official Page"
                  title="Facebook Page (ऑफिशियल पेज)"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href={personalInfo.facebookProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#0d65d9] text-white transition shadow-xs"
                  aria-label="Facebook Profile"
                  title="Facebook Profile (व्यक्तिगत अकाउंट)"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#FF683D] text-white transition shadow-xs"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.nameEnglish} ({personalInfo.nameHindi})। सर्वाधिकार सुरक्षित। ज्वालापुर, हरिद्वार (उत्तराखंड)।
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-[#FF683D] text-white text-xs font-bold transition-all duration-200"
          >
            <span>शीर्ष पर जाएं (Back to Top)</span>
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
