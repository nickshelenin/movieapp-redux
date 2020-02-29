import React, { Component } from "react";
import Swiper from "swiper";

import "./TrailerCarousel.scss";

class TrailerCarousel extends Component {
   render() {
      // const slider = new Swiper(".trailer-swiper-container", {
      //    init: true,
      //    slidesPerView: 3,
      //    loop: true,
      //    spaceBetween: 0,
      //    observer: true,
      //    centeredSlides: true,

      //    breakpoints: {
      //       1500: {
      //          slidesPerView: 2
      //       },
      //       800: {
      //          slidesPerView: 1
      //       }
      //    },
      //    pagination: {
      //       el: ".swiper-pagination",
      //       clickable: true
      //    },
      //    navigation: {
      //       nextEl: ".swiper-button-next",
      //       prevEl: ".swiper-button-prev"
      //    }
      // });

      // (() => {
      //    const sliderEl = document.querySelectorAll(".trailer-swiper-container");
      //    if (!sliderEl) {
      //       return;
      //    }
      //    const slider = new Swiper(sliderEl, {
      //       init: true,
      //       slidesPerView: 3,
      //       loop: true,
      //       spaceBetween: 0,
      //       observer: true,
      //       centeredSlides: true,

      //       breakpoints: {
      //          1500: {
      //             slidesPerView: 2
      //          },
      //          800: {
      //             slidesPerView: 1
      //          }
      //       },
      //       pagination: {
      //          el: ".swiper-pagination",
      //          clickable: true
      //       },
      //       navigation: {
      //          nextEl: ".swiper-button-next",
      //          prevEl: ".swiper-button-prev"
      //       }
      //    });
      // })();

      return (
         <div className='trailer-carousel'>
            <div className='trailer-swiper-container'>
               <div className='swiper-wrapper'>
                  {this.props.trailers.map(trailer => (
                     <div key={trailer.key} className='swiper-slide'>
                        <iframe title='1' width='420' height='315' src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
                     </div>
                  ))}
               </div>

               <div className='swiper-button-prev swiper-button-white'></div>
               <div className='swiper-button-next swiper-button-white'></div>

               <div className="swiper-pagination"></div>
            </div>
         </div>
      );
   }
}

export default TrailerCarousel;
