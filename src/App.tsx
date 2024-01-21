import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ChakraBaseProvider, Container } from '@chakra-ui/react';

import { router } from './Routes';
import theme from './theme';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
    return (
        <ChakraBaseProvider theme={theme}>
            <Container>
                <RouterProvider router={router} />
                <Footer />
            </Container>
        </ChakraBaseProvider>
    );
}

export default App;
