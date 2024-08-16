import React from "react";
import "./whyChooseUs.scss";
import whyChooseUsImg from "../../../assets/images/whyChooseUs.avif";

type WhyChooseUsProps = {};

const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  return (
    <div className="who-we-are">
      <img src={whyChooseUsImg} alt="" className="wwa-img" />
      <div className="wwa-right-content">
        <div className="wwa-title">Why Choose Us</div>
        <div className="wwa-sub-title">
          Cast Off Towards Success - Let Us Be Your Guiding Hand
        </div>
        <div className="wwa-text">
          For ten years, we've honed our craft in digital marketing to bring you
          the best solutions. Our secret? A people-first approach and a
          commitment to deliver uncompromising quality. Our results speak for
          themselves: polished, professional and in a class of their own.
        </div>
        <div className="wwa-text">
          Our team of skilled professionals combines creativity, innovation, and
          cutting-edge technology to craft customized solutions tailored to your
          unique business needs. Join forces with us and watch our collaboration
          take you to new heights of accomplishment.
        </div>
        <div className="wwa-text">Come, let's make magic happen!</div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
