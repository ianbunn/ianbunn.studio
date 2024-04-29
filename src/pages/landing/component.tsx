import { motion } from "framer-motion"
import "./styles.css"
import React from "react";


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
const AnimatedHeadingTwo = motion('h2');

const Landing: React.FC = () => {
    return (
        <div>
            {/* Intro */}
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <AnimatedHeading
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Hola,<br /> soy Ian
                </AnimatedHeading>
                <p className="lead d-flex align-items-center justify-content-center">tune in, drop out</p>
            </div>

            {/* About */}
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <AnimatedHeadingTwo
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Quien soy?
                </AnimatedHeadingTwo>
                <p className="lead d-flex align-items-center justify-content-center">
                    I'm a creative software engineer that loves to rock out to live music,
                    hang out with my wife and doggos, and while not doing that,
                    I craft technical strategies and solutions to help the Universe.
                </p>
            </div>

            {/* Projects */}
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <AnimatedHeadingTwo
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Mis<br/>
                    proyectos
                </AnimatedHeadingTwo>
                <p className="lead d-flex align-items-center justify-content-center">
                    Growers Club
                    {/* TODO: Add coming soon sticker */}
                </p>
                <br/>
                <p className="lead d-flex align-items-center justify-content-center">
                    Dead Cntr Publishing
                    {/* TODO: Add coming soon sticker */}
                </p>
                <br/>
                <p className="lead d-flex align-items-center justify-content-center">
                    R for Revolution
                    {/* TODO: Add coming soon sticker */}
                </p>
            </div>
        </div>
    );
};

export default Landing;
