import  React, {Component} from 'react';
import Homepage from './pages/home/Homepage'
import Profile from './pages/profile/Profile'
import Connexion from './pages/connexion/Connexion'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate as Redirect,
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="*">
          <Homepage />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/connexion">
          <Connexion />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
  
}

export default App;
