import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import LatestMovies from './components/LatestMovies';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Movie from './components/Movie';
import Header from './components/Header';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const apiKey = 'e6fa15c602cbdbd00979f735cba5d1f1';

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

  const fetchLatestMovies = async () => {
    const call = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&primary_release_year=2019&page=1`
    );
    const data = await call.json();
    setLatestMovies(data.results);
  };

  useEffect(() => {
    fetchLatestMovies();
  }, []);

  const outputMovies = () => {
    if (movies.length === 0) {
      return <LatestMovies movies={latestMovies} />;
    } else {
      return <MovieList movies={movies} />;
    }
  };

  return (
    <div>
      <Router>
        <Header />

        <Form loadMovies={fetchMovies} />

        <div className='home-container'>
          <Route exact path='/' component={LatestMovies}>
            {outputMovies()}
          </Route>

          <Route path='/movie/:id' component={Movie} />
        </div>
      </Router>
    </div>
  );
};

export default App;
