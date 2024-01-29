import { Heading, Box } from "@chakra-ui/react"
import { motion, useTransform, useScroll } from "framer-motion"
import "./styles.css"
import React, { useRef } from "react";

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

const AnimatedHeading = motion(Heading);

const Landing: React.FC = () => {

    return (
        <Box>
            {/* Intro */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                {/* flex section to center content in center */}
                <AnimatedHeading
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Hola, soy Ian
                </AnimatedHeading>
                <p>tune in, drop out</p>
            </section>

            {/* About */}
            <section style={{ height: '150vh' }}>
                <AnimatedHeading
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Quien soy?
                </AnimatedHeading>
                <p>
                    I'm a creative software engineer that loves to rock out to live music,
                    hang out with my wife and doggos, and while not doing that,
                    I craft technical strategies and solutions to help the Universe.
                </p>
            </section>

            {/* Projects */}
            <section style={{ height: '135vh' }}>
                <AnimatedHeading
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Mis proyectos
                </AnimatedHeading>
                <p>
                    Growers Club (coming soon)
                    {/* TODO: Add coming soon sticker */}
                </p>
                <br/>
                <p>
                    Dead Cntr Publishing (coming soon)
                    {/* TODO: Add coming soon sticker */}
                </p>
                <br/>
                <p>
                    R for Revolution (coming soon)
                    {/* TODO: Add coming soon sticker */}
                </p>
            </section>
        </Box>
    );
};

export default Landing;
