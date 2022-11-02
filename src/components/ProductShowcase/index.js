import React, { useRef, useState, useEffect } from "react";
// 
import "./productShowcase.css";
import logo from '../../images/logo_full_alt.png';
import leftmost_image from '../../images/ProductShowcase/Cash.png';
import leftkinda_image from '../../images/ProductShowcase/Discover.png';
import center_image from '../../images/ProductShowcase/ZOTV.png';
import rightkinda_image from '../../images/ProductShowcase/ZOLens.png';
import rightmost_image from '../../images/ProductShowcase/ZOffers.png';

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      // if (ref.current) {
      //   observer.unobserve(ref.current);
      // }
    };
  });
  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      scale-in-bottom
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src={leftmost_image}
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src={leftkinda_image}
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src={center_image}
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src={rightkinda_image}
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src={rightmost_image}
            className="showcase-ui showcase-mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
