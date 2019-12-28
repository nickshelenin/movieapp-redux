import React from 'react';

function MovieList(props) {
  let movies = props.movies;
  return (
    <div className='movie-list'>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />
            <h4>{movie.title}</h4>
            <i>{movie.release_date}</i>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
