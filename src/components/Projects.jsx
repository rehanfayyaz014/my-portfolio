import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-10" style={{ bottom: '20%', left: '10%' }} />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in development, data analysis, and problem-solving
          </p>
        </motion.div>

        {/* Projects Grid - 2-3 columns responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="glass rounded-2xl overflow-hidden hover:glow-teal transition-all group h-full flex flex-col"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -8 }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4 flex-shrink-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-sm p-2 rounded-lg text-teal-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  )}
                </div>

                {/* Project Title */}
                <motion.a
                  href={project.link || '#'}
                  target={project.link ? '_blank' : '_self'}
                  rel={project.link ? 'noopener noreferrer' : ''}
                  className={`block ${project.link ? 'hover:text-teal-400 transition-colors' : ''}`}
                >
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                </motion.a>

                <p className="text-sm text-teal-400 font-semibold mb-3">
                  {project.subtitle}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="glass-sm px-3 py-1 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description - Scrollable */}
              <div className="px-6 pb-6 flex-1 overflow-y-auto">
                {project.description.map((point, idx) => (
                  <motion.p
                    key={idx}
                    className="text-gray-300 text-sm leading-relaxed mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {idx === 0 ? '✨ ' : '• '} {point}
                  </motion.p>
                ))}
              </div>

              {/* Project Footer - Call to Action */}
              {project.link && (
                <motion.div
                  className="px-6 py-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0.7 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm hover:text-white transition-colors"
                  >
                    View Project →
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 relative z-10"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <motion.a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:glow-teal transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit My GitHub Profile ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
