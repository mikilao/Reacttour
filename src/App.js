import React from 'react';
import Navbar from "./Navbar";
import './App.scss';
import Main from './Components/MainComponent';
import TourList from "./Components/tourlist/TourList.js";
import Header from "./Components/headerComponent";
import Footer from "./Components/FooterComponent";
import {BrowserRouter} from "react-router-dom";

//import TourList from "./tourlist";

function App (){
 return (
    
     
      <BrowserRouter>
          <div className="App">
              <Main />
          </div>
          </BrowserRouter> 
   
  )}
  


export default App;
