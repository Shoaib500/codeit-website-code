import React from "react";
import './whoWeAre.scss'
import whoWeAreImg from "../../../assets/images/whoweare.avif";

type WhoWeAreProps = {};

const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <div className="who-we-are">
      <img src={whoWeAreImg} alt="" className="wwa-img" />
      <div className="wwa-right-content">
        <div className="wwa-title">Who We Are</div>
        <div className="wwa-sub-title">
          Empowering Your Digital World Since 2014
        </div>
        <div className="wwa-text">
          For the past ten years, we've dedicated ourselves to provide top-notch
          IT solutions and digital analytics to our clients in India. We've
          poured our heart and soul into overcoming every challenge that has
          come our way, and we've always come out on top. From the moment we
          started on July 15th, 2014, our goal has remained the same: to
          completely transform the world of online digital marketing and become
          one of the most respected brands out there. We can't wait to see what
          the future holds for our clients and us.
        </div>
        <div className="wwa-btn">About Us</div>
      </div>
    </div>
  );
};
export default WhoWeAre;
