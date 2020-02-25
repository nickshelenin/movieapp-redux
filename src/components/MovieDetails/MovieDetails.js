import React, { Component } from "react";
import { API_KEY } from "../../config";
import TrailerCarousel from "../TrailerCarousel/TrailerCarousel";
import { Link } from "react-router-dom";

// import Swiper from "swiper";
// import "swiper/css/swiper.css";
// import "swiper/js/swiper.min.js";

import "./MovieDetails.scss";

class MovieDetails extends Component {
   state = {
      movieDetails: null,
      cast: null,
      actorId: null,
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

   // CONVERT MINUTES INTO HOURS

   timeConvert = num => {
      const hours = num / 60;
      const rhours = Math.floor(hours);

      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);

      return rhours + "h " + rminutes + "m";
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

      console.log(cast);

      return (
         <div className='movie-details-container'>
            {movieDetails !== null && (
               <>
                  {/* MOVIE HERO SECTION */}
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
                              {movieDetails !== null && movieDetails.genres.map(genre => <span key={genre.id}>{genre.name} | </span>)}
                           </div>
                           <p className='runtime'>{this.timeConvert(movieDetails.runtime)}</p>
                           <p>{movieDetails.release_date}</p>
                        </div>
                     </div>
                  </div>

                  {/* SUMMARY */}

                  <div className='movie-details-body'>
                     <div className='summary-container'>
                        <h1>summary</h1>
                        <p>{movieDetails.overview}</p>
                     </div>
                  </div>

                  {/* CAST CONTAINER */}

                  <div className='cast-container'>
                     {cast.map(
                        (person, i) =>
                           // display movie if poster exists

                           person.profile_path !== null && (
                              <div>
                                 <Link to={`/person/${person.id}`}>
                                    <img src={`http://image.tmdb.org/t/p/w185/${person.profile_path}`} alt='test' />
                                    <p className='person'>{person.name}</p>
                                    <p className='character'>{person.character}</p>
                                 </Link>
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
