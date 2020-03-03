import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper } from "swiper/js/swiper.esm.js";

import "./MovieCarousel.scss";

class MovieCarousel extends Component {
   componentDidMount() {
      // Inititalize swiper
   }
   render() {
      const movies = this.props.movies;

      return (
         <div className='swiper-container'>
            <h2 className='swiper-container__title'>{this.props.title}</h2>

            <div className='swiper-wrapper'>
               {movies.map((movie, i) => (
                  <div key={i} className='swiper-slide'>
                     <Link to={`/info/movie/${movie.id}`}>
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
