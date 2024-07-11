import React from "react";
import "./about.scss";
import aboutImg from "../../assets/images/about2.webp";
import missionImg from "../../assets/images/missonImg.avif";
import visionImg from "../../assets/images/visionImg.avif";
import Typewriter from "../../components/typewriter/typewriter";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  const texts: string[] = [
    "for Your Digital Transformation",
    "for Exceptional Results",
    "for Your Success",
    "",
  ];

  return (
    <div className="about-page">
      <div className="topbar">
        <img src={aboutImg} alt="" className="topbar-img" />
        <div className="topbar-text">
          <div className="EPI">Expertise, Passion and Innovation</div>
          <Typewriter texts={texts} />
        </div>
      </div>

      <div className="numbers">
        <div className="section">
          <div className="number">10</div>
          <div className="text">Years of Experience</div>
        </div>
        <div className="line"></div>
        <div className="section">
          <div className="number">365+</div>
          <div className="text">Happy Clients</div>
        </div>
        <div className="line"></div>
        <div className="section">
          <div className="number">90%</div>
          <div className="text">Projects Delivered</div>
        </div>
      </div>

      <div className="mission-box">
        <div className="mission info">
          <div className="title">Our Mission</div>
          <div className="text">
            At Code It, we're on a mission to transform the way
            businesses work in India and approach digital marketing. Our team of
            experts is dedicated to deliver game-changing solutions that help
            businesses drive leads, increase sales and build lasting customer
            loyalty.
          </div>
          <div className="text">
            We're not just another digital marketing agency, we are a team of
            innovators passionate about staying ahead of the curve. We're
            constantly exploring new technologies and strategies to provide our
            clients with cutting-edge solutions that deliver real results.
          </div>
          <div className="text">
            Our commitment to exceptional customer service sets us apart from
            the competition. We take the time to truly understand our client's
            needs, so we can create customised solutions that meet their unique
            challenges. And we're always available to provide support and
            guidance throughout the process.
          </div>
          <div className="text">
            Whether you're looking to expand your reach, boost your online
            presence or generate more leads and sales, Code It has the
            expertise and passion to help you achieve your goals.
          </div>
        </div>
        <img src={missionImg} alt="" className="mission-img" />
      </div>

      <div className="mission-box">
        <img src={visionImg} alt="" className="mission-img" />
        <div className="vision info">
          <div className="title">Our Vision</div>
          <div className="text">
            We aim to be the leading digital marketing agency in India and beyond,
            recognized for our innovative solutions, exceptional customer
            service and unwavering commitment to helping businesses succeed.
          </div>
          <div className="text">
            We aim to create a dynamic and collaborative work environment that
            fosters our team members' creativity, learning and growth. By
            empowering our employees to excel, we can deliver even greater value
            to our clients and help them achieve their goals.
          </div>
          <div className="text">
            We envision a future where businesses of all sizes can leverage the
            latest digital marketing technologies and strategies to reach their
            full potential. We want to be at the forefront of this digital
            revolution, helping businesses navigate the ever-changing landscape
            and stay ahead of the competition.
          </div>
          <div className="text">
            Our ultimate goal is to help businesses grow and thrive digitally.
            By staying true to our values of innovation, integrity and
            excellence, we can achieve this vision and make a meaningful impact
            on the industry.
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
