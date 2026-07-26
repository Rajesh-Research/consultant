'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-accent text-lg font-semibold mb-4">Hello, I'm</h2>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6"
            >
              <span className="gradient-text">{portfolioData.name.split(' ')[0]}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-accent2 font-light mb-4"
            >
              {portfolioData.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg sm:text-xl mb-8"
            >
              {portfolioData.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {portfolioData.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
            >
              <a href="#about" className="btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={portfolioData.imageUrl}
                alt={portfolioData.name}
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-accent"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="rounded-full border border-accent/50 p-3 text-accent">
            <ArrowDown size={24} />
          </div>
        </motion.div>
      </motion.div>

      {/* Background Gradient Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl -top-40 -right-40" />
        <div className="absolute w-96 h-96 bg-gradient-to-l from-accent2/20 to-transparent rounded-full blur-3xl -bottom-40 -left-40" />
      </div>
    </section>
  );
}
