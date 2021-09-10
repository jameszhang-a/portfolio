import React from 'react';
import Header from '../components/Header/Header';
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
      menu='#nav'
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        );
      }}
    />
  );
};
