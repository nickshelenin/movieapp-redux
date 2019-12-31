import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function LatestMovies(props) {
  let movies = props.movies;
  return (
    <div className='movie-list'>
      {movies.map((movie) => {
        return (
          <>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard key={movie.id} {...movie} /> 
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default LatestMovies;
