import React, { useState } from "react";
import "./header.css";
import Typewriter from "typewriter-effect";
import logo from '../../../images/logo_full_alt.png';

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          {/* <div className="mobile-nav-item">credit score check</div> */}
          <a href="#download">
          <l>Download Now</l>
          </a>
        </div>
      </div>
      <div className="max-width flex header">
        <img
          src={logo}
          className="header-logo"
        />
        
        <div className="non-mobile flex">
          {/* <div className="header-nav-item">credit score check</div> */}
          <a href="#download">
          <div className="header-nav-item">Download Now</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
