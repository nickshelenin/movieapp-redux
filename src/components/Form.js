import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.loadMovies}>
      <input type='text' name='search' />
      <button>Search</button>
    </form>
  );
}

export default Form;
