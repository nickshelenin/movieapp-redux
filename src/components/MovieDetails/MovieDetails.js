import React, { Component } from "react";
import { API_KEY } from "../../config";
import TrailerCarousel from "../TrailerCarousel/TrailerCarousel";

// import Swiper from "swiper";
// import "swiper/css/swiper.css";
// import "swiper/js/swiper.min.js";

import "./MovieDetails.scss";

class MovieDetails extends Component {
   state = {
      movieDetails: null,
      cast: null,
      trailers: null
   };

   // FETCH MOVIE DETAILS

   fetchMovie = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  movieDetails: data
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH MOVIE CAST

   fetchCast = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  cast: data.cast
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH MOVIE TRAILERS

   fetchTrailers = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  trailers: data.results
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   componentDidMount() {
      this.fetchCast();
      this.fetchMovie();
      this.fetchTrailers();
   }

   render() {
      const movieDetails = this.state.movieDetails;
      const cast = this.state.cast;
      const trailers = this.state.trailers;

      // (() => {
      //    const sliderEl = document.querySelectorAll(".trailer-swiper-container");
      //    if (!sliderEl) {
      //       return;
      //    }
      //    const slider = new Swiper(sliderEl, {
      //       init: true,
      //       slidesPerView: 5,
      //       loop: true,
      //       spaceBetween: 0,
      //       observer: true,
      //       centeredSlides: true,

      //       breakpoints: {
      //          1145: {
      //             slidesPerView: 5
      //          },
      //          699: {
      //             slidesPerView: 3
      //          },
      //          100: {
      //             slidesPerView: 2
      //          }
      //       },
      //       navigation: {
      //          prevEl: ".swiper-button-prev",
      //          nextEl: ".swiper-button-next"
      //       }
      //    });
      // })();

      return (
         <div className='movie-details-container'>
            {movieDetails !== null && (
               <>
                  {/* MOVIE HEADER WITH BACGROUND IMAGE */}
                  <div
                     className='movie-details__header'
                     style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0, .9)), url(http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`
                     }}
                  >
                     <div className='header-info'>
                        <img src={`http://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt='test' />

                        <div className='header-description'>
                           <p className='title'>{movieDetails.title}</p>
                           <p className='rating'>IMDB {movieDetails.vote_average}</p>
                           <div className='genres-container'>
                              <p>{movieDetails.genres[0].name}</p>
                              <span>|</span>
                              <p>{movieDetails.genres[1].name}</p>
                           </div>
                           <p className='runtime'>{movieDetails.runtime} min</p>
                        </div>
                     </div>
                  </div>

                  {/* MOVIE DETAILS */}

                  <div className='movie-details-body'>
                     <div className='summary-container'>
                        <h1>summary</h1>
                        <p>{movieDetails.overview}</p>
                     </div>
                  </div>

                  {/* CAST CONTAINER */}

                  <div className='cast-container'>
                     {cast !== null &&
                        cast.map(
                           actor =>
                              actor.profile_path !== null &&
                              actor.profile_path !== undefined && (
                                 <div>
                                    <img src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt='test' />
                                    <p className='actor'>{actor.name}</p>
                                    <p className='character'>{actor.character}</p>
                                 </div>
                              )
                        )}
                  </div>

                  {/* TRAILERS CONTAINER */}

                  <div className='trailers-container'>{trailers !== null && <TrailerCarousel trailers={trailers} />}</div>
               </>
            )}
         </div>
      );
   }
}

export default MovieDetails;
