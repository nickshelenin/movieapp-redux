import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-container'>
      <header>
        <h1>Movie Search</h1>
        <div>
          <nav>
            <ul>
              <Link exact to='/'>
                <li>Home</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
