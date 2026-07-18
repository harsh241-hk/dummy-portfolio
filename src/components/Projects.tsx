import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Github, ExternalLink, Code2, Layers, Compass } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Blur Background Blob */}
      <div className="absolute bottom-[30%] right-[-10%] w-[380px] h-[380px] bg-aurora-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-aurora-cyan/30 bg-aurora-cyan/5 text-aurora-cyan text-xs font-mono tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-pink bg-clip-text text-transparent">Innovations</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters row */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {(['all', 'web', 'ai'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold font-mono tracking-wider transition-all duration-300 border uppercase ${
                filter === cat
                  ? 'bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white border-transparent shadow-lg shadow-aurora-violet/20 scale-105'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat === 'web' ? 'Web Systems' : 'Acoustics & AI'}
            </button>
          ))}
        </div>

        {/* Projects Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card rounded-3xl overflow-hidden flex flex-col h-full border border-white/5 relative group transition-all duration-500"
            >
              {/* Card visual accent banner with title initials */}
              <div className={`h-32 bg-gradient-to-br ${project.imageAccent} p-6 relative flex items-end overflow-hidden`}>
                <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_80%)]" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                
                {/* Simulated Floating Watermark initials */}
                <div className="absolute bottom-[-10px] left-4 text-white/5 font-display font-extrabold text-7xl select-none leading-none pointer-events-none">
                  {project.title.substring(0, 2)}
                </div>
                
                <h3 className="relative z-10 text-xl font-display font-bold text-white tracking-tight drop-shadow-sm">
                  {project.title}
                </h3>
              </div>

              {/* Card Body content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Long descriptive detail on hover */}
                  <p className="text-gray-400 font-sans text-xs leading-relaxed mb-6 border-l-2 border-white/10 pl-3 italic">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tags and anchors block */}
                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[10px] text-gray-400 group-hover:text-aurora-cyan group-hover:border-aurora-cyan/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 font-mono text-xs">
                    {/* Github repo link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors py-1 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span>Source Code</span>
                    </a>

                    {/* Live Demo link */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-aurora-cyan hover:text-white transition-colors py-1 group/btn"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
