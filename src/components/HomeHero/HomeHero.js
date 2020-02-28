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
            delay: 1000
         },

         pagination: {
            el: ".swiper-pagination",
            // type: "bullets"
            clickable: true,
            // autoplayDisableOnInteraction: true
            disableOnInteraction: false
         }
      });
      return (
         <div className='hero-swiper-container'>
            <div className='swiper-wrapper'>
               {this.props.movies.map((movie, i) => {
                  // if (i > 3 && i < 7) {
                     return (
                        <div
                           className='swiper-slide'
                           style={{
                              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0, .9)), url(http://image.tmdb.org/t/p/original/${movie.backdrop_path}) `
                           }}
                        >
                           <div className='meta'>
                              <Link to={`/film/${movie.id}`}>
                                 <p className='title'>{movie.title}</p>
                              </Link>
                              <div>
                                 <p></p>
                              </div>
                           </div>
                        </div>
                     );
                  // }
               })}
            </div>
            <div className='swiper-pagination'></div>
         </div>
      );
   }
}

export default HomeHero;
