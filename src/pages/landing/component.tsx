import React from "react";
import { motion } from "framer-motion";

import "./styles.scss"

const slideInAnimation = {
    initial: { x: "-100vw" },
    animate: { x: 0 },
    transition: {
        type: "spring",
        stiffness: 20,
        damping: 10,
        duration: 0.05,
    },
};

const AnimatedHeading = motion('h1');

const Landing: React.FC = () => {

    return (
        <div className="main">
            {/* Landing */}
            <section id="landing" className="section">
                <div className="content">
                    <AnimatedHeading
                        variants={slideInAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        Hola,<br/> soy Ian
                    </AnimatedHeading>
                    <div className="text" style={{ margin: '3rem' }}>
                        <p>tune in, scroll down</p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section about">
                <div className="content">
                    <h2>Quien soy?</h2>
                    <div className="text">
                        <p>
                            Hola amig@! I love software!, specifically crafting creative solutions that provide a positive impact to our society <a href="https://www.youtube.com/watch?v=3iYQcNa31Rs" target="_blank" rel="noreferrer">#EngineeringIsLife</a>.
                        </p>
                        <p>
                            I enjoy long walks on the beach with new technologies, always looking to find a new angle to boost existing systems and build exciting new features leveraging AR and VR, sprinkled with a bit of blockchain (can you say web3?).
                        </p>
                    </div>
                </div>
            </section>

            {/* Resume */}
            <section id="resume" className="section resume">
                <div className="content">
                    <h2>CV / Resume</h2>
                    <div className="text">
                        <p>
                            I'm currently open to work and looking for my next adventure.
                        </p>
                        <p>
                            Check out my <a href="https://linkedin.com/in/ianbunn" target="_blank" rel="noreferrer">LinkedIn</a> for my latest updates.
                            Download my <a href="/documents/ian-bunn-software-engineer-resume.pdf" target="_blank"
                                           rel="noopener noreferrer">resume</a> to learn more about my work experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section projects">
                <div className="content">
                    <h2>Mis proyectos</h2>
                    <div className="text">
                        <p>
                            I'm currently working on some personal projects that include a mobile app to educate about
                            growing plants, a publishing company focusing on unique stories,
                            and a data science project to analyze the impact of social media on political revolutions.
                        </p>
                        <p>
                            Stay tuned for updates!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section contact">
                <div className="content">
                    <h2>Platicamos?</h2>
                    <div className="text">
                        <p>Contact me at <a
                            href="mailto:ian@ianbunn.studio?subject=Platicamos">ian@ianbunn.studio</a> with any
                            questions or comments.</p>
                        <p>Find me on <a href="https://linkedin.com/in/ianbunn" target="_blank" rel="noreferrer">LinkedIn</a> or <a
                            href="https://github.com/ianbunn" target="_blank" rel="noreferrer">Github</a>, and don't be shy, comment or send me a
                            message!</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Landing;
