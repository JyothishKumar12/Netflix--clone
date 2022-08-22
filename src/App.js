import React, { useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/RowPost";
import {Originals,Actions} from './urls'


function App() {
 
  
  return (
    <div className="App">
       <NavBar/>
      <Banner/>
      <Rowpost url={Originals} title='Netflix Originals' />
      <Rowpost url={Actions} title='Actions' isSmall/>
    </div>
   
  );
}

export default App;
