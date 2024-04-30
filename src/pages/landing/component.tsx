import { motion } from "framer-motion"
import React, { useRef } from "react";

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
    const sectionsRef = useRef<NodeListOf<HTMLElement>>(null);

    // Function to scroll to the next section
    const scrollToNextSection = () => {
        const sections = sectionsRef.current || document.querySelectorAll<HTMLElement>('.section');
        // @ts-ignore
        sectionsRef.current = sections;

        const currentSectionIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top >= 0);
        if (currentSectionIndex < sections.length - 1) {
            const nextSection = sections[currentSectionIndex + 1];
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <main>
            {/* Landing */}
            <section id="landing" className="section">
                <div className="content">
                    <AnimatedHeading
                        variants={slideInAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        Hola,<br /> soy Ian
                    </AnimatedHeading>
                    <div className="text" style={{ margin: '3rem' }}>
                        <p>tune in, drop out</p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section about">
                <div className="content">
                    <h2>Quien soy?</h2>
                    <div className="text">
                        <p>
                            I'm a creative software engineer that loves to rock out to live music,
                            hang out with my wife and dog, and while not doing that,
                            I craft technical strategies and solutions to help the Universe.
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
                            Unfortunately, I was impacted by the current tech lay-offs at the beginning of April,
                            so I'm currently open to work and looking for my next adventure.
                        </p>
                        <p>
                            Check out my <a href="https://linkedin.com/in/ianbunn" target="_blank" rel="noreferrer">LinkedIn</a> for my latest updates.
                            Download my <a href="/documents/ian-bunn-software-engineer-resume.pdf" target="_blank" rel="noreferrer">resume</a> to learn more about my experience.
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
                            I'm currently working on some personal projects that include a mobile app to educate about growing plants, a publishing company focusing on unique stories,
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
                        <p>Contact me at <a href="mailto:ian@ianbunn.studio?subject=Platicamos">ian@ianbunn.studio</a> with any questions or comments.</p>
                        <p>Find me on <a href="https://linkedin.com/in/ianbunn">LinkedIn</a> or <a href="https://github.com/ianbunn">Github</a>, and don't be shy, comment or send me a message!</p>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Landing;
