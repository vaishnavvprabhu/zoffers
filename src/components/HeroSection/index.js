import React from "react";
import Button from "../common/Button";
import "./heroSection.css";
import Typewriter from "typewriter-effect";

import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
        <div className="App">
        <span className="cd-words-wrapper"
                >
        <Typewriter
  options={{
    wrapperClassName:"",
    strings: ['<span style="color: #419b53;">Shop</span>', '<span style="color: #ef7463;">Feel</span>', '<span style="color: #f59605;">Browse</span>'],
    
    autoStart: true,
    loop: true,
  }}
/>
      {/* <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString('<span style="color: #27ae60;">5kb</span>')
    
  .pauseFor(1000)
  .deleteAll()
  .typeString('<span style="color: #0000;">5kb</span>')
  .typeString("")
  .start();
  }}
  /> */}
</span>
    </div> the Celebrity Look
        </div>
        <div className="hero-subheading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <a href="auth.html">
        <Button buttonText="Download ZOffers" />
        </a>
        {/* <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Android Apps",
                        "UI/UX Designs",
                        "Web Applications"
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  /> */}
      </div>
    </div>
  );
};

export default HeroSection;
