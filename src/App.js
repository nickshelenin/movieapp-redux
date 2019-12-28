import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import LatestMovies from './components/LatestMovies';

const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  const fetchMovies = async (e) => {
    e.preventDefault();

    const searchInput = e.target.elements.search.value;
    const call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`);
    const data = await call.json();

    if (searchInput) {
      setMovies(data.results);
    } else {
      setMovies([]);
    }
  };

  const fetchLatestMovies = () => {
    const omdbKey = '61be56e8';
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false`)
      // fetch(`http://img.omdbapi.com/?apikey=${omdbKey}`)
      .then((res) => res.json())
      .then((data) => setLatestMovies(data.results));
  };

  const outputMovies = () => {
    if (movies.length === 0) {
      return <LatestMovies movies={latestMovies} />;
    } else {
      return <MovieList movies={movies} />;
    }
  };

  useEffect(() => {
    fetchLatestMovies();
  }, []);

  return (
    <div>
      <h1>Search movie app</h1>

      <Form loadMovies={fetchMovies} />

      {outputMovies()}
    </div>
  );
};

export default App;
