import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/NavBar/Banner/Banner";
import Rowpost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
       <NavBar/>
      <Banner/>
      <Rowpost/>
    </div>
   
  );
}

export default App;
