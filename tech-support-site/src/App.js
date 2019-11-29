import React from "react";
import "./App.css";
import {
  faHome,
  faCloudUploadAlt,
  faBriefcase,
  faUserCheck,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Super PC Consulting</h1>
        <h4>Computer Consulting and Repair</h4>
      </header>
      <body>
        <br></br>
        <br></br>
        <div class="NavGrid">
          <div class="NavBox a"></div>

          <div class="NavBox b">
            <FontAwesomeIcon icon={faBriefcase} size={"3x"} />
            <br />
            Business
          </div>

          <div class="NavBox c">
            <FontAwesomeIcon icon={faHome} size={"3x"} />
            <br />
            Residential
          </div>

          <div class="NavBox d">
            <FontAwesomeIcon icon={faCloudUploadAlt} size={"3x"} />
            <br />
            Cloud Service
          </div>

          <div class="NavBox e">
            <FontAwesomeIcon icon={faUserCheck} size={"3x"} />
            <br />
            Data Recovery Support
          </div>

          <div class="NavBox f"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
