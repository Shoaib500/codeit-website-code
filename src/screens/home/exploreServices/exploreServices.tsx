import React, {useRef} from 'react';

import './exploreServices.scss';

import webDev from '../../../assets/icons/webDev.png';
import appDev from '../../../assets/icons/appDev.png';
import brandMarketing from '../../../assets/icons/brandMarketing.png';
import contentWriting from '../../../assets/icons/contentWriting.png';
import DMS from '../../../assets/icons/DMS.png';
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type ExploreServicesProps = {
    
};

const ExploreServices:React.FC<ExploreServicesProps> = () => {
    const esAniRef = useRef(null);

    const navigate = useNavigate();

    useGSAP(()=>{
        const serviceAnimation = () =>{
            gsap.from(esAniRef.current,{
                y: 100,
                duration: 0.2,

                scrollTrigger:{
                    trigger: esAniRef.current,
                    scroller: "body",
                    markers: false,
                    start: "top 80%",
                }
            });
            gsap.from(".explore-card",{
                scale: 0.25,
                duration: 0.3,
                opacity: 0,
                // delay: 1,
                
                scrollTrigger:{
                    trigger: esAniRef.current,
                    // scroller: "body",
                    // markers: false,
                    start: "top 80%",
                }
            });
        }
        serviceAnimation();
    })
    
    return <div className='explore-services' ref={esAniRef} >
        <div className='title'>Explore Our Services</div>
        <div className='services-cards'>
            
            <div className='explore-card web' onClick={()=>{navigate('/webdev')}}>
                <img src={webDev} alt="" className="service-icon" />
                <div className='service-name'>Web Development</div>
            </div>

            <div className='explore-card app' onClick={()=>{navigate('/appdev')}}>
                <img src={appDev} alt="" className="service-icon" />
                <div className='service-name'>App Development</div>
            </div>

            <div className='explore-card dms' onClick={()=>{navigate('/digital-marketing')}}>
                <img src={DMS} alt="" className="service-icon" />
                <div className='service-name'>Digital Marketing Services</div>
            </div>

            <div className='explore-card brandMarketing' onClick={()=>{navigate('/brand-marketing')}}>
                <img src={brandMarketing} alt="" className="service-icon" />
                <div className='service-name'>Brand Marketing</div>
            </div>

            <div className='explore-card contentWriting' onClick={()=>{navigate('/content-writing')}}>
                <img src={contentWriting} alt="" className="service-icon" />
                <div className='service-name'>Content Writing</div>
            </div>
        </div>
    </div>
}
export default ExploreServices;