import React from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import option from "../src/models/option";

function App() {
  const options: option[] = [
    { id: 1, value: "item 1" },
    { id: 2, value: "item 2" },
    { id: 3, value: "item 3" },
  ];

  

  return (
    <div className="App ">
      <DropDown options={options} />
    </div>
  );
}

export default App;
