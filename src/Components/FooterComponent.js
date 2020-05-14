import React, {Component} from "react"
import './tour/tour.scss';

class Footer extends Component {
    render(){
       
        return(
            <footer className="section-footer">
            <div className="container">
                <div className="row row-content">
                    <div className="col d-block">
                    <h2>Golden Gate</h2>
                    <p>San Francisco Tour</p>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-twitter fa-2x"></i></a>
                    <a href="https://www.facebook.com">
                        <i className="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.youtube.com">
                        <i className="fab fa-youtube fa-2x"></i>
                    </a></div>
                </div>
                <div className='col-4'>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="https://www.yelp.com">Yelp</a></li>
                        <li><a href="https://www.Tripadvisor.com">Tripadvisor</a></li>
                        <li><a href="https://www.AirBnb.com">Airbnb</a></li>
                    </ul>
                </div>
                <div className="col "> 
                    <h3>Subscribe</h3>
                    <p>Cupim ribeye chuck porchetta, frankfurter doner boudin</p>
                    <form className="email-form" >
                        <div className="email-form">
                        <span className="form-control-sm">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            size="30px"
                            className="form-control"
                            placeholder="E-mail"
                            />
                        </span>
                    <button type="submit"  onclick="myFunction()" className="form-control submit">
                        <i className="fas fa-chevron-right"></i>
        
                    </button>
                    
        
                        </div>
                    </form>
                </div>
            </div>
        </footer>
        )
    }
} 
export default Footer