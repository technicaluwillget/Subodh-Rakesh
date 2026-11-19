import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Clock, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/subhodhData';

export const Contact = ({ onNewMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'कृपया अपना नाम दर्ज करें';
    if (!formData.email.trim()) {
      err.email = 'कृपया अपना ईमेल दर्ज करें';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'कृपया वैध ईमेल दर्ज करें';
    }
    if (!formData.subject.trim()) err.subject = 'कृपया विषय (Subject) लिखें';
    if (!formData.message.trim()) {
      err.message = 'कृपया अपना संदेश लिखें';
    } else if (formData.message.trim().length < 8) {
      err.message = 'संदेश कम से कम 8 अक्षरों का होना चाहिए';
    }
    return err;
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
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate submission & save to dashboard state
      await new Promise(res => setTimeout(res, 800));

      const newMsg = {
        id: 'msg-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'उपलब्ध नहीं',
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleDateString('hi-IN')
      };

      if (onNewMessage) {
        onNewMessage(newMsg);
      }

      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 8000);
    } catch (error) {
      setIsSubmitting(false);
      setErrors({ global: 'संदेश भेजने में त्रुटि हुई। कृपया सीधे कॉल या ईमेल करें।' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F6FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF683D] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF683D]" />
            <span>सीधा संवाद एवं जनसंपर्क</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033]">
            हमसे संपर्क करें <span className="text-[#FF683D]">(Get In Touch)</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            ज्वालापुर एवं हरिद्वार क्षेत्र की किसी भी समस्या, सुझाव या सहयोग हेतु आप कभी भी सीधे संपर्क कर सकते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-clean space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#172033] mb-1">
                  सीधा संपर्क विवरण
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  सुबोध राकेश (जननेता व समाजसेवी, हरिद्वार)
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Mobile / Call */}
                <div className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF683D] flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-semibold">मोबाइल नंबर</div>
                      <a href={`tel:${personalInfo.phone}`} className="font-bold text-[#172033] hover:text-[#FF683D] text-sm sm:text-base font-mono">
                        +91 {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="px-3.5 py-1.5 rounded-xl bg-[#FF683D] text-white text-xs font-bold hover:bg-[#E55328] transition shadow-xs"
                  >
                    कॉल करें
                  </a>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-500 font-semibold">ईमेल आईडी</div>
                      <a href={`mailto:${personalInfo.email}`} className="font-bold text-[#172033] hover:text-[#FF683D] text-xs sm:text-sm truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-3.5 py-1.5 rounded-xl bg-[#172033] text-white text-xs font-bold hover:bg-[#24324D] transition shadow-xs shrink-0"
                  >
                    ईमेल भेजें
                  </a>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#F5F6FA] border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">स्थान / कार्यालय</div>
                    <div className="font-bold text-[#172033] text-xs sm:text-sm">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-800">
                  <Clock size={16} className="shrink-0 text-emerald-600" />
                  <span>जनमिलन समय: प्रातः 09:00 बजे से दोपहर 01:00 बजे तक</span>
                </div>

              </div>

              {/* Social Channels Required: Instagram & Facebook */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  सोशल मीडिया पर जुड़ें
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-xs hover:scale-102 transition"
                  >
                    <Instagram size={16} />
                    <span>इंस्टाग्राम (Instagram)</span>
                  </a>

                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1877F2] text-white text-xs font-bold shadow-xs hover:scale-102 transition"
                  >
                    <Facebook size={16} />
                    <span>फेसबुक (Facebook)</span>
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
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-clean">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF683D] flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#172033]">अपना संदेश भेजें</h3>
                  <p className="text-xs text-slate-500">सभी संदेश सुबोध राकेश जी के जनसंपर्क कार्यालय द्वारा देखे जाते हैं।</p>
                </div>
              </div>

              {/* Success Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">संदेश सफलतापूर्वक प्राप्त हुआ!</p>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        आपका संदेश सुबोध राकेश जी के जनसंपर्क कार्यालय तक पहुंच गया है। हमारी टीम आपसे शीघ्र संपर्क करेगी।
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Banner */}
              {errors.global && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{errors.global}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      आपका पूरा नाम <span className="text-[#FF683D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="उदा. राहुल शर्मा"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F6FA] border text-xs sm:text-sm focus:outline-none focus:ring-2 transition ${
                        errors.name
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-[#FF683D] focus:ring-orange-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      मोबाइल नंबर
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="उदा. 98XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F6FA] border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF683D] focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      ईमेल आईडी <span className="text-[#FF683D]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="उदा. name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F6FA] border text-xs sm:text-sm focus:outline-none focus:ring-2 transition ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-[#FF683D] focus:ring-orange-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1.5">
                      विषय (Subject) <span className="text-[#FF683D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="उदा. क्षेत्र की सड़क व सफाई से संबंधित सुझाव"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F6FA] border text-xs sm:text-sm focus:outline-none focus:ring-2 transition ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-[#FF683D] focus:ring-orange-100'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#172033] mb-1.5">
                    आपका संदेश / समस्या का विवरण <span className="text-[#FF683D]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="कृपया अपनी समस्या, ग्राम/मोहल्ले का नाम और विस्तार से विवरण लिखें..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F6FA] border text-xs sm:text-sm focus:outline-none focus:ring-2 transition resize-none ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-slate-200 focus:border-[#FF683D] focus:ring-orange-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#FF683D] hover:bg-[#E55328] shadow-md shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>संदेश भेजा जा रहा है...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>संदेश भेजें (Send Message)</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center font-medium mt-2">
                  सुरक्षित संपर्क प्रणाली • आपकी व्यक्तिगत जानकारी की गोपनीयता सुरक्षित रखी जाती है।
                </p>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
