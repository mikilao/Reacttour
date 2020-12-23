import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './FooterComponent';
import TourList from "./tourlist/TourList";
import Navbar from "../Navbar";
import AboutUs from './AboutUsComponent';
import Adventure from './AdventuresComponent';
import HomePage from './HomeComponent'
//import Home from "./HomeComponent";

export default class Main extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Navbar />
                    <Header />
                   
                    <Switch> 
                        
                        <Route path='/home' component={HomePage} />
                        <Route component={Adventure} exact path='/Adventure' render={() => <Adventure />} />
                        <Route component={TourList} exact path="/Tourlist" render={() => <TourList />} />
                        <Route component={AboutUs} exact path="/AboutUs" />
                        <Redirect to='/home' />
                    </Switch>

                    <Footer />
                </div> </Router>

        )
    }

}
