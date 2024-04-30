import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { motion, useScroll } from "framer-motion"

import { router } from './Routes';

import { Footer } from './components';

import './theme/index.scss';

const App: React.FC = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <motion.div className="read-progress" style={{scaleX: scrollYProgress}}/>
            <RouterProvider router={router}/>
            <Footer/>
        </div>
    );
}

export default App;
