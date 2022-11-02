import React, { useState, useEffect} from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    svg:"M12.5952 4.21151C14.7771 -0.314505 21.2229 -0.314505 23.4048 4.21151L25.2212 7.97952C25.8107 9.20243 26.7976 10.1893 28.0205 10.7788L31.7885 12.5952C36.3145 14.7771 36.3145 21.2229 31.7885 23.4048L28.0205 25.2212C26.7976 25.8107 25.8107 26.7976 25.2212 28.0205L23.4048 31.7885C21.2229 36.3145 14.7771 36.3145 12.5952 31.7885L10.7788 28.0205C10.1893 26.7976 9.20243 25.8107 7.97952 25.2212L4.21151 23.4048C-0.314505 21.2229 -0.314505 14.7771 4.21151 12.5952L7.97952 10.7788C9.20243 10.1893 10.1893 9.20243 10.7788 7.97952L12.5952 4.21151Z",
    heading: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
  },
  {
    svg:"M12.5952 4.21151C14.7771 -0.314505 21.2229 -0.314505 23.4048 4.21151L25.2212 7.97952C25.8107 9.20243 26.7976 10.1893 28.0205 10.7788L31.7885 12.5952C36.3145 14.7771 36.3145 21.2229 31.7885 23.4048L28.0205 25.2212C26.7976 25.8107 25.8107 26.7976 25.2212 28.0205L23.4048 31.7885C21.2229 36.3145 14.7771 36.3145 12.5952 31.7885L10.7788 28.0205C10.1893 26.7976 9.20243 25.8107 7.97952 25.2212L4.21151 23.4048C-0.314505 21.2229 -0.314505 14.7771 4.21151 12.5952L7.97952 10.7788C9.20243 10.1893 10.1893 9.20243 10.7788 7.97952L12.5952 4.21151Z",
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
  },
  {
    svg:"M12.5952 4.21151C14.7771 -0.314505 21.2229 -0.314505 23.4048 4.21151L25.2212 7.97952C25.8107 9.20243 26.7976 10.1893 28.0205 10.7788L31.7885 12.5952C36.3145 14.7771 36.3145 21.2229 31.7885 23.4048L28.0205 25.2212C26.7976 25.8107 25.8107 26.7976 25.2212 28.0205L23.4048 31.7885C21.2229 36.3145 14.7771 36.3145 12.5952 31.7885L10.7788 28.0205C10.1893 26.7976 9.20243 25.8107 7.97952 25.2212L4.21151 23.4048C-0.314505 21.2229 -0.314505 14.7771 4.21151 12.5952L7.97952 10.7788C9.20243 10.1893 10.1893 9.20243 10.7788 7.97952L12.5952 4.21151Z",
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
  },
  {
    svg:"M15.4853 0.832453C14.3641 -0.202452 12.6359 -0.202452 11.5147 0.832453C10.8074 1.48526 9.82445 1.74866 8.88554 1.53694C7.39708 1.20129 5.90047 2.06536 5.44691 3.52223C5.16081 4.44121 4.44121 5.16081 3.52223 5.44691C2.06536 5.90047 1.20129 7.39708 1.53694 8.88554C1.74866 9.82445 1.48527 10.8074 0.832453 11.5147C-0.202452 12.6359 -0.202452 14.3641 0.832453 15.4853C1.48527 16.1926 1.74866 17.1755 1.53694 18.1145C1.20129 19.6029 2.06536 21.0995 3.52223 21.5531C4.44121 21.8392 5.16081 22.5588 5.44691 23.4778C5.90047 24.9346 7.39708 25.7987 8.88554 25.4631C9.82445 25.2513 10.8074 25.5147 11.5147 26.1675C12.6359 27.2025 14.3641 27.2025 15.4853 26.1675C16.1926 25.5147 17.1755 25.2513 18.1145 25.4631C19.6029 25.7987 21.0995 24.9346 21.5531 23.4778C21.8392 22.5588 22.5588 21.8392 23.4778 21.5531C24.9346 21.0995 25.7987 19.6029 25.4631 18.1145C25.2513 17.1755 25.5147 16.1926 26.1675 15.4853C27.2025 14.3641 27.2025 12.6359 26.1675 11.5147C25.5147 10.8074 25.2513 9.82445 25.4631 8.88554C25.7987 7.39708 24.9346 5.90047 23.4778 5.44691C22.5588 5.16081 21.8392 4.44121 21.5531 3.52223C21.0995 2.06536 19.6029 1.20129 18.1145 1.53694C17.1755 1.74866 16.1926 1.48526 15.4853 0.832453Z",
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
  },
  {
    svg:"M15.4853 0.832453C14.3641 -0.202452 12.6359 -0.202452 11.5147 0.832453C10.8074 1.48526 9.82445 1.74866 8.88554 1.53694C7.39708 1.20129 5.90047 2.06536 5.44691 3.52223C5.16081 4.44121 4.44121 5.16081 3.52223 5.44691C2.06536 5.90047 1.20129 7.39708 1.53694 8.88554C1.74866 9.82445 1.48527 10.8074 0.832453 11.5147C-0.202452 12.6359 -0.202452 14.3641 0.832453 15.4853C1.48527 16.1926 1.74866 17.1755 1.53694 18.1145C1.20129 19.6029 2.06536 21.0995 3.52223 21.5531C4.44121 21.8392 5.16081 22.5588 5.44691 23.4778C5.90047 24.9346 7.39708 25.7987 8.88554 25.4631C9.82445 25.2513 10.8074 25.5147 11.5147 26.1675C12.6359 27.2025 14.3641 27.2025 15.4853 26.1675C16.1926 25.5147 17.1755 25.2513 18.1145 25.4631C19.6029 25.7987 21.0995 24.9346 21.5531 23.4778C21.8392 22.5588 22.5588 21.8392 23.4778 21.5531C24.9346 21.0995 25.7987 19.6029 25.4631 18.1145C25.2513 17.1755 25.5147 16.1926 26.1675 15.4853C27.2025 14.3641 27.2025 12.6359 26.1675 11.5147C25.5147 10.8074 25.2513 9.82445 25.4631 8.88554C25.7987 7.39708 24.9346 5.90047 23.4778 5.44691C22.5588 5.16081 21.8392 4.44121 21.5531 3.52223C21.0995 2.06536 19.6029 1.20129 18.1145 1.53694C17.1755 1.74866 16.1926 1.48526 15.4853 0.832453Z",
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg, svg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d={svg} fill="#34A853"></path>
</svg>



            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
