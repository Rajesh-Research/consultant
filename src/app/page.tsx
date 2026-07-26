'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SpeakingSection from '@/components/SpeakingSection';
import ProjectsSection from '@/components/ProjectsSection';
import PublicationsSection from '@/components/PublicationsSection';
import ConsultationSection from '@/components/ConsultationSection';
import MentorshipSection from '@/components/MentorshipSection';
import ResearchExperienceSection from '@/components/ResearchExperienceSection';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <Hero setActiveTab={setActiveTab} />;
      case 'about':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <AboutSection />
          </div>
        );
      case 'engagement':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <SpeakingSection />
          </div>
        );
      case 'projects':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <ProjectsSection />
          </div>
        );
      case 'publications':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <PublicationsSection />
          </div>
        );
      case 'consultation':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <ConsultationSection />
          </div>
        );
      case 'mentorship':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <MentorshipSection />
          </div>
        );
      case 'experience':
        return (
          <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 pt-24 sm:pt-28">
            <ResearchExperienceSection />
          </div>
        );
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#07080b] flex flex-col justify-between selection:bg-white selection:text-[#07080b]">
      
      {/* Sticky Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Viewport content swapper */}
      <div className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex-grow flex flex-col justify-center"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Horizontal Academic Footer */}
      <footer className="w-full bg-[#0a0a0c] border-t border-white/5 pt-12 pb-10 select-none mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base tracking-wide uppercase">Contact Info</h3>
            <div className="text-xs text-text-secondary/75 space-y-1.5 not-italic">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-white/60" />
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-white transition-colors truncate">
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-white/60" />
                <a href={`tel:${portfolioData.contact.phone}`} className="hover:text-white transition-colors">
                  {portfolioData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-white/60" />
                <span>{portfolioData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Socials & Copyright */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-white text-base tracking-wide uppercase">Connect</h3>
            <div className="flex space-x-3.5">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            <p className="text-[10px] text-text-secondary/50 leading-relaxed font-semibold uppercase tracking-wider pt-2">
              © {new Date().getFullYear()} Dr. Rajesh Kumar K V.<br />
              All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
