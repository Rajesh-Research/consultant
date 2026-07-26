'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, Award, Layers, ExternalLink } from 'lucide-react';
import { portfolioData, Publication } from '@/data/portfolio';

type PublicationCategory = 'journals' | 'editedBooks' | 'conferences' | 'bookChapters';

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<PublicationCategory>('journals');

  const tabs = [
    { id: 'journals' as const, label: 'Journal Articles', icon: BookOpen },
    { id: 'editedBooks' as const, label: 'Edited Books', icon: Layers },
    { id: 'conferences' as const, label: 'Conference Papers', icon: Award },
    { id: 'bookChapters' as const, label: 'Book Chapters', icon: FileText }
  ];

  const getList = () => {
    return portfolioData.publications[activeTab];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="publications" className="space-y-12">
      
      {/* Cinematic Hero Header (modeled after research-hero in raulvrodriguez.in) */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[220px] px-8 sm:px-12 py-8 relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Research · Literature · academic papers
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Research & Publications
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              Exploring the frontiers of Artificial Intelligence, Machine Learning, and interdisciplinary data sciences across global journals and book publications.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Selectors Row */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-white text-[#07080b] shadow-md shadow-white/5'
                  : 'bg-secondary text-text-secondary border border-white/5 hover:border-white/20'
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Publications List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="space-y-4"
        >
          {getList().map((pub, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-6 rounded-xl hover:border-white/20 hover:shadow-2xl transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="space-y-2 flex-grow">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-accent2">
                    {pub.year}
                  </span>
                  {pub.authors && (
                    <span className="text-xs text-text-secondary/70">{pub.authors}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm italic text-text-secondary">
                  {pub.source}
                </p>
              </div>

              {pub.url && pub.url !== '#' && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 px-4 py-2 bg-white/5 border border-white/10 hover:border-white hover:text-white rounded-lg text-sm font-medium transition-colors md:self-center self-start"
                >
                  <span>View Publication</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
