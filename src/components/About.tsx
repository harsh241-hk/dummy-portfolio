import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, MapPin, CodeXml, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Blur Background Blob */}
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-aurora-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-aurora-violet/30 bg-aurora-violet/5 text-aurora-violet text-xs font-mono tracking-wider mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>BACKGROUND</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            About <span className="bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-pink bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-aurora-violet to-aurora-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Main Biography Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-aurora-violet/10 border border-aurora-violet/20 text-aurora-violet">
                  <CodeXml className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">Who is {PERSONAL_INFO.name}?</h3>
              </div>
              
              <div className="space-y-4 text-gray-300 font-sans leading-relaxed text-sm md:text-base">
                <p>
                  As a sophomore Computer Science engineering student, I spend my days building modern, responsive, full-stack applications. My programming journey started with algorithmic logic in C++, which quickly evolved into a passion for writing clean, efficient TypeScript and developing seamless ecosystems.
                </p>
                <p>
                  My philosophy centers on <strong>collaborative growth</strong> and <strong>architectural craftsmanship</strong>. This drives my involvement as the President of the Dev Infinity Club and as a core lead on the Code Vimarsh Web Team, helping foster high-impact learning culture, programming bootcamps, and interactive platform designs.
                </p>
                <p>
                  Whether implementing real-time server frameworks or fine-tuning smooth responsive layouts, I strive for visual precision and bulletproof reliability in every line of code I craft.
                </p>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5 font-mono text-center">
              <div>
                <div className="text-2xl font-bold text-aurora-cyan font-display">2nd Yr</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">CS Undergrad</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-aurora-violet font-display">8.7</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Current CGPA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-aurora-pink font-display">5+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Core Web Apps</div>
              </div>
            </div>
          </motion.div>

          {/* Education Details Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Academic Card */}
            <div className="glass-card p-6 md:p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-aurora-cyan/10 border border-aurora-cyan/20 text-aurora-cyan">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white">Academic Journey</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-display font-semibold text-white text-sm md:text-base">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs font-mono text-aurora-cyan mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span>{PERSONAL_INFO.education.location}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono p-3 rounded-xl bg-white/5 border border-white/5 mt-2">
                  <span className="text-gray-500">Timeline:</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.education.period}</span>
                </div>
              </div>
            </div>

            {/* Values / Mission Statement Card */}
            <div className="glass-card p-6 md:p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-aurora-amber/10 border border-aurora-amber/20 text-aurora-amber">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white">Core Pillars</h3>
              </div>
              
              <div className="space-y-3 font-sans text-xs md:text-sm text-gray-400">
                <div className="flex gap-2.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan mt-1.5 shrink-0" />
                  <p><strong className="text-white">Community Mentoring:</strong> Uplifting peers through active code shares, workshops, and team sprints.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-aurora-violet mt-1.5 shrink-0" />
                  <p><strong className="text-white">Pixel Perfection:</strong> Fusing elegant interface design with lightweight web components.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-aurora-pink mt-1.5 shrink-0" />
                  <p><strong className="text-white">Durable Codebases:</strong> Strictly adhering to modular structures and strong typescript boundaries.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
