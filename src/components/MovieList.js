import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    let movies = this.props.movies;
    return (
      <div className='movieList'>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className='movieCard'>
              <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt=''/>

              <p>{movie.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
