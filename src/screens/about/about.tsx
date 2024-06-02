import React from 'react';
import './about.scss'
import aboutImg from '../../assets/images/about2.webp'
import Typewriter from '../../components/typewriter/typewriter';

type AboutProps = {
    
};

const About:React.FC<AboutProps> = () => {

    const texts: string[] = [
        "for Your Digital Transformation", "for Exceptional Results", "for Your Success", ""
    ]
    
    return(
        <div className='about-page'>
            <div className='topbar'>
                <img src={aboutImg} alt="" className='topbar-img'/>
                <div className='topbar-text'>
                    <div className='EPI'>Expertise, Passion and Innovation</div>
                    <Typewriter texts={texts}/>
                </div>
            </div>
        </div>
    )
}
export default About;