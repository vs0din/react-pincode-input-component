import React from "react";
import ReactDOM from "react-dom";
import PinCode from "./PinCode";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PinCode type="text" fields="7" value="noSpace" />
      <br />
      <PinCode
        type="text"
        fields="8"
        value="space <3"
        spacesAreAllowed="true"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
