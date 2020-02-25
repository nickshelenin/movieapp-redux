import React, { Component } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";

class Person extends Component {
   state = {
      person: null
   };

   // FETCH PERSON PROFILE

   fetchActor = () => {
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

   componentDidMount() {
      this.fetchActor();
   }

   render() {
      const perso = this.sate.person;
      console.log(this.state.person);

      return (
         <div>
            <img src={`http://image.tmdb.org/t/p/w185/${this.state.person !== null && this.state.person.profile_path}`} alt='test' />

            <h1>{}</h1>
         </div>
      );
   }
}

export default Person;
