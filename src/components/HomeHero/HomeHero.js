import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";

import "./HomeHero.scss";

export class HomeHero extends Component {
   render() {
      console.log(this.props.movies);

      const slider = new Swiper(".hero-swiper-container", {
         slidesPerView: 1,
         loop: true,
         spaceBetween: 0,
         observer: true,

         autoplay: {
            delay: 5000
         },

         pagination: {
            el: ".swiper-pagination",
            type: "bullets"
         }
      });
      return (
         <div className='hero-container'>
            <div className='hero-swiper-container'>
               <div className='swiper-wrapper hero-slider'>
                  {this.props.movies.map((movie, i) => {
                     //   if (i >= 5) {
                     return (
                        <div
                           className='swiper-slide hero-slide'
                           style={{
                              backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0, .6)), url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                           }}
                        >
                           <h1>{movie.original_title}</h1>
                        </div>
                     );
                     //   }
                  })}
               </div>

               <div className='swiper-pagination'></div>
            </div>
         </div>
      );
   }
}

export default HomeHero;
