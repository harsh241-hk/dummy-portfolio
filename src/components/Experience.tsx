import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      {/* Aurora glow orb */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] bg-aurora-pink/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-aurora-violet/30 bg-aurora-violet/5 text-aurora-violet text-xs font-mono tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>ROLE CHRONOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Leadership & <span className="bg-gradient-to-r from-aurora-violet via-aurora-pink to-aurora-amber bg-clip-text text-transparent">Roles</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-aurora-violet to-aurora-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-aurora-violet via-aurora-pink to-transparent -translate-x-1/2 opacity-30" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10 bg-gradient-to-tr from-aurora-cyan to-aurora-violet shadow-[0_0_15px_rgba(47,224,216,0.6)] border border-white/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content (Staggers left/right) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-card p-6 md:p-8 rounded-3xl relative group hover:border-aurora-cyan/30 transition-all duration-300">
                      
                      {/* Interactive Corner Shimmer */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-tr-3xl pointer-events-none" />

                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md text-white font-semibold ${exp.logoBg}`}>
                              {exp.logoText}
                            </span>
                            <h3 className="text-lg md:text-xl font-display font-bold text-white leading-tight">
                              {exp.role}
                            </h3>
                          </div>
                          <p className="text-sm font-sans font-medium text-aurora-cyan">
                            {exp.organization}
                          </p>
                        </div>
                        
                        {/* Period Tag */}
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full h-max w-max">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Location Badge */}
                      <div className="flex items-center gap-1 text-xs text-gray-500 font-sans mb-5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Detailed Bullet Points */}
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                            <div className="p-0.5 rounded-full bg-aurora-cyan/10 text-aurora-cyan mt-1 shrink-0">
                              <Sparkles className="w-3 h-3" />
                            </div>
                            <p>{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
