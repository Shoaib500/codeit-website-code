import React from 'react';
import './meetOurClients.scss'
import amaya from '../../../assets/clients/amaya.avif'
import crystal from '../../../assets/clients/crystalClear.avif'
import dubai from '../../../assets/clients/dubai.avif'
import royalMaison from '../../../assets/clients/royalMaison.avif'
import antoni from '../../../assets/clients/antoniosignorini.avif'
import ABH from '../../../assets/clients/ABHrealestate.avif'

type MeetOurClientsProps = {
    
};

type Client = {
    name: string
    service: string
    img: string
    link: string
}

const MeetOurClients:React.FC<MeetOurClientsProps> = () => {

    const clients: Client[] = [
        {
            name: "AL Amaya",
            service: "Web Application",
            img: amaya,
            link: "https://alamaya.ae/"
        },
        {
            name: "Crystal Clear",
            service: "Web Application",
            img: crystal,
            link: "https://crystalclearwatersports.com/"
        },
        {
            name: "Alltourism Dubai",
            service: "Web Application",
            img: dubai,
            link: "https://www.codeit.world/"
        },
        {
            name: "Royal Maison",
            service: "E-Commerce Website",
            img: royalMaison,
            link: "https://royal-maison.com/"
        },
        {
            name: "Antoniosignorini",
            service: "Web Application",
            img: antoni,
            link: "https://www.antoniosignorini.com/"
        },
        {
            name: "ABH Real Estate",
            service: "Real Estate Website",
            img: ABH,
            link: "https://www.abhomeqatar.com/"
        },
    ]
    
    return <div className='moc'>
        <div className="moc-title">Meet Our Clients</div>
        <div className="moc-sub-title">Take a peek at our happy customers and join their ranks.</div>
        <div className="clients">
            {clients.map((client) => 
                <div className='client-card'>
                    <img className='client-img' src={client.img} alt="" onClick={()=>{window.open(client.link)}}/>
                    <div className="client-name">{client.name}</div>
                    <div className="client-service">{client.service}</div>
                </div>
            )}
        </div>
        <div className='browse-portfolios-btn'>Browse all Portfolios</div>
    </div>
}
export default MeetOurClients;