'use client';

import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="experience" className="py-20 px-4">
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
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-text-secondary">11+ Years of Career Growth</p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Experience Items */}
          <div className="space-y-4">
            {portfolioData.experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full glass p-6 rounded-xl text-left hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Briefcase className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-accent">{exp.organization}</p>
                          <p className="text-text-secondary text-sm">{exp.period}</p>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      size={24}
                      className={`text-accent transition-transform ${
                        expandedIndex === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 glass p-6 rounded-xl border-l-4 border-accent2"
                  >
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-accent2 font-bold mt-1">✓</span>
                          <span className="text-text-secondary">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
