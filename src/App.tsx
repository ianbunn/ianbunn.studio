import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';

import { router } from './Routes';
import { theme, Fonts } from './theme';
import { Footer } from './components';

const App: React.FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Container>
                <RouterProvider router={router} />
                <Footer />
            </Container>
        </ChakraProvider>
    );
}

export default App;
