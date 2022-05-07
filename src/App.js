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
        <Route  path="/" element={<Homepage />} />
        <Route  path="*" element={<Homepage />} />
        <Route  path="/connexion" element={<Connexion />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/profile" element={<Profile />} />
      </Switch>
    </Router>
  )
  
}

export default App;
