import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";

import "./HomeHero.scss";

export class HomeHero extends Component {
   // Slice the release date to display only a year

   getYear = date => {
      return date.slice(0, 4);
   };

   sliceText = text => {
      return text.slice(0, 450) + "...";
   };

   render() {
      // console.log(this.props.movies);

      const movies = this.props.movies.slice(0, 10);

      const slider = new Swiper(".hero-swiper-container", {
         slidesPerView: 1,
         loop: true,
         observer: true,

         autoplay: {
            delay: 5000
         },

         pagination: {
            el: ".swiper-pagination",
            clickable: true
         }
      });
      return (
         <div className='hero-swiper-container'>
            <div className='swiper-wrapper'>
               {movies.map((movie, i) => {
                  return (
                     <div
                        className='swiper-slide'
                        style={{
                           backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0, .9)), url(http://image.tmdb.org/t/p/original/${movie.poster_path}) `
                        }}
                     >
                        <div className='meta'>
                           <Link to={`/film/${movie.id}`}>
                              <p className='title'>
                                 {movie.title} ({this.getYear(movie.release_date)})
                              </p>
                           </Link>

                           <p className='rating'>Rating {movie.vote_average}</p>

                           <div className='desc'>
                              <p>{this.sliceText(movie.overview)}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className='swiper-pagination'></div>
         </div>
      );
   }
}

export default HomeHero;
