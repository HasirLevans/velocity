import  React from 'react';
import Homepage from './pages/home/Homepage'
import Profile from './pages/profile/Profile'
import Connexion from './pages/connexion/Connexion'
import Register from './pages/register/Register'
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import {useContext} from "react"
import {ConnContext} from "./context/ConnContext"

function App() {
  
  const {user} = useContext(ConnContext)
  return (
    
      <Switch>
        <Route  path="/" element={user ? <Homepage /> : <Register/>} />
        <Route  path="*" element={<Homepage />} />
        <Route  path="/connexion" element={user ? <Navigate to="/"/> : <Connexion />} />
        <Route  path="/register" element={user ? <Navigate to="/"/> : <Register />} />
        <Route  path="/profile/:id" element={<Profile />} />
      </Switch>
    
  )
  
}

export default App;
