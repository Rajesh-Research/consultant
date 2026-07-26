'use client';

import { motion } from 'framer-motion';
import { Mic, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function SpeakingEngagements() {
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
    <section id="speaking" className="py-20 px-4">
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
              <span className="gradient-text">Speaking at Public Domain Publications</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Keynote speaker and panelist at international conferences, sharing insights on AI, Data Analytics, and Innovation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Speaking Engagements */}
          <div className="space-y-4">
            {portfolioData.speakingEngagements.map((engagement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl hover:border-accent/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mic className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{engagement.event}</h3>
                    <p className="text-accent font-medium mb-3">{engagement.topic}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        <span>{engagement.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent" />
                        <span>{engagement.location}</span>
                      </div>
                    </div>
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
