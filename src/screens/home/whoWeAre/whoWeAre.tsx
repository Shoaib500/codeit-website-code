import "./whoWeAre.scss";
import whoWeAreImg from "../../../assets/images/whoweare.avif";
import { easeIn, easeInOut } from "framer-motion";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type WhoWeAreProps = {};

const WhoWeAre: React.FC<WhoWeAreProps> = () => {

  const wwaAniRef = useRef(null);
  const wwaImgRef = useRef(null);
  const wwaContRef = useRef(null);
  useGSAP(() => {
    gsap.from(wwaAniRef.current, {
      y: 200,
      duration: 0.2,
      transition: easeInOut,
      opacity: 0,

      scrollTrigger: {
        trigger: wwaAniRef.current,
        scroller: "body",
        markers: false,
        start: "top 75%",
        end: "top 75%",
      },
    });
    gsap.from(wwaImgRef.current, {
      x: -200,
      duration: 0.3,
      opacity: 0,
      transition: easeInOut,
      // delay: 0.5,

      scrollTrigger: {
        trigger: wwaAniRef.current,
        // scroller: "body",
        // markers: false,
        start: "top 75%",
      },
    });
    gsap.from(wwaContRef.current, {
      x: 200,
      duration: 0.3,
      opacity: 0,
      transition: easeInOut,
      // delay: 0.5,

      scrollTrigger: {
        trigger: wwaAniRef.current,
        // scroller: "body",
        // markers: false,
        start: "top 75%",
      },
    });
  });
  
  return (
    <div className="who-we-are" ref={wwaAniRef}>
      <img src={whoWeAreImg} alt="" className="wwa-img" ref={wwaImgRef} />
      <div className="wwa-right-content" ref={wwaContRef}>
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
