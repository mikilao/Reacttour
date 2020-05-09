import './Navbar.scss';
import React from 'react';
import logo from './assets/logo.jpg';

export default function Navbar(){
    return(
<nav className="navbar">
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
</nav>
    )
}

