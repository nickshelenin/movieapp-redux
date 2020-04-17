import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../config';
import Swiper from 'swiper';
import './HomeHeader.scss';

export class HomeHero extends Component {
  // Slice the release date to display only a year
  getYear = (date) => {
    return date.slice(0, 4);
  };

  // Slice text to 450 characters
  sliceText = (text) => {
    return text.slice(0, 450) + '...';
  };

  componentDidMount() {
    // Initialize swiper
    const slider = new Swiper('.header-swiper-container', {
      slidesPerView: 1,
      loop: true,
      observer: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.header-swiper-pagination',
        clickable: true,
      },
    });
  }

  render() {
    // get data of only 10 movies
    const movies = this.props.movies.slice(0, 10);

    return (
      <div className='header-swiper-container'>
        <div className='swiper-wrapper'>
          {movies.map((movie) => {
            return (
              <div
                className='swiper-slide'
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0, .9)), url(${IMAGE_URL}/original/${movie.poster_path}) `,
                }}
                key={movie.id}
              >
                <div className='meta'>
                  <Link to={`/info/movie/${movie.id}`}>
                    <p className='title'>
                      {movie.title} ({this.getYear(movie.release_date)})
                    </p>
                  </Link>

                  <p className='rating'>Rating {movie.vote_average}</p>

                  <div className='desc'>
                    <p>{this.sliceText(movie.overview)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add pagination */}
        <div className='header-swiper-pagination'></div>
      </div>
    );
  }
}

export default HomeHero;
