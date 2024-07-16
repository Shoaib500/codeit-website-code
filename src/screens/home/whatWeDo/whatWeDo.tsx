import React from "react";
import whatWeDo from "../../../assets/images/whatwedo.avif";
import "./whatWeDo.scss";

type WhatWeDoProps = {};

const WhatWeDo: React.FC<WhatWeDoProps> = () => {
  return (
    <div className="what-we-do">
      <div className="wwa-left-content">
        <div className="wwa-title">What We Do</div>
        <div className="wwa-sub-title">Experience Digital Excellence</div>
        <div className="wwa-text">
          At CodeIt, we're passionate about delivering top-notch digital
          marketing and ICT services to businesses of all sizes.
        </div>
        <div className="wwa-text">
          Our cutting-edge solutions, including social media marketing, SEO, PPC
          advertising, web development, web design and mobile app development,
          are designed to help our clients achieve their goals and build brand
          awareness. We take great pride in our commitment to quality,
          innovation and customer satisfaction. That's why we go above and
          beyond to ensure you achieve your digital goals.
        </div>
      </div>
      <img src={whatWeDo} alt="" className="wwd-img" />
    </div>
  );
};
export default WhatWeDo;
