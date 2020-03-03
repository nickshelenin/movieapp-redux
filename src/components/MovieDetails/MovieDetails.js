import React, { Component } from "react";
import { API_KEY } from "../../config";
import TrailerCarousel from "../TrailerCarousel/TrailerCarousel";
import { Link } from "react-router-dom";

import "./MovieDetails.scss";

class MovieDetails extends Component {
   state = {
      details: null,
      cast: null,
      actorId: null,
      trailers: null
   };

   // FETCH MOVIE DETAILS

   fetchMovie = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  details: data
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH MOVIE CAST

   fetchMovieCast = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  cast: data.cast
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH MOVIE TRAILERS

   fetchMovieTrailers = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  trailers: data.results
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH TV DETIALS

   fetchTv = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  details: data
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH TV CAST

   fetchTvCast = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  cast: data.cast
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // FETCH TV TRAILERS

   fetchTvTrailers = () => {
      const { id } = this.props.match.params;
      const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;

      fetch(url)
         .then(res => res.json())
         .then(
            data =>
               this.setState({
                  trailers: data.results
               })
            // console.log(data)
         )
         .catch(error => console.log(error));
   };

   // CONVERT MINUTES INTO HOURS

   timeConvert = num => {
      const hours = num / 60;
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
      return rhours + "h " + rminutes + "m";
   };

   // ABREVIATE NUMBER WITH THE WORDS

   abbreviateNumber = n => {
      if (n < 1e3) return n;
      if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + " thousand";
      if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " million";
      if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " billion";
      if (n >= 1e12) return +(n / 1e12).toFixed(1) + " trillion";
   };

   // SLICE RELEASE DATE

   sliceDate = num => {
      return num.slice(0, 4);
   };

   componentDidMount() {
      const { type } = this.props.match.params;
      // switch (type) {
      //    case "movie":
      //       this.fetchMovie();
      //       this.fetchMovieCast();
      //       this.fetchMovieTrailers();
      //    case "tv":
      //       this.fetchTv();
      //       this.fetchTvCast();
      //       this.fetchTvTrailers();
      // }

      if (type === "movie") {
         this.fetchMovie();
         this.fetchMovieCast();
         this.fetchMovieTrailers();
      } else if (type === "tv") {
         this.fetchTv();
         this.fetchTvCast();
         this.fetchTvTrailers();
      }
   }

   outputMovie = () => {
      const details = this.state.details;
      const cast = this.state.cast;
      const trailers = this.state.trailers;
      const { type } = this.props.match.params;

      switch (type) {
         case "movie":
            return (
               <div className='movie-details-container'>
                  {details !== null && cast !== null && trailers !== null && (
                     <>
                        {/* HERO SECTION */}
                        <div
                           className='movie-details-header'
                           style={{
                              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0, .9)), url(http://image.tmdb.org/t/p/original/${details.backdrop_path})`
                           }}
                        >
                           <div className='header-row'>
                              <img src={`http://image.tmdb.org/t/p/w185/${details.poster_path}`} alt='test' className='thumb' />

                              <div className='header-description'>
                                 <p className='title'>{details.title}</p>

                                 <div className='row'>
                                    <div className='rating'>
                                       <i class='far fa-star' style={{ color: "#ffd900" }}></i>
                                       <p>{details.vote_average}</p>
                                    </div>

                                    <div className='runtime'>
                                       <i class='far fa-clock'></i>
                                       <p>{this.timeConvert(details.runtime)}</p>
                                    </div>
                                 </div>

                                 <div className='release-date'>
                                    <i class='far fa-calendar-alt'></i>
                                    <p className='release-date'>{details.release_date}</p>
                                 </div>
                                 {/* <p className='tagline'>{movieDetails.tagline}</p> */}

                                 <p className='overview'>{details.overview}</p>
                              </div>
                           </div>
                        </div>

                        <div className='movie-details-body'>
                           <div className='movie-details__row'>
                              {/* ABOUT SECTION */}

                              <div className='about-container'>
                                 <div className='title-container'>
                                    <h1>about</h1>
                                 </div>

                                 <div className='about'>
                                    <div className='genres-container category'>
                                       <span className='category__title'>Genre:</span>
                                       <p>{details !== null && details.genres.map(genre => <span key={genre.id}>{genre.name}, </span>)}</p>
                                    </div>

                                    <div className='country-container category'>
                                       <span className='category__title'>Country:</span>
                                       <p>
                                          {details.production_countries !== null &&
                                             details.production_countries &&
                                             details.production_countries.map(country => <span>{country.name}, </span>)}
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

                              {/* SUMMARY SECTION*/}
                              <div className='summary-container'>
                                 <div className='title-container'>
                                    <h1>summary</h1>
                                 </div>

                                 <div className='summary'>
                                    <p>{details.overview}</p>
                                 </div>
                              </div>
                           </div>

                           {/* CAST SECTION */}
                           <div className='cast-container'>
                              <div className='title-container' style={{ marginBottom: "" }}>
                                 <h1>cast</h1>
                              </div>

                              <div className='cast'>
                                 {cast.map(
                                    (person, i) =>
                                       // display movie if poster exists

                                       person.profile_path !== null && (
                                          <div className='person-thumb'>
                                             <Link to={`/person/${person.id}`}>
                                                <img src={`http://image.tmdb.org/t/p/w185/${person.profile_path}`} alt='test' />
                                                <p className='person'>{person.name}</p>
                                                <p className='character'>as {person.character}</p>
                                             </Link>
                                          </div>
                                       )
                                 )}
                              </div>
                           </div>

                           {/* TRAILERS SECTION */}
                           <div className='trailers-container'>
                              <div className='title-container' style={{ marginBottom: "3em" }}>
                                 <h1>trailers</h1>
                              </div>

                              <div className='trailers'>{trailers !== null && <TrailerCarousel trailers={trailers} />}</div>
                           </div>
                        </div>
                     </>
                  )}
               </div>
            );
         case "tv":
            return (
               <div className='movie-details-container'>
                  {details !== null && cast !== null && trailers !== null && (
                     <>
                        {/* HERO SECTION */}
                        <div
                           className='movie-details-header'
                           style={{
                              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0, .9)), url(http://image.tmdb.org/t/p/original/${details.backdrop_path})`
                           }}
                        >
                           <div className='header-row'>
                              <img src={`http://image.tmdb.org/t/p/w185/${details.poster_path}`} alt='test' className='thumb' />

                              <div className='header-description'>
                                 <p className='title'>{details.original_name}</p>

                                 <div className='row'>
                                    <div className='rating'>
                                       <i class='far fa-star' style={{ color: "#ffd900" }}></i>
                                       <p>{details.vote_average}</p>
                                    </div>

                                    {/* <div className='runtime'>
                                       <i class='far fa-clock'></i>
                                       <p>{this.timeConvert(details.runtime)}</p>
                                    </div> */}
                                    <div className='release-date'>
                                       <i class='far fa-calendar-alt'></i>
                                       <p className='release-date'>{this.sliceDate(details.first_air_date)}</p>
                                    </div>
                                 </div>

                                 {/* <p className='tagline'>{movieDetails.tagline}</p> */}

                                 <p className='overview'>{details.overview}</p>
                              </div>
                           </div>
                        </div>

                        <div className='movie-details-body'>
                           <div className='movie-details__row'>
                              {/* ABOUT SECTION */}

                              <div className='about-container'>
                                 <div className='title-container'>
                                    <h1>about</h1>
                                 </div>

                                 <div className='about'>
                                    <div className='genres-container category'>
                                       <span className='category__title'>Genre:</span>
                                       <p>{details !== null && details.genres.map(genre => <span key={genre.id}>{genre.name}, </span>)}</p>
                                    </div>

                                    <div className='country-container category'>
                                       <span className='category__title'>Country:</span>
                                       <p>
                                          {/* {details.origin_country !== null &&
                                             details.origin_country.map(country => <span>{country.name}, </span>)} */}
                                          {details.origin_country}
                                       </p>
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

                              {/* SUMMARY SECTION*/}
                              <div className='summary-container'>
                                 <div className='title-container'>
                                    <h1>summary</h1>
                                 </div>

                                 <div className='summary'>
                                    <p>{details.overview}</p>
                                 </div>
                              </div>
                           </div>

                           {/* CAST SECTION */}
                           <div className='cast-container'>
                              <div className='title-container' style={{ marginBottom: "" }}>
                                 <h1>cast</h1>
                              </div>

                              <div className='cast'>
                                 {cast.map(
                                    (person, i) =>
                                       // display movie if poster exists

                                       person.profile_path !== null && (
                                          <div className='person-thumb'>
                                             <Link to={`/person/${person.id}`}>
                                                <img src={`http://image.tmdb.org/t/p/w185/${person.profile_path}`} alt='test' />
                                                <p className='person'>{person.name}</p>
                                                <p className='character'>as {person.character}</p>
                                             </Link>
                                          </div>
                                       )
                                 )}
                              </div>
                           </div>

                           {/* TRAILERS SECTION */}
                           <div className='trailers-container'>
                              <div className='title-container' style={{ marginBottom: "3em" }}>
                                 <h1>trailers</h1>
                              </div>

                              <div className='trailers'>{trailers !== null && <TrailerCarousel trailers={trailers} />}</div>
                           </div>
                        </div>
                     </>
                  )}
               </div>
            );
      }
   };

   render() {
      const details = this.state.details;
      const cast = this.state.cast;
      const trailers = this.state.trailers;
      const { type } = this.props.match.params;

      console.log(this.state.details);

      return <>{this.outputMovie()}</>;
   }
}

export default MovieDetails;
