import React, { Component } from "react";

import Swiper from "swiper";
import "swiper/css/swiper.css";
import "swiper/js/swiper.min.js";

class TrailerCarousel extends Component {
   render() {
      // Initiate swiper
      (() => {
         const sliderEl = document.querySelectorAll(".swiper-container");
         if (!sliderEl) {
            return;
         }
         const slider = new Swiper(sliderEl, {
            init: true,
            slidesPerView: 5,
            loop: true,
            // spaceBetween: 14,
            // navigation,
            // observer: true,

            breakpoints: {
               1145: {
                  slidesPerView: 5
               },
               699: {
                  slidesPerView: 3
               },
               100: {
                  slidesPerView: 2
               }
            },
            navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev"
            }
         });
      })();
      return (
         <div className='carousel-container wow'>
            <div className='swiper-container'>
               <div className='swiper-wrapper trailers-container'>
                  {this.props.trailers.map(trailer => (
                     <div className='swiper-slide'>
                        <iframe title='1' width='420' height='315' src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
                     </div>
                  ))}

                  {/* Carousel arrow buttons */}

                  <div className='swiper-button-prev swiper-button-white'></div>
                  <div className='swiper-button-next swiper-button-white'></div>
               </div>
            </div>
         </div>
      );
   }
}

export default TrailerCarousel;
