import React, { Component } from 'react';
import { API_KEY } from '../../config';
import { Link } from 'react-router-dom';

import './SearchResults.scss';

class SearchResults extends Component {
  state = {
    searchResults: null,
    page: 1
  };

  fetchResults = () => {
    const { title } = this.props.match.params;
    const url = `https://api.themoviedb.org/3/search/multi/?api_key=${API_KEY}&language=en-US&query=${title}&page=${this.state.page}&include_adult=false`;
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          searchResults: data.results
        })
      )
      .catch(error => console.log(error));
  };

  handleNextPage = () => {
    this.setState({
      page: this.state.searchResults.length === 0 ? this.state.page - 1 : this.state.page + 1
    });
    window.scrollTo({ top: 0 });
  };

  handlePrevPage = () => {
    // Disable prevpage button if current page = 1
    this.setState({
      page: this.state.page !== 1 ? this.state.page - 1 : 1
    });

    this.state.page !== 1 && window.scrollTo({ top: 0 });
  };

  componentDidMount() {
    this.fetchResults();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchResults !== this.state.SearchResults) {
      this.fetchResults();
    }
  }

  render() {
    const { title } = this.props.match.params;

    return (
      <div className='search-results-container'>
        <h1 className='search-results-heading'>Search results for {title}</h1>

        <div className='search-results'>
          {this.state.searchResults !== null &&
            this.state.searchResults.map(searchResult => (
              <>
                {/* do not display movie if there's no poster image */}
                {searchResult.poster_path !== undefined && searchResult.poster_path !== null && (
                  <div className='search-result' key={searchResult.id}>
                    <Link to={`/info/${searchResult.media_type}/${searchResult.id}`}>
                      <img src={`http://image.tmdb.org/t/p/w185/${searchResult.poster_path}`} alt='test' />
                      <p className='search-result-title'>{searchResult.name}</p>
                      <p>{searchResult.title}</p>
                    </Link>
                  </div>
                )}
              </>
            ))}
        </div>

        <div className='page-navigation-buttons'>
          <button onClick={this.handlePrevPage}>Prev</button>
          <button onClick={this.handleNextPage}>Next</button>
        </div>
      </div>
    );
  }
}

export default SearchResults;
