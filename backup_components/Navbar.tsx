'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#qualifications', label: 'Qualifications' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#speaking', label: 'Speaking' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">RK</span>
            </div>
            <span className="text-xl font-serif font-bold gradient-text hidden sm:block">Rajesh Kumar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-accent/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-text-secondary hover:text-accent hover:bg-secondary/50 transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 text-accent hover:text-accent2 transition-colors duration-300 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
