import React from "react";
import Header from "../components/Header";
export default function Business() {
  const titleStyle = {
    fonstSize: "20px",
    textAlign: "center"
  };
  const bodyStyle = {
    padding: "5vh 3vw"
  };
  return (
    <div>
      <Header />
      <br />
      <div style={titleStyle}>
        <h1>Business Center</h1>
        <h3>IT Support for Small and Mid-size Businesses</h3>
      </div>
      <div style={bodyStyle}>
        <p>
          Full time IT support without hiring your own in-house IT staff.
          Looking for a more cost effective IT solution "SPCC" is your answer.
          We offer multiple managed service contracts that can be structured to
          fit your company's needs.
        </p>
        <p>
          Proactive IT Services. Flat-rate, round-the-clock maintenance and
          monitoring to prevent problems before they turn into downtime.
        </p>
        <p>
          Help Desk- Let us be your IT department to resolve your service issues
          based on your individual company. 24/7/365 IT support with our IT365
          managed service plan.
        </p>
      </div>
    </div>
  );
}
