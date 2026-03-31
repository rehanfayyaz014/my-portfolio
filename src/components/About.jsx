import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const About = () => {
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

    const section = document.getElementById('about');
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
    <section id="about" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="glass p-8 md:p-12 rounded-3xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {portfolioData.about.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="glass-sm p-6 rounded-2xl hover:glow-teal transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-teal-400 mb-3">🎯 Focus Areas</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Core Programming & DSA</li>
                  <li>• Machine Learning with Python</li>
                  <li>• Full-Stack Integration</li>
                </ul>
              </motion.div>

              <motion.div
                className="glass-sm p-6 rounded-2xl hover:glow-indigo transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-indigo-400 mb-3">💡 Interests</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Advanced AI & Deep Learning</li>
                  <li>• Scalable Web Systems</li>
                  <li>• Collaborative Innovation</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
