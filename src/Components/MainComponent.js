import {Switch, Route} from "react-router-dom";
import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './FooterComponent';
import TourList from "./tourlist/TourList";
import Navbar from "../Navbar"
import Adventure from './AdventuresComponent';

export default class Main extends Component {

        render(){

         return( 
              <div>
                     <Navbar />
                  <Switch>
        <Route component={Adventure} exact="/" />
        <Route component={TourList} path="/Tourlist" />
              
            </Switch>
          
             <Header />
                
                <TourList />
                <Footer />
               </div>
         )                
    }
    
}
    