import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Alexis Jares</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PortFolio">PortFolio</Link>
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
