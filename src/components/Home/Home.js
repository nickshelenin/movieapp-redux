import React, { Component } from 'react';
import Header from '../Header/Header';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import 'swiper/js/swiper.min.js';

import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';

import './Home.scss';

// import Movies from "../Movies";
// import LatestMovies from "../LatestMovies";
// import Movie from "../Movie";

class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         moviesUpcoming: [],
         moviesPopular: [],
         moviesTopRated: []
      };
   }

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
      // console.log(this.state.moviesUpcoming);

      (() => {
         // const sliderEl = document.querySelectorAll('.swiper-container');
         // if (!sliderEl) {
         //    return;
         // }
         const swiper = new Swiper('.swiper-container', {
            init: true,
            slidesPerView: 7,
            loop: true,
            spaceBetween: 14,

            breakpoints: {
               1145: {
                  slidesPerView: 5
               },
               699: {
                  slidesPerView: 3
               },
               100: {
                  slidesPerView: 2
               }
            },
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
            }
         });
      })();
      return (
         <>
            {/* <Header /> */}

            <div className="home-container">
               <MovieCarousel title="Upcoming" movies={this.state.moviesUpcoming} />
               <MovieCarousel title="Popular" movies={this.state.moviesPopular} />
               <MovieCarousel title="Top Rated" movies={this.state.moviesTopRated} />
            </div>
         </>
      );
   }
}

export default Home;
