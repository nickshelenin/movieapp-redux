import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../config';
import TrailerCarousel from '../TrailerCarousel/TrailerCarousel';
import { Link } from 'react-router-dom';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import './MovieDetails.scss';

class MovieDetails extends Component {
  state = {
    details: null,
    cast: null,
    actorId: null,
    trailers: null,
    similarMovies: null,
  };

  // Fetch movie details
  fetchMovie = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          details: data,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch movie cast
  fetchMovieCast = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          cast: data.cast,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch movie trailers
  fetchMovieTrailers = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          trailers: data.results,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch similar movies
  fetchSimilarMovies = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          similarMovies: data.results,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch tv details
  fetchTv = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          details: data,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch tv cast
  fetchTvCast = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          cast: data.cast,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch tv trailers
  fetchTvTrailers = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          trailers: data.results,
        })
      )
      .catch((error) => console.log(error));
  };

  // Fetch similar tvs
  fetchSimilarTvs = () => {
    const { id } = this.props.match.params;
    const url = `${API_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          similarMovies: data.results,
        })
      )
      .catch((error) => console.log(error));
  };

  // Convert minutes to hours
  timeConvert = (num) => {
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'm';
  };

  // Abreviate number with letters
  abbreviateNumber = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + ' thousand';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + ' million';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + ' billion';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + ' trillion';
  };

  // Slice release date to leave only year
  sliceDate = (num) => {
    return num.slice(0, 4);
  };

  trim = (data) => {
    return data.slice(0, -1);
  };

  componentDidMount() {
    const { type } = this.props.match.params;

    if (type === 'movie') {
      this.fetchMovie();
      this.fetchMovieCast();
      this.fetchMovieTrailers();
      this.fetchSimilarMovies();
    } else if (type === 'tv') {
      this.fetchTv();
      this.fetchTvCast();
      this.fetchTvTrailers();
      this.fetchSimilarTvs();
    }
  }

  // Output data either for tv or movie depending on url
  outputDetails = () => {
    const details = this.state.details;
    const cast = this.state.cast;
    const trailers = this.state.trailers;
    const similarMovies = this.state.similarMovies;
    const { type } = this.props.match.params;

    switch (type) {
      case 'movie':
        return (
          <div className='movie-details-container'>
            {details !== null && cast !== null && trailers !== null && similarMovies !== null && (
              <>
                {/* {console.log(details.production_countries !== null && details.production_countries.name)} */}

                {/*Header section*/}
                <div
                  className='movie-details-header'
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0, .9)), url(${IMAGE_URL}/original/${details.backdrop_path})`,
                  }}
                >
                  <div className='header-row'>
                    <img src={`${IMAGE_URL}/w185/${details.poster_path}`} alt='' className='thumb' />

                    <div className='header-description'>
                      <p className='title'>{details.title}</p>
                      <div className='row'>
                        <div className='rating'>
                          <i className='far fa-star' style={{ color: '#ffd900' }}></i>
                          <p>{details.vote_average}</p>
                        </div>
                        <div className='runtime'>
                          <i className='far fa-clock'></i>
                          <p>{this.timeConvert(details.runtime)}</p>
                        </div>
                      </div>

                      <div className='release-date'>
                        <i className='far fa-calendar-alt'></i>
                        <p className='release-date'>{details.release_date}</p>
                      </div>
                      <p className='overview'>{details.overview}</p>
                    </div>
                  </div>
                </div>

                <div className='movie-details-body'>
                  <div className='movie-details__row'>
                    {/* About section */}
                    <div className='about-container'>
                      <div className='title-container'>
                        <h1>about</h1>
                      </div>

                      <div className='about'>
                        <div className='genres-container category'>
                          <span className='category__title'>Genre:</span>
                          <p>{details !== null && details.genres.map((genre) => <span key={genre.id}>{genre.name}, </span>)}</p>
                        </div>

                        <div className='country-container category'>
                          <span className='category__title'>Country:</span>
                          <p>
                            {details.production_countries !== null &&
                              details.production_countries &&
                              details.production_countries.map((country) => (
                                <span key={country.name}>{country.name + this.trim(',')} </span>
                              ))}
                          </p>
                        </div>

                        <div className='rating-container category'>
                          <span className='category__title'>Average rate:</span>
                          <p>{details.vote_average}</p>
                        </div>

                        <div className='release-container category'>
                          <span className='category__title'>Release:</span>
                          <p>{details.release_date}</p>
                        </div>

                        <div className='budget-container category'>
                          <span className='category__title'>Budget:</span>
                          <p>{this.abbreviateNumber(details.budget)} USD</p>
                        </div>

                        <div className='revenue-container category'>
                          <span className='category__title'>Box office:</span>
                          <p>{this.abbreviateNumber(details.revenue)} USD</p>
                        </div>
                      </div>
                    </div>

                    {/* Summary section */}
                    <div className='summary-container'>
                      <div className='title-container'>
                        <h1>summary</h1>
                      </div>

                      <div className='summary'>
                        <p>{details.overview}</p>
                      </div>
                    </div>
                  </div>

                  {/* Cast section */}
                  <div className='cast-container'>
                    <div className='title-container' style={{ marginBottom: '' }}>
                      <h1>cast</h1>
                    </div>

                    <div className='cast'>
                      {cast.map(
                        (person) =>
                          // do not display actor profile if there's no poster image
                          person.profile_path !== null && (
                            <div className='person-thumb' key={person.id}>
                              <Link to={`/info/person/${person.id}`}>
                                <img src={`${IMAGE_URL}/w185/${person.profile_path}`} alt='' />
                                <p className='person'>{person.name}</p>
                                <p className='character'>as {person.character}</p>
                              </Link>
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  {/* Trailers section */}
                  <div className='trailers-container'>
                    <div className='title-container' style={{ marginBottom: '3em' }}>
                      <h1>trailers</h1>
                    </div>
                    <div className='trailers'>{trailers !== null && <TrailerCarousel trailers={trailers} />}</div>
                  </div>

                  {/* Similar movies section */}
                  <div className='similar-movies-container'>
                    {/* {similarMovies } */}
                    <div className='title-container'>
                      <h1>similar movies</h1>
                    </div>

                    <div className='similar-movies'>
                      <SimilarMovies movies={similarMovies} type='movie' />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
        break;
        
      case 'tv':
        return (
          <div className='movie-details-container'>
            {details !== null && cast !== null && trailers !== null && similarMovies !== null && (
              <>
                {/* Header section */}
                <div
                  className='movie-details-header'
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0, .9)), url(${IMAGE_URL}/original/${details.backdrop_path})`,
                  }}
                >
                  <div className='header-row'>
                    <img src={`${IMAGE_URL}/w185/${details.poster_path}`} className='thumb' alt='' />

                    <div className='header-description'>
                      <p className='title'>{details.original_name}</p>

                      <div className='row'>
                        <div className='rating'>
                          <i className='far fa-star' style={{ color: '#ffd900' }}></i>
                          <p>{details.vote_average}</p>
                        </div>

                        <div className='release-date'>
                          <i className='far fa-calendar-alt'></i>
                          <p className='release-date'>{this.sliceDate(details.first_air_date)}</p>
                        </div>
                      </div>

                      <p className='overview'>{details.overview}</p>
                    </div>
                  </div>
                </div>

                <div className='movie-details-body'>
                  <div className='movie-details__row'>
                    {/* About section */}

                    <div className='about-container'>
                      <div className='title-container'>
                        <h1>about</h1>
                      </div>

                      <div className='about'>
                        <div className='genres-container category'>
                          <span className='category__title'>Genre:</span>
                          <p>{details !== null && details.genres.map((genre) => <span key={genre.id}>{genre.name}, </span>)}</p>
                        </div>

                        <div className='country-container category'>
                          <span className='category__title'>Country:</span>
                          <p>{details.origin_country}</p>
                        </div>

                        <div className='rating-container category'>
                          <span className='category__title'>Average rate:</span>
                          <p>{details.vote_average}</p>
                        </div>

                        <div className='release-container category'>
                          <span className='category__title'>First release:</span>
                          <p>{details.first_air_date}</p>
                        </div>

                        <div className='category'>
                          <span className='category__title'>Number of seasons:</span>
                          <p>{details.number_of_seasons} </p>
                        </div>

                        <div className='category'>
                          <span className='category__title'>Number of episodes:</span>
                          <p>{details.number_of_episodes} </p>
                        </div>

                        <div className='runtime-container category'>
                          <span className='category__title'>Episode runtime:</span>
                          <p>{details.episode_run_time} min</p>
                        </div>

                        <div className='director-container category'>
                          <span className='category__title'>Director:</span>
                          <p>{details.created_by[0].name}</p>
                        </div>
                      </div>
                    </div>

                    {/* Summary section */}
                    <div className='summary-container'>
                      <div className='title-container'>
                        <h1>summary</h1>
                      </div>
                      <div className='summary'>
                        <p>{details.overview}</p>
                      </div>
                    </div>
                  </div>

                  {/* Cast section */}
                  <div className='cast-container'>
                    <div className='title-container' style={{ marginBottom: '' }}>
                      <h1>cast</h1>
                    </div>

                    <div className='cast'>
                      {cast.map(
                        (person) =>
                          // display movie if poster exists
                          person.profile_path !== null && (
                            <div className='person-thumb' key={person.id}>
                              <Link to={`/info/person/${person.id}`}>
                                <img src={`${IMAGE_URL}/w185/${person.profile_path}`} alt='' />
                                <p className='person'>{person.name}</p>
                                <p className='character'>as {person.character}</p>
                              </Link>
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  {/* Trailers section */}
                  <div className='trailers-container'>
                    <div className='title-container' style={{ marginBottom: '3em' }}>
                      <h1>trailers</h1>
                    </div>
                    <div className='trailers'>{trailers !== null && <TrailerCarousel trailers={trailers} />}</div>
                  </div>

                  {/* Similar movies section */}
                  <div className='similar-movies-container'>
                    <div className='title-container'>
                      <h1>similar tv shows</h1>
                    </div>
                    <div className='similar-movies'>
                      <SimilarMovies movies={similarMovies} type='tv' />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
        break;
    }
  };

  render() {
    // console.log(this.state.cast);

    return <>{this.outputDetails()}</>;
  }
}

export default MovieDetails;
