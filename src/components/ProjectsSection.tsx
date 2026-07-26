'use client';

import { motion } from 'framer-motion';
import { Code2, Target, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="projects" className="space-y-12">
      
      {/* Visual Header Banner */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[200px] px-8 sm:px-12 py-8 relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Research Development · Client Deliverables
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Featured Projects
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              Leading AI research development, consultancy pipelines, and biomechanical simulations for military, athletic, and corporate sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {portfolioData.projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass p-6 rounded-xl border border-white/5 hover:border-white/20 hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/80">
                  <Code2 size={20} />
                </div>
                <span className="text-xs text-text-secondary/70 flex items-center gap-1">
                  <Calendar size={12} />
                  {proj.duration}
                </span>
              </div>

              {/* Title & Domain */}
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">{proj.title}</h3>
              <div className="text-xs text-accent2 font-semibold mb-3">{proj.domain}</div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{proj.description}</p>
            </div>

            {/* Bottom Details */}
            <div className="space-y-4 pt-4 border-t border-white/5 mt-auto">
              {/* Technologies */}
              <div>
                <div className="text-xs font-semibold text-text-secondary/65 uppercase tracking-wider mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-white/5 border border-white/10 text-text-secondary px-2 py-0.5 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="flex items-start gap-2 bg-white/5 border border-white/5 p-2.5 rounded-lg text-xs">
                <Target size={14} className="text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white/80">Outcome: </span>
                  <span className="text-text-secondary">{proj.outcome}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
