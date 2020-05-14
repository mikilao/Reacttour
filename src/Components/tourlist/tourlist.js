import React, {Component} from "react";
//import "./App.scss";
import "./TourList.scss";
import Tour from '../tour/tour';
import {tourData} from './tourData';

export default class TourList extends Component{
    state={
        tours: tourData
    }
    render(){
       // console.log( this.state.tours)
       const {tours}  = this.state;
       return(
            <section className="tourlist">
                {tours.map(tour => {
                    return(
                         <Tour key={tour.id} tour={tour} />
                         
                    )
                })}
               
            </section>
        )
    }
}
