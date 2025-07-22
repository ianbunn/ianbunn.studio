import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <motion.div 
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Ian Bunn</h3>
                        <p>Building the future through technology</p>
                    </motion.div>
                    
                    <motion.div 
                        className="footer-links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="link-group">
                            <h4>Connect</h4>
                            <a href="mailto:ian@ianbunn.studio" target="_blank" rel="noopener noreferrer">
                                Email
                            </a>
                            <a href="https://linkedin.com/in/ianbunn" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a href="https://github.com/ianbunn" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        
                        <div className="link-group">
                            <h4>Ventures</h4>
                            <a href="https://greengrowers.club" target="_blank" rel="noopener noreferrer">
                                Green Growers Club
                            </a>
                            <a href="https://greent.club" target="_blank" rel="noopener noreferrer">
                                GREENT
                            </a>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-divider"></div>
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Ian Bunn. To Higher Standards & Purpose.</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
