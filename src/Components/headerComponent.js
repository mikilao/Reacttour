import React, { Component } from "react"
import './tour/tour.scss';

class Header extends Component {
  render() {

    return (
      <div className="header">
        <div className="container" id="headliner" >
          <div className="col" >
            <h1>Golden Gate Tours</h1>
            <p>Your guide to San Francisco</p>

          </div>
        </div>
      </div>
    )
  }
}
export default Header;