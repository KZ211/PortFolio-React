import * as React from 'react';

import classes from './AboutMe.module.css';

function AboutMe() {
  return (
    <section className={classes.section}>
      <div className={classes.infoContainer}>
        <img
          src="https://drive.google.com/uc?id=1km5xxzjNk4WitcvzbniCktIhn9dNX1I9"
          width="250px"
        />
        <p>
        I am studying "Computer Engineering" at the University of February 3 (UNTREF).
          <br />
          I was born in Buenos Aires, Argentina, in a small northern zone party called "Presidente Derqui".
          <br/>
           I started learning programming at the age of 16 as a hobby. In 2022, I decided to take it up more
           <br/> 
           seriously and move on with my development career. I credit my great friend Steven Aragon (senior
           <br/>
            programmer and co-founder of Claps) for my learning. Thanks to him I now have a solid foundation 
            <br/>
            in many areas of development such as:
        </p>
        <div className={classes.icons}>
          <img
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/256/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-bold-tal-revivo.png"
            alt="iconHTML"
            width="50px"
          />
          <img
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-css-files-tanah-basah-glyph-tanah-basah.png"
            alt="iconCSS"
            width="50px"
          />
          <img
            src="https://img.icons8.com/ios-filled/256/javascript.png"
            alt="iconJavaScript"
            width="50px"
          />
          <img
            src="https://img.icons8.com/glyph-neue/256/php.png"
            alt=""
            width="50px"
          />
          <img
            src="https://img.icons8.com/ios-filled/256/python.png"
            alt=""
            width="50px"
          />
          <img
            src="https://img.icons8.com/ios/256/mysql-logo.png"
            alt=""
            width="50px"
          />
          <img
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-react-social-media-tanah-basah-glyph-tanah-basah.png"
            alt="icon"
            width="50px"
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
