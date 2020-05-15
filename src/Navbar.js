import './Navbar.scss';
import React from 'react';
import logo from './assets/logo.jpg';
//import {Row, Col} from 'react-strap';

export default function Navbar() {
    return (
        /*<nav className="navbar">
            <img src={logo} alt="Golden Gate Logo" height='50px' max-width="50" />
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link" >Home</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link" >About</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link" >Tours</a>
                    </li>
                </ul>
        </nav>*/
        <div className="container-fluid">
            <div className="row">
                <div className="col ">
                    <nav className="navbar sticky-top navbar-dark bg-dark">
                        <img src={logo} alt="Golden Gate Logo" height='50px' max-width="50" />
                        <ul className="nav-links">
                            <li id="nav"> <a className="nav-link" href="tour.html"><i className="fas fa-city"></i>Tours</a></li>
                            <li id="nav">  <a className="nav-link " href="adventures.html"><i className="fas fa-hiking"></i>Adventures</a></li>
                            <li id="nav"><a className="nav-link " href="aboutus.html"> About Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

