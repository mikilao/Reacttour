import React, {Component} from "react"
import './tour.scss';

class Tour extends Component {
    render(){
        return(
           <article className="container">
            <div className="tour">
               <img width='400' alt="/" className="img-container" src="https://assets.vogue.com/photos/5891f9739c1609bf7a72f48c/master/w_2560%2Cc_limit/00-art-guided-tour-of-san-francisco.jpg" />
              <h5> Info <span className='close-btn'><i className='fas fa-window-close' /></span>
                        </h5>  
           </div>
          <div className="tour-info">
          <h3> Tours</h3><span>
             <i className="fas fa-caret-square-down"/> 
             </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officiis ad velit vel, praesentium ducimus recusandae doloribus eos dignissimos nesciunt Alcatra jowl t-bone pork ribeye biltong pastrami boudin, ham hock chicken. Filet mignon spare ribs kevin frankfurter cow hamburger beef pancetta leberkas turkey sirloin ball tip buffalo bresaola ground round. Pork</p>
          </div>
            </article>
        )
    }
} 
export default Tour