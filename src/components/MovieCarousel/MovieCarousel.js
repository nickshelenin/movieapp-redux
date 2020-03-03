import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "./MovieCarousel.scss";

class MovieCarousel extends Component {
   render() {
      // Initiates carousel

      const slider = new Swiper(".swiper-container", {
         // init: true,
         // slidesPerView: 3,
         loop: true,
         spaceBetween: 14,
         observer: true,

         breakpoints: {},
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
         }
      });

      // (() => {
      //    const sliderEl = document.querySelectorAll(".swiper-container");
      //    if (!sliderEl) {
      //       return;
      //    }
      //    const slider = new Swiper(sliderEl, {
      //       init: true,
      //       slidesPerView: 7,
      //       loop: true,
      //       spaceBetween: 14,
      //       observer: true,

      //       breakpoints: {
      //          1145: {
      //             slidesPerView: 5
      //          },
      //          699: {
      //             slidesPerView: 3
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

      const movies = this.props.movies;
      return (
         <div className='swiper-container'>
            <h2 className='swiper-container__title'>{this.props.title}</h2>

            <div className='swiper-wrapper'>
               {movies.map(movie => (
                  <div key={movie.id} className='swiper-slide'>
                     <Link to={`/${movie.media_type}/${movie.id}`}>
                        <img className='swiper-slide__image' src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='test' />
                        <p className='swiper-slide__title'>{movie.title}</p>
                     </Link>
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

export default MovieCarousel;
