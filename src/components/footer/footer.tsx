import React from "react";
import "./footer.scss";
import logo from "../../assets/logos/fullLogo.jpg";
import location from '../../assets/icons/location.svg'
import call from '../../assets/icons/call.svg'
import mail from '../../assets/icons/mail.svg'
import send from '../../assets/icons/send.svg'

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="top-part">
        <div className="info">
          <img src={logo} alt="" className="logo" />
          <div className="mid-info">
            <div className="stay-text">Stay up to date</div>
            <div className="subscribe-text">
              Subscribe to our newsletter to receive the latest updates and
              offers.
            </div>
            <div className="email-box">
              <input type="text" className="email-input" placeholder="Enter your Email"/>
              <div className="send-btn-wrapper" onClick={()=>{window.location.href = 'mailto:amankulwal27@gmail.com'}}>
                <img src={send} alt="" className="send-btn"/>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <img src="" alt="" className="icon" />
            <img src="" alt="" className="icon" />
            <img src="" alt="" className="icon" />
            <img src="" alt="" className="icon" />
          </div>
        </div>
        <div className="services">
          <div className="title">Services</div>
          <div className="list">
            <div>SEO</div>
            <div>Business Solutions</div>
            <div>Content Writing</div>
            <div>Google Ads Network</div>
            <div>Social Media Marketing</div>
            <div>Mobile App Development</div>
            <div>Website Design and Development</div>
          </div>
        </div>
        <div className="company">
          <div className="title">Company</div>
          <div className="list">
            <div>Blog</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Disclaimer</div>
            <div>Refund Policy</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
        <div className="call-us">
          <div className="title">Call Us</div>
          <div className="address">
            <div className="first-row">
              <img src={location} alt="" className="location icon" />
              <div>Address</div>
            </div>
            <div className="address-text">
            303, W35, Lodha Amara,
            <br />
             Thane West, Mumbai,
             <br /> 
             Maharashtra, India
            </div>
          </div>
          <div className="mobile">
            <div className="first-row">
              <img src={call} alt="" className="mobile icon" />
              <div>Mobile/WhatsApp no.</div>
            </div>
            <div className="mobile-text" onClick={()=>{window.location.href = 'tel:+917980978482'}}>+91 79809 78482</div>
          </div>
          <div className="email">
            <div className="first-row">
              <img src={mail} alt="" className="email icon" />
              <div>Email</div>
            </div>
            <div className="email-text" onClick={()=>{window.location.href = 'mailto:amankulwal27@gmail.com'}}>info@codeit.world</div>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        Copyright © 2024 Codeit pvt. ltd. | All Rights Reserved.
      </div>
    </div>
  );
};
export default Footer;
