import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper } from "swiper/js/swiper.esm.js";

import "./MovieCarousel.scss";

class MovieCarousel extends Component {
   componentDidMount() {
      // Inititalize swiper 

      const swiper = new Swiper(".swiper-container", {
         slidesPerView: 2,
         loop: true,
         spaceBetween: 14,
         observer: true,

         breakpoints: {
            699: {
               slidesPerView: 3
            },
            1145: {
               slidesPerView: 6
            }
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true
         },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
         }
      });
   }
   render() {
      // Initialize swiper slider

      const movies = this.props.movies;

      return (
         <div className='swiper-container'>
            <h2 className='swiper-container__title'>{this.props.title}</h2>

            <div className='swiper-wrapper'>
               {movies.map((movie, i) => (
                  <div key={i} className='swiper-slide'>
                     <Link to={`/movie/${movie.id}`}>
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
