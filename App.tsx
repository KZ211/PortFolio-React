import React from 'react';
import {Element} from "react-scroll";

import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import ContactMe from "./components/pages/ContactMe";
import Footer from './components/layout/Footer';
import classes from './index.css';

export default function App() {  
  return (
    <div className={classes.appContainer}>
      <Element name="home">
          <Home />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Element name="aboutme">
          <AboutMe />
        </Element>
        <Element name="contactme">
          <ContactMe />
        </Element>
        <Footer />
    </div>
  );
}
