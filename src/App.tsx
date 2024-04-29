import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './Routes';
import { Header, Footer } from './components';
import './theme/index.scss';

import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </div>
    );
}

export default App;
