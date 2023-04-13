import * as React from 'react';

import classes from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>About Me</h1>
        <h2>My Info</h2>
      </div>
      <div className={classes.infoContainer}>
        <img
          src="https://drive.google.com/uc?id=1km5xxzjNk4WitcvzbniCktIhn9dNX1I9"
          width="450px"
        />
        <p>
          I'm in the admission course at the University of 3 de Febrero (UNTREF)
          <br />
          aimed at the undergraduate degree in "Computer Engineering". <br />I
          was born in Buenos Aires, Argentina, in a small town in the northern
          area called <br />
          "Presidente Derqui". <br />I began to delve into programming at the
          age of 16, but then stopped for a while as <br />I didn't have a clear
          path to follow, and ended up feeling frustrated.
          <br /> In 2022, I decided to pick it up again and push forward with my
          career as a developer.
          <br />I credit my learning to my partner Steven Aragon (a senior
          programmer and co-founder of Claps).
          <br /> Thanks to him, I now have a solid foundation in many
          computational areas such as:
        </p>
        <div className={classes.icons}>
          <img
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/256/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-bold-tal-revivo.png"
            alt="iconHTML"
            width="100px"
          />
          <img
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-css-files-tanah-basah-glyph-tanah-basah.png"
            alt="iconCSS"
            width="100px"
          />
          <img
            src="https://img.icons8.com/ios-filled/256/javascript.png"
            alt="iconJavaScript"
            width="100px"
          />
          <img
            src="https://img.icons8.com/glyph-neue/256/php.png"
            alt=""
            width="100px"
          />
          <img
            src="https://img.icons8.com/ios-filled/256/python.png"
            alt=""
            width="100px"
          />
          <img
            src="https://img.icons8.com/ios/256/mysql-logo.png"
            alt=""
            width="100px"
          />
          <img
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-react-social-media-tanah-basah-glyph-tanah-basah.png"
            alt="icon"
            width="100px"
          />
        </div>
        <a
          href="https://drive.google.com/u/0/uc?id=17zeczS9kkLu6HcVG3oaPk3K4bkCKwJKZ&export=download"
          alt="Curriculum"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
