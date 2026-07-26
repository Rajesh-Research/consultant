'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Zap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function CorporateProfile() {
  const profile = portfolioData.corporateProfile;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              <span className="gradient-text">{profile.title}</span>
            </h2>
            <p className="text-text-secondary text-lg">{profile.description}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass p-6 rounded-xl text-center hover:border-accent/50 transition-all">
              <Briefcase className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Research Projects</h3>
              <p className="text-accent2 text-2xl font-bold">15+</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:border-accent/50 transition-all">
              <TrendingUp className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Consultancy Revenue</h3>
              <p className="text-accent2 text-2xl font-bold">10+ Lakhs</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:border-accent/50 transition-all">
              <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Industry Partnerships</h3>
              <p className="text-accent2 text-2xl font-bold">Fortune 500</p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-accent text-lg font-bold mt-1">→</span>
                  <span className="text-text-secondary">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.expertise.map((exp, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg hover:border-accent/50 transition-all text-center"
                >
                  <p className="font-medium text-accent">{exp}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
