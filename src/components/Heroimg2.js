import "./Heroimg2Styles.css";

import React, { Component } from 'react';
import BgImg from "../assests/bgimg2.jpg";

class Heroimg2 extends Component {
  render(){
    return (
      <div className="hero">
        <div className="mask"> 
              <img className="bgimg" src={BgImg} alt="BgImg"/>
          </div>
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
      </div>
    )
  }

}

export default Heroimg2;