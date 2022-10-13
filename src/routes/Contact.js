import React from 'react'
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="contact me"/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact;