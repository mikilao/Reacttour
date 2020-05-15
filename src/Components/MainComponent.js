import {Switch, Route, Link} from "react-router-dom";
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
                  <Link to="/">Home</Link>
                  <Link to="/AdventureComponent">Adventure</Link>
                  <Switch>
        <Route component={Adventure} exact="/" />
        <Route component={TourList} path="/Tourlist" />
              
            </Switch>
                <Navbar />
             <Header />
                <TourList />
                <Footer />
               </div>
         )                
    }
    
}
    