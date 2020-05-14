import React, {Component} from "react"
import './tour/tour.scss';

class Header extends Component {
    render(){
        
        return(
            <div class="header">
        <div class="container" id="headliner" >
          <div class="col">
  <h1>Golden Gate Tours</h1>
  <p>Your guide to San Francisco</p>
</div>
        </div>
      </div> 
        )
    }
} 
export default Header;