import React, {Component} from "react"
import './tour.scss';

class Tour extends Component {
    render(){
        const {city, info, img, name}= this.props.tour;
        return(
           <article className="container">
            <div className="tour">
               <img id="img" alt="/" width="300" className="img-container" src={img} />
              <h5> {name} <span className='close-btn'><i className='fa fa-window-close' /></span>
                        </h5>  
           </div>
          <div className="tour-info">
          <h3> {city}</h3>
          <h4>More <span>
             <i className="fa fa-caret-square-down"/> 
             </span></h4>
              <p>{info}</p>
          </div>
            </article>
        )
    }
} 
export default Tour