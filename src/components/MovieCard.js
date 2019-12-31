import React from 'react';

function MovieCard(props) {
  return (
    <div key={props.id} className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt='' />

      {props.media_type === 'tv' ? <h4>{props.name}</h4> : <h4>{props.title}</h4>}
    </div>
  );
}

export default MovieCard;
