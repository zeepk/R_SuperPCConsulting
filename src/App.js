import React from "react";
import Service from "./Service";
import Offering from "./Offering";
import Business from "./pages/Business";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  faHome,
  faCloudUploadAlt,
  faBriefcase,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <div className="App">
                <header>
                  <br />
                  <h1>Super PC Consulting</h1>
                  <h4>Computer Consulting and Repair</h4>
                  <br />
                </header>
                <br />
                <body>
                  <div class="NavGrid">
                    <div class="NavBox a"></div>

                    <div class="NavBox b">
                      <Link to="/Business" style={{ textDecoration: "none" }}>
                        <Service
                          serviceName="Business"
                          iconName={faBriefcase}
                          circleColor="#B3D2E1"
                        />
                      </Link>
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
                        serviceName="Data Recovery"
                        iconName={faUserCheck}
                        circleColor="#599fbb"
                      />
                    </div>

                    <div class="NavBox f"></div>
                  </div>

                  <br />

                  <div class="ServicesGrid">
                    <div class="ServicesBox">
                      <img
                        src={require("./images/laptop1.jpeg")}
                        alt="Laptop"
                      />
                    </div>
                    <div class="ServicesBox">
                      <Offering />
                    </div>
                  </div>
                </body>
              </div>
              {/* <footer>
                <p>Created by Matt Hughes</p>
              </footer> */}
            </React.Fragment>
          )}
        />
        {/* <Route path="/Contact" component={Contact} /> */}
        <Route exact path="/Business" component={Business} />
      </Router>
    </React.Fragment>
  );
}

export default App;
