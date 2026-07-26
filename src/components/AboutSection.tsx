'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function AboutSection() {
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
    <section id="about" className="space-y-12">
      
      {/* Section Header */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="academic-hero flex flex-col items-start justify-center min-h-[200px] px-8 sm:px-12 py-8 relative">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] blur-[80px] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-bold">
              Background · Context · Experience
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              About & Biography
            </h1>
            <p className="text-xs text-text-secondary max-w-2xl italic leading-relaxed pt-1.5 border-t border-white/5">
              Distinguished academic, AI researcher, technology leader, and international speaker with extensive expertise in interdisciplinary intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Biography Paragraphs */}
        <div className="lg:col-span-8 space-y-6 text-text-secondary">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Academic Biography</h3>
          <p className="text-base leading-relaxed italic">
            Dr. Rajesh Kumar K V is a distinguished academic, AI researcher, and technology leader currently serving as the Chief Technological Scientist at the AI Research Centre (AIRC), Associate Dean of the School of Technology, and Associate Professor of Business Analytics at Woxsen University, Hyderabad. In these roles, he drives AI research strategy, curriculum innovation, and academic transformation, while also holding the prestigious France Bélanger Chair Professor of Information Systems and Co-Chairmanship of the Centre of Excellence – Sports Analytics and Management.
          </p>
          <p className="text-base leading-relaxed italic">
            His interdisciplinary research and professional expertise span Machine Learning, Deep Learning, Sports Analytics, Biomedical AI, and Human-Computer Interaction. Dr. Kumar is recognized for translating advanced AI algorithms into high-impact systems for corporate, athletic, and healthcare sectors, successfully bridging the gap between cutting-edge computational sciences and practical industry deployments.
          </p>
        </div>

        {/* Right Column: Contact Details Cards */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Contact Info</h3>
          {/* Contact Cards */}
          <div className="space-y-3">
            <div className="glass p-4 rounded-xl border border-white/5 flex items-center space-x-3.5 hover:border-white/15 transition-colors">
              <MapPin size={18} className="text-white/60" />
              <span className="text-xs text-text-secondary leading-snug">{portfolioData.contact.location}</span>
            </div>
            <div className="glass p-4 rounded-xl border border-white/5 flex items-center space-x-3.5 hover:border-white/15 transition-colors">
              <Mail size={18} className="text-white/60" />
              <a href={`mailto:${portfolioData.contact.email}`} className="text-xs text-text-secondary hover:text-white transition-colors truncate">{portfolioData.contact.email}</a>
            </div>
            <div className="glass p-4 rounded-xl border border-white/5 flex items-center space-x-3.5 hover:border-white/15 transition-colors">
              <Phone size={18} className="text-white/60" />
              <a href={`tel:${portfolioData.contact.phone}`} className="text-xs text-text-secondary hover:text-white transition-colors">{portfolioData.contact.phone}</a>
            </div>
          </div>
        </div>

      </div>

      {/* Technical Skills Grid */}
      <div className="space-y-6 pt-6 border-t border-white/5">
        <h3 className="text-2xl font-serif font-bold text-white mb-2">Technical Skills & Expertise</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.expertise.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-5 rounded-xl border border-white/5 hover:border-white/20 transition-colors flex items-center space-x-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs font-semibold text-text-secondary leading-snug">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
