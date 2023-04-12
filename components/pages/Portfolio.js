import * as React from 'react';

import classes from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Portfolio</h1>
        <h2>My Projects</h2>
      </div>
      <div className={classes.gridContainer}>
        <div className={(classes.item1, classes.colorContainer)}>
          <a href="http://coldental.stevearagonsite.com/" target="blank">
          Coldental
          <img
            src="https://drive.google.com/uc?id=14bdraVodGrabR-WeuRJau3vH1AB0wLHh"
            alt="Coldental"
            />
            </a>
        </div>
        <div className={(classes.item2, classes.colorContainer)}>
          <h2>Slot 2</h2>
        </div>
        <div className={(classes.item3, classes.colorContainer)}>
          <h2>Slot 3</h2>
        </div>
        <div className={(classes.item4, classes.colorContainer)}>
          <h2>Slot 4</h2>
        </div>
        <div className={(classes.item5, classes.colorContainer)}>
          <h2>Slot 5</h2>
        </div>
        <div className={(classes.item6, classes.colorContainer)}>
          <h2>Slot 6</h2>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
