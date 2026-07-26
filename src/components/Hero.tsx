'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

const isProd = process.env.NODE_ENV === 'production';
const getAssetPath = (path: string) => {
  return isProd ? `/consultant${path}` : path;
};

export default function Hero({ setActiveTab }: HeroProps) {
  const designations = [
    'CTO, AI Research Centre',
    'International Speaker',
    'Physical AI Engineer'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % designations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen relative flex items-center overflow-hidden border-b border-white/5 bg-[#07080b] hero-home"
      style={{
        backgroundImage: `url('${getAssetPath('/rajesh_full.png')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right 100px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light gradient overlay to ensure text contrast while maintaining background image details */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent pointer-events-none z-0" />

      {/* Main Content Area */}
      <div className="max-w-6xl w-full mx-auto px-6 z-10 pt-20">
        <div className="max-w-2xl space-y-5 text-left">
          
          {/* Main Title Section */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-wide leading-tight uppercase select-none text-white"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 12px rgba(0, 0, 0, 0.7)'
              }}
            >
              Dr. Rajesh Kumar K V
            </motion.h1>

            {/* Subtitle Carousel wrapper */}
            <div className="h-8 overflow-hidden relative w-full pt-0.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-sm sm:text-base lg:text-lg font-sans font-semibold text-sky-400 tracking-wide select-none"
                  style={{
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)'
                  }}
                >
                  {designations[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Action buttons & socials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-4 pt-2"
          >
            <button
              onClick={() => setActiveTab('about')}
              className="px-5 py-2.5 bg-white hover:bg-white/95 text-black font-bold rounded-lg transition-all text-xs uppercase tracking-wider cursor-pointer shadow-md flex items-center space-x-1.5"
            >
              <span>Explore Profile</span>
              <ChevronRight size={14} />
            </button>
            
            <div className="flex space-x-3 text-white/80">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center hover:text-white hover:border-white hover:bg-black/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center hover:text-white hover:border-white hover:bg-black/60 transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center hover:text-white hover:border-white hover:bg-black/60 transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
