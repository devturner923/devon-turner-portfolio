import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, buttonVariants } from '../utils/animations';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content" style={{ gridTemplateColumns: '1fr' }}>
        <motion.div 
          className="hero-text"
          variants={fadeInLeft}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={staggerItem}
            initial="initial"
            animate="animate"
          >
            Hi, I'm <span className="highlight">Devon Turner</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            initial="initial"
            animate="animate"
          >
            Senior Java Full Stack Developer with 10+ years of experience architecting 
            scalable enterprise applications. Expertise in Spring Boot, microservices, 
            cloud-native solutions, and AI/ML integrations. I transform complex business 
            challenges into elegant, high-performance solutions.
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fas fa-rocket"></i>
              View My Work
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fas fa-envelope"></i>
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="stat" variants={staggerItem}>
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            <motion.div className="stat" variants={staggerItem}>
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </motion.div>
            <motion.div className="stat" variants={staggerItem}>
              <span className="stat-number">Available</span>
              <span className="stat-label">For New Opportunities</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Avatar removed per request */}
      </div>
    </section>
  );
};

export default Hero;
