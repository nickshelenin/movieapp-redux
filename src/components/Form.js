import React from 'react';
import { Link } from 'react-router-dom';

function Form({ loadMovies }) {
  return (
    <form onSubmit={loadMovies}>
      <input type='text' name='search' placeholder='Enter keyword here'  />
    </form>
  );
}

export default Form;
