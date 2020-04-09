import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import './MovieCarousel.scss';

class MovieCarousel extends Component {
  render() {
    const movies = this.props.movies;

    // Inititalize swiper
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      loop: true,
      observer: true,
      breakpoints: {
        699: {
          slidesPerView: 4
        },
        1145: {
          slidesPerView: 7
        },
        1500: {
          slidesPerView: 9
        }
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    });

    return (
      <div className='swiper-container'>
        <h2 className='swiper-container__title'>{this.props.title}</h2>

        <div className='swiper-wrapper'>
          {movies.map((movie, i) => (
            <div key={i} className='swiper-slide'>
              <Link to={`/info/movie/${movie.id}`}>
                <img className='swiper-slide__image' src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt='' />
                <p className='swiper-slide__title'>{movie.title}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Add arrows */}
        <div className='swiper-button-prev swiper-button-white'></div>
        <div className='swiper-button-next swiper-button-white'></div>
      </div>
    );
  }
}

export default MovieCarousel;
