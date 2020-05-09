import React, {Component} from 'react';
import Navbar from "./Navbar";
import './App.scss';
import TourList from "./components/tourlist";
import Navbar from './Navbar';

function App (){
 return (
    <div className="App">
      <main></main>
       <Navbar />
       <TourList />
    </div>
  )}
  //class App extends Component {
   // render(){
     // return
     
   // }
 // }


export default App;
