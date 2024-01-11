import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import {
    ChakraBaseProvider,
    theme as chakraTheme,
    Container, extendTheme
} from '@chakra-ui/react'
import LandingPage from './components/LandingPage';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <h1>Projects</h1>,
    },
    {
        path: "/contact",
        element: <h1>Contact</h1>,
    }
]);

const { Button } = chakraTheme.components

const theme = extendTheme({
    components: {
        Button,
        Heading: {
            baseStyle: {
                fontWeight: "900",
            },
            sizes: {
                xl: {
                    fontSize: "77px"
                },
            },
        },
    },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ChakraBaseProvider theme={theme}>
          <Container maxW='md' bg='blue.600' color='white'>
        <RouterProvider router={router} />
          <Footer />
            </Container>
      </ChakraBaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
