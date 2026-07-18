import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Code2, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Award: Award,
  Trophy: Trophy,
  Code: Code2,
};

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="achievements" className="relative py-24 px-4 overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-[20%] left-[-10%] w-[320px] h-[320px] bg-aurora-pink/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-aurora-pink/30 bg-aurora-pink/5 text-aurora-pink text-xs font-mono tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>MILESTONES & HONORS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Aura of <span className="bg-gradient-to-r from-aurora-pink via-aurora-violet to-aurora-cyan bg-clip-text text-transparent">Excellence</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-aurora-pink to-aurora-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements list layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ACHIEVEMENTS.map((ach) => {
            const IconComponent = iconMap[ach.iconName] || Award;
            
            return (
              <motion.div
                key={ach.id}
                variants={cardVariants}
                className="glass-card group rounded-3xl p-6 border border-white/5 flex flex-col justify-between h-full hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-aurora-pink/5"
              >
                <div>
                  {/* Icon + Period block */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 flex items-center justify-center text-aurora-pink group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-aurora-pink" />
                      <span>{ach.period}</span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight leading-snug group-hover:text-aurora-pink transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-aurora-cyan font-mono text-[11px] font-semibold mb-4 tracking-wider uppercase">
                    {ach.subtitle}
                  </p>
                  <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                    {ach.description}
                  </p>
                </div>

                {/* Aesthetic footer arrow link indicator */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 group-hover:text-white transition-colors mt-auto pt-4 border-t border-white/5">
                  <span className="text-[10px] tracking-widest uppercase">VERIFIED STATUS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
