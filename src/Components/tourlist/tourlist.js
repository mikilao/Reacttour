import React, {Component} from "react";
//import "./App.scss";
import "./TourList.scss";
import Tour from '../tour/tour';
import {tourData} from './tourData';

export default class TourList extends Component{
    state={
        tours: tourData
    }
    removeTour = id =>{
        const{tours}= this.state;
        const filterTour = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: filterTour
        })
    }
        render(){
       // console.log( this.state.tours)
       const {tours}  = this.state;
       return(
            <section className="tourlist">
                <h1>Tours</h1>
                    <h4>Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.</h4>
                       
                {tours.map(tour => {
                    return(

                         <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                         
                    )
                })}
               
            </section>
        )
    }
}
