import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import react1 from "../assests/pro3.jpg";
import data from "./Data.json";

import React from 'react'

const AboutContent = () => {
  return (
    <div>
        <div className="about">
            <div className="left">
                <h1>Who Am I</h1>
                <p>{data[0].selfDesc}</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1}
                        className="img" alt="img"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={react1}
                        className="img" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent