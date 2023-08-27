import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Home from './../pages/Home.js';
import Portfolio from './../pages/Portfolio.js';
import AboutMe from './../pages/AboutMe.js';
import ContactMe from './../pages/ContactMe.js';
import Footer from './../pages/Footer.js';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const [page, setPage] = useState(0);

  const changeToHome = () => {
    setPage(0);
  };
  const changeToPortfolio = () => {
    setPage(1);
  };
  const changeToAboutMe = () => {
    setPage(2);
  };
  const changeToContactMe = () => {
    setPage(3);
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={}>
          <li>
            <Link to="/">
              <img
                onClick={changeToHome}
                src="https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ"
                alt="LogoAJ"
                width="70"
              />
            </Link>
          </li>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={page === 0 ? classes.ocultar : classes.mostrar} onClick={changeToHome}>Home</Link>
              <p className={page === 0 ? classes.mostrar : classes.ocultar}>◉</p>
            </li>
            <li>
              <Link to="/portfolio" className={page === 1 ? classes.ocultar : classes.mostrar} onClick={changeToPortfolio}>Portfolio</Link>
              <p className={page === 1 ? classes.mostrar : classes.ocultar}>◉</p>
            </li>
            <li>
              <Link to="/aboutme" className={page === 2 ? classes.ocultar : classes.mostrar} onClick={changeToAboutMe}>About Me</Link>
              <p className={page === 2 ? classes.mostrar : classes.ocultar}>◉</p>
            </li>
            <li>
              <Link to="/contactme" className={page === 3 ? classes.ocultar : classes.mostrar} onClick={changeToContactMe}>Contact Me</Link>
              <p className={page === 3 ? classes.mostrar : classes.ocultar}>◉</p>
            </li>
          </ul>
        </nav>
      </header>
      {page === 0 ? (
        <Home />
      ) : page === 1 ? (
        <Portfolio />
      ) : page === 2 ? (
        <AboutMe />
      ) : page === 3 ? (
        <ContactMe />
      ) : (
        <h1>Page no fund</h1>
      )}
    </div>
  );
}

export default MainNavigation;
