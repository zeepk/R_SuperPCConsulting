import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Offering() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1style}>
            <ul>
              <li>
                <b>What We Offer:</b>
              </li>
              <li>Virus Removal, Data Recovery</li>
              <li>Residential and Home Repair</li>
              <li>Startup Problems</li>
              <li>Automatic Backup Solutions</li>
              <li>Laptop/iPhone/iPad Screen Repair</li>
              <li>Network Installation and Setup</li>
              <li>Onsite Training</li>
              <li>Managed Service Contract</li>
            </ul>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1style = {};
