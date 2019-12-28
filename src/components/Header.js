import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    textAlign: "center"
  };

  return (
    <div>
      <header>
        <p className="Phone">Call 925-867-5309</p>
        <Link to="/" style={linkStyle}>
          <h1>Super PC Consulting</h1>
        </Link>
        <h4>Computer Consulting and Repair</h4>
        <br />
      </header>
    </div>
  );
}
