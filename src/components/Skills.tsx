import { motion } from 'motion/react';
import { Cpu, CheckCircle2, Award, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

// Custom glow colors for key skills to create a premium aesthetic
const getSkillColor = (name: string): string => {
  const normName = name.toLowerCase();
  if (normName.includes('typescript') || normName.includes('vite')) return 'group-hover:border-[#3178c6] group-hover:shadow-[#3178c6]/10 text-[#3178c6]';
  if (normName.includes('react')) return 'group-hover:border-[#61dafb] group-hover:shadow-[#61dafb]/10 text-[#61dafb]';
  if (normName.includes('javascript')) return 'group-hover:border-[#f7df1e] group-hover:shadow-[#f7df1e]/10 text-[#f7df1e]';
  if (normName.includes('node')) return 'group-hover:border-[#339933] group-hover:shadow-[#339933]/10 text-[#339933]';
  if (normName.includes('tailwind')) return 'group-hover:border-[#06b6d4] group-hover:shadow-[#06b6d4]/10 text-[#06b6d4]';
  if (normName.includes('python')) return 'group-hover:border-[#3776ab] group-hover:shadow-[#3776ab]/10 text-[#3776ab]';
  if (normName.includes('c++')) return 'group-hover:border-[#00599c] group-hover:shadow-[#00599c]/10 text-[#00599c]';
  if (normName.includes('git')) return 'group-hover:border-[#f05032] group-hover:shadow-[#f05032]/10 text-[#f05032]';
  if (normName.includes('next.js')) return 'group-hover:border-white group-hover:shadow-white/10 text-white';
  if (normName.includes('sql') || normName.includes('postgres')) return 'group-hover:border-[#4169e1] group-hover:shadow-[#4169e1]/10 text-[#4169e1]';
  
  // Default to a gorgeous aurora violet theme
  return 'group-hover:border-aurora-violet group-hover:shadow-aurora-violet/10 text-aurora-violet';
};

const getLevelColor = (level: string): string => {
  switch (level) {
    case 'Expert': return 'bg-[#2fe0d8]/10 text-[#2fe0d8] border-[#2fe0d8]/20';
    case 'Advanced': return 'bg-[#8b6bff]/10 text-[#8b6bff] border-[#8b6bff]/20';
    case 'Intermediate': return 'bg-[#ff5fa8]/10 text-[#ff5fa8] border-[#ff5fa8]/20';
    default: return 'bg-white/10 text-gray-300 border-white/10';
  }
};

export default function Skills() {
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
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Background aurora orb */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-aurora-violet/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-aurora-cyan/30 bg-aurora-cyan/5 text-aurora-cyan text-xs font-mono tracking-wider mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>KNOWLEDGE INDEX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Technical <span className="bg-gradient-to-r from-aurora-pink via-aurora-violet to-aurora-cyan bg-clip-text text-transparent">Arsenal</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-aurora-pink to-aurora-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Tech Stack Categories Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col h-full border border-white/5 relative group transition-all duration-300"
            >
              {/* Top border glowing highlight */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-aurora-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-aurora-violet to-aurora-cyan" />
                {category.title}
              </h3>

              {/* Skill Items Row */}
              <div className="space-y-4 flex-1">
                {category.skills.map((skill) => {
                  const borderGlowClass = getSkillColor(skill.name);
                  const levelClass = getLevelColor(skill.level);

                  return (
                    <div
                      key={skill.name}
                      className={`group flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 ${borderGlowClass}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="text-gray-400 group-hover:text-inherit transition-colors">
                          <CheckCircle2 className="w-4 h-4 shrink-0 opacity-40 group-hover:opacity-100" />
                        </div>
                        <span className="font-sans font-medium text-sm text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${levelClass} font-semibold uppercase tracking-wider`}>
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="inline-flex items-center gap-2 font-mono text-xs text-gray-500">
            <Terminal className="w-3.5 h-3.5 text-aurora-cyan" />
            <span>Interactive sandbox. Hover tech chips to analyze stack integration.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
