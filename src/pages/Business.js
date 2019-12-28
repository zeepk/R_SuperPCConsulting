import React from "react";
import Header from "../components/Header";
export default function Business() {
  const titleStyle = {
    fonstSize: "20px",
    textAlign: "left"
    // paddingLeft: "3vw"
  };
  const bodyStyle = {
    padding: "5vh 3vw"
  };
  const imgStyle = {
    maxHeight: "50vh",
    maxWidth: "100%",
    marginTop: "10px"
  };
  return (
    <div>
      <Header />
      <br />
      <div className="BusinessGrid" style={bodyStyle}>
        <div className="BusinessBox">
          <div style={titleStyle}>
            <h1>Business Center</h1>
            <h3>IT Support for Small and Mid-size Businesses</h3>
            <br />
            <br />
          </div>
          <p>
            Full time IT support without hiring your own in-house IT staff.
            Looking for a more cost effective IT solution "SPCC" is your answer.
            We offer multiple managed service contracts that can be structured
            to fit your company's needs.
          </p>
          <br />
          <h3>Proactive IT Services</h3>
          <p>
            Flat-rate, round-the-clock maintenance and monitoring to prevent
            problems before they turn into downtime.
          </p>
          <br />
          <h3>Help Desk</h3>
          <p>
            Let us be your IT department to resolve your service issues based on
            your individual company. 24/7/365 IT support with our IT365 managed
            service plan.
          </p>
        </div>
        <div className="BusinessBox">
          <img
            src={require(".././images/business1.jpg")}
            alt="Laptop"
            align="right"
            style={imgStyle}
          />
        </div>
      </div>
      <div className="BusinessServicesGrid">
        <div className="BusinessServicesBox">
          Hardware Installation and Support
        </div>
        <div className="BusinessServicesBox">
          Virus and Spyware Removal and Protection
        </div>
        <div className="BusinessServicesBox">Security Solutions</div>
        <div className="BusinessServicesBox">
          VPN (Virtual Private Networks)
        </div>
        <div className="BusinessServicesBox">Remote Access</div>
        <div className="BusinessServicesBox">
          Server Installations and Upgrades
        </div>
        <div className="BusinessServicesBox">
          Spam Filtering and Email Solutions
        </div>
        <div className="BusinessServicesBox">Web Content Filtering</div>
        <div className="BusinessServicesBox">
          System Backups, Onsite and Offsite
        </div>
        <div className="BusinessServicesBox">
          Complete Network Management & Support
        </div>
        <div className="BusinessServicesBox">
          Hosting Services, Email and Server
        </div>
        <div className="BusinessServicesBox">
          Install and Manage Firewall and Virtus Protection
        </div>
      </div>
    </div>
  );
}
