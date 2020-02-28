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

   calculateAge = num => {
      const age = num.substring(0, 4);
      const currentYear = new Date().getFullYear();
      return currentYear - age + " years old";
   };

   componentDidMount() {
      this.fetchPerson();
      this.fetchPersonMovies();
   }

   render() {
      const person = this.state.person;
      const personMovies = this.state.personMovies === null ? "" : this.state.personMovies.slice(0, 5);

      console.log(this.state.person);

      return (
         person !== null &&
         personMovies !== null && (
            <div className='person-container'>
               <div className='person-profile-container'>
                  <div className='person-profile'>
                     <div>
                        <img src={`http://image.tmdb.org/t/p/w185/${person.profile_path}`} alt='test' />
                     </div>

                     <div className='person-biography'>
                        <div className='category'>
                           <span>Name: </span>
                           <p>{person.name}</p>
                        </div>

                        <div className='category'>
                           <span>Known for: </span>
                           <p>{person.known_for_department}</p>
                        </div>

                        <div className='category'>
                           <span>Born: </span>
                           <p>
                              {person.birthday !== null && person.birthday}
                              <span>, </span> {person.place_of_birth !== null && person.place_of_birth}
                           </p>
                        </div>

                        <div className='category'>
                           <span>Age: </span>
                           <p>{person.birthday !== null && this.calculateAge(person.birthday)}</p>
                        </div>

                        <div className='category'>
                           <p>{person.biography}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='person-movies-container'>
                  <h1>{person.name}'s movies</h1>
                  <div className='person-movies'>
                     {personMovies.map(
                        movie =>
                           // display movie if poster exists

                           movie.poster_path !== null && (
                              <div className='movie-thumb'>
                                 <Link to={`/film/${movie.id}`}>
                                    <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='test' />
                                    <p>{movie.title}</p>
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
