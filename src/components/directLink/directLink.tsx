import React from "react";
import "./directLink.scss";
import WhatsApp from "../../assets/icons/whatsapp.svg";

type DirectLinkProps = {};

const DirectLink: React.FC<DirectLinkProps> = () => {
  return (
    <div className="direct-contact">
      <a href="http://wa.me/7980978482" target="_blank" rel="noreferrer">
        <img src={WhatsApp} alt="#" className="w-icon" />
      </a>
    </div>
  );
};


export default DirectLink;