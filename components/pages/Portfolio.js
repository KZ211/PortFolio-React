import * as React from 'react';

import classes from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Portfolio</h1>
      </div>
      <div className={classes.gridContainer}>
        <div className={(classes.item1, classes.colorContainer)}>
          <h2>Project 1</h2>
          <h1>Proximamente</h1>
        </div>
        <div className={(classes.item2, classes.colorContainer)}>
          <h2>Project 2</h2>
          <h1>Proximamente</h1>
        </div>
        <div className={(classes.item3, classes.colorContainer)}>
          <h2>Project 3</h2>
          <h1>Proximamente</h1>
        </div>
        <div className={(classes.item4, classes.colorContainer)}>
          <h2>Project 4</h2>
          <h1>Proximamente</h1>
        </div>
        <div className={(classes.item5, classes.colorContainer)}>
          <h2>Project 5</h2>
          <h1>Proximamente</h1>
        </div>
        <div className={(classes.item6, classes.colorContainer)}>
          <h2>Project 6</h2>
          <h1>Proximamente</h1>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
