import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
   return (
      <header>
         <div className="header-container">
            <div className="logo-container">
               <Link to="/">
                  <img src="./img/logo.png" alt="" />
               </Link>
            </div>

            <form className="search-form">
               <div className="input-container">
                  <input type="text" name="search" placeholder="Search..." autoComplete="off" />
                  <button type="submit">
                     <i className="fa fa-search"></i>
                  </button>
               </div>
            </form>
         </div>
      </header>
   );
}

export default Header;
