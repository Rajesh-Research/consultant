'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'consultation', label: 'Consultation' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'experience', label: 'Experience' }
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-white/10 backdrop-blur-md border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="font-serif font-extrabold text-lg sm:text-xl text-white tracking-wide text-left cursor-pointer hover:opacity-90 transition-opacity"
          style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.25)' }}
        >
          {portfolioData.name}
        </button>

        {/* Right Side: Horizontal Nav Links */}
        <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-[15px] font-serif font-semibold tracking-wide transition-all duration-200 cursor-pointer hover:-translate-y-0.5 block ${
                  isActive ? 'text-white font-extrabold' : 'text-text-secondary hover:text-white'
                }`}
                style={{
                  textShadow: isActive
                    ? '0 0 12px rgba(255, 255, 255, 0.8)'
                    : scrolled
                    ? 'none'
                    : '0 1px 2px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.textShadow = '0 0 12px rgba(255, 255, 255, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.textShadow = scrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)';
                  }
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0c]/98 border-b border-white/10 z-40 backdrop-blur-lg flex flex-col p-6 space-y-3.5 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left text-sm font-semibold py-2 transition-colors ${
                  isActive ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
