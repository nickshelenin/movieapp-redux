import React, { Component } from "react";
import { API_KEY } from "../../config";
import TrailerCarousel from "../TrailerCarousel/TrailerCarousel";

import "./MovieDetails.scss";

class MovieDetails extends Component {
   state = {
      movieDetails: null,
      cast: null,
      trailers: null
   };

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

      // console.log(movieDetails);

      return (
         <div className='movie-details-container'>
            {movieDetails !== null && (
               <>
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

                  <div className='movie-details-body'>
                     <div className='summary-container'>
                        <h1>summary</h1>
                        <p>{movieDetails.overview}</p>
                     </div>
                  </div>

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

                  <div>{trailers !== null && <TrailerCarousel trailers={trailers} />}</div>
               </>
            )}
         </div>
      );
   }
}

export default MovieDetails;
