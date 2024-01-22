import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {ChakraBaseProvider } from '@chakra-ui/react';

import { router } from './Routes';
import { theme, Fonts } from './theme';
import { Footer } from './components';

const App: React.FC = () => {
    return (
        <ChakraBaseProvider theme={theme}>
            <Fonts />
                <RouterProvider router={router} />
                <Footer />
        </ChakraBaseProvider>
    );
}

export default App;
