import React, { useState, useEffect } from "react";

// const Movie = props => {
//    const [movie, setMovie] = useState(undefined);
//    const [imdbId, setImdbId] = useState(undefined);

//  const fetchMovie = async () => {
//     const apiKey = "e6fa15c602cbdbd00979f735cba5d1f1";
//     const call = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${apiKey}`);
//     const data = await call.json();
//     setMovie(data);
//     setImdbId(data.imdb_id);

//     // console.log(data);
//  };

//    useEffect(() => {
//       fetchMovie();

// const fetchImdb = async () => {
//    //  if (imdbId !== "") {
//    const apiKey = "887d023b";
//    const id = imdbId;
//    const call = await fetch(`http://omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`);
//    const data = await call.json();
//    console.log(data);
// };
//       // fetchImdb();
//    }, []);

//    return (
// <div>
//    {movie !== undefined && (
//       <div className="movie-page">
//          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />

//          <div className="movie-description">
//             <h1 className="text-blue">{movie.title}</h1>

//             <p>
//                <span className="imdb">IMDB</span> {movie.vote_average}
//             </p>
//             <p>{movie.runtime} min</p>

//             <p>{movie.overview}</p>
//             <p>
//                Genre: <span className="text-blue">{movie.genres.map(genre => genre.name + ", ")}</span>
//             </p>
//             <p>
//                Country: <span className="text-blue">{movie.production_countries.map(cnt => cnt.name + ", ")}</span>
//             </p>
//             <p>
//                Release: <span className="text-blue">{movie.release_date}</span>
//             </p>

//             <p>Budget: {movie.budget}$</p>
//             <p>Revenue: {movie.revenue}$</p>

//             {movie.homepage !== "" && movie.homepage !== null && (
//                <p>
//                   Homepage:{" "}
//                   <a href={movie.homepage} target="blank" className="text-blue">
//                      {movie.homepage}
//                   </a>
//                </p>
//             )}
//          </div>
//       </div>
//    )}
// </div>
//    );
// };

class Movie extends React.Component {
   state = {
      movie: undefined,
      imdbId: undefined
   };

   fetchMovie = async () => {
      const apiKey = "e6fa15c602cbdbd00979f735cba5d1f1";
      const call = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}`);
      const data = await call.json();
      this.setState({
         movie: data,
         imdbId: data.imdb_id
      });
   };

   componentDidMount() {
      this.fetchMovie();

      // const fetchImdb = async () => {
      //    const apiKey = "887d023b";
      //    const id = this.state.imdbId;

      //    //  const call = await fetch(`http://omdbapi.com/?i=${Number(id)}&plot=full&apikey=${apiKey}`);
      //    //  const data = await call.json();
      //    //  console.log(data);
      // };
      // fetchImdb();
   }

   render() {
      return (
         <div>
            {this.state.movie !== undefined && (
               <div className="movie-page">
                  <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt="" />

                  <div className="movie-description">
                     <h1 className="text-blue">{this.state.movie.title}</h1>

                     <p>
                        <span className="imdb">IMDB</span> {this.state.movie.vote_average}
                     </p>
                     <p>{this.state.movie.runtime} min</p>

                     <p>{this.state.movie.overview}</p>
                     <p>
                        Genre: <span className="text-blue">{this.state.movie.genres.map(genre => genre.name + ", ")}</span>
                     </p>
                     <p>
                        Country: <span className="text-blue">{this.state.movie.production_countries.map(cnt => cnt.name + ", ")}</span>
                     </p>
                     <p>
                        Release: <span className="text-blue">{this.state.movie.release_date}</span>
                     </p>

                     <p>Budget: {this.state.movie.budget}$</p>
                     <p>Revenue: {this.state.movie.revenue}$</p>

                     {this.state.movie.homepage !== "" && this.state.movie.homepage !== null && (
                        <p>
                           Homepage:{" "}
                           <a href={this.state.movie.homepage} target="blank" className="text-blue">
                              {this.state.movie.homepage}
                           </a>
                        </p>
                     )}
                  </div>
               </div>
            )}
         </div>
      );
   }
}

export default Movie;
