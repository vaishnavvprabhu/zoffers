import React from "react";
import "./NewImage.css";
const NewImage = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div
      className={`flex mid-image absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {buttonText}
    </div>
  );
};

export default NewImage;
