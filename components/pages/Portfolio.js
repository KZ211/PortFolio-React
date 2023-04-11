import * as React from 'react';

import classes from "./Portfolio.module.css";

function Portfolio() {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
      <h1>Portfolio</h1>
      </div>
      <div className={classes.gridContainer}>
      <div className={classes.item1, classes.color1}>Hola1</div>
      <div className={classes.item2, classes.color2}>Hola2</div>
      <div className={classes.item3, classes.color3}>Hola3</div>
      
      </div>
    </section>
  );
}

export default Portfolio;
