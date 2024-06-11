import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import portfolioCollage from "../../assets/images/portfolioCollage.webp";

import laconic from "../../assets/clients/laconic.webp";
import retailAndEcommerce from "../../assets/clients/retail&ECommerce.jpg";
import smartShop from "../../assets/clients/smartShop.webp";
import timeOutX from "../../assets/clients/timeOutX.webp";
import aisadafpetcare from "../../assets/clients/AISadafPetCare.webp";
import ROIRealEstate from "../../assets/clients/ROIRealEstate.webp";
import hospitality from "../../assets/clients/Hospitality.jpg";
import realEstate from "../../assets/clients/RealEstate.jpg";
import royalMaison from "../../assets/clients/royalMaison.avif";
import nexLandscape from "../../assets/clients/NexLandscape.webp";
import qabela from "../../assets/clients/Quabela.webp";
import crystalClear from "../../assets/clients/crystalClear.avif";
import healthcare from "../../assets/clients/HealthCare&Wellness.jpg";
import tradingAndLogistics from "../../assets/clients/Trading&Logistics.jpg";
import projestRealEstate from "../../assets/clients/ProjestEstate.webp";
import SCSDubai from "../../assets/clients/SCSDubai.webp";
import moonstrike from "../../assets/clients/moonstrikeTrading.webp";
import luxuryAlar from "../../assets/clients/luxuryAkar.webp";
import bantuuz from "../../assets/clients/Bantuuz.webp";
import safetyShopDubai from "../../assets/clients/safetyShopDubai.webp";
import TVGRealtors from "../../assets/clients/TVGRealtor.webp";
import whiteSand from "../../assets/clients/whiteSand.webp";
import masar from "../../assets/clients/MasarInd.webp";
import EIA from "../../assets/clients/EIA.webp";
import lindaParadisGroup from "../../assets/clients/LindaParadise.webp";
import capitalIndex from "../../assets/clients/CapitalIndex.webp";
import TVGConsultancy from "../../assets/clients/TVGConsultancy.webp";
import pipelink from "../../assets/clients/pipelink.webp";
import stirlingls from "../../assets/clients/stirlingls.webp";
import theodoronline from "../../assets/clients/theodoronline.webp";
import HFPolyclinic from "../../assets/clients/HFPolyclinic.webp";
import colourReflections from "../../assets/clients/colourReflections.webp";
import bridgertongroup from "../../assets/clients/bridgertongroup.webp";
import southWindMaritime from "../../assets/clients/southWindMaritime.webp";
import biladalsham from "../../assets/clients/biladalsham.webp";
import reachmea from "../../assets/clients/richmea.webp";
import bionest from "../../assets/clients/bionest.webp";
import providenceBlack from "../../assets/clients/providenceBlack.webp";
import pathwayconsulting from "../../assets/clients/pathwayConsulting.webp";
import nohaProperties from "../../assets/clients/nohaProperties.webp";
import antoniosignorini from "../../assets/clients/antoniosignorini.avif";
import structurealart from "../../assets/clients/71structureAlart.webp";
import AIAmaya from "../../assets/clients/amaya.avif";
import allTourismDubai from "../../assets/clients/dubai.avif";
import ABHRealEstate from "../../assets/clients/ABHrealestate.avif";
import AIAmayaWater from "../../assets/clients/AIAmayaWater.webp";
import laconic_perfume from "../../assets/clients/laconicPerfume.webp";
import classicEducational from "../../assets/clients/classicEducational.webp";
import labexpertsdiagnosticsuae from "../../assets/clients/LabexpertsDiagnosticsUAE.webp";
import tarjiba from "../../assets/clients/tajribaBusiness.webp";
import jumpnfundubai from "../../assets/clients/jumpnfunDubai.webp";
import crownCapitalUAE from "../../assets/clients/crownCapitalUAE.webp";
import MIsWorldWide from "../../assets/clients/MIsWorldWide.webp";
import drfarhadinik from "../../assets/clients/drFarhadinik.webp";
import checkurhealth from "../../assets/clients/checkurHealth.webp";
import AISadafpetcare from "../../assets/clients/ai-sadafPetCare.webp";
import yaknyeti from "../../assets/clients/Yaknyeti.webp";
import alansar from "../../assets/clients/alansar.webp";
import SCDDubaiSocial from "../../assets/clients/SCS-Dubai.webp";
import confidentDental from "../../assets/clients/confidentDental.webp";
import quintessential from "../../assets/clients/quintessential4media.webp";
import federategroup from "../../assets/clients/federategroup.webp";
import whiteSandRealEstate from "../../assets/clients/whiteSandRealEstate.webp";
import theQabela from "../../assets/clients/theqabea.webp";
import mazoun from "../../assets/clients/mazoun.webp";
import walkersCargo from "../../assets/clients/walkersCargo.webp";

type PortfolioProps = {};

type Client = {
  name: string;
  link: string;
  img: string;
  category: string;
};

const Portfolio: React.FC<PortfolioProps> = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const clients: Client[] = [
    {
      name: "Laconic",
      link: "https://laconic.ae/",
      img: laconic,
      category: "E-Commerce Website",
    },
    {
      name: "Retail & Ecommerce",
      link: "https://www.mightywarner.ae/portfolio#",
      img: retailAndEcommerce,
      category: "Logo Design",
    },
    {
      name: "SmartShop",
      link: "https://the-smart-shop.com/",
      img: smartShop,
      category: "E-Commerce Website",
    },
    {
      name: "TimeOutX",
      link: "https://timeoutx.ae/",
      img: timeOutX,
      category: "E-Commerce Website",
    },
    {
      name: "AISadaf Pet Care",
      link: "https://alsadafpetcare.com/",
      img: aisadafpetcare,
      category: "E-Commerce Website",
    },
    {
      name: "ROI Real Estate",
      link: "https://roidxb.com/",
      img: ROIRealEstate,
      category: "Real E-state",
    },
    {
      name: "Hospitality",
      link: "https://www.mightywarner.ae/portfolio#",
      img: hospitality,
      category: "Logo Design",
    },
    {
      name: "Real estate",
      link: "https://www.mightywarner.ae/portfolio#",
      img: realEstate,
      category: "Logo Design",
    },
    {
      name: "Royal Maison",
      link: "https://royal-maison.com/",
      img: royalMaison,
      category: "Web Application",
    },
    {
      name: "Nex Landscape",
      link: "https://nexlandscape.com/",
      img: nexLandscape,
      category: "Web Application",
    },
    {
      name: "The Qabela",
      link: "https://qabelamaternity.com/",
      img: qabela,
      category: "Web Application",
    },
    {
      name: "Crystal Clear",
      link: "https://crystalclearwatersports.com/",
      img: crystalClear,
      category: "Web Application for Water Sports Booking",
    },
    {
      name: "Healthcare & Wellness",
      link: "https://www.mightywarner.ae/portfolio#",
      img: healthcare,
      category: "Logo Design",
    },
    {
      name: "Trading & Logistics",
      link: "https://www.mightywarner.ae/portfolio#",
      img: tradingAndLogistics,
      category: "Logo Design",
    },
    {
      name: "Projest Real Estate",
      link: "https://projestrealestate.com/",
      img: projestRealEstate,
      category: "Real E-state",
    },
    {
      name: "SCS Dubai",
      link: "https://scsdubai.ae/",
      img: SCSDubai,
      category: "Luxury Car Booking Web",
    },
    {
      name: "Moonstrike Trading Co. I.I.c",
      link: "https://moonstrike.ae/",
      img: moonstrike,
      category: "Web Application",
    },
    {
      name: "Luxury Akar",
      link: "https://luxuryakar.ae/",
      img: luxuryAlar,
      category: "Real Estate Website",
    },
    {
      name: "Bantuuz.com",
      link: "https://bantuuz.com/",
      img: bantuuz,
      category: "Hotel & Appartment Booking Web",
    },
    {
      name: "Safety Shop Dubai",
      link: "https://www.mightywarner.ae/portfolio#",
      img: safetyShopDubai,
      category: "E-Commerce Website",
    },
    {
      name: "TVG Realtors",
      link: "https://tvgrealtors.com/",
      img: TVGRealtors,
      category: "Real E-State",
    },
    {
      name: "White Sand",
      link: "https://whitesand.ae/",
      img: whiteSand,
      category: "Real Estate Website",
    },
    {
      name: "Masar Ind.",
      link: "https://www.mightywarner.ae/portfolio#",
      img: masar,
      category: "E-Commerce Website",
    },
    {
      name: "EIA",
      link: "https://www.eia.gov.ae/",
      img: EIA,
      category: "Revamp Website",
    },
    {
      name: "Linda Paradis Group",
      link: "https://lindaparadisgroup.com/",
      img: lindaParadisGroup,
      category: "Web Application",
    },
    {
      name: "Capital-Index",
      link: "https://www.mightywarner.ae/portfolio#",
      img: capitalIndex,
      category: "Trading & Forex Website",
    },
    {
      name: "TVG Consultancy",
      link: "https://www.tvgconsultancy.com/",
      img: TVGConsultancy,
      category: "Consultancy Website",
    },
    {
      name: "Pipelink",
      link: "http://www.pipelinktanks.com/",
      img: pipelink,
      category: "Web Application",
    },
    {
      name: "Stirlingls",
      link: "https://www.mightywarner.ae/portfolio#",
      img: stirlingls,
      category: "Web Application",
    },
    {
      name: "Theodoronline",
      link: "https://theodoronline.com/",
      img: theodoronline,
      category: "E-Commerce Website",
    },
    {
      name: "HF Polyclinic",
      link: "https://www.mightywarner.ae/portfolio#",
      img: HFPolyclinic,
      category: "Web Application",
    },
    {
      name: "Colour-Reflections",
      link: "https://colour-reflections.com/",
      img: colourReflections,
      category: "Interior Designer",
    },
    {
      name: "Bridgertongroup",
      link: "https://www.mightywarner.ae/portfolio#",
      img: bridgertongroup,
      category: "Web Application",
    },
    {
      name: "South Wind Maritime Ltd",
      link: "https://www.mightywarner.ae/portfolio#",
      img: southWindMaritime,
      category: "Web Application",
    },
    {
      name: "Biladalsham",
      link: "https://biladalsham.co/",
      img: biladalsham,
      category: "Web Application",
    },
    {
      name: "Reachmea",
      link: "https://reachmea.ae/",
      img: reachmea,
      category: "Web Application",
    },
    {
      name: "Bionest",
      link: "https://bionestuae.com/",
      img: bionest,
      category: "Web Application",
    },
    {
      name: "Providence-black",
      link: "https://providencems.ae/",
      img: providenceBlack,
      category: "Web Application",
    },
    {
      name: "Pathwayconsulting",
      link: "https://pathwayconsulting.co/",
      img: pathwayconsulting,
      category: "Web Application",
    },
    {
      name: "Noha Properties",
      link: "https://nohaproperties.com/",
      img: nohaProperties,
      category: "Web Application",
    },
    {
      name: "Antoniosignorini",
      link: "https://www.antoniosignorini.com/",
      img: antoniosignorini,
      category: "Web Application",
    },
    {
      name: "71structurealart",
      link: "https://www.mightywarner.ae/portfolio#",
      img: structurealart,
      category: "Web Application",
    },
    {
      name: "AI Amaya",
      link: "https://alamaya.ae/",
      img: AIAmaya,
      category: "Web Application",
    },
    {
      name: "Alltourism Dubai",
      link: "https://www.mightywarner.ae/portfolio#",
      img: allTourismDubai,
      category: "Web Application",
    },
    {
      name: "ABH Real Estate",
      link: "https://www.abhomeqatar.com/",
      img: ABHRealEstate,
      category: "Real Estate Website",
    },
    {
      name: "AI Amaya Water",
      link: "https://www.instagram.com/alamayawater",
      img: AIAmayaWater,
      category: "AI Amaya Water Social Media",
    },
    {
      name: "Laconic_perfume",
      link: "https://www.instagram.com/laconic_perfume",
      img: laconic_perfume,
      category: "Laconic_perfume Social Media",
    },
    {
      name: "Classic.Educational",
      link: "https://www.instagram.com/classic.educational",
      img: classicEducational,
      category: "Classic.Educational Social Media",
    },
    {
      name: "Labexpertsdiagnosticsuae",
      link: "https://www.instagram.com/labexpertsdiagnosticsuae",
      img: labexpertsdiagnosticsuae,
      category: "Labexpertsdiagnosticsuae Social Media",
    },
    {
      name: "Tarjiba_Business_Setup",
      link: "https://www.instagram.com/tajriba_business_setup",
      img: tarjiba,
      category: "Tarjiba_Business_Setup Social Media",
    },
    {
      name: "Jumpnfundubai",
      link: "https://www.instagram.com/jumpnfundubai",
      img: jumpnfundubai,
      category: "Jumpnfundubai Social Media",
    },
    {
      name: "Crowncapitaluae",
      link: "https://www.instagram.com/crowncapitauae",
      img: crownCapitalUAE,
      category: "Crowncapitaluae Social Media",
    },
    {
      name: "MIs_worldwide",
      link: "https://www.instagram.com/mls_worldwide",
      img: MIsWorldWide,
      category: "MIs_worldwide Social Media",
    },
    {
      name: "Dr.farhadinik",
      link: "https://www.instagram.com/dr.farhadinik",
      img: drfarhadinik,
      category: "Dr.farhadinik Social Media",
    },
    {
      name: "Checkurhealth",
      link: "https://www.instagram.com/checkurhealth",
      img: checkurhealth,
      category: "Checkurhealth Social Media",
    },
    {
      name: "AI_sadaf_petcare",
      link: "https://www.instagram.com/al_sadaf_petcare",
      img: AISadafpetcare,
      category: "AI_sadaf_petcare Social Media",
    },
    {
      name: "Yaknyeti.alquoz",
      link: "https://www.instagram.com/yaknyeti.alquoz",
      img: yaknyeti,
      category: "Yaknyeti.alquoz Social Media",
    },
    {
      name: "Alansar_steelaluminium",
      link: "https://www.instagram.com/alansar_steelaluminium",
      img: alansar,
      category: "Alansar_steelaluminium Social Media",
    },
    {
      name: "SCS Dubai",
      link: "https://www.linkedin.com/company/scsdubai",
      img: SCSDubai,
      category: "SCS Dubai Social Media",
    },
    {
      name: "Confident Dental and Skin Care Clinic",
      link: "https://www.facebook.com/DubaiConfident",
      img: confidentDental,
      category: "Confident Dental and Skin Care Clinic Social Media",
    },
    {
      name: "Quintessential4media",
      link: "https://www.instagram.com/quintessential4media",
      img: quintessential,
      category: "Quintessential4media Social Media",
    },
    {
      name: "Federategroup",
      link: "https://www.instagram.com/federategroup",
      img: federategroup,
      category: "Federategroup Social Media",
    },
    {
      name: "Whitesandrealestatellc",
      link: "https://www.instagram.com/whitesandrealestatellc",
      img: whiteSandRealEstate,
      category: "Whitesandrealestatellc Social Media",
    },
    {
      name: "Theqabela",
      link: "https://www.instagram.com/theqabela",
      img: theQabela,
      category: "Theqabela Social Media",
    },
    {
      name: "Mazoun",
      link: "https://mazountechnical.com/",
      img: mazoun,
      category: "Web Application",
    },
    {
      name: "Walkers Cargo",
      link: "https://walkerscargo.ae/",
      img: walkersCargo,
      category: "Web Application",
    },
  ];

//   let activeList: Client[] = [];

//   useEffect(() => {
//     activeList.concat(clients);

//     if (activeTab === "all") {
//       activeList.concat(clients);
//     } else if (activeTab === "eCommerce") {
//       activeList = clients.filter(function (client) {
//         return (
//           client.category === "E-Commerce Website" ||
//           client.category === "Real Estate Website"
//         );
//       });
//     } else if (activeTab === "logo") {
//       activeList = clients.filter(function (client) {
//         return client.category === "Logo Design";
//       });
//     } else if (activeTab === "web") {
//       activeList = clients.filter(function (client) {
//         return (
//           client.category === "Web Application" ||
//           client.category === "Web Application for Water Sports Booking" ||
//           client.category === "Luxury Car Booking Web" ||
//           client.category === "Real E-state" ||
//           client.category === "Real Estate Website" ||
//           client.category === "Hotel & Appartment Booking Web"
//         );
//       });
//     } else if (activeTab === "branding") {
//       activeList = clients.filter(function (client) {
//         return client.category.includes("Social Media");
//       });
//     }
//   });

  return (
    <div className="portfolio">
      <img src={portfolioCollage} alt="" className="portfolio-collage-img" />
      <div className="buttons">
        <div
          className={`button ${activeTab === "all" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("all");
          }}
        >
          All
        </div>
        <div
          className={`button ${activeTab === "eCommerce" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("eCommerce");
          }}
        >
          ECommerce
        </div>
        <div
          className={`button ${activeTab === "logo" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("logo");
          }}
        >
          Logo Design
        </div>
        <div
          className={`button ${activeTab === "web" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("web");
          }}
        >
          Web Design
        </div>
        <div
          className={`button ${activeTab === "branding" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("branding");
          }}
        >
          Branding
        </div>
      </div>

      <div className="clients">
        {clients.map((client, index) => (
          <div
            className="client-card"
            onClick={() => {
              window.open(client.link);
            }}
          >
            <img src={client.img} alt="" className="client-img" />
            <div className="black-layer"></div>
            <div className="client-details">
              <div className="client-name">{client.name}</div>
              <div className="client-category">{client.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
