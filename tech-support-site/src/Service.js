import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var innerStyle = {
  padding: "3vh 0",
  fontSize: "1vw"
};

export default function Service(props) {
  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: props.circleColor,
    borderRadius: "50%",
    width: "15vw",
    height: "15vw"
  };
  return (
    <div style={circleStyle}>
      <div style={innerStyle}>
        <FontAwesomeIcon icon={props.iconName} size={"7x"} />
        <br />
        <br />
        <h2>{props.serviceName}</h2>
      </div>
    </div>
  );
}
