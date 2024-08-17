import "./home.scss";
import model from "../../assets/images/model1.png";
import Typewriter from "../../components/typewriter/typewriter";
import ExploreServices from "./exploreServices/exploreServices";
import WhoWeAre from "./whoWeAre/whoWeAre";
import WhatWeDo from "./whatWeDo/whatWeDo";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";
import MeetOurClients from "./meetOurClients/meetOurClients";
// import Testimony from "./testimony/testimony";
import DirectLink from "../../components/directLink/directLink";
import { easeIn, easeInOut } from "framer-motion";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const texts: string[] = [
    "Digital Marketing Services.",
    "Copywriting Services.",
    "ICT Services",
    "Content Services.",
  ];

  const hTextRef = useRef(null);
  const hImgRef = useRef(null);
  useGSAP(() => {
      gsap.from(hTextRef.current, {
        x: -200,
        duration: 0.3,
        transition: easeInOut,
      });
      gsap.from(hImgRef.current, {
        x: 200,
        duration: 0.3,
        transition: easeInOut,
      });
  });

  return (
    <div className="home">
      <div className="first-home">
        <div className="first-home-banner">
          <div className="texts" ref={hTextRef} >
            <div className="main-text">
              Discover the universe of possibilities {/* <br /> */}with our services.
            </div>
            <Typewriter texts={texts} />
            <div className="secondary-text">
              Let our business consultancy take your online presence to
              the next level.
            </div>
          </div>

          <div className="banner-icon-img" ref={hImgRef}>
            <img src={model} className="model" alt="" />
          </div>
        </div>
      </div>


      <ExploreServices />

      <WhoWeAre />

      <WhatWeDo />

      <WhyChooseUs />

      <MeetOurClients />

      <DirectLink />

      {/* <Testimony /> */}

    </div>
  );
};
export default Home;
