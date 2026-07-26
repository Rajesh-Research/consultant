'use client';

import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
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
    <section id="projects" className="py-20 px-4">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl flex flex-col h-full hover:border-accent/50 transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="text-primary" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-accent text-sm font-medium mb-2">{project.client}</p>
                <p className="text-text-secondary text-sm mb-4 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-accent mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="border-t border-accent/20 pt-4 space-y-2 text-sm">
                  <div>
                    <span className="text-text-secondary">Duration: </span>
                    <span className="text-accent font-medium">{project.duration}</span>
                  </div>
                  {project.outcome && (
                    <div>
                      <span className="text-text-secondary">Outcome: </span>
                      <span className="text-accent2 font-medium">{project.outcome}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Publications */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-serif font-bold mb-8 gradient-text">Research Publications</h3>
            <div className="space-y-4">
              {portfolioData.publications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-6 rounded-xl hover:border-accent/50 transition-all flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{pub.title}</h4>
                    <p className="text-accent text-sm mb-1">{pub.journal || pub.conference}</p>
                    <p className="text-text-secondary text-sm">Published: {pub.year}</p>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors mt-2 text-sm"
                      >
                        View Publication <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
