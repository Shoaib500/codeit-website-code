import React, {useRef} from "react";
import "./whyChooseUs.scss";
import whyChooseUsImg from "../../../assets/images/whyChooseUs.avif";
import { easeInOut } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type WhyChooseUsProps = {};

const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const wcuAniRef = useRef(null);
  const wcuImgRef = useRef(null);
  const wcuContRef = useRef(null);

  useGSAP(()=>{
    const wcuAnimation = () => {
      gsap.from(wcuAniRef.current,{
        y: 200,
        duration: 0.2,
        opacity: 0,

        scrollTrigger:{
          trigger: wcuAniRef.current,
          scroller: "body",
          markers: false,
          start: "top 75%",
          end: "top 75%",
        }
      });
      gsap.from(wcuImgRef.current,{
        x: -200,
        duration: 0.3,
        opacity: 0,
        transition: easeInOut,
        // delay: 0.5,

        scrollTrigger:{
          trigger: wcuAniRef.current,
          // scroller: "body",
          // markers: false,
          start: "top 75%",
        }
       
      });
      gsap.from(wcuContRef.current,{
        x: 200,
        duration: 0.3,
        opacity: 0,
        transition: easeInOut,
        // delay: 0.5,
        
        scrollTrigger:{
          trigger: wcuAniRef.current,
          // scroller: "body",
          // markers: false,
          start: "top 75%",
        }
      });
    };
    wcuAnimation();
  });

  return (
    <div className="why-choose-us" ref={wcuAniRef} >
      <img src={whyChooseUsImg} alt="" className="wcu-img"  ref={wcuImgRef} />
      <div className="wcu-right-content" ref={wcuContRef} >
        <div className="wcu-title">Why Choose Us</div>
        <div className="wcu-sub-title">
          Cast Off Towards Success - Let Us Be Your Guiding Hand
        </div>
        <div className="wcu-text">
          For ten years, we've honed our craft in digital marketing to bring you
          the best solutions. Our secret? A people-first approach and a
          commitment to deliver uncompromising quality. Our results speak for
          themselves: polished, professional and in a class of their own.
        </div>
        <div className="wcu-text">
          Our team of skilled professionals combines creativity, innovation, and
          cutting-edge technology to craft customized solutions tailored to your
          unique business needs. Join forces with us and watch our collaboration
          take you to new heights of accomplishment.
        </div>
        <div className="wcu-text">Come, let's make magic happen!</div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
