import React from 'react';

import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <a href="https://instagram.com" target="blank">
            <img
              src="https://img.icons8.com/ios-filled/256/instagram.png"
              alt="GitHub"
              width="60"
            />
            <h3>Instagram</h3>
          </a>
        </li>
        <li className={classes.li}>
          <div>
            <a href="https://instagram.com" target="blank">
              <img
                src="https://img.icons8.com/windows/256/github.png"
                alt="GitHub"
                width="60"
              />
              <h3>GitHub</h3>
            </a>
          </div>
        </li>
        <li className={classes.li}>
          <a href="https://linkedin.com" target="blank">
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-linkedin-social-media-tanah-basah-glyph-tanah-basah.png"
              alt="GitHub"
              width="60"
            />
            <h3>Linkedin</h3>
          </a>
        </li>
      </ul>
      <p>Create by Alexis Jares | all rigth reseve | 10 de Abril de 2023 </p>
    </footer>
  );
}

export default Footer;
