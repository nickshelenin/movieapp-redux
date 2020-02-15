import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../../App.scss";
import Home from "../home/Home";

const App = () => {
   return (
      <Router>
         <Home path="/" />
      </Router>
   );
};

export default App;
