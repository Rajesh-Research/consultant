'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 px-4 border-t border-accent/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="glass p-8 rounded-xl hover:border-accent/50 transition-all text-center group"
            >
              <Mail className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-text-secondary hover:text-accent transition-colors">
                {portfolioData.contact.email}
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="glass p-8 rounded-xl hover:border-accent/50 transition-all text-center group"
            >
              <Phone className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-text-secondary hover:text-accent transition-colors">
                {portfolioData.contact.phone}
              </p>
            </a>

            {/* Location */}
            <div className="glass p-8 rounded-xl text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-text-secondary">{portfolioData.contact.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass p-8 rounded-xl mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center gradient-text">Connect With Me</h3>
            <div className="flex justify-center items-center gap-6">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-accent/20 pt-8">
            <div className="text-center">
              <p className="text-text-secondary mb-4">
                Designed & Developed with <span className="text-accent">❤</span> using Next.js & Firebase
              </p>
              <p className="text-text-secondary text-sm">
                © {currentYear} Dr. Korupalli V Rajesh Kumar. All rights reserved.
              </p>
              <p className="text-text-secondary text-sm mt-4">
                Ready for Deployment on Vercel | Backend powered by Google Firebase
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
