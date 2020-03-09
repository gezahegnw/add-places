import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

import User from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
const  App = () => { 
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
        <Switch>
        <Route path='/' exact >
            <User />
          </Route>
          <Route path='/:id/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/places/new' exact >
            <NewPlaces />
          </Route>
          <Redirect to='/' />
        </Switch>
        </main>
        </Router>
    </div>
  );
}

export default App;
