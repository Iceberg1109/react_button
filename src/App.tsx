import React from "react";
import "./App.css";
import SimpleFiButton from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <SimpleFiButton
        type="danger"
        text="SimpleFi"
        action={() => alert("aaaa")}
        disabled
      />
    </div>
  );
}

export default App;
