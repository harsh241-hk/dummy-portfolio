/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Component Imports
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleScrollTop);
    return () => window.removeEventListener('scroll', toggleScrollTop);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen text-white font-sans antialiased selection:bg-aurora-cyan/30 selection:text-white">
      {/* 1. Animated background mesh & starfield */}
      <Background />

      {/* 2. Floating shrinking responsive glass navbar */}
      <Navbar />

      {/* 3. Main Sections Layout with spacing */}
      <main className="relative">
        {/* Hero Landing */}
        <Hero />

        {/* About Biography & Academics */}
        <About />

        {/* Categorized Skills Inventory */}
        <Skills />

        {/* Leadership timeline roles */}
        <Experience />

        {/* Selected Project glass cards */}
        <Projects />

        {/* Achievements, awards, and certifications */}
        <Achievements />

        {/* Formspree contact grid and connections */}
        <Contact />
      </main>

      {/* 4. Footer */}
      <footer className="relative border-t border-white/5 py-12 px-4 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Copyright description */}
          <div>
            <p className="font-display font-semibold text-white text-sm">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Computer Science Undergrad @ The Maharaja Sayajirao University of Baroda
            </p>
          </div>

          {/* Core tech stack list */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-500">
            <span className="hover:text-aurora-cyan transition-colors">React 19</span>
            <span>•</span>
            <span className="hover:text-aurora-violet transition-colors">Vite</span>
            <span>•</span>
            <span className="hover:text-aurora-pink transition-colors">Tailwind CSS 4</span>
            <span>•</span>
            <span className="hover:text-aurora-amber transition-colors">Framer Motion</span>
          </div>

          {/* Designed & Crafted credit */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-aurora-pink fill-aurora-pink animate-pulse" />
            <span>by Kapuriya Harsh © {new Date().getFullYear()}</span>
          </div>

        </div>
      </footer>

      {/* 5. Floating Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full glass-pill hover:bg-white/10 text-aurora-cyan hover:text-white transition-all shadow-xl border border-white/10 hover:border-aurora-cyan/30 cursor-pointer active:scale-90"
            title="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

