import React from "react";
import Button from "../common/Button";
import "./feelSpecial.css";

import carpet from "../../images/red_carpet.jpg";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
        <div class="container py-4 py-xl-5"><div class="row row-cols-1
                row-cols-md-2"><div class="col d-flex flex-column
                    justify-content-center p-4">         <div className="photo-section-top dynamic-margin">
                    <div className="photo-section-heading">
                      feel special more often.
                    </div>
                    <div className="photo-section-subheading">
                      exclusive rewards for paying your bills
                    </div>
                  </div>
                  <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </div>
            <div className="photo-section-button">
            <a href="#download">
              <Button buttonText="Explore rewards" />
              </a>
            </div>
          </div>
                </div><div
                    class="col"><img class="rounded w-100 h-100 fit-cover"
                        src={carpet}/></div></div></div>
 
          
        </div>
      </div>







    </div>
  );
};

export default FeelSpecial;
