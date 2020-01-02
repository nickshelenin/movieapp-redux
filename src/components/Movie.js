import React, { useState, useEffect } from 'react';

const Movie = (props) => {
  const [movie, setMovie] = useState(undefined);
  const [imdbId, setImdbId] = useState('');

  const fetchMovie = async () => {
    const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';
    const call = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${apiKey}`);
    const data = await call.json();
    setMovie(data);
    setImdbId('tt2527338');
    console.log(imdbId);
  };

  const fetchImdb = async () => {
    if (imdbId !== '') {
      const apiKey = '887d023b';
      const call = await fetch(`http://omdbapi.com/?i=${imdbId}&plot=full&apikey=${apiKey}`);
      const data = await call.json();
      console.log(data);
    } else {
      console.log('something wrong');
    }
  };

  useEffect(() => {
    fetchMovie();
    fetchImdb();
  }, []);

  return (
    <div>
      {movie !== undefined && (
        <div className='movie-page'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />

          <div className='movie-description'>
            <h1 className='text-blue'>{movie.title}</h1>

            <p>
              <span className='imdb'>IMDB</span> {movie.vote_average}
            </p>
            <p>{movie.runtime} min</p>

            <p>{movie.overview}</p>
            <p>
              Genre: <span className='text-blue'>{movie.genres.map((genre) => genre.name + ', ')}</span>
            </p>
            <p>
              Country: <span className='text-blue'>{movie.production_countries.map((cnt) => cnt.name + ', ')}</span>
            </p>
            <p>
              Release: <span className='text-blue'>{movie.release_date}</span>
            </p>

            <p>Budget: {movie.budget}$</p>
            <p>Revenue: {movie.revenue}$</p>

            {movie.homepage !== '' && movie.homepage !== null && (
              <p>
                Homepage:{' '}
                <a href={movie.homepage} target='blank' className='text-blue'>
                  {movie.homepage}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
