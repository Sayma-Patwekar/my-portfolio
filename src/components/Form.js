import "./FormStyles.css";
import emailjs from "emailjs-com";

import React from 'react';

function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm('service_s88t47u', 'portfolio', e.target, '9LRnRG0_9KNEpfObs')
    .then((result) => {
        alert("Message send successfully!!");
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

const Form = () => {

  return (
    <div className="form" onSubmit={sendEmail}>
        <form method="POST">
            <label>Your Name</label>
            <input type="text"  id="name" name="name"></input>
            <label>Email</label>
            <input type="email"  id="email" name="email"></input>
            <label>Subject</label>
            <input type="text"  id="subject" name="subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" id="message" name="message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form;