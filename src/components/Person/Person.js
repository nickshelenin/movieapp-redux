import React, { Component } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import { Link } from "react-router-dom";

import "./Person.scss";

class Person extends Component {
   state = {
      person: null,
      personMovies: null
   };

   // FETCH PERSON PROFILE

   fetchPerson = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/person/${id}/?api_key=${API_KEY}&language=en-US`;
      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  person: data
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   fetchPersonMovies = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/person/${id}/combined_credits/?api_key=${API_KEY}&language=en-US`;
      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  personMovies: data.cast
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   componentDidMount() {
      this.fetchPerson();
      this.fetchPersonMovies();
   }

   render() {
      //   const person = this.sate.person;

      console.log(this.state.personMovies);

      return (
         this.state.person !== null &&
         this.state.personMovies !== null && (
            <div className='person-container'>
               <div className='person-biography'>
                  <img src={`http://image.tmdb.org/t/p/w185/${this.state.person.profile_path}`} alt='test' />

                  <h1>{this.state.person.name}</h1>

                  <p>{this.state.person.biography}</p>
               </div>

               <div>
                  <h1>{this.state.person.name}'s movies</h1>
                  <div className='person-movies'>
                     {this.state.personMovies.map(
                        movie =>
                           // display movie if poster exists

                           movie.poster_path !== null && (
                              <div>
                                 <Link to={`/film/${movie.id}`}>
                                    <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='test' />
                                 </Link>
                              </div>
                           )
                     )}
                  </div>
               </div>
            </div>
         )
      );
   }
}

export default Person;
