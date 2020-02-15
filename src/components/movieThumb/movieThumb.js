import React, { Component } from "react";
import "./movieThumb.scss";

class movieThumb extends Component {
   render() {
      const data = this.props;
      return (
         <div className="movie-thumb" key={data.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />

            {/* <p>{props.media_type === "tv" ? {props.name} : {props.title}}</p> */}
         </div>
      );
   }
}

export default movieThumb;
