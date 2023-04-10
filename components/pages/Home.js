import * as React from 'react';

import classes from "./Home.module.css";
import logo from "../../public/LogoAJ.jpg";

function Home() {
  return (
    <section className={classes.Home}>
      <div className={classes.div}>
      <h1>Home</h1>
        <img src="https://drive.google.com/uc?id=15BQm6J3z95VujzcFT4RDg73D3_2lgGYq" alt="Alexis Jares" width="700" />
      <h2>Im frontend developer<br/> with react</h2>
      </div>
    </section>
  );
}

export default Home;
