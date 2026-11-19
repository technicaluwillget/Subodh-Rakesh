import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  center = true,
  className = "" 
}) => {
  return (
    <div className={`mb-14 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 dark:text-indigo-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
      >
        {title}{' '}
        {highlight && (
          <span className="text-gradient">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
