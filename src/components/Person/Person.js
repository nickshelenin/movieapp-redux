import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../config';
import { Link } from 'react-router-dom';
import './Person.scss';

class Person extends Component {
  state = {
    person: null,
    personMovies: null,
  };

  // fetch person profile
  fetchPerson = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/person/${id}/?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          person: data,
        })
      )
      .catch((error) => console.log('Error: ' + error));
  };

  // fetch person's movies and tv shows
  fetchPersonMovies = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/person/${id}/combined_credits/?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          personMovies: data.cast,
        })
      )
      .catch((error) => console.log('Error: ' + error));
  };

  calculateAge = (num) => {
    const age = num.substring(0, 4);
    const currentYear = new Date().getFullYear();
    return currentYear - age + ' years old';
  };

  componentDidMount() {
    this.fetchPerson();
    this.fetchPersonMovies();
  }

  render() {
    const person = this.state.person;
    const personMovies = this.state.personMovies;

    return (
      person !== null &&
      personMovies !== null && (
        <div className='person-container'>
          <div className='person-profile-container'>
            <div className='person-profile'>
              <div className='person-profile-image'>
                <img src={`${IMAGE_URL}/${person.profile_path}`} alt='' />
              </div>

              <div className='person-biography'>
                <div className='category'>
                  <span className='category__title'>Name: </span>
                  <p>{person.name}</p>
                </div>

                <div className='category'>
                  <span className='category__title'>Known for: </span>
                  <p>{person.known_for_department}</p>
                </div>

                {person.birthday !== null && person.place_of_birth !== null && (
                  <div className='category'>
                    <span className='category__title'>Born: </span>
                    <p>
                      {person.birthday !== null && person.birthday}
                      <span>, </span> {person.place_of_birth !== null && person.place_of_birth}
                    </p>
                  </div>
                )}

                {person.deathday === null && person.birthday !== null && (
                  <div className='category'>
                    <span className='category__title'>Age: </span>
                    <p>{person.birthday !== null && this.calculateAge(person.birthday)}</p>
                  </div>
                )}

                {person.deathday !== null && (
                  <div className='category'>
                    <span className='category__title'>Died: </span>
                    <p>{person.deathday}</p>
                  </div>
                )}

                <div className='category biography-container'>
                  <p>{person.biography}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='person-movies-container'>
            <h1>{person.name}'s movies</h1>

            <div className='person-movies'>
              {personMovies.map(
                (movie) =>
                  // do not display movie if there's not poster image
                  movie.poster_path !== null && (
                    <div className='movie-thumb' key={movie.credit_id}>
                      <Link to={`/info/${movie.media_type}/${movie.id}`}>
                        <img src={`${IMAGE_URL}/${movie.poster_path}`} alt='test' />
                        <p>{movie.title || movie.name}</p>
                        {movie.character && <p style={{ color: '#f5de50' }}>as {movie.character}</p>}
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
