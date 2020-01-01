import React from 'react';

function MovieCard(props) {
  return (
    <div key={props.id} className='movie-card' style={{ display: props.poster_path === null ? 'none' : 'default' }}>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt='' />
      {props.media_type === 'tv' ? <p>{props.name}</p> : <p>{props.title}</p>}
    </div>
  );
}

export default MovieCard;
