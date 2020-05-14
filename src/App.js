import React from 'react';
import Navbar from "./Navbar";
import './App.scss';
import TourList from "./Components/tourlist/TourList.js";
import Header from "./Components/headerComponent";
import Footer from "./Components/FooterComponent"

//import TourList from "./tourlist";

function App (){
 return (
    <div className="App">
      <main></main>
       <Navbar />
       <Header />
       <TourList />
       <Footer />
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
