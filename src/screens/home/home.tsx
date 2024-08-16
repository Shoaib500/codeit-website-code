import React from "react";
import "./home.scss";
import model from "../../assets/images/model1.png";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Typewriter from "../../components/typewriter/typewriter";
import ExploreServices from "./exploreServices/exploreServices";
import WhoWeAre from "./whoWeAre/whoWeAre";
import WhatWeDo from "./whatWeDo/whatWeDo";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";
import MeetOurClients from "./meetOurClients/meetOurClients";
// import Testimony from "./testimony/testimony";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const texts: string[] = [
    "Digital Marketing Services.",
    "Copywriting Services.",
    "ICT Services",
    "Content Services.",
  ];

  return (
    <div className="home">
      <div className="first-home">
        <div className="first-home-banner">
          <div className="texts">
            <div className="main-text">
              Discover the universe of possibilities {/* <br /> */}with our services.
            </div>
            <Typewriter texts={texts} />
            <div className="secondary-text">
              Let our business consultancy take your online presence to
              the next level.
            </div>
          </div>

          <div className="banner-icon-img">
            <img src={model} className="model" alt="" />
          </div>
        </div>
      </div>

      <ExploreServices />

      <WhoWeAre />

      <WhatWeDo />

      <WhyChooseUs />

      <MeetOurClients />

      {/* <Testimony /> */}

      <div className="direct-contact">
        <a href="https://www.whatsapp.com/"><img src={Whatsapp} alt="#" className="w-icon" /></a>
      </div>
    </div>
  );
};
export default Home;
