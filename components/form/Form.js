import React, {useRef} from 'react';

import classes from "./Form.module.css";

function Form(props) {
  const nameInputRef = useRef();
  const mailInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMail = mailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const contactData = {
      name: enteredName,
      mail: enteredMail,
      description: enteredDescription,
    };

    props.onAddContact(contactData);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="inName">Your Name</label>
        <input ref={nameInputRef} type="text" id="inName" placeholder="Alexis Jares" />
        <label htmlFor="inMail">Mail</label>
        <input required ref={mailInputRef} type="email" id="inMail" placeholder="example@gmail.com"/>
        <label htmlFor="inDescription">Description</label>
        <textarea ref={descriptionInputRef} type="text" id="inDescription" placeholder="Your page is very nice :)"/>
        <button>Send</button>
    </form>
  );
}

export default Form;
