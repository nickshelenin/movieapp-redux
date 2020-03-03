import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";

import "./HomeHeader.scss";

export class HomeHero extends Component {
   // Slice the release date to display only a year

   getYear = date => {
      return date.slice(0, 4);
   };

   // Slice text to 450 characters

   sliceText = text => {
      return text.slice(0, 450) + "...";
   };

   componentDidMount() {
      // Initialize swiper
      // const slider = new Swiper(".hero-swiper-container", {
      //    slidesPerView: 1,
      //    loop: true,
      //    observer: true,
      //    autoplay: {
      //       delay: 5000
      //    },
      //    pagination: {
      //       el: ".swiper-pagination",
      //       clickable: true
      //    }
      // });
   }

   render() {
      // Display only 10 movies in hero slider

      (() => {
         const homeSwiper = new Swiper(".header-swiper-container", {
            slidesPerView: 1,
            loop: true,
            observer: true,

            autoplay: {
               delay: 10000
            },

            pagination: {
               el: ".header-swiper-pagination",
               clickable: true
            }
         });
      })();

      const movies = this.props.movies.slice(0, 10);

      return (
         <div className='header-swiper-container'>
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
                           <Link to={`/info/movie/${movie.id}`}>
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

            {/* Add pagination */}
            <div className='header-swiper-pagination'></div>
         </div>
      );
   }
}

export default HomeHero;
