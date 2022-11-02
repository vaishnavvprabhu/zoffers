import React from "react";
import "./NewButton.css";
const Button = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div
      className={` flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {buttonText}
    </div>
  );
};

export default Button;
