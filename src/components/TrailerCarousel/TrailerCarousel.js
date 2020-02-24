import React, { Component } from "react";

// import Swiper from "swiper";
// import "swiper/css/swiper.css";
// import "swiper/js/swiper.min.js";

// import Flickity from "flickity";
// import "flickity/dist/flickity.min.css";

import "./TrailerCarousel.scss";

class TrailerCarousel extends Component {
   render() {
      // Initiate carousel

      // const el = document.querySelector(".trailer-container");

      // const flkty = new Flickity(el, {
      //    contain: true
      //    // pageDots: false,
      //    // wrapAround: true,
      //    // freeScroll: true
      // });

      return (
         <div className='trailer-carousel'>
            {this.props.trailers.map(trailer => (
               <div key={trailer.id} className='carousel-cell'>
                  <iframe title='1' width='420' height='315' src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
               </div>
            ))}
         </div>
      );
   }
}

export default TrailerCarousel;

// (() => {
//    const sliderEl = document.querySelectorAll(".trailer-swiper-container");
//    if (!sliderEl) {
//       return;
//    }
//    const slider = new Swiper(sliderEl, {
//       // init: true,
//       // slidesPerView: 5,
//       // loop: true,
//       // spaceBetween: 0,
//       // observer: true,
//       // centeredSlides: true,

//       breakpoints: {
//          1145: {
//             slidesPerView: 5
//          },
//          699: {
//             slidesPerView: 3
//          },
//          100: {
//             slidesPerView: 2
//          }
//       },
//       navigation: {
//          prevEl: ".swiper-button-prev",
//          nextEl: ".swiper-button-next"
//       }
//    });
// })();
