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
                {tours.map(tour => {
                    return(
                         <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                         
                    )
                })}
               
            </section>
        )
    }
}
