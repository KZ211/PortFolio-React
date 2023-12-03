import React, { useState } from 'react';

import MainNavigation from './components/layout/MainNavigation.js';
import Footer from './components/layout/Footer';
import classes from './index.css';

export default function App() {
  return (
    <div className={classes.appContainer}>
      <nav>
        <MainNavigation />
      </nav>
      <Footer />
    </div>
  );
}
