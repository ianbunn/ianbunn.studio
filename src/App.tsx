import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {ChakraBaseProvider } from '@chakra-ui/react';
import {motion, useScroll, useSpring} from "framer-motion";

import { router } from './Routes';
import { theme, Fonts } from './theme';
import { Footer } from './components';

const App: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <ChakraBaseProvider theme={theme}>
            <Fonts/>
            <RouterProvider router={router}/>
            <motion.div className="progress" style={{scaleX}}/>
            <Footer/>
        </ChakraBaseProvider>
    );
}

export default App;
