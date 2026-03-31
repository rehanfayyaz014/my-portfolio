import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      setFormStatus('Sending your message...');

      await emailjs.send(
        'service_9p928zr',
        'template_mgtmn5r',
        templateParams,
        'oUGWkGHnv_qcC9P3Z'
      );

      setFormStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('Something went wrong. Please try again.');
    }

    setTimeout(() => setFormStatus(''), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  const socialLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      href: `mailto:${portfolioData.socials.email}`,
      color: 'hover:text-teal-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: portfolioData.socials.linkedin,
      color: 'hover:text-blue-400',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: portfolioData.socials.github,
      color: 'hover:text-gray-300',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      href: `tel:${portfolioData.personal.phone}`,
      color: 'hover:text-indigo-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-10" style={{ top: '10%', right: '10%' }} />
          <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-10" style={{ bottom: '10%', left: '10%' }} />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I\'m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 mb-16"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {/* Direct Contact Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.label !== 'Email' && social.label !== 'Phone' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="glass bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-lg flex items-center gap-4 hover:glow-teal transition-all group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{social.label}</p>
                      <p className="text-white font-semibold">
                        {social.label === 'Email' && portfolioData.personal.email}
                        {social.label === 'Phone' && portfolioData.personal.phone}
                        {social.label === 'LinkedIn' && 'Visit my profile'}
                        {social.label === 'GitHub' && 'View my repositories'}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location Info */}
            <motion.div
              className="glass p-6 rounded-lg mt-8"
              whileHover={{ y: -5 }}
            >
              <p className="text-sm text-teal-400 font-semibold mb-2">📍 Location</p>
              <p className="text-white font-semibold">{portfolioData.personal.location}, Pakistan</p>
              <p className="text-gray-400 text-sm mt-2">Available for remote opportunities worldwide</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full glass bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 md:py-3 rounded-lg text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full glass bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 md:py-3 rounded-lg text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                  className="w-full glass bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 md:py-3 rounded-lg text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Status Message */}
              {formStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-sm p-4 rounded-lg text-teal-400 text-sm"
                >
                  ✓ {formStatus}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full glass bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base bg-gradient-to-r from-teal-500/20 to-indigo-500/20 hover:glow-teal transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 mt-12 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
                <li><a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a></li>
                <li><a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a></li>
                <li><a href={`mailto:${portfolioData.personal.email}`} className="hover:text-teal-400 transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Technologies</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>

          <div className="text-center border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muhammad Rehan. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed & Built with <span className="text-teal-400">React</span>, <span className="text-indigo-400">Tailwind CSS</span>, and <span className="text-pink-400">Framer Motion</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
