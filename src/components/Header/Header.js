import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  state = {
    searchValue: ''
  };

  handleSeachInput = e => {
    e.preventDefault();
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <header>
        <div className='header-container'>
          <div className='logo-container'>
            <Link to='/'>
              <img src='./img/logo.png' alt='' />
            </Link>
          </div>

          <form className='search-form'>
            <div className='input-container'>
              <input type='text' name='search' placeholder='Search...' autoComplete='off' onChange={this.handleSeachInput} />

              <Link to={this.state.searchValue !== '' ? `/search/${this.state.searchValue}` : ''}>
                <button type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
