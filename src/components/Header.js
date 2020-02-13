import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./Form";

function Header(props) {
   return (
      <header>
         <div className="header-container">
            <div className="logo-container">
               <Link to="/">
                  <img src="./img/logo.png" alt="" />
               </Link>
            </div>

            <Form movies={props.movies} />
         </div>
      </header>
   );
}

export default Header;
