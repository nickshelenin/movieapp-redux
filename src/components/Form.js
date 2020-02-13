import React from "react";
import { Link } from "react-router-dom";

function Form({ movies }) {
   return (
      <form onSubmit={movies} className="search-form">
         <div className="input-container">
            <input type="text" name="search" placeholder="Search..." autoComplete="off" />
            <button type="submit">
               <i className="fa fa-search"></i>
            </button>
         </div>
      </form>
   );
}

export default Form;
