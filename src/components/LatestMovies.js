import React from 'react';

function LatestMovies(props) {
  let movies = props.movies;

  return (
    <div className='movie-list'>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className='movie-card'>
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt='' />
            <p>{movie.title}</p>
            <i>{movie.release_date}</i>
          </div>
        );
      })}
    </div>
  );
}

export default LatestMovies;
