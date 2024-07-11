import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logos/fullLogo.jpg";
import downArrow from "../../assets/icons/downArrow.svg";
import { useNavigate } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const navigate = useNavigate();



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
      <div className="mid">
        <div className="nav-elements">
          <div
            className={`nav-element ${
              activeTab === "about-us" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("about-us");
              navigate("/about-us");
            }}
          >
            About Us
          </div>

          <div className="dropdown-wrapper" onMouseEnter={()=>{setShowMenu(true)}} onMouseLeave={()=>{setShowMenu(false)}}>
            <div className={`nav-elem-wrapper`}>
              <div
                className={`nav-element ${
                  activeTab === "services" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("services");
                }}
              >
                Services
              </div>
              <img className="arrow" src={downArrow} alt="" />
            </div>
{/* 
            <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
                <div className="header">
                    <div className="title">Design & Development</div>
                    <div className="title">Digital Marketing</div>
                    <div className="title">Content Writing</div>
                </div>
            </div> */}
          </div>

          <div
            className={`nav-element ${
              activeTab === "contact-us" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("contact-us");
            }}
          >
            Contact Us
          </div>
          <div
            className={`nav-element ${
              activeTab === "portfolio" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("portfolio");
              navigate("#")
            }}
          >
            Portfolio
          </div>
          <div
            className={`nav-element ${activeTab === "blog" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("blog");
            }}
          >
            Blog
          </div>
        </div>
      </div>
      <div className="right">
        <div className="speak-to-expert-btn">Speak to an Expert</div>
      </div>
    </div>
  );
};
export default Navbar;
