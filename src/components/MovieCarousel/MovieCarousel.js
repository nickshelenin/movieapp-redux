import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieCarousel extends Component {
   render() {
      console.log(this.props.movies);

      const movies = this.props.movies;
      return (
         <div className="carousel-container">
            <div className="swiper-container swiper-container-horizontal">
               <h2 className="swiper-container__title">{this.props.title}</h2>
               {/* <img src={this.props.movies[0].poster_path} alt="test" /> */}
               {/* <h1>{movies !== undefined ? movies[0].title : ''}</h1> */}

               <div className="swiper-wrapper">
                  {movies.map(movie => (
                     <div key={movie.id} className="swiper-slide">
                        <img className="swiper-slide__image" src={movie.poster_path} alt="kds" />
                        <h3 className="swiper-slide__title">{movie.title}</h3>
                     </div>
                  ))}
               </div>

               <div className="swiper-button-prev"></div>
               <div className="swiper-button-next"></div>
            </div>

            <hr className="carousel-container__separator" />
         </div>
      );
   }
}

export default MovieCarousel;
