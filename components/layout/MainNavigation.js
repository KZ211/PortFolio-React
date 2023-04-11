import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={}>
        <Link to="/">
        <img src="https://drive.google.com/uc?id=1_RReY9xp2cq_fpJQHTTafZNow3cNIqWQ" alt="LogoAJ" width="70"/>
        </Link>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PortFolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/AboutMe">AboutMe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
