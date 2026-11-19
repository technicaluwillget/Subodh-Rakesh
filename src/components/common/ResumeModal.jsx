import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, timelineData, skillsData, achievementsData } from '../../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    window.print();
  };

  const handleDownloadText = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const resumeContent = `=====================================================
SUBHODH RAKESH — RESUME
Senior Full-Stack Engineer & UI/UX Architect
=====================================================

CONTACT
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.tagline}
${personalInfo.bioIntro}

WORK EXPERIENCE
${timelineData.experience.map(exp => `
• ${exp.role} | ${exp.company} (${exp.period})
  Location: ${exp.location}
  - ${exp.description}
  Key Achievements:
${exp.achievements.map(a => `    * ${a}`).join('\n')}
  Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION
${timelineData.education.map(edu => `
• ${edu.degree}
  ${edu.institution} (${edu.period})
  Grade/Honor: ${edu.score}
  Details: ${edu.details}
`).join('\n')}

CORE EXPERTISE
${skillsData.skills.map(s => `- ${s.name} (${s.level})`).join('\n')}

CERTIFICATIONS & AWARDS
${achievementsData.map(a => `- ${a.title} [${a.issuer}, ${a.date}]`).join('\n')}

=====================================================
Generated from Subhodh Rakesh Portfolio Website
=====================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Subhodh_Rakesh_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
                SR
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">Curriculum Vitae — Subhodh Rakesh</h3>
                <p className="text-xs text-slate-400">Verified Professional Profile • Ready for Review</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                title="Print or Save as PDF"
              >
                <Printer size={14} />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={handleDownloadText}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Modal Body / Printable Sheet */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900/90 text-slate-200">
            {/* Header info */}
            <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{personalInfo.name}</h1>
                <p className="text-indigo-400 font-medium text-sm sm:text-base mt-1">{personalInfo.roleHeadline}</p>
                <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">{personalInfo.tagline}</p>
              </div>

              <div className="text-xs space-y-1.5 text-slate-300 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-indigo-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-indigo-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm tracking-wide uppercase mb-4">
                <Briefcase size={16} />
                <span>Work Experience</span>
              </div>
              <div className="space-y-6">
                {timelineData.experience.map(exp => (
                  <div key={exp.id} className="relative pl-4 border-l-2 border-indigo-500/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-semibold text-white">{exp.role}</h4>
                      <span className="text-xs font-mono text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">{exp.period}</span>
                    </div>
                    <div className="text-xs text-slate-400 mb-2">{exp.company} • {exp.location}</div>
                    <p className="text-xs text-slate-300 mb-2 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm tracking-wide uppercase mb-4">
                <GraduationCap size={16} />
                <span>Education</span>
              </div>
              <div className="space-y-4">
                {timelineData.education.map(edu => (
                  <div key={edu.id} className="relative pl-4 border-l-2 border-cyan-500/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-semibold text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">{edu.period}</span>
                    </div>
                    <div className="text-xs text-slate-400">{edu.institution} • {edu.score}</div>
                    <p className="text-xs text-slate-300 mt-1">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm tracking-wide uppercase mb-3">
                <CheckCircle size={16} />
                <span>Core Competencies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm tracking-wide uppercase mb-3">
                <Award size={16} />
                <span>Certifications & Honors</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {achievementsData.map(ach => (
                  <div key={ach.id} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/60">
                    <p className="font-semibold text-white">{ach.title}</p>
                    <p className="text-slate-400 mt-0.5">{ach.issuer} ({ach.date})</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 text-center text-xs text-slate-500">
            Note: Contact information and milestone dates are editable placeholders in <code className="text-indigo-400">src/data/portfolioData.js</code>.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
