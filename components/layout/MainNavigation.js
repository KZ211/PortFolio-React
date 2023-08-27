import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
        <div>
          <li>
            <Link>
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
              <Link onClick={changeToHome}>Home</Link>
            </li>
            <li>
              <Link onClick={changeToPortfolio}>Portfolio</Link>
            </li>
            <li>
              <Link onClick={changeToAboutMe}>About Me</Link>
            </li>
            <li>
              <Link onClick={changeToContactMe}>Contact Me</Link>
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
