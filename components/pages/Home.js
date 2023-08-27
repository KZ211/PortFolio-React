import * as React from 'react';

import MainNavigation from "../layout/MainNavigation"
import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.Home}>
      <div className={classes.div}>
      <h1>Home</h1>
        <img src="https://drive.google.com/uc?id=17ILR39_Rz_QvWJ1wF5nRFOKx4Afe4Aj-" alt="Alexis Jares" width="700" />
      <h2>I'm frontend developer<br/> with react</h2>
      </div>
    </section>
  );
}

export default Home;
