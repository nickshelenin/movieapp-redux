import React, { Component } from "react";
import Swiper from "swiper";

import "./TrailerCarousel.scss";

class TrailerCarousel extends Component {
   render() {
      return (
         <div className='trailer-swiper-container'>
            <div className='swiper-wrapper'>
               {this.props.trailers.map(trailer => (
                  <div key={trailer.key} className='swiper-slide'>
                     <iframe title='1' width='420' height='315' src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
                  </div>
               ))}
            </div>

            {/* Add arrows */}
            <div className='swiper-button-prev  swiper-button-white'></div>
            <div className='swiper-button-next swiper-button-white'></div>

            {/* <div className="swiper-scrollbar"></div> */}
         </div>
      );
   }
}

export default TrailerCarousel;
