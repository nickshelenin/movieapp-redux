import React, { Component } from 'react';
import Header from '../Header/Header';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import { API_KEY } from '../../config';
import HomeHeader from '../HomeHeader/HomeHeader';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './Home.scss';

class Home extends Component {
  state = {
    moviesUpcoming: [],
    moviesPopular: [],
    moviesTopRated: [],
    type: 'tv'
  };

  // FETCHING UPCOMING MOVIES
  fetchUpcomingMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          moviesUpcoming: data.results
        })
      )
      .catch(error => console.log(error));
  };

  // FETCHING MOVIES BY POPULARITY
  fetchPopularMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          moviesPopular: data.results
        })
      )
      .catch(error => console.log(error));
  };

  // FETCHING MOVIES BY RATING
  fetchTopRatedMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          moviesTopRated: data.results
        })
      )
      .catch(error => console.log(error));
  };
  

  componentDidMount() {
    this.fetchUpcomingMovies();
    this.fetchPopularMovies();
    this.fetchTopRatedMovies();
  }

  render() {
    return (
      <div className='home-container'>
        {/* <HomeHeader movies={this.state.moviesUpcoming} /> */}

        <div className='home-sliders'>
          <MovieCarousel title='Upcoming' movies={this.state.moviesUpcoming} />
          <MovieCarousel title='Popular' movies={this.state.moviesPopular} />
          <MovieCarousel title='Top Rated' movies={this.state.moviesTopRated} />
        </div>
      </div>
    );
  }
}

export default Home;
