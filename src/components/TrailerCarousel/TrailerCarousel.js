import React, { Component } from "react";

import Swiper from "swiper";
import "swiper/css/swiper.css";
import "swiper/js/swiper.min.js";

import "./TrailerCarousel.scss";

class TrailerCarousel extends Component {
   render() {
      // Initiates carousel

      const slider = new Swiper(".swiper-container", {
         // init: true,
         // slidesPerView: 3,
         // loop: true,
         // spaceBetween: 2,
         // observer: true,
         slidesPerView: 3,
         spaceBetween: 30,
         slidesPerGroup: 3,
         loop: true,
         loopFillGroupWithBlank: true,

         // breakpoints: {
         //    1145: {
         //       slidesPerView: 5
         //    },
         //    100: {
         //       slidesPerView: 1
         //    }
         // },
         navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
         }
      });

      return (
         <div className='swiper-container'>
            <div className='swiper-wrapper'>
               {this.props.trailers.map(trailer => (
                  <div key={trailer.id} className='swiper-slid'>
                     <iframe title='1' width='420' height='315' src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
                     {/* <h1>{trailer.id}</h1> */}
                  </div>
               ))}
            </div>

            {/* Add arrows */}

            <div className='swiper-button-prev swiper-button-white'></div>
            <div className='swiper-button-next swiper-button-white'></div>
         </div>
      );
   }
}

export default TrailerCarousel;
