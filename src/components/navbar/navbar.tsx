import "./navbar.scss";
import logo from "../../assets/logos/fullLogo.jpg";
import downArrow from "../../assets/icons/downArrow.svg";
import Menu from "../../assets/icons/hamburger.svg";
import Close from "../../assets/icons/close.svg";
import { useNavigate } from "react-router-dom";
// import { easeIn, easeInOut } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forEachChild } from "typescript";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  // const navTl = gsap.timeline();
  useGSAP(()=> {
    gsap.from(".nav-home",{
      y: -200,
      duration: 0.5,
      ease: "circ",
      delay: 0.3,
    });
    gsap.from(".nav-about",{
      y: -200,
      duration: 0.5,
      ease: "circ",
      delay: 0.45,
    });
    gsap.from(".nav-service",{
      y: -200,
      duration: 0.5,
      ease: "circ",
      delay: 0.55,
    });
    gsap.from(".nav-contact",{
      y: -200,
      duration: 0.5,
      ease: "circ",
      delay: 0.65,
    });
    gsap.from(".nav-portfolio",{
      y: -200,
      duration: 0.5,
      ease: "circ",
      delay: 0.75,
    });
    gsap.from(".nav-blog",{
      y: -200,
      duration: 0.5,
      ease: "circ",
      delay: 0.85,
    });
  })

  return (
    <div className="navbar">
      <div className="left">
        <img
          src={logo}
          alt=""
          className="logo"
          onClick={() => {
            setActiveTab("home");
            navigate("/");
          }}
        />
      </div>

      {/* mid */}
      <div className={`mid ${openMenu === false ? "hideMenu" : ""}`}>
        <div className="nav-elements">
          {/* close */}
          <div className="close-btn">
            <img
              src={Close}
              onClick={() => {
                setOpenMenu(false);
              }}
              alt=""
            />
          </div>

          <div
            className={`nav-element nav-home ${activeTab === "home" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("home");
              navigate("/");
              setOpenMenu(false);
            }}
          >
            Home
          </div>

          <div
            className={`nav-element nav-about ${
              activeTab === "about-us" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("about-us");
              navigate("/about-us");
              setOpenMenu(false);
            }}
          >
            About Us
          </div>

          <div
            className={`dropdown-wrapper ${showMenu ? "move-down" : ""}`}
            onClick={() => {
              setShowMenu(!showMenu);
              // setActiveTab("services");
            }}
            onMouseEnter={() => {
              setShowMenu(true);
            }}
            onMouseLeave={() => {
              setShowMenu(false);
            }}
          >
            <div className={`nav-elem-wrapper`}>
              <div
                className={`nav-element nav-service ${
                  activeTab === "services" ? "active" : ""
                }`}
                // onClick={() => {
                //   setActiveTab("services");
                // }}
              >
                Services
              </div>
              <img className="arrow nav-service" src={downArrow} alt="" />
            </div>

            <div
              className={`dropdown-menu ${showMenu ? "show" : ""} `}>
              <div className="header">
                <div
                  className="title"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/webdev");
                    setActiveTab("services");
                  }}
                >
                  Web Development
                </div>
                <div
                  className="title"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/appdev");
                    setActiveTab("services");
                  }}
                >
                  App Development
                </div>
                <div
                  className="title"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/brand-marketing");
                    setActiveTab("services");
                  }}
                >
                  Brand Marketing
                </div>
                <div
                  className="title"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/digital-marketing");
                    setActiveTab("services");
                  }}
                >
                  Digital Marketing
                </div>
                <div
                  className="title"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/content-writing");
                    setActiveTab("services");
                  }}
                >
                  Content Writing
                </div>
              </div>
            </div>
          </div>

          <div
            className={`nav-element nav-contact ${
              activeTab === "contact-us" ? "active" : ""
            }`}
            onClick={() => {
              setOpenMenu(false);
              setActiveTab("contact-us");
            }}
          >
            Contact Us
          </div>
          <div
            className={`nav-element nav-portfolio ${
              activeTab === "portfolio" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("portfolio");
              navigate("#");
            }}
          >
            Portfolio
          </div>
          <div
            className={`nav-element nav-blog ${activeTab === "blog" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("blog");
              setOpenMenu(false);
            }}
          >
            Blog
          </div>
           <div className="nav-element speakToExpertBtn">
           <a
          href="https://calendly.com/shoaibmustaque10/appointment"
          target="_blank"
          rel="noreferrer"
        >
          Speak to an Expert
        </a>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="right">
        {/* <div className="speak-to-expert-btn">Speak to an Expert</div> */}
        <a
          href="https://calendly.com/shoaibmustaque10/appointment"
          className="speak-to-expert-btn"
          target="_blank"
          rel="noreferrer"
        >
          Speak to an Expert
        </a>
      </div>

      {/* hamburger */}
      <div className="menu">
        <img
          className="menu-btn"
          src={Menu}
          onClick={() => {
            setOpenMenu(true);
          }}
          alt=""
        />
      </div>
    </div>
  );
};
export default Navbar;
