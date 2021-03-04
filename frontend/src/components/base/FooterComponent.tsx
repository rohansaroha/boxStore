import React from "react";
import "../../assets/scss/base/footerComponent.scss";

const FooterComponent = () => {
  return (
    <div className="footer-main-container">
      <div className='footer-content-main-container'>
        <div className={"footer-content-container"}>
          <div className={"footer-content-services"}>
            <h1>Services</h1>
            <p>Order Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Delivery</p>
            <p>How It Works</p>
          </div>
          <div className={"footer-content-about"}>
            <h1>About</h1>
            <p>About Box Store</p>
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={"footer-social-media-container"}>
          <span id={"facebook"}></span>
          <span id={"twitter"}></span>
          <span id={"linkedin"}></span>
          <span id={"youtube"}></span>
          <span id={"medium"}></span>
        </div>
        <div className={"footer-copyright-container"}>
          <span>BoxStore Copyright</span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
