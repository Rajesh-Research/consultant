'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Qualifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="qualifications" className="py-20 px-4">
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
              <span className="gradient-text">Education & Qualifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </motion.div>

          {/* Qualifications Timeline */}
          <div className="space-y-8">
            {portfolioData.qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-8 rounded-xl border-l-4 border-accent hover:border-l-accent2 transition-all"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{qual.degree}</h3>
                      <span className="text-accent text-sm font-medium">{qual.year}</span>
                    </div>
                    <p className="text-accent mb-2">{qual.field}</p>
                    <p className="text-text-secondary">{qual.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
