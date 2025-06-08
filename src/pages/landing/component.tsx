import React from "react";
import { motion } from "framer-motion";
import { Hero } from "../../components";

import "./styles.scss"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Landing: React.FC = () => {
  const ventures = [
    {
      name: "Green Growers Club",
      tagline: "Sustainable, Transparent Cannabis Cultivation",
      description: "Green Growers Club is a trust-first cannabis technology platform that empowers cannabis growers to grow sustainably and transparently.",
      features: [
        "Grower Admin Dashboard",
        "Compliance & Reporting", 
        "Engagement & Analytics",
        "Badges & Verification"
      ],
      status: "Live",
      color: "#059669",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      icon: "🌱",
      link: "https://greengrowers.club"
    },
    {
      name: "GREENT",
      tagline: "Green Technology Solutions",
      description: "GREENT is a mobile app that helps conscious cannabis consumers discover verified growers and learn about cannabis.",
      features: [
        "Mobile App",
        "Verified Growers",
        "Strain Reviews & Recommendations",
        "Cannabis Education 101"
      ],
      status: "Live",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
      icon: "🌍",
      link: "https://greent.club"
    },
    {
      name: "GNRLYlabs",
      tagline: "CTO Adjunct Services",
      description: "GNRLY Labs builds scalable, lab-crafted tech solutions for automated sales, CRM integration, and digital growth.",
      features: [
        "Automated Sales",
        "CRM Integration",
        "Digital Growth",
        "Technical Leadership"
      ],
      status: "Coming Soon",
      color: "#6366F1",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      icon: "⚡",
      link: "https://gnrlylabs.com"
    }
  ];

  return (
    <div className="landing">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div 
            className="section-content"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.h2 
              className="section-title" 
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="about-grid" 
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="about-text">
                <p className="lead">
                  I'm a polymath at heart, someone who thrives at the intersection of technology, 
                  entrepreneurship, and sustainable innovation.
                </p>
                <p>
                  With over 10 years of experience building scalable software solutions, 
                  I've evolved from a passionate software engineer into a strategic technology leader. 
                  My journey spans full-stack development, system architecture, and now founding 
                  companies that tackle real-world challenges.
                </p>
                <p>
                  I believe technology should serve humanity and our planet. That's why I'm 
                  building ventures that combine cutting-edge tech with environmental consciousness, 
                  creating solutions that are both innovative and sustainable.
                </p>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <h3>10+</h3>
                  <p>Years in Software Engineering</p>
                </div>
                <div className="highlight-item">
                  <h3>3</h3>
                  <p>Active Ventures</p>
                </div>
                <div className="highlight-item">
                  <h3>∞</h3>
                  <p>Curiosity for Learning</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="section ventures-section">
        <div className="container">
          <motion.div 
            className="section-content"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.h2 className="section-title" variants={fadeInUp}>
              My Ventures
            </motion.h2>
            
            <motion.p className="section-subtitle" variants={fadeInUp}>
              Building the future through innovative technology ventures
            </motion.p>
            
            <motion.div className="ventures-list" variants={fadeInUp}>
              {ventures.map((venture, index) => (
                <motion.div
                  key={venture.name}
                  className="venture-card"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  style={{ '--venture-color': venture.color } as React.CSSProperties}
                >
                  <div className="venture-header">
                    <h3>{venture.name}</h3>
                    <span className="venture-status">{venture.status}</span>
                  </div>
                  
                  <p className="venture-description">{venture.description}</p>
                  
                  {venture.status !== "Coming Soon" ? (
                    <motion.a 
                      href={venture.link}
                      className="venture-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      onClick={() => window.open(venture.link, '_blank')}
                    >
                      Learn More →
                    </motion.a>
                  ) : (
                    <div className="venture-link venture-link--disabled">
                      Coming Soon
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div 
            className="section-content"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.h2 className="section-title" variants={fadeInUp}>
              Let's Connect
            </motion.h2>
            
            <motion.p className="section-subtitle" variants={fadeInUp}>
              Ready to build something amazing together?
            </motion.p>
            
            <motion.div className="contact-content" variants={fadeInUp}>
              <div className="contact-text">
                <p>
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a conversation about cannabis, technology and entrepreneurship.
                </p>
                <p>
                  Whether you're looking for a technical partner, want to collaborate 
                  on a sustainable tech initiative, or simply want to connect, I'd love to hear from you.
                </p>
              </div>
              
              <div className="contact-actions">
                <motion.a 
                  href="mailto:ian@ianbunn.studio?subject=Let's Connect"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
                
                <div className="social-links">
                  <motion.a 
                    href="https://linkedin.com/in/ianbunn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a 
                    href="https://github.com/ianbunn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
