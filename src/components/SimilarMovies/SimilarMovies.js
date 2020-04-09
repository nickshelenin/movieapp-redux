import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import './SimilarMovies.scss';

class SimilarMovies extends Component {
  componentDidMount() {
    const slider = new Swiper('.similar-movies-swiper-container', {
      slidesPerView: 2,
      loop: true,
      observer: true,
      breakpoints: {
        699: {
          slidesPerView: 3
        },
        1145: {
          slidesPerView: 6
        },
        1500: {
          slidesPerView: 7
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  render() {
    return (
      <div className='similar-movies-swiper-container'>
        <div className='swiper-wrapper'>
          {this.props.movies.map(
            movie =>
              // do not display movie if there's no poster
              movie.backdrop_path !== null && (
                <div className='swiper-slide'>
                  <Link to={`/info/${this.props.type === 'movie' ? 'movie' : 'tv'}/${movie.id}`}>
                    <img className='swiper-slide__image' src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='' />
                    <p className='swiper-slide__title'>{movie.title || movie.name}</p>
                  </Link>
                </div>
              )
          )}
        </div>

        {/* Add arrows */}
        <div className='swiper-button-prev swiper-button-white'></div>
        <div className='swiper-button-next swiper-button-white'></div>
      </div>
    );
  }
}

export default SimilarMovies;
