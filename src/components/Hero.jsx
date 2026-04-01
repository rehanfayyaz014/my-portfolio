import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data';

const Hero = () => {
  const { personal } = portfolioData;

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
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"
          animate={{ x: [-50, 50], y: [-50, 50] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10"
          animate={{ x: [50, -50], y: [50, -50] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full text-center"
      >
        {/* Profile Picture */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            className="relative w-40 h-40 sm:w-48 sm:h-48"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Glow Circle Background */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
            
            {/* Inner Glow */}
            <div className="absolute inset-2 bg-gradient-to-br from-[#20c997] to-[#6366f1] rounded-full opacity-20" />

            {/* Profile Image Container */}
            <div className="absolute inset-0 rounded-full border-2 border-gradient-primary bg-glass flex items-center justify-center overflow-hidden">
              <img
                src="/my-pic.jpg"
                alt={personal.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 mb-2">
          {personal.tagline}
        </motion.p>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 mb-8">
          {personal.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="/Muhammad_Rehan_Resume.pdf"
            download="Muhammad_Rehan_Resume.pdf"
            className="glass px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-20 transition-all hover:glow-teal"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-teal-400" />
            Download Resume
          </motion.a>

          <motion.a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-20 transition-all"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-blue-400" />
            LinkedIn
          </motion.a>

          <motion.a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-20 transition-all"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-gray-300" />
            GitHub
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center text-sm mb-8"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="glass px-6 py-2 rounded-lg hover:bg-opacity-20 transition-all flex items-center justify-center gap-2"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-teal-400" />
            {personal.email}
          </motion.a>
          <motion.a
            href="https://wa.me/923360504355"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-2 rounded-lg hover:bg-opacity-20 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/50"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-green-400" />
            {personal.phone}
          </motion.a>
          <motion.div
            className="glass px-6 py-2 rounded-lg flex items-center justify-center gap-2 cursor-default"
            whileHover={{ y: -5 }}
          >
            <span className="text-teal-400">📍</span>
            {personal.location}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gradient-primary rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gradient-primary rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
