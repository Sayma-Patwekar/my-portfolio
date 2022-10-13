import "./HeroimgStyles.css";
import React from 'react';

import IntroImg from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask"> 
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>hi, i'm sayma</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">projects</Link>
                <Link to="/contact" className="btn-light">contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg