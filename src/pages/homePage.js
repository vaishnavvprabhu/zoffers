import React from "react";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";
import CredPay from "../components/CredPay";
import Features from "../components/Features";
// import PostShowcase from "../components/PostShowcase";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      {/* <FeelSpecial /> */}
      <CredPay/>
      {/* <BrandsLove />
      <CredExperience /> */}

      <Features/>      
      {/* <MobileScroll />
      <div className="non-mobile">
        
      </div> */}
      <WindowPeak />
      {/* <CredSecurity />
      <CredStory /> */}
      <AppRating />
      {/* <PostShowcase /> */}

      <Footer />
    </>
  );
};

export default HomePage;
