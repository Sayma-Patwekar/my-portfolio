import React from 'react';
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Navbar from "../components/Navbar";
import Work from '../components/Work';
import data from "../components/Data.json";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text={data[0].projectDesc}/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project