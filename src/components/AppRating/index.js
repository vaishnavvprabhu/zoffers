import React from "react";
import Button from "../common/Button";
import NewButton from "../common/NewButton";
import "./appRating.css";

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
      src="https://lh3.googleusercontent.com/wWMy8RFGZF2tm-3qUX3jW8F048vgqZMpzKGE4jp0foDHRhEu9lP3R59YQo0JYXvXYFitHxvupQjEOClnJYO2grUB4HLioVF28HsNFg=rw-e365-w300"
      
    />
  );
};
const AppRating = () => {
  return (
    <div id="download" className=" app-rating flex">
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            Try ZOffers

          </div>
          {/* <div className="app-rating-platform">
            app <br /> store
          </div> */}
        </div>
        <div className="non-mobile">
          <NewButton
            prefix={getAndroidPrefix()}
            customClass="app-rating-button"
          />
          <a class="asmalllink" href="" target="_blank">Also available as a chrome extension <svg aria-hidden="true" slot="suffix" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.36384 3.36468C-0.15089 6.87941 -0.15089 12.5776 3.36384 16.0924C6.87857 19.6071 12.577 19.6073 16.0918 16.0926C19.6065 12.5779 19.6063 6.8794 16.0915 3.36468C12.5768 -0.150054 6.87857 -0.150054 3.36384 3.36468ZM13.5827 13.5816H12.2206L12.2206 8.20077L6.35815 14.0632L5.39488 13.1L11.2573 7.2375H5.87652V5.87544H13.5827V13.5816Z" fill="#450de3"></path></svg></a>
        </div>
      </div>
      <div className="only-mobile">
      <NewButton
            prefix={getAndroidPrefix()}
            customClass="app-rating-button"
          />
          <a class="asmalllink-mobile" href="https://zoffers.in/terms-conditions/" target="_blank">Also available as a chrome extension <svg aria-hidden="true" slot="suffix" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.36384 3.36468C-0.15089 6.87941 -0.15089 12.5776 3.36384 16.0924C6.87857 19.6071 12.577 19.6073 16.0918 16.0926C19.6065 12.5779 19.6063 6.8794 16.0915 3.36468C12.5768 -0.150054 6.87857 -0.150054 3.36384 3.36468ZM13.5827 13.5816H12.2206L12.2206 8.20077L6.35815 14.0632L5.39488 13.1L11.2573 7.2375H5.87652V5.87544H13.5827V13.5816Z" fill="#450de3"></path></svg></a>
      </div>
    </div>
  );
};

export default AppRating;
