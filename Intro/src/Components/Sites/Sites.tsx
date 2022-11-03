import GameRank from "../GameRank/GameRank";
import SuperMarket from "../SuperMarket/SuperMarket";
import Vacations from "../Vacations/Vacations";
import "./Sites.css";

export default function Sites() {
    return (
        <div className="sites">
            <div className="site" id="gameRank">
                <div className="siteInfo">
                    <h2>GameRank Project</h2>

                    <p className="aboutParagraph">
                        This is a project that i made just recently (July 2022) to learn react better.
                        <br></br>
                        GameRank will save you tons of money, by getting the best deals from hundreds 
                        of stores for ANY software you'd like (try the search bar inside the Games Board page).
                        <br></br>
						You'll be able to review and view other peoples reviews on the games.<br></br>
                        The scores and the reviews are updating live on real-time using socket.io.<br></br>
                        In order to register and reset password a valid email will be needed.
                    </p>

                    <p>Developed in React 18 Typescript, Node.JS Socket.io, Redux-thunk and more.</p>

                    <a
                        href="https://gamerank.onrender.com"
                        className="btn btn-primary btn-lg active"
                        role="button"
                        aria-pressed="true"
                    >
                        Go to site!
                    </a>
                </div>

                {GameRank()}
            </div>

            <div className="site" id="superMarket">
                <div className="siteInfo">
                    <h2>Super Market Project</h2>

                    <p className="aboutParagraph">
                        This project was a task i got from my college<br></br>
                        In this project i was requested to develop a project
                        that will simulate an online supermarket. Users are able
                        to add, delete and change product amount to their cart.
                        <br></br>
                        If for some reason user exited the site and logged back
                        in (from any device) it will ask them if they want the
                        products they already added or open a new cart.<br></br>
                        The system listens for every cart update and updates the
                        database accordingly.<br></br>
                        They can make orders based on available dates (maximum 3
                        orders for each day) and get a pdf reciept at the end.
                        <br></br>
                        Admin is able to add and edit products.
                    </p>

                    <p>Developed in Angular 2 and Node.JS.</p>

                    <a
                        href="https://adarmarket.onrender.com"
                        className="btn btn-primary btn-lg active"
                        role="button"
                        aria-pressed="true"
                    >
                        Go to site!
                    </a>
                </div>

                {SuperMarket()}
            </div>

            <div className="site" id="vacations">
                <div className="siteInfo">
                    <h2>Vacations Project</h2>

                    <p className="aboutParagraph">
                        This project was a task i got from my college<br></br>
                        In this project i was requested to develop a project in
                        react (using class components and socket.io) that will
                        let users know what vacations are available, look how
                        many people liked it, add it to their favorites and
                        more.<br></br>
                        All the events such as likes, vacation that is added,
                        changed or removed are being updated on real-time via
                        socket.io so the system is keeps itself up to date all
                        the time.<br></br>
                        Admin is able to add, change and add vacations and
                        monitor all the vacations status via special graph for
                        admin.
                    </p>

                    <p>Developed in React Typescript, Node.JS and Socket.IO.</p>

                    <a
                        href="https://vacations.onrender.com"
                        className="btn btn-primary btn-lg active"
                        role="button"
                        aria-pressed="true"
                    >
                        Go to site!
                    </a>
                </div>

                {Vacations()}
            </div>
        </div>
    );
}
