import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import LatestMovies from './components/LatestMovies';

const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';

class App extends Component {
  state = {
    movies: [],
    latestMovies: []
  };

  fetchLatestMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          latestMovies: data.results
        })
      );
  };

  fetchMovies = async (e) => {
    e.preventDefault();

    const searchInput = e.target.elements.search.value;
    const call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`);
    const data = await call.json();

    if (searchInput) {
      this.setState({
        movies: data.results
      });
    } else {
      this.setState({
        movies: []
      });
    }
  };

  outputMovies = () => {
    if (this.state.movies.length == 0) {
      return <LatestMovies movies={this.state.latestMovies} />;
    } else {
      return <MovieList movies={this.state.movies} />;
    }
  };

  componentDidMount() {
    this.fetchLatestMovies();
    this.outputMovies();
  }

  render() {
    return (
      <div>
        <h1>Movie search app</h1>
        <Form loadMovies={this.fetchMovies} />

        {this.outputMovies()}
      </div>
    );
  }
}

export default App;
