'use client';

import { motion } from 'framer-motion';
import { Briefcase, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ResearchExperienceSection() {
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
    <div id="experience" className="space-y-12">
      
      {/* Visual Header Banner */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[200px] px-8 sm:px-12 py-8 relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Chair professorships · Grants · Industry collaborations
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Research & Consultancy Experience
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              {portfolioData.researchAndConsultancy.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Highlights Column */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xl font-bold text-white mb-2">Key Research & Institutional Roles</h3>
          <div className="space-y-3">
            {portfolioData.researchAndConsultancy.highlights.map((highlight, idx) => (
              <div key={idx} className="glass p-4 rounded-xl border border-white/5 flex gap-3 hover:border-white/20 transition-all">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/85 flex-shrink-0 mt-0.5">
                  <Sparkles size={12} />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consulting Projects Column */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xl font-bold text-white mb-2">Featured Consulting Contracts</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {portfolioData.researchAndConsultancy.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-5 rounded-xl border border-white/5 space-y-3 hover:border-white/20 transition-all"
              >
                <h4 className="font-bold text-white text-base leading-snug">{proj.title}</h4>
                <div className="flex justify-between items-center text-xs text-text-secondary border-t border-white/5 pt-2.5">
                  <span className="flex items-center gap-1">
                    <Briefcase size={12} className="text-white/60" />
                    <span>{proj.client}</span>
                  </span>
                  <span className="font-semibold text-white">{proj.value}</span>
                </div>
                <div className="text-[10px] text-text-secondary/70 uppercase tracking-wider font-semibold">
                  Project Duration: {proj.duration}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
