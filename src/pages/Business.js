import React from "react";
import Header from "../components/Header";
export default function Business() {
  const titleStyle = {
    fonstSize: "20px",
    textAlign: "center"
  };
  return (
    <div>
      <Header />
      <br />
      <div style={titleStyle}>
        <h1>Business Center</h1>
      </div>
    </div>
  );
}
