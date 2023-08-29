import React from 'react';
import { motion } from 'framer-motion';

import Form from '../form/Form';
import classes from "./ContactMe.module.css"

function ContactMe() {
  function addContactHandler(contactData) {
    fetch(
      'https://mypage-cf4be-default-rtdb.firebaseio.com/contacts.json',
      {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return (
    <div className={classes.container}>
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <div className={classes.title}>
      <h1>Contact Me</h1>
      <h2>Fill out the form and I will get in touch with you</h2>
      </div>
      <Form onAddContact={addContactHandler}/>
      </motion.div>
    </div>
  );
}

export default ContactMe;
