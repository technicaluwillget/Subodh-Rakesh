import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  CheckCircle2, 
  Mic, 
  ExternalLink, 
  ShieldCheck,
  Sparkles,
  Calendar
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { achievementsData } from '../../data/portfolioData';

const iconMap = {
  Award,
  Trophy,
  CheckCircle2,
  Mic,
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Recognition & Excellence"
          title="Certifications &"
          highlight="Key Honors"
          subtitle="Industry certifications, competitive hackathon victories, and technical leadership milestones."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 sm:p-8 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Background accent glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 group-hover:bg-indigo-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 shrink-0 shadow-md">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    {/* Badge and Year */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
                        <ShieldCheck size={12} className="text-emerald-400" />
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs font-medium text-cyan-500 dark:text-cyan-400 mt-0.5 mb-2.5">
                      {item.issuer}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.credentialId && (
                      <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Credential: <span className="text-slate-300">{item.credentialId}</span></span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          Verified
                        </span>
                      </div>
                    )}

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
