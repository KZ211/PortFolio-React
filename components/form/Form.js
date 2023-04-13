import React from 'react';

import classes from "./Form.module.css";

function Form() {
  return (
    <form className={classes.form}>
        <label htmlFor="inName">Your Name</label>
        <input type="text" id="inName" placeholder="Alexis Jares" />
        <label htmlFor="inMail">Mail</label>
        <input type="email" id="inMail" placeholder="example@gmail.com"/>
        <label htmlFor="inDescription">Description</label>
        <textarea type="text" id="inDescription" placeholder="Your page is very nice :)"/>
    </form>
  );
}

export default Form;
