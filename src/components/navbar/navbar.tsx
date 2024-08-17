import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logos/fullLogo.jpg";
import downArrow from "../../assets/icons/downArrow.svg";
import Menu from "../../assets/icons/hamburger.svg";
import Close from "../../assets/icons/close.svg";
import { useNavigate } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
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
            className={`nav-element ${activeTab === "home" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("home");
              navigate("/");
              setOpenMenu(false);
            }}
          >
            Home
          </div>

          <div
            className={`nav-element ${
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
                className={`nav-element ${
                  activeTab === "services" ? "active" : ""
                }`}
                // onClick={() => {
                //   setActiveTab("services");
                // }}
              >
                Services
              </div>
              <img className="arrow" src={downArrow} alt="" />
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
                  Design & Development
                </div>
                <div
                  className="title"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate("/brand-marketing");
                    setActiveTab("services");
                  }}
                >
                  Bramd Marketing
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
            className={`nav-element ${
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
            className={`nav-element ${
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
            className={`nav-element ${activeTab === "blog" ? "active" : ""}`}
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
