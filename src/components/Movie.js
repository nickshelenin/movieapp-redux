import React, { Component } from 'react';
const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';

export class Movie extends Component {
  state = {
    movie: undefined
  };

  fetchMovie = async () => {
    const call = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}`);
    const data = await call.json();

    this.setState({
      movie: data
    });

    console.log(this.state.movie);
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    // const [...] = this.state.movie
    let movie = this.state.movie;

    return (
      <div>
        {movie !== undefined && (
          <>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Genre: {movie.genres.map((genre) => genre.name + ', ')}</p>
            <p>Country: {movie.production_countries.map((cnt) => cnt.name + ', ')}</p>
            <p>Release: {movie.release_date}</p>
            {movie.homepage !== '' && (
              <a href={movie.homepage} target='blank'>
                Movie homepage
              </a>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Movie;
