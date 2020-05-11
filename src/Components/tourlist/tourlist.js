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
        console.log( this.state.tours)
        return(
            <section className="tourlist">
                <Tour />
            </section>
        )
    }
}
