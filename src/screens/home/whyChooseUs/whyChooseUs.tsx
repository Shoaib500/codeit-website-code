import "./whyChooseUs.scss";
import whyChooseUsImg from "../../../assets/images/whyChooseUs.avif";
import { easeIn, easeInOut } from "framer-motion";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type WhyChooseUsProps = {};

const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {

  const wcuAniRef = useRef(null);
  const wcuImgRef = useRef(null);
  const wcuContRef = useRef(null);
  useGSAP(() => {
    gsap.from(wcuAniRef.current, {
      y: 200,
      duration: 0.2,
      transition: easeInOut,
      opacity: 0,

      scrollTrigger: {
        trigger: wcuAniRef.current,
        scroller: "body",
        markers: false,
        start: "top 75%",
        end: "top 75%",
      },
    });
    gsap.from(wcuImgRef.current, {
      x: -200,
      duration: 0.3,
      opacity: 0,
      transition: easeInOut,
      // delay: 0.5,

      scrollTrigger: {
        trigger: wcuAniRef.current,
        // scroller: "body",
        // markers: false,
        start: "top 75%",
      },
    });
    gsap.from(wcuContRef.current, {
      x: 200,
      duration: 0.3,
      opacity: 0,
      transition: easeInOut,
      // delay: 0.5,

      scrollTrigger: {
        trigger: wcuAniRef.current,
        // scroller: "body",
        // markers: false,
        start: "top 75%",
      },
    });
  });

  return (
    <div className="who-we-are" ref={wcuAniRef}>
      <img src={whyChooseUsImg} alt="" className="wwa-img" ref={wcuImgRef} />
      <div className="wwa-right-content" ref={wcuContRef}>
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
