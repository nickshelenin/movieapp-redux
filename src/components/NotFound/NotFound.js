import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";

class NotFound extends Component {
   render() {
      return (
         <div className='not-found-container'>
            <h1>Page not found</h1>
            <Link to='/'>Back home</Link>
         </div>
      );
   }
}

export default NotFound;
