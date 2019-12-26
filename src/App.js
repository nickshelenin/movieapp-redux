import React from 'react';
import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movie from './components/Movie';

const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';

class App extends React.Component {
  state = {
    movies: [],
    latestMovies: []
  };

  fetchMovies = async (e) => {
    e.preventDefault();

    const movieSearch = e.target.elements.movieSearch.value;
    const call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearch}`);
    const data = await call.json();

    if (movieSearch) {
      this.setState({
        movies: data.results
      });
    } else {
      this.setState({
        movies: []
      });
    }
  };

  fetchLatestMovies() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          latestMovies: data.results
        })
      );
  }

  componentDidMount() {
    this.fetchLatestMovies();
  }

  render() {
    let latestMovies = this.state.latestMovies;
    let movies = this.state.movies;
    console.log(movies);

    return (
      <>
        <Router>
          <h1>Movie search</h1>

          <Route exact path='/'>
            <p>{this.state.movies.budget}</p>
            <Form loadData={this.fetchMovies} />

            <MovieList movies={this.state.movies} />
          </Route>

          {movies && (
            <div className='movieList'>
              {latestMovies.map((latestMovie) => {
                return (
                  <div key={latestMovie.id} className='movieCard'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + latestMovie.poster_path} alt='' />

                    <p>{latestMovie.title}</p>
                  </div>
                );
              })}
            </div>
          ) }

          <Route exact path='/movie/:id' component={Movie} />
        </Router>
      </>
    );
  }
}

export default App;
