import React, { Component } from "react";
import { API_KEY } from "../../config";

class MovieDetails extends Component {
   state = {
      movieDetails: null,
      cast: null
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
      const url = `https://api.themoviedb.org/3/person/449924/combined_credits?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(
            data =>
               this.setState({
                  cast: data
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   componentDidMount() {
      this.fetchMovie();
      this.fetchCast();
   }

   render() {
      //   const movie = this.state.movieDetails !== null && this.state.movieDetails;
      console.log(this.state.movieDetails);

      return (
         <div className='movie-details-container'>
            {this.state.movieDetails !== null && (
               <div>
                  <img src={`http://image.tmdb.org/t/p/w185/${this.state.movieDetails.poster_path}`} alt='test' />

                  <h1>{this.state.movieDetails.title}</h1>
               </div>
            )}
         </div>
      );
   }
}

export default MovieDetails;
