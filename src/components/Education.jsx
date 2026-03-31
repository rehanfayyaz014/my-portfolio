import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-2xl hover:glow-indigo transition-all"
              whileHover={{ x: 5 }}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#20c997] to-[#6366f1] flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <FaGraduationCap className="text-white text-xl" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-teal-400 text-sm md:text-base">
                      <FaCalendarAlt size={16} />
                      {edu.duration}
                    </div>
                  </div>

                  <p className="text-gray-300 font-semibold mb-2">
                    {edu.institution}
                  </p>

                  {edu.details && (
                    <p className="text-gray-400 text-sm">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-teal-400">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-semibold text-white">Strong Academic Performance</p>
                <p className="text-gray-400 text-sm">Maintained 3.75/4.0 CGPA throughout university</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-semibold text-white">Practical Experience</p>
                <p className="text-gray-400 text-sm">Multiple projects across web, data science, and systems</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-semibold text-white">Full-Stack Development</p>
                <p className="text-gray-400 text-sm">From frontend design to backend systems and databases</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold text-white">Continuous Learning</p>
                <p className="text-gray-400 text-sm">Always exploring new technologies and methodologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
