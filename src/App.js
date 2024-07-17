import React from 'react';
import './App.css';
import { darkTheme } from './utils/Themes';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Hero from './components/HeroSection/Hero';
import Education from './components/Education/Education';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactUs from './components/Contactus/Contactus';
import Footer from './components/About/Fotter';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 208, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%,0 100%);
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper >
            <Skills />
            <Education />
            <Projects />
            <About />
            <ContactUs />
        </Wrapper>
        <Footer />
      </Body>
    </ThemeProvider>
  );
};

export default App;
