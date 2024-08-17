import React from "react";
import "./directLink.scss";
import WhatsApp from "../../assets/icons/whatsapp.svg";

type DirectLinkProps = {};

const DirectLink: React.FC<DirectLinkProps> = () => {
  return (
    <div className="direct-contact">
      <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
        <img src={WhatsApp} alt="#" className="w-icon" />
      </a>
    </div>
  );
};


export default DirectLink;