import React from "react";
import Service from "./Service";
import Offering from "./Offering";
import "./App.css";
import {
  faHome,
  faCloudUploadAlt,
  faBriefcase,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header>
        <br />
        <h1>Super PC Consulting</h1>
        <h4>Computer Consulting and Repair</h4>
        <br />
      </header>
      <body>
        <br></br>
        <br></br>
        <div class="NavGrid">
          <div class="NavBox a"></div>

          <div class="NavBox b">
            <Service
              serviceName="Business"
              iconName={faBriefcase}
              circleColor="#B3D2E1"
            />
          </div>

          <div class="NavBox c">
            <Service
              serviceName="Residential"
              iconName={faHome}
              circleColor="#8abad0"
            />
          </div>

          <div class="NavBox d">
            <Service
              serviceName="Cloud Service"
              iconName={faCloudUploadAlt}
              circleColor="#6aa8c3"
            />
          </div>

          <div class="NavBox e">
            <Service
              serviceName="Data Recovery Support"
              iconName={faUserCheck}
              circleColor="#599fbb"
            />
          </div>

          <div class="NavBox f"></div>
        </div>

        {/* Service Grid */}
        <br />
        <br />
        <br />

        <div class="ServicesGrid">
          <div class="ServicesBox">
            <img
              src={require("./images/laptop1.jpeg")}
              alt="Picture of Laptop"
            />
          </div>
          <div class="ServicesBox">
            <Offering />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
