import React, {Component} from 'react';
import Navbar from "./Navbar";
import './App.scss';
import TourList from "./Components/tourlist/TourList.js";

//import TourList from "./tourlist";


function App (){
 return (
    <div className="App">
      <main></main>
       <Navbar />
       <TourList />
    </div>
  )}
  /*class App extends Component {
   render(){
     return
     <div> 
       <Navbar />
       <TourList />
     </div>
        }
 }*/


export default App;
