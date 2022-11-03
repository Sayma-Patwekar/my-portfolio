import React from 'react'
import AboutContent from '../components/AboutContent';
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Navbar from "../components/Navbar";
import data from "../components/Data.json";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text={data[0].aboutDesc}/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About