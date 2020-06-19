import AliceCarousel from 'react-alice-carousel';
import React, { Component } from "react";
import './tour/tour.scss';



   

export class Gallery extends Component {


    onSlideChange(e) {
      console.log('Item`s position during a change: ', e.item);
      console.log('Slide`s position during a change: ', e.slide);
    }
  
    onSlideChanged(e) {
      console.log('Item`s position after changes: ', e.item);
      console.log('Slide`s position after changes: ', e.slide);
    }
  
    render() { 
   
        const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        }
      };
  
      return (
      
        <AliceCarousel
        
          duration={200}
          autoPlay={true}
          startIndex = {1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          responsive={responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
            >
       
      <img style={{width: 400, margin: 0, height: 400}} src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2017/05/PAFF_051217_drunkpersonality-1-609x419.jpg" alt=" ferry-building" />
      <img style={{width: 400,  margin: 0, height: 400}} src="https://www.holoniq.com/wp-content/uploads/2019/07/Aerial-Cityscape-view-of-San-Francisco-and-the-Bay-Bridge-at-Night-978985624_1368x769.jpeg" alt="Chicago"  />
      <img style={{width: 400, margin: 0, height: 400}} className="carousel-inner" src="https://images.squarespace-cdn.com/content/v1/5ac63267b27e395f3f992df7/1527622411536-IYERRFUPNBDEM2FTNZGL/ke17ZwdGBToddI8pDm48kI8r3igJwAW91YSXzwHG7N97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQV4xmhtuTDgQCTbDoQ9upXHoeeKCEKn6RnLArM6QRcn8AR2UrAfKi4lRFuXqb7ntQ/HFF_GhirardelliSquare-Hero01-min+2-min.jpg?format=2500w" alt="New york" />
      <img style={{width: 400,  margin: 0, height: 400}} className="carousel-inner" src="./img/fidi.jpg"alt="/" />
      <img style={{width: 400, height: 400}} className="carousel-inner" src="./img/london.jpeg" alt="/" />
 
        </AliceCarousel>
        
      );
    }
  }