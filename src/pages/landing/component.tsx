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
                    <div>
                        <p className={"small-text"}>I'm a sr. software engineer and polymath.</p>
                    </div>
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
                            I've 7+ years of experience in engineering software, and my whole life learning attempting to quench my thirst for knowledge.
                        </p>
                        <p>
                            This is my studio where I'll share my collaborations with ingenious people, other courageous projects, my thoughts on the world, and my journey to quench my thirst.
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
                            I'm working on launching two projects in 2024: <strong>DeadCntr Publishing</strong> and <strong>Green Growers Club</strong>.
                        </p>
                        <p>
                            <strong>DeadCntr Publishing</strong> is an indie publishing house that focuses on the creation of unique
                            and engaging content that changes the way we think about and act towards the world.
                        </p>
                        <p>
                            <strong>Green Growers Club</strong> is a simple but powerful greenhouse utilities system that takes the hard
                            parts out of home growing cannabis.
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
