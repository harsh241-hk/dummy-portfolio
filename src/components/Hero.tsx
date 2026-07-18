import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

// Letter-by-letter animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentFullText = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 35);
    } else {
      // Adding characters
      timer = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 75);
    }

    // State transition logic
    if (!isDeleting && displayedText === currentFullText) {
      // Wait at the end of typing
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === '') {
      // Move to next role once deleted
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative center grid light */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-aurora-violet/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-aurora-cyan/20 bg-aurora-cyan/5 text-aurora-cyan text-xs font-mono tracking-wide mb-6 shadow-sm shadow-aurora-cyan/5"
        >
          <Sparkles className="w-3.5 h-3.5 text-aurora-cyan animate-pulse-subtle" />
          <span>Available for Internships & Projects</span>
        </motion.div>

        {/* Name Title: Letter-by-letter animated */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-4 select-none"
        >
          {PERSONAL_INFO.name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`inline-block ${
                char === ' ' ? 'mr-3 sm:mr-4' : ''
              } bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent hover:text-aurora-cyan hover:scale-105 transition-all duration-200 cursor-default`}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Rotating Role Subtitle (Typewriter) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-10 flex items-center justify-center font-mono text-base sm:text-xl md:text-2xl text-gray-300 tracking-wide mb-8"
        >
          <span className="text-aurora-cyan mr-1">&gt;</span>
          <span>{displayedText}</span>
          <span className="w-1.5 h-5 ml-1 bg-aurora-cyan inline-block animate-[pulse_1s_infinite]" />
        </motion.div>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-2xl text-sm sm:text-base text-gray-400 font-sans leading-relaxed mb-10 text-center"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Actions Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white text-sm font-semibold tracking-wide hover:opacity-95 transition-all duration-300 shadow-lg shadow-aurora-violet/20 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Explore Projects
          </a>
          
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Quick Connections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-5"
        >
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-aurora-cyan transition-colors"
            title="GitHub Portfolio"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-aurora-cyan transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.socials.email}
            className="p-2.5 rounded-full glass-card hover:text-aurora-cyan transition-colors"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Arrow Indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer hidden md:block"
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, '#about')}
          className="flex flex-col items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 text-aurora-cyan" />
        </a>
      </motion.div>
    </section>
  );
}
