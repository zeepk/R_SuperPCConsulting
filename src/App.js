import React from "react";
import Service from "./Service";
import Offering from "./Offering";
import Business from "./pages/Business";
import Residential from "./pages/Residential";
import CloudService from "./pages/CloudService";
import DataRecovery from "./pages/DataRecovery";
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
                      <Link
                        to="/Residential"
                        style={{ textDecoration: "none" }}
                      >
                        <Service
                          serviceName="Residential"
                          iconName={faHome}
                          circleColor="#8abad0"
                        />
                      </Link>
                    </div>

                    <div class="NavBox d">
                      <Link
                        to="/CloudService"
                        style={{ textDecoration: "none" }}
                      >
                        <Service
                          serviceName="Cloud Service"
                          iconName={faCloudUploadAlt}
                          circleColor="#6aa8c3"
                        />
                      </Link>
                    </div>

                    <div class="NavBox e">
                      <Link
                        to="/DataRecovery"
                        style={{ textDecoration: "none" }}
                      >
                        <Service
                          serviceName="Data Recovery"
                          iconName={faUserCheck}
                          circleColor="#599fbb"
                        />
                      </Link>
                    </div>

                    <div class="NavBox f"></div>
                  </div>

                  <br />

                  <div class="ServicesGrid">
                    <div class="ServicesBox">
                      <img
                        src={require("./images/laptop1.jpeg")}
                        alt="Laptop"
                        align="left"
                      />
                    </div>
                    <div class="ServicesBox">
                      <Offering />
                    </div>
                  </div>
                </body>
                <div class="QuoteBox">
                  <h1>
                    "Great customer service, explained everything to me and even
                    showed up on time. Absolutely would recommend them for any
                    job big or small" -PO
                  </h1>
                </div>
              </div>
              {/* <footer>
                <p>Created by Matt Hughes</p>
              </footer> */}
            </React.Fragment>
          )}
        />
        {/* <Route path="/Contact" component={Contact} /> */}
        <Route exact path="/Business" component={Business} />
        <Route exact path="/Residential" component={Residential} />
        <Route exact path="/CloudService" component={CloudService} />
        <Route exact path="/DataRecovery" component={DataRecovery} />
      </Router>
    </React.Fragment>
  );
}

export default App;
