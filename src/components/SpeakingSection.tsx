'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Mic, Globe, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function SpeakingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div id="engagement" className="space-y-12">
      
      {/* Cinematic Hero Header (modeled after engagements-hero in raulvrodriguez.in) */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[220px] px-8 sm:px-12 py-8 relative">
          {/* Subtle geometric overlay glow */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Public talks · Panelist · keynote speaker
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Engagements & Insights
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              Presenting key perspectives on the transformative role of AI across sports, healthcare, mobility, telecommunications, environmental monitoring, and business ecosystems.
            </p>
          </div>
        </div>
      </div>

      {/* Engagements Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioData.speakingEngagements.map((eng, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass p-6 rounded-xl hover:border-white/15 hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-text-secondary uppercase tracking-wider flex items-center space-x-1.5">
                  <Mic size={10} className="inline text-white/60" />
                  <span>Keynote Speaker</span>
                </span>
                <span className="text-xs text-text-secondary/70 flex items-center space-x-1">
                  <Calendar size={13} />
                  <span>{eng.date}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {eng.event}
              </h3>

              <div className="flex items-center space-x-2 text-white/95 text-sm mb-3">
                <Globe size={13} className="text-white/60" />
                <span className="font-semibold">{eng.topic}</span>
              </div>

              {eng.description && (
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {eng.description}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-text-secondary/60 border-t border-white/5 pt-3 mt-auto w-full">
              <div className="flex items-center space-x-1.5">
                <MapPin size={13} className="text-white/50" />
                <span>{eng.location}</span>
              </div>
              {eng.url && eng.url !== '#' && (
                <a
                  href={eng.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                >
                  <span>View Post</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
