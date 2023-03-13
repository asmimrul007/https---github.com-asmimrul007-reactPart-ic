import "./App.css";
import { useState } from "react";
import CreateAndUpdate from "./Components/CreateAndUpdate";
import EditAndRemove from "./Components/EditAndRemove";

function App() {
  
  return (
    <div className="App">

      <CreateAndUpdate />

      <EditAndRemove/>
      
    </div>
  );
}

export default App;
