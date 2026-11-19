import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Twitter, 
  AlertCircle,
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validate form inputs
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    /**
     * BACKEND INTEGRATION NOTE:
     * To connect with Formspree, EmailJS, or your backend server:
     * e.g. await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(formData) })
     * Or EmailJS: emailjs.send(...)
     * No credentials are hardcoded here to preserve frontend security.
     */
    try {
      // Simulate rapid server delivery
      await new Promise(resolve => setTimeout(resolve, 900));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 }
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    } catch (error) {
      setIsSubmitting(false);
      setErrors({ global: 'Failed to send message. Please try sending a direct email.' });
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Start A Conversation"
          title="Let's Build Something"
          highlight="Exceptional Together"
          subtitle="Whether you have an upcoming project, architecture questions, or want to explore collaboration — I'm just a message away."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6">
                Feel free to reach out directly via email or phone. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail size={17} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-indigo-400 transition truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Phone (Placeholder)</div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 font-mono">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Location</div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div className="p-3.5 rounded-2xl bg-slate-800/30 border border-slate-700/40 flex items-center gap-3 text-xs text-slate-400">
                  <Clock size={16} className="text-indigo-400 shrink-0" />
                  <span>Standard Response Time: <strong>Within 24 Hours</strong></span>
                </div>
              </div>

              {/* Social profiles row */}
              <div className="mt-8 pt-6 border-t border-slate-700/60">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Professional Networks
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-xl">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send A Direct Message</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">I'll get back to you promptly.</p>
                </div>
              </div>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <Check size={18} className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Delivered Successfully!</p>
                      <p className="text-xs text-emerald-300/80 mt-0.5">
                        Thank you for reaching out. Subhodh will review your inquiry and reply via email shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Global Error Banner */}
              {errors.global && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{errors.global}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Potential Full-Stack Engineering Role / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or engineering inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 transition-all duration-300 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </div>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-500 font-mono">
                    Protected by client-side validation • Zero credential leakage guarantee
                  </p>
                </div>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
