import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import GameRank1 from "../../assets/GameRank/GameRank1.png";
import GameRank2 from "../../assets/GameRank/GameRank2.png";
import GameRank3 from "../../assets/GameRank/GameRank3.png";
import GameRank4 from "../../assets/GameRank/GameRank4.png";
import GameRank5 from "../../assets/GameRank/GameRank5.png";
import GameRank6 from "../../assets/GameRank/GameRank6.png";
import GameRank7 from "../../assets/GameRank/GameRank7.png";
import GameRank8 from "../../assets/GameRank/GameRank8.png";
import "../Vacations/Vacations.css";

export default function GameRank() {
  return (
    <Carousel>
      <div>
        <img src={GameRank1} alt={GameRank1} />
        <p className="legend">Landing Page</p>
      </div>

      <div>
        <img src={GameRank3} alt={GameRank3} />
        <p className="legend">Game Page</p>
      </div>

      <div>
        <img src={GameRank2} alt={GameRank2} />
        <p className="legend">Games Board</p>
      </div>

      <div>
        <img src={GameRank4} alt={GameRank4} />
        <p className="legend">Deals For Custom Game Page</p>
      </div>
      
      <div>
        <img src={GameRank5} alt={GameRank5} />
        <p className="legend">Review A Game</p>
      </div>
      
      <div>
        <img src={GameRank6} alt={GameRank6} />
        <p className="legend">Deals Modal</p>
      </div>
      
      <div>
        <img src={GameRank7} alt={GameRank7} />
        <p className="legend">Email Verification Code</p>
      </div>
      
      <div>
        <img src={GameRank8} alt={GameRank8} />
        <p className="legend">Register Page</p>
      </div>
    </Carousel>
  );
}
