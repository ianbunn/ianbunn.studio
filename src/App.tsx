import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {motion, useScroll, useSpring} from "framer-motion";

import { router } from './Routes';
import { Footer } from './components';
import './theme/index.scss';

const App: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div>
            <motion.div className="read-progress" style={{scaleX}}/>
            <RouterProvider router={router}/>
            <Footer/>
        </div>
    );
}

export default App;
