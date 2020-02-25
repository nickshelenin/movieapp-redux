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
      const personMovies = this.state.personMovies;

      console.log(this.state.person);

      return (
         person !== null &&
         personMovies !== null && (
            <div className='person-container'>
               <div>
                  <div className='person-profile'>
                     <img src={`http://image.tmdb.org/t/p/w185/${person.profile_path}`} alt='test' />

                     <div className='person-biography'>
                        <p>{person.name}</p>

                        <p>
                           {person.gender === 1 ? "female" : "male"} <span>|</span> {person.known_for_department}
                        </p>

                        {person.birthday !== null && (
                           <p>
                              {person.birthday} <span>|</span> {person.birthday !== null && this.calculateAge(person.birthday)}
                           </p>
                        )}
                        <a href={person.homepage} target='blank'>
                           {person.homepage}
                        </a>
                     </div>
                  </div>

                  <div className=''>
                     <p>{person.biography}</p>
                  </div>
               </div>

               <div>
                  <h1>{person.name}'s movies</h1>
                  <div className='person-movies'>
                     {personMovies.map(
                        movie =>
                           // display movie if poster exists

                           movie.poster_path !== null && (
                              <div>
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
