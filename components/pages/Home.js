import * as React from 'react';

import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.Home}>
      <div className={classes.div}>
      <h1>Home</h1>
        <img src="https://drive.google.com/uc?id=1JG4hErb-UzCkC-hZnPjY0B5Lt9lOCHXN" alt="Alexis Jares" width="700" />
      <h2>I'm frontend developer<br/> with react</h2>
      </div>
    </section>
  );
}

export default Home;
