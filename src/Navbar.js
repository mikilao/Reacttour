import './Navbar.scss';
import React from 'react';
import logo from './assets/logo.jpg';
import {NavLink} from 'react-router-dom';
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
                       <NavLink to="/home"> <img src={logo} alt="Golden Gate Logo" height='50px' max-width="50" /></NavLink>
                        <ul className="nav-links">
                            <li id="nav"><NavLink to="/TourList"><a className="nav-link" href="/"><i className="fas fa-city"></i>Tours</a></NavLink> </li>
                            <li id="nav"><NavLink to="/Adventure"> <a className="nav-link " href="/Adventure" ><i className="fas fa-hiking"></i>Adventures</a></NavLink></li>
                            <li id="nav"><NavLink to="/AboutUs"><a className="nav-link " href="/"> About Us</a></NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

