import React, { Component } from 'react';
import Header from '../header/Header';
import MovieThumb from '../movieThumb/movieThumb';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import Swiper from 'swiper';

import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';

import './Home.scss';

// import Movies from "../Movies";
// import LatestMovies from "../LatestMovies";
// import Movie from "../Movie";
// import Header from "../Header";

class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         moviesUpcoming: [],
         moviesPopular: [],
         moviesTopRated: []
      };
   }

   fetchUpcomingMovies = async () => {
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

   fetchPopularMovies = async () => {
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

   fetchTopRatedMovies = async () => {
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

      console.log(this.state.moviesUpcoming);
   }

   render() {
      // console.log(this.state.moviesUpcoming);

      (() => {
         const sliderEl = document.querySelectorAll('.swiper-container');
         if (!sliderEl) {
            return;
         }
         const slider = new Swiper(sliderEl, {
            init: true,
            slidesPerView: 7,
            loop: true,
            spaceBetween: 14,
            observer: true,

            breakpoints: {
               1145: {
                  slidesPerView: 5
               },
               699: {
                  slidesPerView: 3
               }
            },
            pagination: {
               el: '.swiper-pagination',
               clickable: true
            },
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
            }
         });
      })();
      return (
         <div>
            <Header />

            <div className="home-container">
               <MovieCarousel title="Upcoming" movies={this.state.moviesUpcoming} />
               {/* <MovieCarousel title="Popular" movies={this.state.moviesPopular} />
               <MovieCarousel title="Top Rated" movies={this.state.moviesTopRated} /> */}
            </div>
         </div>
      );
   }
}

export default Home;
