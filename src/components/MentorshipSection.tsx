'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function MentorshipSection() {
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
    <div id="mentorship" className="space-y-12">
      
      {/* Visual Header Banner */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[200px] px-8 sm:px-12 py-8 relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Teaching · Guidance · Student projects
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Mentorship & Guidance
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              {portfolioData.mentorship.description}
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {portfolioData.mentorship.metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass p-5 rounded-xl text-center hover:border-white/20 transition-all border border-white/5"
          >
            <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-xs text-text-secondary/70 uppercase tracking-wider font-semibold">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Highlights & Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 space-y-4">
          <h3 className="text-xl font-bold text-white mb-2">Academic Guidance Highlights</h3>
          <div className="space-y-3">
            {portfolioData.mentorship.highlights.map((highlight, idx) => (
              <div key={idx} className="glass p-4 rounded-xl border border-white/5 flex items-start space-x-3 hover:border-white/15 transition-all">
                <CheckCircle2 className="text-white/60 mt-0.5 flex-shrink-0" size={18} />
                <p className="text-text-secondary text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Callout */}
        <div className="md:col-span-5">
          <div className="glass p-6 rounded-xl border border-white/10 bg-white/[0.02] space-y-4">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
              <Users size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Student Resources & Inquiries</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Dr. Rajesh Kumar regularly advises Woxsen students on research publishing, capstone analytics projects, 
              and global academic submissions.
            </p>
            <div className="text-xs text-white bg-white/5 border border-white/10 px-3 py-2 rounded-md inline-block font-semibold">
              Currently accepting candidates for 2026-2027 Research Fellowships
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
