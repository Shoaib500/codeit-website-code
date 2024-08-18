import whatWeDo from "../../../assets/images/whatwedo.avif";
import "./whatWeDo.scss";
// import { easeIn, easeInOut } from "framer-motion";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type WhatWeDoProps = {};

const WhatWeDo: React.FC<WhatWeDoProps> = () => {
  const wwdAniRef = useRef(null);
  const wwdImgRef = useRef(null);
  const wwdContRef = useRef(null);
  useGSAP(() => {
    gsap.from(wwdAniRef.current, {
      y: 150,
      duration: 0.8,
      opacity: 0.25,
      ease: "back",

      scrollTrigger: {
        trigger: wwdAniRef.current,
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsap.from(wwdImgRef.current, {
      x: 200,
      duration: 0.8,
      opacity: 0.25,
      ease: "circ",

      scrollTrigger: {
        trigger: wwdAniRef.current,
        // scroller: "body",
        // markers: false,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsap.from(wwdContRef.current, {
      x: -200,
      duration: 0.8,
      opacity: 0.25,
      ease: "circ",

      scrollTrigger: {
        trigger: wwdAniRef.current,
        // scroller: "body",
        // markers: false,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="what-we-do" ref={wwdAniRef}>
      <div className="wwa-left-content" ref={wwdContRef}>
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
      <img src={whatWeDo} alt="" className="wwd-img" ref={wwdImgRef} />
    </div>
  );
};
export default WhatWeDo;
