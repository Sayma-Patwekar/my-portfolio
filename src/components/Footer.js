import "./FooterStyles.css";

import { Link } from "react-router-dom";
import React from 'react';
import { FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{ color:"#fff" , marginRight : "2rem" }}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{color : "#fff" , marginRight : "2rem"}}/>
                    <div>
                        <p>123-456-789</p>
                    </div>
                </div>
                
                <div className="email">
                <FaMailBulk size={20} style={{color : "#fff" , marginRight : "2rem"}} />
                    <div>
                        <p>abcd@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div>
                    <h4>About the Company</h4>
                    <p>This is me Sayma Patwekar.I enjoydiscussing new projects and design challenges.</p>
                    <div className="social">
                        <a href="https://github.com/Sayma-Patwekar?tab=repositories" ><FaGithub size={20} style={{color : "#fff" , marginRight : "1rem"}} /></a>
                        <a href=""><FaTwitter size={20} style={{color : "#fff" , marginRight : "1rem"}} /></a>
                        <a href="https://www.linkedin.com/in/dktesayma-patwekar/"><FaLinkedin size={20} style={{color : "#fff" , marginRight : "1rem"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer