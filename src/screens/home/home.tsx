import React from "react";
import "./home.scss";
import home1 from "../../assets/images/home1.avif";
import Typewriter from "../../components/typewriter/typewriter";
import ExploreServices from "./exploreServices/exploreServices";
import WhoWeAre from "./whoWeAre/whoWeAre";
import WhatWeDo from "./whatWeDo/whatWeDo";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";
import MeetOurClients from "./meetOurClients/meetOurClients";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {

  const texts: string[] = [
    "Digital Marketing Services.", "Copywriting Services.", "ICT Services", "Content Services."
  ]

  return (
    <div className="home">
      <div className="first-home">
        <div className="texts">
          <div className="main-text">
            Discover the universe of possibilities with our services.
          </div>
          <Typewriter texts={texts}/>
          <div className="secondary-text">
            Let our social media agency in Dubai take your online presence to
            the next level.
          </div>
        </div>

        <img src={home1} className="home1" alt="" />
      </div>

      <ExploreServices/>

      <WhoWeAre/>

      <WhatWeDo/>
      
      <WhyChooseUs/>

      <MeetOurClients/>
    </div>
  );
};
export default Home;
