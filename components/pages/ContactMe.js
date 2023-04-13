import React from 'react';

import Form from '../form/Form';
import classes from "./ContactMe.module.css"

function ContactMe() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
      <h1>Contact Me</h1>
      <h2>Fill out the form and I will get in touch with you</h2>
      </div>
      <Form />
    </div>
  );
}

export default ContactMe;
