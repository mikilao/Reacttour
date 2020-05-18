import {Switch, Route} from "react-router-dom";
import React, { Component } from 'react';

import Header from './headerComponent';
import Footer from './FooterComponent';
import TourList from "./tourlist/TourList";
import Navbar from "../Navbar";
import AboutUs from './AboutUsComponent';
import Adventure from './AdventuresComponent';
import HomePage from './HomeComponent'

export default class Main extends Component {

        render(){
         
         return( 
              <div>
                     <Navbar />
                     <Header />
                  <Switch>
                  <Route path='/home' component={HomePage} />
            <Route component={Adventure} exact path='/Adventure'  render={() => <Adventure />}> </Route>
         <Route component={TourList}  exact path="/Tourlist" render={() => <TourList />} />
              <Route component={AboutUs} exact path="/AboutUs" />
                          </Switch>

                <Footer />
               </div>
         )                
    }
    
}
    