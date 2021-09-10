import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import ReactFullpage from '@fullpage/react-fullpage';

const anchors = [ 'About', 'Skills', 'Projects', 'Contact' ];

export const Home = () => {
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      menu={'header'}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* <Header /> */}
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
