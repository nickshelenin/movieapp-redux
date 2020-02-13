import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function LatestMovies({ movies }) {
   return (
      <>
         <div className="latest-movies-title">
            <h1>Latest movies</h1>
         </div>
         
         <div className="movie-list">
            {movies.map(movie => {
               return (
                  <>
                     <Link to={`/movie/${Number(movie.id)}`} key={movie.id}>
                        <MovieCard {...movie} />
                     </Link>
                  </>
               );
            })}
         </div>
      </>
   );
}

export default LatestMovies;
