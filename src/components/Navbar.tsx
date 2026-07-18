import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Shrink header behavior
      setIsScrolled(window.scrollY > 40);

      // Track active section for indicator
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near or above the viewport top
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // Adjust for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 pt-4 md:pt-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center w-full">
        <motion.nav
          id="navbar"
          animate={{
            width: isScrolled ? 'max-content' : '100%',
            maxWidth: isScrolled ? '800px' : '100%',
            borderRadius: isScrolled ? '9999px' : '24px',
            paddingLeft: isScrolled ? '24px' : '32px',
            paddingRight: isScrolled ? '24px' : '32px',
            paddingTop: isScrolled ? '12px' : '18px',
            paddingBottom: isScrolled ? '12px' : '18px',
          }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="pointer-events-auto flex items-center justify-between w-full glass-pill shadow-lg transition-all"
        >
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group text-white font-display font-bold text-sm md:text-base tracking-tight"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-aurora-violet to-aurora-cyan text-white group-hover:scale-110 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:text-aurora-cyan transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="sm:hidden text-white group-hover:text-aurora-cyan transition-colors">HK</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-3.5 py-1.5 text-xs font-medium font-sans tracking-wide transition-colors duration-300"
                >
                  <span className={`relative z-10 ${isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-aurora-violet/20 to-aurora-cyan/10 border border-white/10"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Call to Action or Email */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold font-mono border border-aurora-cyan/30 text-aurora-cyan hover:bg-aurora-cyan hover:text-black transition-all shadow-md hover:shadow-aurora-cyan/10"
            >
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 p-5 rounded-2xl glass-pill flex flex-col gap-4 lg:hidden shadow-2xl border border-white/10"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-sans tracking-wide transition-colors ${
                      isActive 
                        ? 'text-white bg-white/5 font-semibold border-l-2 border-aurora-cyan' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan shadow-glow-cyan" />}
                  </a>
                );
              })}
            </div>
            
            <hr className="border-white/5" />
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white font-sans text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
