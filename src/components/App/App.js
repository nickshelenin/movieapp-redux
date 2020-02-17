import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import Header from '../Header/Header';

class App extends React.Component {
   render() {
      return (
         <Router>
            <Header />
            
            <Route exact path="/" component={Home} />
            <Route path="/search/:title" component={SearchResults} />
         </Router>
      );
   }
}

export default App;
