import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import supermarket1 from "../../assets/SuperMarket/supermarket1.png";
import supermarket2 from "../../assets/SuperMarket/supermarket2.png";
import supermarket3 from "../../assets/SuperMarket/supermarket3.png";
import supermarket4 from "../../assets/SuperMarket/supermarket4.png";
import supermarket5 from "../../assets/SuperMarket/supermarket5.png";
import supermarket6 from "../../assets/SuperMarket/supermarket6.png";
import supermarket7 from "../../assets/SuperMarket/supermarket7.png";
import supermarket8 from "../../assets/SuperMarket/supermarket8.png";
import supermarket9 from "../../assets/SuperMarket/supermarket9.png";
import supermarket10 from "../../assets/SuperMarket/supermarket11.png";
import "../Vacations/Vacations.css";

export default function SuperMarket() {
  return (
<Carousel>
        <div>
          <img src={supermarket3} alt={supermarket3} />
          <p className="legend">Main Page (User)</p>
        </div>

        <div>
          <img src={supermarket1} alt={supermarket1} />
          <p className="legend">Login Page</p>
        </div>

        <div>
          <img src={supermarket2} alt={supermarket2} />
          <p className="legend">Register Page</p>
        </div>

        <div>
          <img src={supermarket4} alt={supermarket4} />
          <p className="legend">User Cart</p>
        </div>

        <div>
          <img src={supermarket5} alt={supermarket5} />
          <p className="legend">Checkout Page</p>
        </div>

        <div>
          <img src={supermarket6} alt={supermarket6} />
          <p className="legend">Order Confirmation Page</p>
        </div>

        <div>
          <img src={supermarket7} alt={supermarket7} />
          <p className="legend">
            Reciept (PDF that being downloaded automatically after purchase)
          </p>
        </div>

        <div>
          <img src={supermarket8} alt={supermarket8} />
          <p className="legend">Edit Product Popup (For admin only)</p>
        </div>
        
        <div>
          <img src={supermarket9} alt={supermarket9} />
          <p className="legend">New Product Popup (For admin only)</p>
        </div>
        <div>
          <img src={supermarket10} alt={supermarket10} />
          <p className="legend">Product Popup</p>
        </div>
      </Carousel>
  )
}
