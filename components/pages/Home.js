import * as React from 'react';

import classes from "./Home.module.css";
import logo from "../../public/LogoAJ.jpg";

function Home() {
  return (
    <section className={classes.Home}>
      <h1>Home</h1>
      <img src={logo} alt="Logo"/>
      <h2>Im frontend developer</h2>
    </section>
  );
}

export default Home;
