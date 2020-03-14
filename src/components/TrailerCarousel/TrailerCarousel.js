import React, { Component } from 'react';
import Swiper from 'swiper';
import './TrailerCarousel.scss';

class TrailerCarousel extends Component {
  componentDidMount() {
    const slider = new Swiper('.trailer-swiper-container', {
      slidesPerView: 1,
      loop: true,
      observer: true,
      centeredSlides: true,
      breakpoints: {
        800: {
          slidesPerView: 2
        }
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    });
  }

  render() {
    return (
      <div className='trailer-swiper-container'>
        <div className='swiper-wrapper'>
          {this.props.trailers.map(trailer => (
            <div key={trailer.key} className='swiper-slide'>
              <iframe title='1' width='420' height='315' src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
            </div>
          ))}
        </div>

        {/* Add arrows */}
        <div className='swiper-button-prev  swiper-button-white'></div>
        <div className='swiper-button-next swiper-button-white'></div>
      </div>
    );
  }
}

export default TrailerCarousel;
