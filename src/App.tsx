// src/App.tsx
import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
      <div>
        <LandingPage />
        <About />
        <Footer />
      </div>
  );
};

export default App;
