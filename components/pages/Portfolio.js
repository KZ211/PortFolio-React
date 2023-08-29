import * as React from 'react';
import { motion } from 'framer-motion';

import classes from './Portfolio.module.css';

function Portfolio() {
  return (
//aca tengo que modificar para posts
    <section className={classes.section}>
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className={classes.gridContainer}>
        <div className={(classes.item1, classes.colorContainer)}>
          <a href="http://coldental.stevearagonsite.com/" target="blank">
          SinCar
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
            </motion.div>
    </section>
  );
}

export default Portfolio;
