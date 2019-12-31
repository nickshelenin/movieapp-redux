import React from 'react';

function MovieCard(props) {
  return (
    <div key={props.id} className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt='' />
      <h4>{props.title}</h4>
      <i>{props.release_date}</i>
    </div>
  );
}

export default MovieCard;
