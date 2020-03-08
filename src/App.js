import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

import User from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
const  App = () => { 
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact >
            <User />
          </Route>
          <Route path='/places/new' exact >
            <NewPlaces />
          </Route>
          <Redirect to='/' />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
