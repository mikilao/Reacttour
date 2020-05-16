import {Switch, Route} from "react-router-dom";
import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
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
                     <TransitionGroup>
                     <CSSTransition key="key" timeout={200} classNames="openNode">
                  <Switch>
                  <Route path='/home' component={HomePage} />
            <Route component={Adventure} exact path='/Adventure'  render= {() => <Adventure />}> </Route>
         <Route component={TourList}  path="/Tourlist" render={() => <TourList />} />
              <Route component={AboutUs} path="/AboutUs" />
                          </Switch>
          </CSSTransition>
          </TransitionGroup>
          <Adventure />
             
                
               
                <Footer />
               </div>
         )                
    }
    
}
    