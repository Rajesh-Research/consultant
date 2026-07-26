'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </motion.div>

          {/* Summary */}
          <motion.div variants={itemVariants} className="glass glass p-8 mb-12 rounded-xl">
            <p className="text-lg text-text-secondary leading-relaxed">
              {portfolioData.summary}
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <div className="glass p-6 rounded-xl flex items-start space-x-4 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass p-6 rounded-xl flex items-start space-x-4 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  {portfolioData.contact.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass p-6 rounded-xl flex items-start space-x-4 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-text-secondary">{portfolioData.contact.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl flex items-start space-x-4 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="flex space-x-2">
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent2 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent2 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Social</h3>
                <p className="text-text-secondary">Connect with me online</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif font-bold mb-8 gradient-text">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:border-accent/50 transition-all">
                  <h4 className="font-semibold text-accent mb-3">{skill.category}</h4>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
