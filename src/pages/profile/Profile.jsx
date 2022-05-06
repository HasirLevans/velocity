import  React, {Component} from 'react';
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar"
import Profil from "../../components/profil/Profil"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"

class Profile extends Component {
  constructor(props){
    super(props);
  }

  GoToH = () =>{
    this.props.AllerHome();
  }

  GoToOut = () =>{
    this.props.AllerConn();
  }

  

  render(){
    return(
      <>
      <Topbar goToH = {this.GoToH} goToOut = {this.GoToOut}/>
      
      <div className="profile">
        <Leftbar />
        <Profil />
      </div>
      </>
    )
  }
}

export default Profile;