import React, { useState, useEffect } from 'react';

const Movie = (props) => {
  const [movie, setMovie] = useState(undefined);

  const fetchMovie = async () => {
    const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';
    const call = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${apiKey}`);
    const data = await call.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      {movie !== undefined && (
        <>
          {movie.media_type === 'tv' ? (
            <>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />
              <h3>{movie.name}</h3>
              <p>{movie.overview}</p>
              <p>Genre: {movie.genres.map((genre) => genre.name + ', ')}</p>
              <p>Country: {movie.origin_country.map((cnt) => cnt.name + ', ')}</p>
              <p>Release: {movie.first_air_date}</p>
              {movie.homepage !== '' && movie.homepage !== null && (
                <a href={movie.homepage} target='blank'>
                  Movie homepage
                </a>
              )}
            </>
          ) : (
            <>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>Genre: {movie.genres.map((genre) => genre.name + ', ')}</p>
              <p>Country: {movie.production_countries.map((cnt) => cnt.name + ', ')}</p>
              <p>Release: {movie.release_date}</p>
              {movie.homepage !== '' && movie.homepage !== null && (
                <a href={movie.homepage} target='blank'>
                  Movie homepage
                </a>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Movie;
