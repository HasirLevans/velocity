import  React, {Component} from 'react';
import Homepage from './pages/home/Homepage'
import Profile from './pages/profile/Profile'
import Connexion from './pages/connexion/Connexion'
import Register from './pages/register/Register'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cPage : "Connexion",
      isConnected : false,
    }
  }

  AllerAProfile = () =>{
    this.setState({cPage : "Profile"})
  }

  AllerAHome = () => {
    this.setState({cPage : "Homepage"})
  }

  AllerAConn = () =>{
    this.setState({cPage : "Connexion"})
  }

  AllerARegister = () =>{
    this.setState({cPage : "Register"})
  }



  render(){

    if(this.state.cPage === "Connexion"){
      return <Connexion AllerHome = {this.AllerAHome} AllerRegister ={this.AllerARegister}/>
    }

    if(this.state.cPage === "Register"){
      return <Register AllerHome = {this.AllerAHome} AllerConn = {this.AllerAConn}/>
    }

    if(this.state.cPage === "Homepage"){
      return <Homepage AllerProfile = {this.AllerAProfile} AllerConn = {this.AllerAConn}/>
    }
    
    if(this.state.cPage === "Profile"){
      return <Profile AllerHome = {this.AllerAHome} AllerConn = {this.AllerAConn}/>
    }
  } 
}

export default App;
