import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  console.log(movies);

  return (
    <div className='movie-list'>
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`}>
            <MovieCard {...movie} />
          </Link>
        );
      })}
    </div>
  );
}

export default MovieList;
