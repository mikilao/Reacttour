import React, {Component} from "react"
import './tour.scss';

class Tour extends Component {
    state = {
        showInfo: false //for the display
    }
    handleInfo =() => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render(){
        const {city, info, id, img, name}= this.props.tour;
        const{removeTour} = this.props;

        return(
            <div> 
            
           <article className="tour">
            <div  className="img-container">
                <div className="row">
                    <div className="col">
               <img id="img" alt="/" width="500px" src={img} />
              <h4> {name}  </h4> 
              <span className='close-btn' onClick={() =>{removeTour(id)}}>
                  <i className='fas fa-window-close' />
                  </span>                        
           </div>
          <div className="tour-info">
          <h3> {city}</h3>
          <button className="tourbtn">More <span onClick={this.handleInfo}> 
              <i className="fas fa-caret-square-down"/>
            
             </span></button>
             {this.state.showInfo && <p>{info}</p>}
           </div>  
            </div>
          </div>
            </article>
           </div>
         
        )
    }
} 
export default Tour