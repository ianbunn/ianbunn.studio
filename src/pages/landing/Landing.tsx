import { Heading, Box, Flex } from "@chakra-ui/react"
import { motion, useScroll, useSpring } from "framer-motion"
import "./styles.css"

// Example of a glitch animation
// const glitchVariants = {
//     initial: {},
//     animate: {
//         opacity: 1,
//         x: [0, -5, 5, -3, 3, 0],
//         y: [0, 3, -3, 2, -2, 0],
//         transition: {
//             duration: 0.5,
//             repeatType: "mirror",
//         },
//     },
// };

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
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Box>
            {/* TODO: set the backgroundColor to a teal */}
            {/* Intro */}
            <Flex flexDirection="column" align="center" justify="center" h="800px">
                <AnimatedHeading
                    variants={slideInAnimation}
                    initial="initial"
                    animate="animate"
                >
                    Yo, I'm Ian
                </AnimatedHeading>
                <p>tune in, drop out</p>
            </Flex>

            {/* TODO: set the backgroundColor to a darker teal */}
            {/* About */}
            <Flex flexDirection="column" align="center" justify="center" h="800px">
                <Heading>Quien soy?</Heading>
                <p>
                    I'm a creative software engineer that loves to rock out to live music,
                    hang out with me wife and doggos, and while not doing that,
                    I craft technical strategies and solutions to help the Universe.
                </p>
            </Flex>

            {/* TODO: set the backgroundColor to a darker teal */}
            {/* Projects */}
            <Flex flexDirection="column" align="center" justify="center" h="800px">
                <Heading>Mis proyectos</Heading>
                <Heading size='sm'>
                    GC
                    {/* TODO: Add coming soon sticker */}
                </Heading>
                <Heading size='sm'>
                    Dead Cntr Publishing
                    {/* TODO: Add coming soon sticker */}
                </Heading>
                <Heading size='sm'>
                    R for Revolution
                    {/* TODO: Add coming soon sticker */}
                </Heading>
            </Flex>
            <motion.div className="progress" style={{scaleX}}/>
        </Box>
    );
};

export default Landing;
