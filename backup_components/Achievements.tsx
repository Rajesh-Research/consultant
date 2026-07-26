'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4">
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
              <span className="gradient-text">Achievements & Awards</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl hover:border-accent/50 transition-all flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {index % 2 === 0 ? (
                    <Award className="text-primary" size={24} />
                  ) : (
                    <Star className="text-primary" size={24} />
                  )}
                </div>
                <div>
                  <p className="text-text-secondary leading-relaxed">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-xl text-center hover:border-accent/50 transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">11+</div>
              <p className="text-text-secondary">Years of Experience</p>
            </div>
            <div className="glass p-8 rounded-xl text-center hover:border-accent/50 transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-text-secondary">Students Guided</p>
            </div>
            <div className="glass p-8 rounded-xl text-center hover:border-accent/50 transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-text-secondary">Research Publications</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
