import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';
import { portfolioData } from '../data';

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const totalSkills = portfolioData.skillsData.reduce(
    (sum, group) => sum + group.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-10" style={{ top: '20%', right: '10%' }} />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10 relative z-10"
        >
          {portfolioData.skillsData.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">
              <h3 className="text-xl font-semibold text-teal-400 mb-4 text-left">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    className="glass p-4 rounded-xl text-center transition-all cursor-default group"
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      backgroundColor: 'rgba(32, 201, 151, 0.12)',
                      boxShadow: '0 0 20px rgba(34, 197, 94, 0.45)',
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                  >
                    <p className="font-semibold text-sm sm:text-base text-gray-300 group-hover:text-teal-400 transition-colors">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 relative z-10"
        >
          <motion.div
            className="glass-sm p-6 rounded-2xl text-center"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-bold text-teal-400 mb-2">
              {totalSkills}+
            </h3>
            <p className="text-gray-300">Technical Skills</p>
          </motion.div>

          <motion.div
            className="glass-sm p-6 rounded-2xl text-center"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-bold text-indigo-400 mb-2">
              {portfolioData.projects.length}
            </h3>
            <p className="text-gray-300">Projects Completed</p>
          </motion.div>

          <motion.div
            className="glass-sm p-6 rounded-2xl text-center"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-bold text-indigo-400 mb-2 flex items-center justify-center gap-2">
              <FaBrain className="text-teal-400 text-2xl" />
              {portfolioData.stats.problemSolving.count}+
            </h3>
            <p className="text-gray-300">{portfolioData.stats.problemSolving.label}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
