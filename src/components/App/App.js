import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "../Header/Header";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import MovieDetails from "../MovieDetails/MovieDetails";
import Person from "../Person/Person";
import NotFound from "../NotFound/NotFound";

class App extends React.Component {
   render() {
      return (
         <Router forceRefresh={false}>
            <>
               <Header />

               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/search/:title' component={SearchResults} />
                  <Route path='/info/person/:id' component={Person} />
                  <Route path='/info/:type/:id' render={props => <MovieDetails key={props.match.params.id} {...props} />} />
                  <Route component={NotFound} />
               </Switch>
            </>
         </Router>
      );
   }
}

export default App;
