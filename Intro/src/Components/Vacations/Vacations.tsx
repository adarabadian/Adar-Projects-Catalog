import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import vacations1 from '../../assets/Vacations/Vacations.png'
import vacations2 from '../../assets/Vacations/Vacations2.png'
import vacations3 from '../../assets/Vacations/Vacations3.png'
import vacations4 from '../../assets/Vacations/Vacations4.png'
import vacations5 from '../../assets/Vacations/Vacations5.png'
import vacations6 from '../../assets/Vacations/Vacations6.png'
import vacations7 from '../../assets/Vacations/Vacations7.png'
import './Vacations.css'

export default function Vacations() {
    return (
            <Carousel>
                <div>
                    <img src={vacations1} alt={vacations1} />
                    <p className="legend">Main Page (User)</p>
                </div>
                <div>
                    <img src={vacations2} alt={vacations2} />
                    <p className="legend">Login Page</p>
                </div>
                <div>
                    <img src={vacations3} alt={vacations3} />
                    <p className="legend">Register Page</p>
                </div>
                <div>
                    <img src={vacations4} alt={vacations4} />
                    <p className="legend">Admin Page</p>
                </div>
                <div>
                    <img src={vacations5} alt={vacations5} />
                    <p className="legend">Edit Vacation Popup (For admin only)</p>
                </div>
                <div>
                    <img src={vacations6} alt={vacations6} />
                    <p className="legend">New Vacation Popup (For admin only)</p>
                </div>
                <div>
                    <img src={vacations7} alt={vacations7} />
                    <p className="legend">Graph that compares all the different vacations (For admin only)</p>
                </div>
            </Carousel>
    )
}

