import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles.scss';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Senior Software Engineer',
    'Tech Polymath',
    'Founder',
    'Chief Strategy Officer',
    'Systems Architect',
    'Chief Technology Officer',
    'Nerd',
    'Dog Dad'
  ];

  const ventures = [
    { name: 'GREENT', color: '#10B981', status: 'Live', link: 'https://greent.club' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const Typewriter: React.FC<{ 
    text: string; 
    delay?: number; 
    speed?: number;
    className?: string;
  }> = ({ text, delay = 0, speed = 50, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }, [delay]);

    return (
      <span className={className}>
        {displayText}
        <span className="cursor">|</span>
      </span>
    );
  };

  return (
    <section id="hero" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.8, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div className="hero-intro" variants={itemVariants}>
            <span className="greeting">Hello, I'm</span>
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Ian Bunn<span className="accent-dot">.</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div className="hero-role" variants={itemVariants}>
            <motion.span 
              key={currentRole}
              className="role-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typewriter 
                text={roles[currentRole]} 
                speed={80}
                className="typewriter"
              />
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            Building the future through innovative technology solutions. 
            Combining deep technical expertise with entrepreneurial vision to create 
            sustainable, impactful ventures in the tech ecosystem.
          </motion.p>

          {/* Ventures Showcase */}
          <motion.div className="ventures-grid" variants={itemVariants}>
            <span className="ventures-label">Currently Building:</span>
            <div className="ventures-list">
              {ventures.map((venture, index) => (
                <motion.a
                  key={venture.name}
                  href={venture.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ '--venture-color': venture.color } as React.CSSProperties}
                >
                  <span className="venture-name">{venture.name}</span>
                  <span className="venture-status">{venture.status}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
              <span className="btn-icon">→</span>
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="scroll-text"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 