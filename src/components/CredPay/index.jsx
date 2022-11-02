import React from "react";

import NewImage from "../common/NewImage";
import credThing from "../../images/logostrip.png";
import "./credPay.css";

const getIosPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src={credThing}
      
    />
  );
};
const CredPay = () => {
  return (
    <div className="PayThing flex">
      <div className="flex app-rating-block flex-col">
      <div class="container h-100"><div class="row h-100"><div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center"><div><img src={credThing} class="image"/>          
      <div className="pay-heading-style max-width">shopping is hard. for others. 
      for you, it’s as easy as picking a partner
      brand outlet, paying with CRED pay,
      and claiming 2x cashback.</div>
          </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default CredPay;
