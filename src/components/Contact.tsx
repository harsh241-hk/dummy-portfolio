import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, MessageSquare, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.socials.emailRaw);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://formspree.io/f/${PERSONAL_INFO.socials.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Visual background blurred blob */}
      <div className="absolute top-[40%] right-[-15%] w-[420px] h-[420px] bg-aurora-violet/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-aurora-cyan/30 bg-aurora-cyan/5 text-aurora-cyan text-xs font-mono tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Start a <span className="bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-pink bg-clip-text text-transparent">Conversation</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Double Column content block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Info & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-aurora-cyan/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-aurora-cyan/10 transition-colors duration-500" />
              
              <h3 className="text-xl font-display font-bold text-white tracking-tight">
                Contact Details
              </h3>
              <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed">
                Have a project idea, question, or just want to connect? Reach out using the form, or follow along on my social channels!
              </p>

              {/* Direct email click & copy */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    EMAIL ME DIRECTLY
                  </span>
                  <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-4 gap-4 hover:border-white/10 transition-colors">
                    <a
                      href={PERSONAL_INFO.socials.email}
                      className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-aurora-cyan transition-colors font-mono overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4 text-aurora-cyan flex-shrink-0" />
                      <span className="truncate">{PERSONAL_INFO.socials.emailRaw}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors hover:bg-white/10"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    SOCIAL CONNECTIONS
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                    >
                      <Github className="w-4 h-4 text-aurora-violet group-hover/btn:scale-110 transition-transform" />
                      <span>GitHub</span>
                    </a>
                    
                    <a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                    >
                      <Linkedin className="w-4 h-4 text-aurora-cyan group-hover/btn:scale-110 transition-transform" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-gray-400 tracking-wider">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      required
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-aurora-cyan transition-colors text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-gray-400 tracking-wider">
                      YOUR EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      required
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-aurora-cyan transition-colors text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-gray-400 tracking-wider">
                    MESSAGE CONTENT
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello! Let's talk about building something beautiful together..."
                    required
                    rows={5}
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-aurora-cyan transition-colors text-sm font-sans resize-none"
                  />
                </div>

                {/* Submit button status message banner */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-sans">
                      Thank you! Your message was sent successfully. I will get back to you shortly.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-sans">
                      Something went wrong. Please check your network connection or email address and try again.
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className={`w-full py-3.5 px-6 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed'
                      : 'bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-pink text-white shadow-lg shadow-aurora-violet/20 hover:shadow-xl hover:shadow-aurora-violet/30 active:scale-98'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND TRANSMISSION</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
