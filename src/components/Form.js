import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.loadMovies} >
      <input type='text' placeholder='Search for movie' name='search' />
      <button>Search</button>
    </form>
  );
}

export default Form;
