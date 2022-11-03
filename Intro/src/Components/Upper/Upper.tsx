import React from "react";
import "./Upper.css";

export default function Upper() {
    return (
        <div id="upper">
            <h1>Projects Catalog</h1>
            <div id="devider">
                <div>
                    <h4>Adar Abadian - Full Stack Developer</h4>
                    Email:{" "}
                    <a href="mailto:adarabadian@gmail.com">
                        {" "}
                        Adarabadian@gmail.com
                    </a>
                    <br></br>
                    Phone Number: <a href="tel:052-510-9880">052-5109880</a>
                </div>

                <div>
                    <h4>Welcome to Adar's project catalog!</h4>
                    Here you can browse and observe some of the projects i made.
                </div>

                <div>
                    <h4>My Resume</h4>
                    <a
                        className="btn btn-primary"
                        href={process.env.PUBLIC_URL + "/AdarCv.pdf"}
                        role="button"
                        download="AdarCv.pdf"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}
