import React, { Component } from "react";
import { Link } from "react-router-dom";

import Swiper from "swiper";

import "./MovieCarousel.scss";

class MovieCarousel extends Component {
   render() {
      // Initiates carousel

      // const sliderEl = document.querySelectorAll(".swiper-container");
      // if (!sliderEl) {
      //    return;
      // }
      const slider = new Swiper(".swiper-container", {
         init: true,
         slidesPerView: 7,
         loop: true,
         spaceBetween: 14,
         observer: true,

         breakpoints: {
            1145: {
               slidesPerView: 5
            },
            699: {
               slidesPerView: 3
            },
            0: {
               slidesPerView: 1
            }
         },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
         }
      });

      const movies = this.props.movies;
      return (
         <div className='swiper-container'>
            <h2 className='swiper-container__title'>{this.props.title}</h2>

            <div className='swiper-wrapper'>
               {movies.map((movie, i) => (
                  <div key={movie.id} className='swiper-slide movie-thumb'>
                     <Link to={`/film/${movie.id}`}>
                        <img className='swiper-slide__image' src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='' />
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
