import React from 'react';

function Form() {
  return (
    <div>
    <form>
        <label htmlFor="inName">Your Name</label>
        <input type="text" id="inName" placeholder="Alexis Jares" />
        <label htmlFor="inMail">Mail</label>
        <input type="email" id="inMail" placeholder="example@gmail.com"/>
        <label htmlFor="inDescription"></label>
//poner resize: none;
        <textarea type="text" id="inDescription" placeholder="Your page is very nice :)"/>
    </form>
    </div>
  );
}

export default Form;
