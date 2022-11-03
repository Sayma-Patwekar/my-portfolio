import "./HeroimgStyles.css";
import React from 'react';
import data from "./Data.json";

import IntroImg from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask"> 
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>hi, i'm {data[0].name}</p>
            <h1>{data[0].selfDesc}</h1>
            <div>
                <Link to="/project" className="btn">projects</Link>
                <Link to="/contact" className="btn-light">contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg