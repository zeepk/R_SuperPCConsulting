import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Super PC Consulting</h1>
        <h4>Computer Consulting and Repair</h4>
      </header>
      <body>
        <br></br>
        <img src={require("./images/laptop1.jpeg")} alt="Laptop"></img>
      </body>
    </div>
  );
}

export default App;
