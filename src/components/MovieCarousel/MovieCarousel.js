import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MovieCarousel.scss';

class MovieCarousel extends Component {
   render() {
      // console.log(this.props.movies);

      const movies = this.props.movies;
      return (
         <div className="carousel-container wow">
            <div className="swiper-container">
               <h2 className="swiper-container__title">{this.props.title}</h2>

               <div className="swiper-wrapper">
                  {movies.map(movie => (
                     <div key={movie.id} className="swiper-slide movie-thumb">
                        <img className="swiper-slide__image" src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="   " />
                        <h3 className="swiper-slide__title">{movie.title}</h3>
                     </div>
                  ))}
               </div>

               {/* Arrow buttons */}

               <div className="swiper-button-prev swiper-button-white"></div>
               <div className="swiper-button-next swiper-button-white"></div>
            </div>

            {/* <hr className="carousel-container__separator" /> */}
         </div>
      );
   }
}

export default MovieCarousel;
