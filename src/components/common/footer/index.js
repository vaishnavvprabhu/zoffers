import React from "react";
import "./footer.css";
import logo from '../../../images/logo_full_alt.png';

const Footer = () => {
  return (

    <footer class="h-c-footer h-c-footer--topmargin h-c-footer--standard h-has-social">
            <section class="h-c-footer__global">
                <div class="h-c-footer__logo">
                    <a href="https://zoffers.in/" aria-label="ZOffers">
                        <img src={logo} class="footerr-img"/>
                    </a>
                </div>
                <ul class="h-c-footer__global-links h-no-bullet">
                    <li class="h-c-footer__global-links-list-item">
                        <a class="h-c-footer__link" href="./privacy-policy.html" target="_blank">Privacy</a>
                    </li>
                    <li class="h-c-footer__global-links-list-item">
                        <a class="h-c-footer__link" href="./terms-of-use.html" target="_blank">Terms</a>
                    </li>
                </ul>
                <ul class="h-c-footer__global-links h-c-footer__global-links--extra h-no-bullet">
                    <li class="h-c-footer__global-links-list-item h-c-footer__global-links-list-item--extra">
                        Help (contact@zoffers.in)
                    </li>
                </ul>
            </section>
        </footer>
//     <div className="footer flex absolute-center max-width">
// &copy; <a href="https://www.instagram.com/vaishnavvprabhu">vaishnavvprabhu</a>
//     </div>
  );
};

export default Footer;
