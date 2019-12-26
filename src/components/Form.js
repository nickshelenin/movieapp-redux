import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.loadData}>
          <input type='text' placeholder='search for movie' name='movieSearch' />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
