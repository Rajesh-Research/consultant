'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Briefcase,
  BookOpen,
  Calendar,
  Users,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Menu,
  X
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

// Section Imports
import SpeakingSection from './SpeakingSection';
import ProjectsSection from './ProjectsSection';
import PublicationsSection from './PublicationsSection';
import ConsultationSection from './ConsultationSection';
import MentorshipSection from './MentorshipSection';
import ResearchExperienceSection from './ResearchExperienceSection';

type ActiveSection =
  | 'speaking'
  | 'projects'
  | 'publications'
  | 'consultation'
  | 'mentorship'
  | 'research';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('speaking');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'speaking' as const, label: 'Engagement', icon: Globe },
    { id: 'projects' as const, label: 'Projects', icon: Briefcase },
    { id: 'publications' as const, label: 'Publications', icon: BookOpen },
    { id: 'consultation' as const, label: 'Consultation', icon: Calendar },
    { id: 'mentorship' as const, label: 'Mentorship', icon: Users },
    { id: 'research' as const, label: 'Experience', icon: TrendingUp }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'speaking':
        return <SpeakingSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'publications':
        return <PublicationsSection />;
      case 'consultation':
        return <ConsultationSection />;
      case 'mentorship':
        return <MentorshipSection />;
      case 'research':
        return <ResearchExperienceSection />;
      default:
        return <SpeakingSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07080b] flex flex-col justify-between relative">
      
      {/* Sticky Top Header Navbar */}
      <header className="w-full bg-[#07080b]/90 sticky top-0 z-50 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Name on Left */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('speaking');
            }}
            className="font-serif font-bold text-lg sm:text-xl text-white tracking-wider uppercase nav-logo-glow hover:opacity-90 transition-opacity"
          >
            {portfolioData.name}
          </a>

          {/* Desktop Links on Right */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-semibold transition-all duration-300 transform hover:-translate-y-[1px] link-glow ${
                    isActive ? 'text-white link-glow-active' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[61px] left-0 w-full bg-[#0a0a0c]/98 border-b border-white/10 z-40 backdrop-blur-lg flex flex-col p-5 space-y-2.5 shadow-2xl"
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-[#07080b] font-bold shadow-md'
                      : 'text-text-secondary hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Spacious Content Area */}
      <main className="w-full flex-grow flex flex-col">
        <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Horizontal Academic Footer */}
      <footer className="w-full bg-[#0a0a0c] border-t border-white/5 pt-12 pb-10 mt-12 select-none">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Institutional Info */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base tracking-wide uppercase">Woxsen University</h3>
            <p className="text-xs text-text-secondary/75 leading-relaxed not-italic">
              Kamkole, Sadasivpet, Hyderabad<br />
              Telangana 502345, India<br />
              <a href="https://woxsen.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20">
                www.woxsen.edu.in
              </a>
            </p>
          </div>

          {/* Core Bio Role Link */}
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

    </div>
  );
}
